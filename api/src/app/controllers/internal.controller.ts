import { Body, Controller, Get, Post } from '@nestjs/common';
import { DataPipelineService } from '../services/data-pipeline.service';
import { ManagerEngineService } from '../services/manager-engine.service';
import { MemoService } from '../services/memo.service';
import { PerformanceService } from '../services/performance.service';
import { PortfolioService } from '../services/portfolio.service';
import { SignalEngineService } from '../services/signal-engine.service';
import { SourceIngestionService } from '../services/source-ingestion.service';

@Controller('internal')
export class InternalController {
  constructor(
    private readonly dataPipelineService: DataPipelineService,
    private readonly sourceIngestionService: SourceIngestionService,
    private readonly signalEngineService: SignalEngineService,
    private readonly managerEngineService: ManagerEngineService,
    private readonly portfolioService: PortfolioService,
    private readonly performanceService: PerformanceService,
    private readonly memoService: MemoService,
  ) {}

  @Post('bootstrap')
  async bootstrap(@Body() payload?: { managerSlug?: string; withMemos?: boolean }) {
    return this.dataPipelineService.runPipeline({
      managerSlug: payload?.managerSlug,
      withMemos: payload?.withMemos,
      trigger: 'manual',
    });
  }

  @Get('sync/status')
  getSyncStatus() {
    return this.dataPipelineService.getStatus();
  }

  @Post('ingest/coingecko')
  ingestCoinGecko(@Body() payload?: { limit?: number }) {
    return this.sourceIngestionService.ingestCoinGecko(payload?.limit);
  }

  @Post('ingest/polymarket')
  ingestPolymarket(@Body() payload?: { limit?: number }) {
    return this.sourceIngestionService.ingestPolymarket(payload?.limit);
  }

  @Post('ingest/news')
  ingestNews(@Body() payload?: { limitPerOpportunity?: number }) {
    return this.sourceIngestionService.ingestNews(payload?.limitPerOpportunity);
  }

  @Post('normalize/opportunities')
  normalizeOpportunities() {
    return this.sourceIngestionService.normalizeOpportunities();
  }

  @Post('signals/recompute')
  recomputeSignals() {
    return this.signalEngineService.recomputeSignals();
  }

  @Post('managers/run')
  runManagers() {
    return this.managerEngineService.runManagers();
  }

  @Post('portfolio/rebalance')
  rebalancePortfolio() {
    return this.portfolioService.rebalancePortfolios();
  }

  @Post('performance/snapshot')
  snapshotPerformance() {
    return this.performanceService.snapshotPerformance();
  }

  @Post('memos/generate')
  generateMemos(@Body() payload?: { managerSlug?: string }) {
    return this.memoService.generateMemos(payload?.managerSlug);
  }
}
