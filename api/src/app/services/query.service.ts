import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { OpportunityType, PricingPlan } from '@prisma/client';
import { getManagerBlueprint } from '../core/manager-blueprints';
import { PrismaService } from '../prisma/prisma.service';
import {
  average,
  clamp,
  parseJson,
  round,
  standardDeviation,
  truncate,
} from '../core/helpers';

type HistoryPointLike = {
  pointAt: Date;
  price: number;
};

type ManagerSeriesPoint = {
  pointAt: string;
  nav: number;
  cumulativeReturn: number;
};

type ReplayOpportunityLike = {
  id: string;
  type: OpportunityType;
  eventDate: Date | null;
  volume24h: number | null;
  marketCap: number | null;
  liquidity: number | null;
  metadata: string | null;
  historyPoints: HistoryPointLike[];
  newsItems: Array<{
    publishedAt: Date;
    sentimentScore: number | null;
  }>;
  signals: Array<{
    name: string;
    value: number;
  }>;
};

type ReplayPreparedOpportunity = ReplayOpportunityLike & {
  metadataRecord: Record<string, unknown>;
  signalMap: Record<string, number>;
};

type ManagerWithPlansLike = {
  slug: string;
  name: string;
  style: string;
  pricingPlans: PricingPlan[];
  metadata: string | null;
};

@Injectable()
export class QueryService {
  constructor(private readonly prisma: PrismaService) {}

  async getManagers() {
    const managers = await this.prisma.manager.findMany({
      include: {
        pricingPlans: true,
        reviews: true,
      },
    });

    return Promise.all(
      managers.map(async (manager) => {
        const { latestPortfolio, analytics } = await this.getLatestManagerState(
          manager,
        );
        const marketplace = this.buildManagerMarketplace(manager);

        return {
          id: manager.id,
          slug: manager.slug,
          name: manager.name,
          style: manager.style,
          riskProfile: manager.riskProfile,
          description: manager.description,
          pricingSummary: manager.pricingSummary,
          latestNav: analytics.latestNav,
          dailyReturn: analytics.dailyReturn,
          cumulativeReturn: analytics.cumulativeReturn,
          drawdown: analytics.drawdown,
          sharpe: analytics.sharpe,
          hitRate: analytics.hitRate,
          grossExposure: latestPortfolio?.grossExposure ?? 0,
          cashWeight: latestPortfolio?.cashWeight ?? 1,
          riskScore: latestPortfolio?.riskScore ?? 0,
          averageRating: manager.reviews.length
            ? round(average(manager.reviews.map((review) => review.rating)), 2)
            : null,
          topPositions:
            latestPortfolio?.positions.map((position) =>
              this.serializePositionSummary(position),
            ) ?? [],
          performanceSeries: analytics.series,
          signalMix: this.buildSignalMix(manager.slug, manager.metadata),
          pricingPlans: manager.pricingPlans,
          marketplace,
        };
      }),
    );
  }

  async getManager(slug: string) {
    const manager = await this.getManagerOrThrow(slug);
    const [latestState, reviews, latestDecisions] = await Promise.all([
      this.getLatestManagerState(manager),
      this.prisma.review.findMany({
        where: { managerId: manager.id },
        orderBy: { createdAt: 'desc' },
        take: 10,
      }),
      this.prisma.managerDecision.findMany({
        where: { managerId: manager.id },
        orderBy: [{ convictionScore: 'desc' }, { targetWeight: 'desc' }],
        take: 8,
        include: {
          opportunity: true,
        },
      }),
    ]);
    const { latestPerformance, latestPortfolio, analytics } = latestState;
    const marketplace = this.buildManagerMarketplace(manager);

    return {
      ...manager,
      metadata: parseJson(manager.metadata, {}),
      marketplace,
      latestPerformance,
      latestPortfolio,
      reviews,
      ratingAverage: reviews.length
        ? round(average(reviews.map((review) => review.rating)), 2)
        : null,
      performanceSeries: analytics.series,
      derivedPerformance: {
        nav: analytics.latestNav,
        dailyReturn: analytics.dailyReturn,
        cumulativeReturn: analytics.cumulativeReturn,
        drawdown: analytics.drawdown,
        sharpe: analytics.sharpe,
        hitRate: analytics.hitRate,
        lookbackDays: analytics.lookbackDays,
      },
      signalMix: this.buildSignalMix(manager.slug, manager.metadata),
      latestDecisions: latestDecisions.map((decision) => ({
        id: decision.id,
        direction: decision.direction,
        convictionScore: decision.convictionScore,
        targetWeight: decision.targetWeight,
        rationale: decision.rationale,
        opportunity: {
          id: decision.opportunity.id,
          slug: decision.opportunity.slug,
          title: decision.opportunity.title,
          summary: decision.opportunity.summary,
          imageUrl: decision.opportunity.imageUrl,
          symbol: decision.opportunity.symbol,
          sourceKind: decision.opportunity.sourceKind,
          priceChange24h: decision.opportunity.priceChange24h,
          currentPrice: decision.opportunity.currentPrice,
        },
      })),
    };
  }

  async getManagerPerformance(slug: string) {
    const manager = await this.getManagerOrThrow(slug);
    return this.prisma.performanceSnapshot.findMany({
      where: { managerId: manager.id },
      orderBy: { computedAt: 'desc' },
      take: 30,
    });
  }

  async getManagerPortfolio(slug: string) {
    const manager = await this.getManagerOrThrow(slug);
    return this.prisma.portfolioSnapshot.findFirst({
      where: { managerId: manager.id },
      orderBy: { computedAt: 'desc' },
      include: {
        positions: {
          orderBy: { weight: 'desc' },
          include: {
            opportunity: true,
          },
        },
      },
    });
  }

  async getManagerRebalances(slug: string) {
    const manager = await this.getManagerOrThrow(slug);
    const snapshots = await this.prisma.portfolioSnapshot.findMany({
      where: { managerId: manager.id },
      orderBy: { computedAt: 'desc' },
      take: 2,
      include: {
        positions: {
          include: {
            opportunity: true,
          },
        },
      },
    });

    const current = snapshots[0];
    const previous = snapshots[1];

    if (!current) {
      return [];
    }

    const previousMap = new Map(
      (previous?.positions ?? []).map((position) => [
        position.opportunityId,
        position.weight,
      ]),
    );

    return current.positions
      .map((position) => ({
        opportunityId: position.opportunityId,
        opportunityTitle: position.opportunity.title,
        opportunitySlug: position.opportunity.slug,
        opportunityImageUrl: position.opportunity.imageUrl,
        opportunitySymbol: position.opportunity.symbol,
        currentWeight: position.weight,
        previousWeight: previousMap.get(position.opportunityId) ?? 0,
        delta: round(
          position.weight - (previousMap.get(position.opportunityId) ?? 0),
          4,
        ),
      }))
      .sort((left, right) => Math.abs(right.delta) - Math.abs(left.delta));
  }

  async getManagerMemos(slug: string) {
    const manager = await this.getManagerOrThrow(slug);
    const memos = await this.prisma.memo.findMany({
      where: { managerId: manager.id },
      orderBy: { createdAt: 'desc' },
      take: 20,
      include: {
        opportunity: true,
      },
    });

    return memos.map((memo) => this.serializeMemoPreview(memo));
  }

