import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const managers = [
  {
    slug: 'narrative-manager',
    name: 'Narrative Manager',
    description:
      'Tracks breakout themes, attention flow, and cross-market story rotation to express high-conviction thematic bets.',
    style: 'Narrative',
    riskProfile: 'Aggressive',
    rebalanceCadence: 'Daily',
    memoStyle: 'Theme-led, thesis-first',
    universe: 'Large cap tokens, catalyst-heavy markets, narrative breakouts',
    pricingSummary: '$29/month research stream',
    metadata: JSON.stringify({
      signalWeights: {
        narrative_strength: 0.24,
        news_heat: 0.16,
        market_momentum: 0.12,
        trend_regime: 0.16,
        opportunity_quality: 0.2,
        volume_spike: 0.08,
        event_proximity: 0.08,
        price_dislocation: 0.06,
        risk_flag: -0.16,
      },
      thresholds: {
        bullish: 0.12,
        bearish: -0.12,
      },
    }),
    pricingPlans: [
      {
        name: 'Narrative Pro',
        cadence: 'monthly',
        amountUsd: 29,
        description: 'Unlock thematic memos and daily opportunity watchlist.',
      },
    ],
  },
  {
    slug: 'event-driven-manager',
    name: 'Event-driven Manager',
    description:
      'Focuses on event calendars, probability shifts, and deadline proximity across prediction markets and tokens.',
    style: 'Event-driven',
    riskProfile: 'Balanced',
    rebalanceCadence: 'Intraday',
    memoStyle: 'Catalyst and scenario analysis',
    universe: 'Prediction markets, catalysts, high-impact news events',
    pricingSummary: '$39/month catalyst desk',
    metadata: JSON.stringify({
      signalWeights: {
        catalyst_setup: 0.26,
        event_proximity: 0.18,
        probability_edge: 0.12,
        trend_regime: 0.1,
        news_heat: 0.08,
        narrative_strength: 0.08,
        opportunity_quality: 0.08,
        market_momentum: 0.05,
        volume_spike: 0.07,
        risk_flag: -0.18,
      },
      thresholds: {
        bullish: 0.035,
        bearish: -0.12,
      },
      opportunityTypeBias: {
        TOKEN: 0.04,
        PREDICTION_MARKET: 0.06,
      },
    }),
    pricingPlans: [
      {
        name: 'Catalyst Desk',
        cadence: 'monthly',
        amountUsd: 39,
        description: 'Access event memos, alert feed, and rebalance commentary.',
      },
    ],
  },
  {
    slug: 'quant-manager',
    name: 'Quant Manager',
    description:
      'Scores liquid opportunities with momentum, turnover, and price dislocation signals to keep a rules-first portfolio.',
    style: 'Quant',
    riskProfile: 'Systematic',
    rebalanceCadence: 'Twice daily',
    memoStyle: 'Rule-based market recap',
    universe: 'Liquid tokens and price-discovering prediction markets',
    pricingSummary: '$19/month systematic feed',
    metadata: JSON.stringify({
      signalWeights: {
        market_momentum: 0.24,
        trend_regime: 0.2,
        volume_spike: 0.16,
        price_dislocation: 0.14,
        opportunity_quality: 0.16,
        probability_edge: 0.08,
        event_proximity: 0.04,
        risk_flag: -0.16,
      },
      thresholds: {
        bullish: 0.11,
        bearish: -0.12,
      },
    }),
    pricingPlans: [
      {
        name: 'Quant Feed',
        cadence: 'monthly',
        amountUsd: 19,
        description: 'Daily signal digest and latest systematic portfolio.',
      },
    ],
  },
  {
    slug: 'hybrid-manager',
    name: 'Hybrid Manager',
    description:
      'Blends market structure, catalyst detection, and thematic context to run a diversified conviction book.',
    style: 'Hybrid',
    riskProfile: 'Adaptive',
    rebalanceCadence: 'Daily',
    memoStyle: 'Balanced portfolio letter',
    universe: 'Tokens, prediction markets, and cross-market catalyst baskets',
    pricingSummary: '$49/month flagship strategy',
    metadata: JSON.stringify({
      signalWeights: {
        market_momentum: 0.14,
        trend_regime: 0.12,
        narrative_strength: 0.14,
        news_heat: 0.12,
        opportunity_quality: 0.14,
        event_proximity: 0.1,
        volume_spike: 0.12,
        price_dislocation: 0.1,
        probability_edge: 0.08,
        risk_flag: -0.12,
      },
      thresholds: {
        bullish: 0.1,
        bearish: -0.12,
      },
    }),
    pricingPlans: [
      {
        name: 'Flagship Atlas',
        cadence: 'monthly',
        amountUsd: 49,
        description: 'Full memo access, portfolio visibility, and premium unlocks.',
      },
    ],
  },
];

async function main() {
  for (const manager of managers) {
    const record = await prisma.manager.upsert({
      where: { slug: manager.slug },
      update: {
        name: manager.name,
        description: manager.description,
        style: manager.style,
        riskProfile: manager.riskProfile,
        rebalanceCadence: manager.rebalanceCadence,
        memoStyle: manager.memoStyle,
        universe: manager.universe,
        pricingSummary: manager.pricingSummary,
        metadata: manager.metadata,
      },
      create: {
        slug: manager.slug,
        name: manager.name,
        description: manager.description,
        style: manager.style,
        riskProfile: manager.riskProfile,
        rebalanceCadence: manager.rebalanceCadence,
        memoStyle: manager.memoStyle,
        universe: manager.universe,
        pricingSummary: manager.pricingSummary,
        metadata: manager.metadata,
      },
    });

    await prisma.pricingPlan.deleteMany({ where: { managerId: record.id } });
    await prisma.pricingPlan.createMany({
      data: manager.pricingPlans.map((plan) => ({
        managerId: record.id,
        name: plan.name,
        cadence: plan.cadence,
        amountUsd: plan.amountUsd,
        description: plan.description,
      })),
    });
  }
}

main()
  .catch(async (error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
