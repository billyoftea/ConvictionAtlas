import {
  Injectable,
  Logger,
  OnApplicationBootstrap,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';
import { ManagerEngineService } from './manager-engine.service';
import { MemoService } from './memo.service';
import { PerformanceService } from './performance.service';
import { PortfolioService } from './portfolio.service';
import { SignalEngineService } from './signal-engine.service';
import { SourceIngestionService } from './source-ingestion.service';

type PipelineTrigger = 'manual' | 'startup' | 'schedule';

type PipelineOptions = {
  managerSlug?: string;
  trigger?: PipelineTrigger;
  withMemos?: boolean;
};

type PipelineStatus = {
  state: 'idle' | 'running' | 'success' | 'error';
  lastTrigger: PipelineTrigger | null;
  lastStartedAt: string | null;
  lastFinishedAt: string | null;
  lastError: string | null;
  lastResult: unknown;
};

@Injectable()
export class DataPipelineService implements OnApplicationBootstrap {
  private readonly logger = new Logger(DataPipelineService.name);
  private currentRun: Promise<unknown> | null = null;
  private status: PipelineStatus = {
    state: 'idle',
    lastTrigger: null,
    lastStartedAt: null,
    lastFinishedAt: null,
    lastError: null,
    lastResult: null,
  };

  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    private readonly sourceIngestionService: SourceIngestionService,
    private readonly signalEngineService: SignalEngineService,
    private readonly managerEngineService: ManagerEngineService,
    private readonly portfolioService: PortfolioService,
    private readonly performanceService: PerformanceService,
    private readonly memoService: MemoService,
  ) {}

  async onApplicationBootstrap() {
    if (!this.isStartupSyncEnabled()) {
      return;
    }

    const reason = await this.getStartupSyncReason();
    if (!reason) {
      return;
    }

    this.logger.log(`Startup data sync scheduled: ${reason}.`);

    void this.runPipeline({
      trigger: 'startup',
      withMemos: this.shouldRunMemosForBackgroundSync(),
    }).catch((error) => {
      this.logger.error(
        `Startup data sync failed: ${this.describeError(error)}`,
        error instanceof Error ? error.stack : undefined,
      );
    });
  }

  @Cron(CronExpression.EVERY_30_MINUTES)
  async handleScheduledSync() {
    if (!this.isScheduledSyncEnabled()) {
      return;
    }

    await this.runPipeline({
      trigger: 'schedule',
      withMemos: this.shouldRunMemosForBackgroundSync(),
    });
  }

  async runPipeline({
    managerSlug,
    trigger = 'manual',
    withMemos = true,
  }: PipelineOptions = {}) {
    if (this.currentRun) {
      this.logger.warn(
        `Data sync already running. Reusing in-flight run for trigger "${trigger}".`,
      );
      return this.currentRun;
    }

    const startedAt = new Date();
    this.status = {
      ...this.status,
      state: 'running',
      lastTrigger: trigger,
      lastStartedAt: startedAt.toISOString(),
      lastFinishedAt: null,
      lastError: null,
    };

    this.currentRun = this.executePipeline({ managerSlug, trigger, withMemos })
      .then((result) => {
        this.status = {
          ...this.status,
          state: 'success',
          lastFinishedAt: new Date().toISOString(),
          lastResult: result,
        };
        return result;
      })
      .catch((error) => {
        this.status = {
          ...this.status,
          state: 'error',
          lastFinishedAt: new Date().toISOString(),
          lastError: this.describeError(error),
        };
        throw error;
      })
      .finally(() => {
        this.currentRun = null;
      });

    return this.currentRun;
  }

  async getStatus() {
    const opportunityCount = await this.prisma.opportunity.count();
    const latestOpportunity = await this.prisma.opportunity.findFirst({
      orderBy: [{ lastUpdatedAt: 'desc' }, { updatedAt: 'desc' }],
      select: {
        updatedAt: true,
        lastUpdatedAt: true,
      },
    });

    return {
      ...this.status,
      opportunityCount,
      latestOpportunityAt:
        latestOpportunity?.lastUpdatedAt?.toISOString() ??
        latestOpportunity?.updatedAt?.toISOString() ??
        null,
      scheduleEnabled: this.isScheduledSyncEnabled(),
      startupEnabled: this.isStartupSyncEnabled(),
      backgroundSyncWithMemos: this.shouldRunMemosForBackgroundSync(),
      syncTransport:
        this.configService.get<string>('SOURCE_HTTP_TRANSPORT') ??
        (process.platform === 'win32' ? 'powershell' : 'auto'),
    };
  }

  private async executePipeline({
    managerSlug,
    trigger,
    withMemos,
  }: Required<PipelineOptions>) {
    this.logger.log(
      `Starting data sync. trigger=${trigger} withMemos=${withMemos} managerSlug=${managerSlug ?? 'all'}`,
    );

    const sources = await this.sourceIngestionService.runBootstrap();
    const signals = await this.signalEngineService.recomputeSignals();
    const managers = await this.managerEngineService.runManagers();
    const portfolios = await this.portfolioService.rebalancePortfolios();
    const performance = await this.performanceService.snapshotPerformance();
    const memos =
      withMemos === false
        ? { skipped: true }
        : await this.memoService.generateMemos(managerSlug);

    const result = {
      sources,
      signals,
      managers,
      portfolios,
      performance,
      memos,
    };

    this.logger.log(`Data sync finished. trigger=${trigger}`);

    return result;
  }

  private async getStartupSyncReason() {
    const opportunityCount = await this.prisma.opportunity.count();
    if (!opportunityCount) {
      return 'no opportunities in database';
    }

    const latestOpportunity = await this.prisma.opportunity.findFirst({
      orderBy: [{ lastUpdatedAt: 'desc' }, { updatedAt: 'desc' }],
      select: {
        updatedAt: true,
        lastUpdatedAt: true,
      },
    });

    const freshness =
      latestOpportunity?.lastUpdatedAt ?? latestOpportunity?.updatedAt ?? null;
    if (!freshness) {
      return 'missing freshness marker';
    }

    const staleMinutes = Number(
      this.configService.get<string>('AUTO_SYNC_STALE_MINUTES') ?? '90',
    );

    if (Date.now() - freshness.getTime() > staleMinutes * 60_000) {
      return `data older than ${staleMinutes} minutes`;
    }

    return null;
  }

  private isStartupSyncEnabled() {
    return this.readBooleanEnv('AUTO_SYNC_ON_START', true);
  }

  private isScheduledSyncEnabled() {
    return this.readBooleanEnv('AUTO_SYNC_ENABLED', true);
  }

  private shouldRunMemosForBackgroundSync() {
    return this.readBooleanEnv('AUTO_SYNC_WITH_MEMOS', false);
  }

  private readBooleanEnv(key: string, fallback: boolean) {
    const value = this.configService.get<string>(key);
    if (value == null) {
      return fallback;
    }

    return ['1', 'true', 'yes', 'on'].includes(value.trim().toLowerCase());
  }

  private describeError(error: unknown) {
    if (error instanceof Error) {
      return error.message;
    }

    return 'Unknown pipeline error';
  }
}