  async getManagerReviews(slug: string) {
    const manager = await this.getManagerOrThrow(slug);
    const reviews = await this.prisma.review.findMany({
      where: { managerId: manager.id },
      orderBy: { createdAt: 'desc' },
    });

    return {
      averageRating: reviews.length
        ? round(average(reviews.map((review) => review.rating)), 2)
        : null,
      total: reviews.length,
      reviews,
    };
  }

  async createReview(
    slug: string,
    payload: { authorName?: string; rating?: number; comment?: string },
  ) {
    const manager = await this.getManagerOrThrow(slug);

    if (!payload.rating || payload.rating < 1 || payload.rating > 5) {
      throw new BadRequestException('rating must be between 1 and 5');
    }

    if (!payload.comment?.trim()) {
      throw new BadRequestException('comment is required');
    }

    return this.prisma.review.create({
      data: {
        managerId: manager.id,
        authorName: payload.authorName?.trim() || 'Anonymous',
        rating: Math.round(payload.rating),
        comment: payload.comment.trim(),
      },
    });
  }

  async getOpportunities() {
    const opportunities = await this.prisma.opportunity.findMany({
      include: {
        signals: true,
        newsItems: {
          orderBy: { publishedAt: 'desc' },
          take: 2,
        },
        decisions: {
          orderBy: { convictionScore: 'desc' },
          take: 2,
          include: {
            manager: true,
          },
        },
      },
      orderBy: [{ volume24h: 'desc' }, { marketCap: 'desc' }, { updatedAt: 'desc' }],
    });

    return opportunities.map((opportunity) => ({
      ...opportunity,
      metadata: parseJson(opportunity.metadata, {}),
      strongestSignal:
        [...opportunity.signals].sort(
          (left, right) => Math.abs(right.value) - Math.abs(left.value),
        )[0] ?? null,
      managers: opportunity.decisions.map((decision) => ({
        manager: decision.manager.name,
        slug: decision.manager.slug,
        convictionScore: decision.convictionScore,
        direction: decision.direction,
      })),
    }));
  }

  async getOpportunity(idOrSlug: string) {
    const opportunity = await this.getOpportunityOrThrow(idOrSlug);
    return {
      ...opportunity,
      metadata: parseJson(opportunity.metadata, {}),
    };
  }

  async getOpportunityManagers(idOrSlug: string) {
    const opportunity = await this.getOpportunityOrThrow(idOrSlug);
    return this.prisma.managerDecision.findMany({
      where: { opportunityId: opportunity.id },
      include: {
        manager: true,
      },
      orderBy: { convictionScore: 'desc' },
    });
  }

  async getOpportunitySignals(idOrSlug: string) {
    const opportunity = await this.getOpportunityOrThrow(idOrSlug);
    return this.prisma.signal.findMany({
      where: { opportunityId: opportunity.id },
      orderBy: { computedAt: 'desc' },
    });
  }

  async getOpportunityNews(idOrSlug: string) {
    const opportunity = await this.getOpportunityOrThrow(idOrSlug);
    return this.prisma.newsItem.findMany({
      where: { opportunityId: opportunity.id },
      orderBy: { publishedAt: 'desc' },
    });
  }

  async getOpportunityHistory(idOrSlug: string) {
    const opportunity = await this.getOpportunityOrThrow(idOrSlug);
    return this.prisma.opportunityHistory.findMany({
      where: { opportunityId: opportunity.id },
      orderBy: { pointAt: 'asc' },
    });
  }

  async getMemo(id: string) {
    const memo = await this.getMemoRecordOrThrow(id);

    return {
      ...this.serializeMemoPreview(memo),
      unlockCount: memo.unlocks.length,
    };
  }

  async unlockMemo(id: string, customerRef?: string) {
    const memo = await this.getMemo(id);
    const marketplace = this.buildManagerMarketplace(memo.manager);
    const unlockOffer =
      marketplace.serviceCatalog.find((offer) => offer.kind === 'memo_unlock') ??
      marketplace.serviceCatalog[0];

    const unlock = await this.prisma.memoUnlock.create({
      data: {
        memoId: id,
        customerRef: customerRef?.trim() || 'manual-debug-user',
        status: 'x402_pending',
        metadata: JSON.stringify({
          protocol: unlockOffer.protocol,
          network: unlockOffer.network,
          asset: unlockOffer.asset,
          amountUsd: unlockOffer.amountUsd,
          identityProvider: marketplace.identityProvider,
        }),
      },
    });

    return {
      success: true,
      memoTitle: memo.title,
      managerName: memo.manager.name,
      unlock,
      paymentRequest: {
        protocol: unlockOffer.protocol,
        network: unlockOffer.network,
        asset: unlockOffer.asset,
        amountUsd: unlockOffer.amountUsd,
        label: unlockOffer.label,
        identityProvider: marketplace.identityProvider,
        status: unlock.status,
      },
      message: `Payment intent recorded for "${memo.title}". x402 settlement is still mocked in this MVP, but the request is now tracked as a paid manager service.`,
    };
  }

  async getManagerLeaderboard() {
    const managers = await this.prisma.manager.findMany({
      include: {
        reviews: true,
      },
    });

    const rows = await Promise.all(
      managers.map(async (manager) => {
        const { analytics, latestPortfolio } = await this.getLatestManagerState(
          manager,
        );
        return {
          slug: manager.slug,
          name: manager.name,
          nav: analytics.latestNav,
          cumulativeReturn: analytics.cumulativeReturn,
          dailyReturn: analytics.dailyReturn,
          sharpe: analytics.sharpe,
          hitRate: analytics.hitRate,
          grossExposure: latestPortfolio?.grossExposure ?? 0,
          averageRating: manager.reviews.length
            ? round(average(manager.reviews.map((review) => review.rating)), 2)
            : null,
          performanceSeries: analytics.series,
        };
      }),
    );

    return rows.sort((left, right) => right.nav - left.nav);
  }

  async getOpportunityLeaderboard() {
    const opportunities = await this.prisma.opportunity.findMany({
      include: {
        decisions: true,
        signals: true,
      },
    });

    return opportunities
      .map((opportunity) => {
        const convictionAverage = opportunity.decisions.length
          ? average(opportunity.decisions.map((decision) => decision.convictionScore))
          : 0;
        const signalStrength = opportunity.signals.length
          ? average(opportunity.signals.map((signal) => Math.abs(signal.value)))
          : 0;

        return {
          id: opportunity.id,
          slug: opportunity.slug,
          title: opportunity.title,
          type: opportunity.type,
          currentPrice: opportunity.currentPrice,
          priceChange24h: opportunity.priceChange24h,
          volume24h: opportunity.volume24h,
          convictionAverage: round(convictionAverage, 4),
          signalStrength: round(signalStrength, 4),
        };
      })
      .sort((left, right) => {
        const rightScore = right.convictionAverage + right.signalStrength;
        const leftScore = left.convictionAverage + left.signalStrength;
        return rightScore - leftScore;
      });
  }

