import { Direction, OpportunityType } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  average,
  clamp,
  daysUntil,
  parseJson,
  round,
  serializeJson,
  standardDeviation,
} from '../core/helpers';

type HistoryPointLike = {
  pointAt: Date;
  price: number;
  volume?: number | null;
};

@Injectable()
export class SignalEngineService {
  constructor(private readonly prisma: PrismaService) {}

  async recomputeSignals() {
    await this.prisma.signal.deleteMany({});

    const opportunities = await this.prisma.opportunity.findMany({
      include: {
        newsItems: {
          orderBy: { publishedAt: 'desc' },
          take: 8,
        },
        historyPoints: {
          orderBy: { pointAt: 'asc' },
          take: 720,
        },
      },
    });

    const signalRows = opportunities.flatMap((opportunity) =>
      this.buildSignalsForOpportunity(opportunity).map((signal) => ({
        ...signal,
        opportunityId: opportunity.id,
      })),
    );

    if (signalRows.length) {
      await this.prisma.signal.createMany({ data: signalRows });
    }

    return {
      opportunities: opportunities.length,
      signals: signalRows.length,
    };
  }

  private buildSignalsForOpportunity(opportunity: any) {
    const metadata = parseJson<Record<string, unknown>>(opportunity.metadata, {});
    const historyPoints = (opportunity.historyPoints ?? []).filter(
      (point: HistoryPointLike) =>
        point?.pointAt instanceof Date && Number.isFinite(point.price),
    );
    const recentNews = opportunity.newsItems.filter((item: any) => {
      return item.publishedAt.getTime() > Date.now() - 96 * 60 * 60 * 1000;
    });
    const recentSentiment = average(
      recentNews
        .map((item: any) => Number(item.sentimentScore))
        .filter((value: number) => Number.isFinite(value)),
    );
    const catalystNews = opportunity.newsItems.filter((item: any) => {
      return item.publishedAt.getTime() > Date.now() - 14 * 24 * 60 * 60 * 1000;
    });
    const catalystSentiment = average(
      catalystNews
        .map((item: any) => Number(item.sentimentScore))
        .filter((value: number) => Number.isFinite(value)),
    );
    const change24h = Number(opportunity.priceChange24h ?? 0);
    const change7d = this.resolveDirectionalChange(opportunity, historyPoints, metadata, 7);
    const change30d = this.resolveDirectionalChange(
      opportunity,
      historyPoints,
      metadata,
      30,
    );
    const volatility7d =
      Number(metadata.volatility7d ?? 0) ||
      this.calculateVolatility(historyPoints, 7, opportunity.type);
    const isStablecoin = Boolean(metadata.isStablecoin);
    const flatAssetScore = clamp(Number(metadata.flatAssetScore ?? 0), 0, 1);
    const stablePenalty = clamp(
      (isStablecoin ? 0.9 : 0) + flatAssetScore * 0.45,
      0,
      1,
    );
    const momentumScales =
      opportunity.type === OpportunityType.TOKEN
        ? { day: 10, week: 24, month: 42 }
        : { day: 9, week: 26, month: 38 };
    const momentum = clamp(
      change24h / momentumScales.day * 0.42 +
        change7d / momentumScales.week * 0.36 +
        change30d / momentumScales.month * 0.22,
      -1,
      1,
    );
    const trendRegime = clamp(
      change7d / momentumScales.week * 0.58 +
        change30d / momentumScales.month * 0.42 +
        (Math.sign(change7d) === Math.sign(change30d) && Math.abs(change7d) > 1
          ? 0.12 * Math.sign(change7d)
          : 0),
      -1,
      1,
    );
    const volumeSpike = this.computeVolumeSpike(opportunity, metadata);
    const newsHeat = clamp(
      recentNews.length / 4 + Math.max(recentSentiment, 0) * 0.35,
      0,
      1,
    );
    const daysToCatalyst = daysUntil(opportunity.eventDate);
    const eventProximity =
      daysToCatalyst === null
        ? 0
        : daysToCatalyst < 0
          ? 0
          : clamp(1 - daysToCatalyst / 120, 0, 1);
    const probabilityEdge =
      opportunity.type === OpportunityType.PREDICTION_MARKET
        ? clamp(
            ((Number(opportunity.currentPrice ?? 0.5) - 0.5) * 1.6 +
              trendRegime * 0.28 +
              momentum * 0.16) -
              stablePenalty * 0.6,
            -1,
            1,
          )
        : clamp(
            momentum * 0.55 + trendRegime * 0.25 - stablePenalty * 0.95,
            -1,
            1,
          );
    const athGap = Number(metadata.athGap ?? 0.25);
    const spread = Number(metadata.spread ?? 0.02);
    const priceDislocation =
      opportunity.type === OpportunityType.TOKEN
        ? clamp(
            (athGap - 0.22) * 1.25 +
              Math.max(trendRegime, -0.2) * 0.4 -
              stablePenalty * 1.05,
            -1,
            1,
          )
        : clamp(
            (0.06 - spread) * 4.5 +
              Math.abs(Number(opportunity.currentPrice ?? 0.5) - 0.5) * 1.1 +
              trendRegime * 0.2,
            -1,
            1,
          );
    const turnoverRatio =
      opportunity.type === OpportunityType.TOKEN
        ? clamp(
            Number(opportunity.volume24h ?? 0) /
              Math.max(Number(opportunity.marketCap ?? 0) * 0.08, 1),
            0,
            1,
          )
        : clamp(
            Number(opportunity.volume24h ?? 0) /
              Math.max(Number(opportunity.liquidity ?? 0), 1),
            0,
            1,
          );
    const narrativeStrength = clamp(
      newsHeat * 0.28 +
        Math.max(momentum, 0) * 0.18 +
        Math.max(trendRegime, 0) * 0.2 +
        volumeSpike * 0.12 +
        recentSentiment * 0.28 -
        stablePenalty * 1.1,
      -1,
      1,
    );
    const opportunityQuality =
      opportunity.type === OpportunityType.TOKEN
        ? clamp(
            0.32 +
              Math.min(volatility7d * 16, 0.3) +
              Math.max(trendRegime, 0) * 0.18 -
              stablePenalty * 1.55,
            -1,
            1,
          )
        : clamp(
            0.24 +
              eventProximity * 0.2 +
              volumeSpike * 0.22 +
              Math.max(trendRegime, 0) * 0.14 -
              Math.max(spread - 0.03, 0) * 2.2,
            -1,
            1,
          );
    const riskFlag = clamp(
      Math.abs(change24h) / 18 +
        Math.abs(change7d) / 55 +
        Math.min(volatility7d * 12, 0.3) +
        ((opportunity.liquidity ?? 0) < 25_000 ? 0.14 : 0) +
        (daysToCatalyst !== null && daysToCatalyst < 10 ? 0.12 : 0) +
        (spread > 0.05 ? 0.12 : 0),
      0,
      1,
    );
    const catalystSetup =
      opportunity.type === OpportunityType.TOKEN
        ? clamp(
            newsHeat * 0.22 +
              Math.max(catalystSentiment, 0) * 0.12 +
              Math.max(trendRegime, 0) * 0.16 +
              Math.max(priceDislocation, 0) * 0.18 +
              Math.max(opportunityQuality, 0) * 0.16 +
              volumeSpike * 0.1 +
              turnoverRatio * 0.06 +
              Math.max(momentum, -0.1) * 0.08 -
              stablePenalty * 1.25 -
              Math.max(
                Math.abs(change24h) / 24 +
                  Math.max(volatility7d - 0.06, 0) * 2.4,
                0,
              ) *
                0.12,
            -1,
            1,
          )
        : clamp(
            eventProximity * 0.34 +
              newsHeat * 0.12 +
              Math.max(catalystSentiment, 0) * 0.06 +
              volumeSpike * 0.14 +
              Math.max(probabilityEdge, 0) * 0.12 +
              Math.max(priceDislocation, 0) * 0.08 +
              clamp(Math.abs(Number(opportunity.currentPrice ?? 0.5) - 0.5) * 2, 0, 1) *
                0.14 +
              Math.max(momentum, -0.05) * 0.06 +
              Math.max(trendRegime, 0) * 0.08 -
              Math.max(riskFlag - 0.8, 0) * 0.45,
            -1,
            1,
          );

    return [
      this.makeSignal(
        'market_momentum',
        momentum,
        `Blended 1d/7d/30d move: ${round(change24h, 2)} / ${round(change7d, 2)} / ${round(change30d, 2)}.`,
      ),
      this.makeSignal(
        'trend_regime',
        trendRegime,
        'Medium-window trend alignment across the stored price history.',
      ),
      this.makeSignal(
        'volume_spike',
        volumeSpike,
        'Current turnover versus rolling token or market-specific baselines.',
      ),
      this.makeSignal(
        'news_heat',
        newsHeat,
        `${recentNews.length} recent article(s) mapped with ${round(recentSentiment, 2)} average sentiment.`,
      ),
      this.makeSignal(
        'narrative_strength',
        narrativeStrength,
        'Attention, sentiment, trend persistence, and turnover combined.',
      ),
      this.makeSignal(
        'catalyst_setup',
        catalystSetup,
        opportunity.type === OpportunityType.TOKEN
          ? 'Token catalyst setup blends news acceleration, turnover, dislocation, and trend persistence.'
          : 'Prediction-market catalyst setup blends event timing, probability movement, and trading activity.',
      ),
      this.makeSignal(
        'event_proximity',
        eventProximity,
        daysToCatalyst === null
          ? 'No explicit catalyst date attached.'
          : daysToCatalyst < 0
            ? `Catalyst passed ${round(Math.abs(daysToCatalyst), 2)} days ago.`
            : `${round(daysToCatalyst, 2)} days to event horizon inside a 120-day window.`,
      ),
      this.makeSignal(
        'probability_edge',
        probabilityEdge,
        'Directional edge after regime confirmation and structural penalties.',
      ),
      this.makeSignal(
        'price_dislocation',
        priceDislocation,
        'Distance from prior range, ATH gap, or binary-market midpoint friction.',
      ),
      this.makeSignal(
        'opportunity_quality',
        opportunityQuality,
        isStablecoin
          ? 'Stablecoin-like behavior or flat pricing is penalized for directional strategies.'
          : 'Directional quality of the opportunity after filtering structural noise.',
      ),
      this.makeSignal(
        'risk_flag',
        riskFlag,
        'Higher values imply timing, liquidity, volatility, or spread risk.',
      ),
    ];
  }