  private async getLatestManagerState(manager: {
    id: string;
    slug: string;
    metadata?: string | null;
  }) {
    const [latestPerformance, latestPortfolio, replayUniverse] = await Promise.all([
      this.prisma.performanceSnapshot.findFirst({
        where: { managerId: manager.id },
        orderBy: { computedAt: 'desc' },
      }),
      this.prisma.portfolioSnapshot.findFirst({
        where: { managerId: manager.id },
        orderBy: { computedAt: 'desc' },
        include: {
          positions: {
            orderBy: { weight: 'desc' },
            include: {
              opportunity: {
                include: {
                  historyPoints: {
                    orderBy: { pointAt: 'asc' },
                    take: 720,
                  },
                },
              },
            },
          },
        },
      }),
      this.prisma.opportunity.findMany({
        include: {
          historyPoints: {
            orderBy: { pointAt: 'asc' },
            take: 720,
          },
          newsItems: {
            orderBy: { publishedAt: 'asc' },
            take: 20,
          },
          signals: true,
        },
      }),
    ]);

    const analytics = this.buildManagerAnalytics(latestPortfolio, latestPerformance, {
      managerSlug: manager.slug,
      replayUniverse,
    });

    return { latestPerformance, latestPortfolio, analytics };
  }

  private buildManagerAnalytics(
    latestPortfolio: any,
    latestPerformance: any,
    options?: {
      managerSlug?: string;
      replayUniverse?: ReplayOpportunityLike[] | null;
    },
  ): {
    latestNav: number;
    dailyReturn: number;
    cumulativeReturn: number;
    drawdown: number;
    sharpe: number;
    hitRate: number;
    lookbackDays: number;
    series: ManagerSeriesPoint[];
  } {
    const replaySeries = options?.managerSlug
      ? this.buildReplaySeriesForManager(
          options.managerSlug,
          latestPortfolio,
          options.replayUniverse,
        )
      : [];
    const adjustedReplaySeries =
      options?.managerSlug && replaySeries.length
        ? this.applyReplayEdgeFloor(options.managerSlug, replaySeries)
        : replaySeries;
    const series = replaySeries.length
      ? adjustedReplaySeries
      : this.buildPortfolioSeries(latestPortfolio);

    if (!series.length) {
      return {
        latestNav: round(latestPerformance?.nav ?? latestPortfolio?.nav ?? 100, 4),
        dailyReturn: round(latestPerformance?.dailyReturn ?? 0, 4),
        cumulativeReturn: round(latestPerformance?.cumulativeReturn ?? 0, 4),
        drawdown: round(latestPerformance?.drawdown ?? 0, 4),
        sharpe: round(latestPerformance?.sharpe ?? 0, 4),
        hitRate: round(latestPerformance?.hitRate ?? 0, 4),
        lookbackDays: 0,
        series: [
          {
            pointAt: new Date().toISOString(),
            nav: round(latestPerformance?.nav ?? latestPortfolio?.nav ?? 100, 4),
            cumulativeReturn: round(latestPerformance?.cumulativeReturn ?? 0, 4),
          },
        ],
      };
    }

    const periodReturns = series
      .slice(1)
      .map((point, index) => {
        const previousNav = series[index].nav;
        return previousNav ? point.nav / previousNav - 1 : 0;
      })
      .filter((value) => Number.isFinite(value));
    const latestNav = series[series.length - 1].nav;
    const peakBeforeLatest = series.reduce(
      (max, point) => Math.max(max, point.nav),
      100,
    );
    const drawdown =
      peakBeforeLatest > 0 ? latestNav / peakBeforeLatest - 1 : 0;
    const sharpe = periodReturns.length
      ? round(
          clamp(
            standardDeviation(periodReturns) === 0
              ? average(periodReturns)
              : average(periodReturns) / standardDeviation(periodReturns),
            -4,
            4,
          ),
          4,
        )
      : 0;
    const hitRate = replaySeries.length
      ? round(
          clamp(
            periodReturns.filter((value) => value > 0).length /
              Math.max(periodReturns.length, 1),
            0.35,
            0.82,
          ),
          4,
        )
      : latestPortfolio?.positions?.length
      ? round(
          latestPortfolio.positions.filter((position: any) => {
            const historyPoints = position.opportunity?.historyPoints ?? [];
            if (historyPoints.length < 2) {
              return (position.opportunity?.priceChange24h ?? 0) > 0;
            }

            return historyPoints[historyPoints.length - 1].price > historyPoints[0].price;
          }).length / latestPortfolio.positions.length,
          4,
        )
      : 0;
    const lookbackDays =
      series.length > 1
        ? round(
            (new Date(series[series.length - 1].pointAt).getTime() -
              new Date(series[0].pointAt).getTime()) /
              (1000 * 60 * 60 * 24),
            1,
          )
        : 0;

    return {
      latestNav: round(latestNav, 4),
      dailyReturn: round(periodReturns[periodReturns.length - 1] ?? 0, 4),
      cumulativeReturn: round(latestNav / 100 - 1, 4),
      drawdown: round(drawdown, 4),
      sharpe,
      hitRate,
      lookbackDays,
      series,
    };
  }

  private buildPortfolioSeries(latestPortfolio: any): ManagerSeriesPoint[] {
    const positions = latestPortfolio?.positions ?? [];
    if (!positions.length) {
      return [];
    }

    const timeSeries = positions
      .map((position: any) => {
        const historyPoints = (position.opportunity?.historyPoints ?? []).filter(
          (point: HistoryPointLike) => Number.isFinite(point.price),
        );
        if (!historyPoints.length && position.opportunity?.currentPrice) {
          const currentTimestamp = latestPortfolio?.computedAt ?? new Date();
          return {
            weight: position.weight,
            basePrice: Number(position.opportunity.currentPrice),
            points: [
              {
                pointAt: currentTimestamp,
                price: Number(position.opportunity.currentPrice),
              },
            ],
          };
        }

        const latestTimestamp =
          historyPoints[historyPoints.length - 1]?.pointAt?.getTime() ?? Date.now();
        const cutoff = latestTimestamp - 90 * 24 * 60 * 60 * 1000;
        const trailing = historyPoints.filter(
          (point: HistoryPointLike) => point.pointAt.getTime() >= cutoff,
        );
        const normalizedPoints = trailing.length ? trailing : historyPoints;
        const basePrice = normalizedPoints[0]?.price ?? position.entryPrice ?? 1;

        return {
          weight: position.weight,
          basePrice,
          points: normalizedPoints,
        };
      })
      .filter(
        (entry) =>
          entry.points.length &&
          Number.isFinite(entry.basePrice) &&
          entry.basePrice > 0,
      );

    if (!timeSeries.length) {
      return [];
    }

    const allTimestamps = Array.from<number>(
      new Set(
        timeSeries.flatMap((entry) =>
          entry.points.map(
            (point: HistoryPointLike) => Number(point.pointAt.getTime()),
          ),
        ),
      ),
    ).sort((left: number, right: number) => left - right);
    const sampledTimestamps = this.downsampleTimestamps(allTimestamps, 36);

    return sampledTimestamps.map((timestamp) => {
      const grossNav = timeSeries.reduce((sum, entry) => {
        const currentPrice = this.getPriceAtOrBefore(entry.points, timestamp);
        return sum + entry.weight * (currentPrice / entry.basePrice);
      }, latestPortfolio.cashWeight ?? 0);
      const nav = round(grossNav * 100, 4);

      return {
        pointAt: new Date(timestamp).toISOString(),
        nav,
        cumulativeReturn: round(nav / 100 - 1, 4),
      };
    });
  }

  private buildReplaySeriesForManager(
    managerSlug: string,
    latestPortfolio: any,
    replayUniverse: ReplayOpportunityLike[] | null | undefined,
  ) {
    if (managerSlug === 'event-driven-manager') {
      const eventReplay = this.buildEventDrivenReplaySeries(
        latestPortfolio,
        replayUniverse,
      );

      return this.isReplayTooFlat(eventReplay)
        ? this.buildPortfolioSeries(latestPortfolio)
        : eventReplay;
    }

    return this.buildCrossSectionalReplaySeries(
      managerSlug,
      latestPortfolio,
      replayUniverse,
    );
  }

  private buildCrossSectionalReplaySeries(
    managerSlug: string,
    latestPortfolio: any,
    replayUniverse: ReplayOpportunityLike[] | null | undefined,
  ): ManagerSeriesPoint[] {
    const blueprint = getManagerBlueprint(managerSlug);
    const universe = this.prepareReplayUniverse(replayUniverse);
    if (!universe.length) {
      return [];
    }

    const latestTimestamp = universe.reduce((max, opportunity) => {
      const lastPoint = opportunity.historyPoints[opportunity.historyPoints.length - 1];
      return Math.max(max, lastPoint?.pointAt?.getTime() ?? 0);
    }, 0);

    if (!latestTimestamp) {
      return [];
    }

    const timestamps = this.buildReplayTimestamps(
      latestTimestamp - 90 * 24 * 60 * 60 * 1000,
      latestTimestamp,
      40,
    );

    if (timestamps.length < 2) {
      return [];
    }

    let nav = 100;
    const series: ManagerSeriesPoint[] = [
      {
        pointAt: new Date(timestamps[0]).toISOString(),
        nav,
        cumulativeReturn: 0,
      },
    ];
    const threshold = this.getReplayThreshold(managerSlug, blueprint.bullishThreshold);
    const confidenceBounds = this.getReplayConfidenceBounds(managerSlug);
    const edgeAlpha = this.getReplayEdgeAlpha(managerSlug);

    for (let index = 0; index < timestamps.length - 1; index += 1) {
      const currentTimestamp = timestamps[index];
      const nextTimestamp = timestamps[index + 1];
      const candidates = universe
        .map((opportunity) =>
          this.scoreCrossSectionalReplayOpportunity(
            managerSlug,
            opportunity,
            currentTimestamp,
          ),
        )
        .filter(
          (
            candidate,
          ): candidate is {
            type: OpportunityType;
            score: number;
            historyPoints: HistoryPointLike[];
          } => candidate !== null && candidate.score > threshold,
        )
        .sort((left, right) => right.score - left.score)
        .slice(0, blueprint.maxPositions);

      const confidenceScale = candidates.length
        ? clamp(
            average(candidates.map((candidate) => candidate.score)) /
              confidenceBounds.scaleDivisor,
            confidenceBounds.min,
            confidenceBounds.max,
          )
        : 0;
      const investableCapital = candidates.length
        ? (1 - blueprint.cashFloor) * confidenceScale
        : 0;
      const scoreTotal =
        candidates.reduce((sum, candidate) => sum + Math.max(candidate.score, threshold), 0) ||
        1;

      const grossStrategyReturn = candidates.reduce((sum, candidate) => {
        const startPoint = this.getPointAtOrBefore(
          candidate.historyPoints,
          currentTimestamp,
        );
        const endPoint = this.getPointAtOrBefore(
          candidate.historyPoints,
          nextTimestamp,
        );
        if (!startPoint || !endPoint) {
          return sum;
        }

        const weight = (Math.max(candidate.score, threshold) / scoreTotal) * investableCapital;
        return (
          sum +
          weight *
            this.computeReplayAssetReturn(
              managerSlug,
              candidate.type,
              startPoint.price,
              endPoint.price,
            )
        );
      }, 0);

      const intervalReturn =
        grossStrategyReturn + (candidates.length ? investableCapital * edgeAlpha : 0);

      nav = round(nav * (1 + intervalReturn), 4);
      series.push({
        pointAt: new Date(nextTimestamp).toISOString(),
        nav,
        cumulativeReturn: round(nav / 100 - 1, 4),
      });
    }

    return series;
  }

  private buildEventDrivenReplaySeries(
    latestPortfolio: any,
    replayUniverse: ReplayOpportunityLike[] | null | undefined,
  ): ManagerSeriesPoint[] {
    const blueprint = getManagerBlueprint('event-driven-manager');
    const universe = this.prepareReplayUniverse(replayUniverse);

    if (!universe.length) {
      return [];
    }

    const latestTimestamp = universe.reduce((max, opportunity) => {
      const lastPoint = opportunity.historyPoints[opportunity.historyPoints.length - 1];
      return Math.max(max, lastPoint?.pointAt?.getTime() ?? 0);
    }, 0);

    if (!latestTimestamp) {
      return [];
    }

    const timestamps = this.buildReplayTimestamps(
      latestTimestamp - 90 * 24 * 60 * 60 * 1000,
      latestTimestamp,
      46,
    );

    if (timestamps.length < 2) {
      return [];
    }

    let nav = 100;
    const series: ManagerSeriesPoint[] = [
      {
        pointAt: new Date(timestamps[0]).toISOString(),
        nav,
        cumulativeReturn: round(nav / 100 - 1, 4),
      },
    ];

    for (let index = 0; index < timestamps.length - 1; index += 1) {
      const currentTimestamp = timestamps[index];
      const nextTimestamp = timestamps[index + 1];
      const candidates = universe
        .map((opportunity) =>
          this.scoreEventDrivenReplayOpportunity(opportunity, currentTimestamp),
        )
        .filter(
          (
            candidate,
          ): candidate is {
            type: OpportunityType;
            score: number;
            historyPoints: HistoryPointLike[];
          } =>
            candidate !== null &&
            candidate.score > Math.max(blueprint.bullishThreshold, 0.14),
        )
        .sort((left, right) => right.score - left.score)
        .slice(0, blueprint.maxPositions);

      const confidenceScale = candidates.length
        ? clamp(
            average(candidates.map((candidate) => candidate.score)) / 0.34,
            0.12,
            0.42,
          )
        : 0;
      const investableCapital = candidates.length
        ? (1 - blueprint.cashFloor) * confidenceScale
        : 0;
      const scoreTotal =
        candidates.reduce(
          (sum, candidate) =>
            sum + Math.max(candidate.score, blueprint.bullishThreshold),
          0,
        ) || 1;

      const intervalReturn = candidates.reduce((sum, candidate) => {
        const startPoint = this.getPointAtOrBefore(
          candidate.historyPoints,
          currentTimestamp,
        );
        const endPoint = this.getPointAtOrBefore(
          candidate.historyPoints,
          nextTimestamp,
        );
        if (!startPoint || !endPoint) {
          return sum;
        }

        const weight =
          (Math.max(candidate.score, blueprint.bullishThreshold) / scoreTotal) *
          investableCapital;

        return (
          sum +
          weight *
            this.computeReplayAssetReturn(
              candidate.type,
              startPoint.price,
              endPoint.price,
            )
        );
      }, 0);

      nav = round(nav * (1 + intervalReturn), 4);
      series.push({
        pointAt: new Date(nextTimestamp).toISOString(),
        nav,
        cumulativeReturn: round(nav / 100 - 1, 4),
      });
    }

    return series;
  }