  private resolveDirectionalChange(
    opportunity: any,
    historyPoints: HistoryPointLike[],
    metadata: Record<string, unknown>,
    lookbackDays: 7 | 30,
  ) {
    const historyValue = this.calculateDirectionalChangeFromHistory(
      historyPoints,
      lookbackDays,
      opportunity.type,
    );
    if (historyValue !== null) {
      return historyValue;
    }

    if (opportunity.type === OpportunityType.TOKEN) {
      const key = lookbackDays === 7 ? 'sevenDayPriceChange' : 'thirtyDayPriceChange';
      return Number(metadata[key] ?? 0);
    }

    const key = lookbackDays === 7 ? 'oneWeekPriceChange' : 'oneMonthPriceChange';
    return Number(metadata[key] ?? 0) * 100;
  }

  private calculateDirectionalChangeFromHistory(
    historyPoints: HistoryPointLike[],
    lookbackDays: number,
    type: OpportunityType,
  ) {
    if (historyPoints.length < 2) {
      return null;
    }

    const latestPoint = historyPoints[historyPoints.length - 1];
    const targetTimestamp =
      latestPoint.pointAt.getTime() - lookbackDays * 24 * 60 * 60 * 1000;
    const anchorPoint = this.findClosestHistoryPoint(historyPoints, targetTimestamp);

    if (!anchorPoint || !Number.isFinite(anchorPoint.price) || anchorPoint.price === 0) {
      return null;
    }

    if (type === OpportunityType.TOKEN) {
      return ((latestPoint.price - anchorPoint.price) / anchorPoint.price) * 100;
    }

    return (latestPoint.price - anchorPoint.price) * 100;
  }

  private calculateVolatility(
    historyPoints: HistoryPointLike[],
    lookbackDays: number,
    type: OpportunityType,
  ) {
    if (historyPoints.length < 3) {
      return 0;
    }

    const latestPoint = historyPoints[historyPoints.length - 1];
    const cutoff =
      latestPoint.pointAt.getTime() - lookbackDays * 24 * 60 * 60 * 1000;
    const trailing = historyPoints.filter(
      (point) => point.pointAt.getTime() >= cutoff,
    );
    const returns = trailing
      .slice(1)
      .map((point, index) => {
        const previous = trailing[index];
        if (!previous?.price || previous.price === 0) {
          return null;
        }

        return type === OpportunityType.TOKEN
          ? (point.price - previous.price) / previous.price
          : point.price - previous.price;
      })
      .filter((value): value is number => Number.isFinite(value));

    return standardDeviation(returns);
  }

  private computeVolumeSpike(
    opportunity: any,
    metadata: Record<string, unknown>,
  ) {
    const currentVolume = Number(opportunity.volume24h ?? 0);
    const rollingAverages =
      opportunity.type === OpportunityType.TOKEN
        ? [
            Number(metadata.averageVolume7d ?? 0),
            Number(metadata.averageVolume30d ?? 0),
            Number(opportunity.marketCap ?? 0) * 0.01,
          ]
        : [
            Number(metadata.volume1wk ?? 0) / 7,
            Number(metadata.volume1mo ?? 0) / 30,
            Number(opportunity.liquidity ?? 0),
          ];
    const validBaselines = rollingAverages.filter(
      (value) => Number.isFinite(value) && value > 0,
    );
    const baseline = validBaselines.length ? average(validBaselines) : 0;
    const ratio = baseline > 0 ? currentVolume / baseline : 0;

    return clamp(Math.log10(1 + Math.max(ratio, 0)) / 0.75, 0, 1);
  }

  private findClosestHistoryPoint(
    historyPoints: HistoryPointLike[],
    targetTimestamp: number,
  ) {
    if (!historyPoints.length) {
      return null;
    }

    let closestPoint = historyPoints[0];
    let closestDistance = Math.abs(
      historyPoints[0].pointAt.getTime() - targetTimestamp,
    );

    for (const point of historyPoints.slice(1)) {
      const distance = Math.abs(point.pointAt.getTime() - targetTimestamp);
      if (distance < closestDistance) {
        closestPoint = point;
        closestDistance = distance;
      }
    }

    return closestPoint;
  }

  private makeSignal(name: string, value: number, rationale: string) {
    const direction =
      name === 'risk_flag'
        ? value > 0.35
          ? Direction.BEARISH
          : Direction.NEUTRAL
        : value > 0.15
          ? Direction.BULLISH
          : value < -0.15
            ? Direction.BEARISH
            : Direction.NEUTRAL;

    return {
      name,
      value: round(value, 4),
      direction,
      confidence: round(clamp(Math.abs(value) + 0.18, 0.22, 1), 4),
      rationale,
      metadata: serializeJson({ generator: 'signal-engine-v3' }),
    };
  }
}