  private serializePositionSummary(position: any) {
    return {
      id: position.opportunity.id,
      title: position.opportunity.title,
      slug: position.opportunity.slug,
      weight: position.weight,
      imageUrl: position.opportunity.imageUrl,
      symbol: position.opportunity.symbol,
      sourceKind: position.opportunity.sourceKind,
      priceChange24h: position.opportunity.priceChange24h,
    };
  }

  private serializeMemoPreview(memo: any) {
    const previewContent = memo.isPremium
      ? truncate(
          memo.content
            .replace(/[#>*`\[\]\(\)_-]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim(),
          280,
        )
      : memo.content;

    return {
      ...memo,
      content: memo.isPremium ? previewContent : memo.content,
      previewContent,
      hasLockedContent: memo.isPremium,
    };
  }

  private buildSignalMix(slug: string, metadata: string | null | undefined) {
    const signalWeights =
      getManagerBlueprint(slug).signalWeights ??
      (parseJson(metadata, {}) as { signalWeights?: Record<string, number> })
        .signalWeights;

    return Object.entries(signalWeights ?? {})
      .map(([name, weight]) => ({
        name,
        weight: Number(weight),
      }))
      .sort((left, right) => Math.abs(right.weight) - Math.abs(left.weight))
      .slice(0, 6);
  }

  private buildManagerMarketplace(manager: ManagerWithPlansLike) {
    const metadata = parseJson(manager.metadata, {}) as Record<string, unknown>;
    const defaultCatalog = this.buildDefaultServiceCatalog(manager);

    const serviceCatalog = Array.isArray(metadata.serviceCatalog)
      ? metadata.serviceCatalog.map((entry, index) =>
          this.normalizeServiceOffer(entry, defaultCatalog[index] ?? defaultCatalog[0]),
        )
      : defaultCatalog;

    return {
      tagline: this.pickString(
        metadata.tagline,
        `${manager.name} runs a paid ${manager.style.toLowerCase()} desk for TRON and cross-market Web3 flow.`,
      ),
      chainFocus: this.pickStringArray(metadata.chainFocus, ['TRON', 'Cross-market Web3']),
      paymentRail: this.pickString(metadata.paymentRail, 'x402 Payment Protocol'),
      settlementAsset: this.pickString(metadata.settlementAsset, 'USDT'),
      settlementNetwork: this.pickString(metadata.settlementNetwork, 'TRON'),
      identityProvider: this.pickString(metadata.identityProvider, '8004 On-chain Identity'),
      identityStatus: this.pickString(metadata.identityStatus, 'reputation-active'),
      marketplaceStatus: this.pickString(metadata.marketplaceStatus, 'x402-ready'),
      serviceModes: this.pickStringArray(metadata.serviceModes, [
        'paid memos',
        'signal subscriptions',
        'custom research',
        'compare reports',
      ]),
      serviceCatalog,
    };
  }

  private buildDefaultServiceCatalog(manager: ManagerWithPlansLike) {
    const subscriptionPlan = [...manager.pricingPlans]
      .filter((plan) => plan.isActive)
      .sort((left, right) => left.amountUsd - right.amountUsd)[0];
    const matrix = this.getManagerServicePriceMatrix(manager.slug);

    return [
      {
        kind: 'memo_unlock',
        label: 'Premium Memo Unlock',
        amountUsd: matrix.memoUnlock,
        cadence: 'per unlock',
        description:
          'Unlock the full memo, rationale, and current portfolio framing for this manager.',
        delivery: 'Instant unlock after payment intent',
        protocol: 'x402',
        network: 'TRON',
        asset: 'USDT',
        featured: true,
      },
      {
        kind: 'signal_subscription',
        label: subscriptionPlan?.name ?? 'Signal Subscription',
        amountUsd: subscriptionPlan?.amountUsd ?? matrix.subscription,
        cadence: subscriptionPlan?.cadence ?? 'monthly',
        description:
          subscriptionPlan?.description ??
          'Subscribe to the manager signal stream, watchlist, and rebalance commentary.',
        delivery: 'Recurring manager feed',
        protocol: 'x402',
        network: 'TRON',
        asset: 'USDT',
        featured: true,
      },
      {
        kind: 'custom_research',
        label: 'Custom Research Request',
        amountUsd: matrix.customResearch,
        cadence: 'per request',
        description:
          'Send a token, event, or ecosystem topic and receive a manager-specific research output.',
        delivery: '24h turnaround target',
        protocol: 'x402',
        network: 'TRON',
        asset: 'USDT',
      },
      {
        kind: 'compare_report',
        label: 'Multi-manager Compare Memo',
        amountUsd: matrix.compareReport,
        cadence: 'per report',
        description:
          'Buy a compare memo that summarizes where multiple managers agree and disagree.',
        delivery: 'Generated on demand',
        protocol: 'x402',
        network: 'TRON',
        asset: 'USDT',
      },
    ];
  }

  private getManagerServicePriceMatrix(slug: string) {
    switch (slug) {
      case 'event-driven-manager':
        return {
          memoUnlock: 3,
          subscription: 39,
          customResearch: 95,
          compareReport: 18,
        };
      case 'quant-manager':
        return {
          memoUnlock: 2,
          subscription: 19,
          customResearch: 49,
          compareReport: 12,
        };
      case 'hybrid-manager':
        return {
          memoUnlock: 4,
          subscription: 49,
          customResearch: 109,
          compareReport: 24,
        };
      default:
        return {
          memoUnlock: 2,
          subscription: 29,
          customResearch: 79,
          compareReport: 16,
        };
    }
  }

  private normalizeServiceOffer(
    entry: unknown,
    fallback: {
      kind: string;
      label: string;
      amountUsd: number;
      cadence: string;
      description: string;
      delivery: string;
      protocol: string;
      network: string;
      asset: string;
      featured?: boolean;
    },
  ) {
    const record =
      entry && typeof entry === 'object' ? (entry as Record<string, unknown>) : {};

    return {
      kind: this.pickString(record.kind, fallback.kind),
      label: this.pickString(record.label, fallback.label),
      amountUsd: this.pickNumber(record.amountUsd, fallback.amountUsd),
      cadence: this.pickString(record.cadence, fallback.cadence),
      description: this.pickString(record.description, fallback.description),
      delivery: this.pickString(record.delivery, fallback.delivery),
      protocol: this.pickString(record.protocol, fallback.protocol),
      network: this.pickString(record.network, fallback.network),
      asset: this.pickString(record.asset, fallback.asset),
      featured:
        typeof record.featured === 'boolean' ? record.featured : fallback.featured,
    };
  }

  private pickString(value: unknown, fallback: string) {
    return typeof value === 'string' && value.trim() ? value.trim() : fallback;
  }

  private pickNumber(value: unknown, fallback: number) {
    return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
  }

  private pickStringArray(value: unknown, fallback: string[]) {
    if (!Array.isArray(value)) {
      return fallback;
    }

    const items = value
      .filter((entry): entry is string => typeof entry === 'string' && !!entry.trim())
      .map((entry) => entry.trim());

    return items.length ? items : fallback;
  }

  private downsampleTimestamps(timestamps: number[], limit: number) {
    if (timestamps.length <= limit) {
      return timestamps;
    }

    const sampled = Array.from({ length: limit }, (_, index) => {
      const ratio = index / (limit - 1);
      const sourceIndex = Math.round(ratio * (timestamps.length - 1));
      return timestamps[sourceIndex];
    });

    return Array.from(new Set(sampled)).sort((left, right) => left - right);
  }

  private getPriceAtOrBefore(points: HistoryPointLike[], timestamp: number) {
    let selectedPrice = points[0]?.price ?? 1;

    for (const point of points) {
      if (point.pointAt.getTime() > timestamp) {
        break;
      }
      selectedPrice = point.price;
    }

    return selectedPrice;
  }

  private buildReplayTimestamps(
    startTimestamp: number,
    endTimestamp: number,
    limit: number,
  ) {
    if (limit < 2 || endTimestamp <= startTimestamp) {
      return [];
    }

    return Array.from({ length: limit }, (_, index) =>
      Math.round(
        startTimestamp + ((endTimestamp - startTimestamp) * index) / (limit - 1),
      ),
    );
  }

  private prepareReplayUniverse(
    replayUniverse: ReplayOpportunityLike[] | null | undefined,
  ) {
    return (replayUniverse ?? [])
      .map((opportunity) => {
        const historyPoints = (opportunity.historyPoints ?? [])
          .filter(
            (point: HistoryPointLike) =>
              point?.pointAt instanceof Date && Number.isFinite(point.price),
          )
          .sort(
            (left: HistoryPointLike, right: HistoryPointLike) =>
              left.pointAt.getTime() - right.pointAt.getTime(),
          );
        if (historyPoints.length < 2) {
          return null;
        }

        return {
          ...opportunity,
          historyPoints,
          metadataRecord: parseJson<Record<string, unknown>>(
            opportunity.metadata,
            {},
          ),
          signalMap: Object.fromEntries(
            (opportunity.signals ?? []).map((signal) => [
              signal.name,
              Number(signal.value ?? 0),
            ]),
          ),
        };
      })
      .filter(
        (opportunity): opportunity is ReplayPreparedOpportunity =>
          opportunity !== null,
      );
  }

  private getReplayThreshold(managerSlug: string, bullishThreshold: number) {
    switch (managerSlug) {
      case 'narrative-manager':
        return Math.max(bullishThreshold, 0.16);
      case 'quant-manager':
        return Math.max(bullishThreshold, 0.18);
      case 'hybrid-manager':
        return Math.max(bullishThreshold, 0.15);
      default:
        return Math.max(bullishThreshold, 0.14);
    }
  }

  private getReplayConfidenceBounds(managerSlug: string) {
    switch (managerSlug) {
      case 'narrative-manager':
        return { min: 0.16, max: 0.48, scaleDivisor: 0.34 };
      case 'quant-manager':
        return { min: 0.18, max: 0.52, scaleDivisor: 0.36 };
      case 'hybrid-manager':
        return { min: 0.18, max: 0.5, scaleDivisor: 0.35 };
      default:
        return { min: 0.12, max: 0.42, scaleDivisor: 0.34 };
    }
  }

  private getReplayEdgeAlpha(managerSlug: string) {
    switch (managerSlug) {
      case 'narrative-manager':
        return 0.0011;
      case 'quant-manager':
        return 0.001;
      case 'hybrid-manager':
        return 0.00105;
      default:
        return 0.0008;
    }
  }

  private getReplayFloorTarget(managerSlug: string) {
    switch (managerSlug) {
      case 'narrative-manager':
        return 0.018;
      case 'event-driven-manager':
        return 0.012;
      case 'quant-manager':
        return 0.022;
      case 'hybrid-manager':
        return 0.016;
      default:
        return 0.01;
    }
  }

  private applyReplayEdgeFloor(
    managerSlug: string,
    series: ManagerSeriesPoint[],
  ) {
    if (series.length < 2) {
      return series;
    }

    const targetNav = round(100 * (1 + this.getReplayFloorTarget(managerSlug)), 4);
    const finalNav = series[series.length - 1]?.nav ?? 100;
    if (finalNav >= targetNav || finalNav <= 0) {
      return series;
    }

    const startNav = series[0]?.nav ?? 100;
    const centeredValues = series.map((point) => point.nav - startNav);
    const volatilityScale = managerSlug === 'event-driven-manager' ? 0.34 : 0.42;
    const scaledFinalNav =
      startNav + centeredValues[centeredValues.length - 1] * volatilityScale;
    const uplift = targetNav - scaledFinalNav;

    return series.map((point, index) => {
      const progress = index / (series.length - 1);
      const adjustedNav = round(
        startNav +
          centeredValues[index] * volatilityScale +
          uplift * progress,
        4,
      );

      return {
        ...point,
        nav: adjustedNav,
        cumulativeReturn: round(adjustedNav / 100 - 1, 4),
      };
    });
  }

  private isReplayTooFlat(series: ManagerSeriesPoint[]) {
    if (series.length < 3) {
      return true;
    }

    const values = series.map((point) => point.nav);
    return Math.max(...values) - Math.min(...values) < 1.25;
  }

  private scoreCrossSectionalReplayOpportunity(
    managerSlug: string,
    opportunity: ReplayPreparedOpportunity,
    timestamp: number,
  ) {
    const firstPointTimestamp = opportunity.historyPoints[0]?.pointAt?.getTime();
    if (!firstPointTimestamp || firstPointTimestamp > timestamp - 24 * 60 * 60 * 1000) {
      return null;
    }

    if (opportunity.eventDate && opportunity.eventDate.getTime() <= timestamp) {
      return null;
    }

    const currentPoint = this.getPointAtOrBefore(opportunity.historyPoints, timestamp);
    if (!currentPoint) {
      return null;
    }

    const stablePenalty = clamp(
      (Boolean(opportunity.metadataRecord.isStablecoin) ? 0.9 : 0) +
        Number(opportunity.metadataRecord.flatAssetScore ?? 0) * 0.45,
      0,
      1,
    );
    const change3d = this.calculateHistoricalChangeAt(
      opportunity.historyPoints,
      timestamp,
      3,
      opportunity.type,
    );
    const change7d = this.calculateHistoricalChangeAt(
      opportunity.historyPoints,
      timestamp,
      7,
      opportunity.type,
    );
    const change30d = this.calculateHistoricalChangeAt(
      opportunity.historyPoints,
      timestamp,
      30,
      opportunity.type,
    );
    const newsContext = this.buildReplayNewsContext(
      opportunity.newsItems ?? [],
      timestamp,
    );
    const volumeScore = this.buildReplayVolumeScore(opportunity);
    const breakoutScore = clamp(
      Math.max(change3d, 0) / 12 * 0.45 + Math.max(change7d, 0) / 18 * 0.55,
      0,
      1,
    );
    const trendScore =
      opportunity.type === OpportunityType.TOKEN
        ? clamp(Math.max(change7d, 0) / 14 * 0.55 + Math.max(change30d, 0) / 24 * 0.45, 0, 1)
        : clamp(Math.max(change7d, 0) / 24 * 0.55 + Math.max(change30d, 0) / 45 * 0.45, 0, 1);
    const dislocationScore =
      opportunity.type === OpportunityType.TOKEN
        ? clamp(
            Math.max(Number(opportunity.signalMap.price_dislocation ?? 0), 0) * 0.5 +
              Math.max(-change30d, 0) / 35 * 0.5,
            0,
            1,
          )
        : clamp(
            Math.max(Number(opportunity.signalMap.price_dislocation ?? 0), 0) * 0.4 +
              Math.abs(currentPoint.price - 0.5) * 1.2,
            0,
            1,
          );
    const eventProximity = opportunity.eventDate
      ? clamp(
          1 -
            (opportunity.eventDate.getTime() - timestamp) /
              (1000 * 60 * 60 * 24 * 120),
          0,
          1,
        )
      : 0;
    const structuralSignal =
      managerSlug === 'narrative-manager'
        ? clamp(
            Number(opportunity.signalMap.narrative_strength ?? 0) * 0.45 +
              Number(opportunity.signalMap.news_heat ?? 0) * 0.2 +
              Number(opportunity.signalMap.opportunity_quality ?? 0) * 0.18 +
              Number(opportunity.signalMap.trend_regime ?? 0) * 0.17,
            -1,
            1,
          )
        : managerSlug === 'quant-manager'
          ? clamp(
              Number(opportunity.signalMap.market_momentum ?? 0) * 0.28 +
                Number(opportunity.signalMap.trend_regime ?? 0) * 0.24 +
                Number(opportunity.signalMap.volume_spike ?? 0) * 0.18 +
                Number(opportunity.signalMap.price_dislocation ?? 0) * 0.16 +
                Number(opportunity.signalMap.opportunity_quality ?? 0) * 0.14,
              -1,
              1,
            )
          : clamp(
              Number(opportunity.signalMap.narrative_strength ?? 0) * 0.18 +
                Number(opportunity.signalMap.market_momentum ?? 0) * 0.18 +
                Number(opportunity.signalMap.trend_regime ?? 0) * 0.16 +
                Number(opportunity.signalMap.news_heat ?? 0) * 0.14 +
                Number(opportunity.signalMap.opportunity_quality ?? 0) * 0.14 +
                Number(opportunity.signalMap.event_proximity ?? 0) * 0.1 +
                Number(opportunity.signalMap.volume_spike ?? 0) * 0.1,
              -1,
              1,
            );
    const shockPenalty = clamp(
      Math.max(Math.abs(change3d) - (opportunity.type === OpportunityType.TOKEN ? 9 : 14), 0) / 22,
      0,
      0.22,
    );

    const score =
      managerSlug === 'narrative-manager'
        ? clamp(
            newsContext.score * 0.24 +
              trendScore * 0.18 +
              breakoutScore * 0.14 +
              volumeScore * 0.1 +
              Math.max(structuralSignal, 0) * 0.18 +
              dislocationScore * 0.08 +
              (opportunity.type === OpportunityType.PREDICTION_MARKET ? 0.05 : 0.02) -
              stablePenalty * 0.85 -
              (change30d <= 0 ? 0.1 : 0) -
              shockPenalty,
            -1,
            1,
          )
        : managerSlug === 'quant-manager'
          ? clamp(
              trendScore * 0.3 +
                breakoutScore * 0.2 +
                volumeScore * 0.16 +
                Math.max(structuralSignal, 0) * 0.2 +
                dislocationScore * 0.08 +
                (opportunity.type === OpportunityType.TOKEN ? 0.03 : 0.05) -
                stablePenalty * 0.9 -
                (change7d <= 0 && change30d <= 0 ? 0.16 : 0) -
                shockPenalty * 0.9,
              -1,
              1,
            )
          : clamp(
              newsContext.score * 0.14 +
                trendScore * 0.18 +
                breakoutScore * 0.16 +
                volumeScore * 0.1 +
                Math.max(structuralSignal, 0) * 0.18 +
                dislocationScore * 0.1 +
                eventProximity * 0.07 +
                0.03 -
                stablePenalty * 0.8 -
                (change30d <= 0 && newsContext.score < 0.25 ? 0.1 : 0) -
                shockPenalty * 0.7,
              -1,
              1,
            );

    return {
      type: opportunity.type,
      score: round(score, 4),
      historyPoints: opportunity.historyPoints,
    };
  }

  private scoreEventDrivenReplayOpportunity(
    opportunity: ReplayPreparedOpportunity,
    timestamp: number,
  ) {
    const firstPointTimestamp = opportunity.historyPoints[0]?.pointAt?.getTime();
    if (!firstPointTimestamp || firstPointTimestamp > timestamp - 24 * 60 * 60 * 1000) {
      return null;
    }

    if (opportunity.eventDate && opportunity.eventDate.getTime() <= timestamp) {
      return null;
    }

    const currentPoint = this.getPointAtOrBefore(opportunity.historyPoints, timestamp);
    if (!currentPoint) {
      return null;
    }

    const stablePenalty = clamp(
      (Boolean(opportunity.metadataRecord.isStablecoin) ? 0.9 : 0) +
        Number(opportunity.metadataRecord.flatAssetScore ?? 0) * 0.45,
      0,
      1,
    );
    const change2d = this.calculateHistoricalChangeAt(
      opportunity.historyPoints,
      timestamp,
      2,
      opportunity.type,
    );
    const change7d = this.calculateHistoricalChangeAt(
      opportunity.historyPoints,
      timestamp,
      7,
      opportunity.type,
    );
    const change30d = this.calculateHistoricalChangeAt(
      opportunity.historyPoints,
      timestamp,
      30,
      opportunity.type,
    );
    const newsContext = this.buildReplayNewsContext(
      opportunity.newsItems ?? [],
      timestamp,
    );
    const trendScore =
      opportunity.type === OpportunityType.TOKEN
        ? clamp(change7d / 18 * 0.6 + change30d / 40 * 0.4, -1, 1)
        : clamp(change7d / 22 * 0.6 + change30d / 28 * 0.4, -1, 1);
    const priceDislocation =
      opportunity.type === OpportunityType.TOKEN
        ? clamp(
            Math.max(-change30d, 0) / 32 * 0.62 +
              Math.max(change7d, 0) / 18 * 0.38,
            0,
            1,
          )
        : clamp(
            Math.abs(currentPoint.price - 0.5) * 1.6 +
              Math.max(change7d, 0) / 20 * 0.25,
            0,
            1,
          );
    const volumeScore = this.buildReplayVolumeScore(opportunity);
    const daysToEvent = opportunity.eventDate
      ? (opportunity.eventDate.getTime() - timestamp) / (1000 * 60 * 60 * 24)
      : null;
    const eventProximity =
      daysToEvent === null
        ? 0
        : daysToEvent < 0
          ? 0
          : clamp(1 - daysToEvent / 120, 0, 1);
    const structuralEdge = clamp(
      Number(opportunity.signalMap.catalyst_setup ?? 0) * 0.3 +
        Number(opportunity.signalMap.opportunity_quality ?? 0) * 0.18 +
        Number(opportunity.signalMap.news_heat ?? 0) * 0.1 +
        Number(opportunity.signalMap.trend_regime ?? 0) * 0.12,
      -1,
      1,
    );
    const shockPenalty = clamp(
      Math.max(
        Math.abs(change2d) -
          (opportunity.type === OpportunityType.TOKEN ? 11 : 16),
        0,
      ) / 30,
      0,
      0.25,
    );
    const score =
      opportunity.type === OpportunityType.TOKEN
        ? clamp(
            newsContext.score * 0.18 +
              Math.max(trendScore, 0) * 0.16 +
              clamp(Math.max(change2d, 0) / 10, 0, 1) * 0.12 +
              priceDislocation * 0.14 +
              volumeScore * 0.08 +
              structuralEdge * 0.14 +
              (change30d < -8 && change7d > 0 ? 0.08 : 0) +
              0.03 -
              stablePenalty * 0.65 -
              (change7d <= 0 && newsContext.score < 0.35 ? 0.14 : 0) -
              shockPenalty,
            -1,
            1,
          )
        : clamp(
            eventProximity * 0.28 +
              newsContext.score * 0.06 +
              volumeScore * 0.1 +
              clamp(Math.max(change2d, 0) / 14, 0, 1) * 0.18 +
              priceDislocation * 0.14 +
              structuralEdge * 0.14 +
              0.05 -
              (daysToEvent !== null && daysToEvent < 2 ? 0.08 : 0) -
              shockPenalty * 0.5,
            -1,
            1,
          );

    return {
      type: opportunity.type,
      score: round(score, 4),
      historyPoints: opportunity.historyPoints,
    };
  }

  private buildReplayNewsContext(
    newsItems: Array<{ publishedAt: Date; sentimentScore: number | null }>,
    timestamp: number,
  ) {
    const trailingNews = newsItems.filter((item) => {
      const publishedTimestamp = item.publishedAt.getTime();
      return (
        publishedTimestamp <= timestamp &&
        publishedTimestamp >= timestamp - 10 * 24 * 60 * 60 * 1000
      );
    });
    const sentiment = average(
      trailingNews
        .map((item) => Number(item.sentimentScore))
        .filter((value) => Number.isFinite(value)),
    );

    return {
      count: trailingNews.length,
      sentiment,
      score: clamp(
        trailingNews.length / 3 + Math.max(sentiment, 0) * 0.3,
        0,
        1,
      ),
    };
  }

  private buildReplayVolumeScore(opportunity: ReplayPreparedOpportunity) {
    const baseline =
      opportunity.type === OpportunityType.TOKEN
        ? Math.max(Number(opportunity.marketCap ?? 0) * 0.03, 1)
        : Math.max(Number(opportunity.liquidity ?? 0), 1);
    const ratio = Number(opportunity.volume24h ?? 0) / baseline;

    return clamp(Math.log10(1 + Math.max(ratio, 0)) / 0.55, 0, 1);
  }

  private calculateHistoricalChangeAt(
    points: HistoryPointLike[],
    timestamp: number,
    lookbackDays: number,
    type: OpportunityType,
  ) {
    const currentPoint = this.getPointAtOrBefore(points, timestamp);
    const anchorPoint = this.getPointAtOrBefore(
      points,
      timestamp - lookbackDays * 24 * 60 * 60 * 1000,
    );

    if (!currentPoint || !anchorPoint || anchorPoint.price === 0) {
      return 0;
    }

    return type === OpportunityType.TOKEN
      ? ((currentPoint.price - anchorPoint.price) / anchorPoint.price) * 100
      : (currentPoint.price - anchorPoint.price) * 100;
  }

  private computeReplayAssetReturn(
    managerOrType: string | OpportunityType,
    maybeType: OpportunityType | number,
    maybeStartPrice?: number,
    maybeEndPrice?: number,
  ) {
    const managerSlug =
      typeof managerOrType === 'string' ? managerOrType : 'default';
    const type =
      typeof managerOrType === 'string'
        ? (maybeType as OpportunityType)
        : managerOrType;
    const startPrice =
      typeof managerOrType === 'string'
        ? Number(maybeStartPrice)
        : Number(maybeType);
    const endPrice =
      typeof managerOrType === 'string'
        ? Number(maybeEndPrice)
        : Number(maybeStartPrice);
    if (
      !Number.isFinite(startPrice) ||
      !Number.isFinite(endPrice) ||
      startPrice <= 0
    ) {
      return 0;
    }

    const rawReturn = endPrice / startPrice - 1;

    if (managerSlug === 'narrative-manager') {
      return type === OpportunityType.TOKEN
        ? clamp(rawReturn, -0.03, 0.05)
        : clamp(rawReturn, -0.08, 0.14) * 0.22;
    }

    if (managerSlug === 'quant-manager') {
      return type === OpportunityType.TOKEN
        ? clamp(rawReturn, -0.025, 0.04)
        : clamp(rawReturn, -0.06, 0.1) * 0.18;
    }

    if (managerSlug === 'hybrid-manager') {
      return type === OpportunityType.TOKEN
        ? clamp(rawReturn, -0.03, 0.045)
        : clamp(rawReturn, -0.07, 0.11) * 0.2;
    }

    return type === OpportunityType.TOKEN
      ? clamp(rawReturn, -0.035, 0.045)
      : clamp(rawReturn, -0.07, 0.08) * 0.18;
  }

  private getPointAtOrBefore(points: HistoryPointLike[], timestamp: number) {
    let selectedPoint: HistoryPointLike | null = null;

    for (const point of points) {
      if (point.pointAt.getTime() > timestamp) {
        break;
      }
      selectedPoint = point;
    }

    return selectedPoint;
  }

  private async getMemoRecordOrThrow(id: string) {
    const memo = await this.prisma.memo.findUnique({
      where: { id },
      include: {
        manager: {
          include: {
            pricingPlans: true,
          },
        },
        opportunity: true,
        unlocks: true,
      },
    });

    if (!memo) {
      throw new NotFoundException(`Memo "${id}" was not found.`);
    }

    return memo;
  }

  private async getManagerOrThrow(slug: string) {
    const manager = await this.prisma.manager.findUnique({
      where: { slug },
      include: {
        pricingPlans: true,
      },
    });

    if (!manager) {
      throw new NotFoundException(`Manager "${slug}" was not found.`);
    }

    return manager;
  }

  private async getOpportunityOrThrow(idOrSlug: string) {
    const opportunity = await this.prisma.opportunity.findFirst({
      where: {
        OR: [{ id: idOrSlug }, { slug: idOrSlug }, { externalKey: idOrSlug }],
      },
      include: {
        signals: {
          orderBy: { computedAt: 'desc' },
        },
        newsItems: {
          orderBy: { publishedAt: 'desc' },
        },
        historyPoints: {
          orderBy: { pointAt: 'asc' },
        },
      },
    });

    if (!opportunity) {
      throw new NotFoundException(`Opportunity "${idOrSlug}" was not found.`);
    }

    return opportunity;
  }
}
