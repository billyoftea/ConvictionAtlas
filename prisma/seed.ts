import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const managers = [
  {
    slug: 'narrative-manager',
    name: 'Narrative Manager',
    description:
      'Tracks TRON ecosystem themes, breakout attention flow, and cross-market story rotation to sell thesis-first research and signal products.',
    style: 'Narrative',
    riskProfile: 'Aggressive',
    rebalanceCadence: 'Daily',
    memoStyle: 'Theme-led, thesis-first',
    universe: 'Large cap tokens, catalyst-heavy markets, narrative breakouts',
    pricingSummary: '$29/month signal stream · USDT on TRON',
    metadata: JSON.stringify({
      tagline:
        'A narrative desk selling premium memos, TRON ecosystem thesis work, and thematic watchlists.',
      chainFocus: ['TRON', 'Narratives', 'Cross-market Web3'],
      paymentRail: 'x402 Payment Protocol',
      settlementAsset: 'USDT',
      settlementNetwork: 'TRON',
      identityProvider: '8004 On-chain Identity',
      identityStatus: 'reputation-active',
      marketplaceStatus: 'x402-ready',
      serviceModes: [
        'paid memos',
        'signal subscriptions',
        'custom research',
        'compare reports',
      ],
      serviceCatalog: [
        {
          kind: 'memo_unlock',
          label: 'Premium Memo Unlock',
          amountUsd: 2,
          cadence: 'per unlock',
          description: 'Unlock the full thematic memo and current position framing.',
          delivery: 'Instant unlock after payment intent',
          protocol: 'x402',
          network: 'TRON',
          asset: 'USDT',
          featured: true,
        },
        {
          kind: 'signal_subscription',
          label: 'Narrative Pro',
          amountUsd: 29,
          cadence: 'monthly',
          description: 'Unlock thematic memos and daily TRON-aware opportunity watchlist.',
          delivery: 'Recurring manager feed',
          protocol: 'x402',
          network: 'TRON',
          asset: 'USDT',
          featured: true,
        },
        {
          kind: 'custom_research',
          label: 'TRON Narrative Research',
          amountUsd: 79,
          cadence: 'per request',
          description: 'Commission a thematic report on a token, event, or ecosystem trend.',
          delivery: '24h turnaround target',
          protocol: 'x402',
          network: 'TRON',
          asset: 'USDT',
        },
        {
          kind: 'compare_report',
          label: 'Multi-manager Compare Memo',
          amountUsd: 16,
          cadence: 'per report',
          description: 'Compare how multiple desks frame the same opportunity.',
          delivery: 'Generated on demand',
          protocol: 'x402',
          network: 'TRON',
          asset: 'USDT',
        },
      ],
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
      'Focuses on event calendars, probability shifts, and deadline proximity to sell catalyst-driven research across TRON and prediction markets.',
    style: 'Event-driven',
    riskProfile: 'Balanced',
    rebalanceCadence: 'Intraday',
    memoStyle: 'Catalyst and scenario analysis',
    universe: 'Prediction markets, catalysts, high-impact news events',
    pricingSummary: '$39/month catalyst desk · USDT on TRON',
    metadata: JSON.stringify({
      tagline:
        'An event desk packaging catalyst memos, alerts, and deadline-sensitive custom work.',
      chainFocus: ['TRON', 'Catalysts', 'Prediction Markets'],
      paymentRail: 'x402 Payment Protocol',
      settlementAsset: 'USDT',
      settlementNetwork: 'TRON',
      identityProvider: '8004 On-chain Identity',
      identityStatus: 'reputation-active',
      marketplaceStatus: 'x402-ready',
      serviceModes: [
        'paid memos',
        'signal subscriptions',
        'custom research',
        'compare reports',
      ],
      serviceCatalog: [
        {
          kind: 'memo_unlock',
          label: 'Catalyst Memo Unlock',
          amountUsd: 3,
          cadence: 'per unlock',
          description: 'Unlock the full catalyst memo and scenario map.',
          delivery: 'Instant unlock after payment intent',
          protocol: 'x402',
          network: 'TRON',
          asset: 'USDT',
          featured: true,
        },
        {
          kind: 'signal_subscription',
          label: 'Catalyst Desk',
          amountUsd: 39,
          cadence: 'monthly',
          description: 'Access event memos, alert feed, and rebalance commentary.',
          delivery: 'Recurring manager feed',
          protocol: 'x402',
          network: 'TRON',
          asset: 'USDT',
          featured: true,
        },
        {
          kind: 'custom_research',
          label: 'Event Research Request',
          amountUsd: 95,
          cadence: 'per request',
          description: 'Request a manager take on an event, vote, or deadline-driven setup.',
          delivery: '24h turnaround target',
          protocol: 'x402',
          network: 'TRON',
          asset: 'USDT',
        },
        {
          kind: 'compare_report',
          label: 'Catalyst Compare Memo',
          amountUsd: 18,
          cadence: 'per report',
          description: 'Compare event interpretation across multiple desks.',
          delivery: 'Generated on demand',
          protocol: 'x402',
          network: 'TRON',
          asset: 'USDT',
        },
      ],
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
      'Scores liquid opportunities with momentum, turnover, and price dislocation signals to sell a rules-first subscription feed.',
    style: 'Quant',
    riskProfile: 'Systematic',
    rebalanceCadence: 'Twice daily',
    memoStyle: 'Rule-based market recap',
    universe: 'Liquid tokens and price-discovering prediction markets',
    pricingSummary: '$19/month systematic feed · USDT on TRON',
    metadata: JSON.stringify({
      tagline:
        'A systematic desk productizing signal subscriptions, quick unlocks, and lower-cost research requests.',
      chainFocus: ['TRON', 'Liquid Tokens', 'Systematic Signals'],
      paymentRail: 'x402 Payment Protocol',
      settlementAsset: 'USDT',
      settlementNetwork: 'TRON',
      identityProvider: '8004 On-chain Identity',
      identityStatus: 'reputation-active',
      marketplaceStatus: 'x402-ready',
      serviceModes: [
        'paid memos',
        'signal subscriptions',
        'custom research',
        'compare reports',
      ],
      serviceCatalog: [
        {
          kind: 'memo_unlock',
          label: 'Systematic Memo Unlock',
          amountUsd: 2,
          cadence: 'per unlock',
          description: 'Unlock the full rule-based memo and current model state.',
          delivery: 'Instant unlock after payment intent',
          protocol: 'x402',
          network: 'TRON',
          asset: 'USDT',
          featured: true,
        },
        {
          kind: 'signal_subscription',
          label: 'Quant Feed',
          amountUsd: 19,
          cadence: 'monthly',
          description: 'Daily signal digest and latest systematic portfolio.',
          delivery: 'Recurring manager feed',
          protocol: 'x402',
          network: 'TRON',
          asset: 'USDT',
          featured: true,
        },
        {
          kind: 'custom_research',
          label: 'Quant Research Request',
          amountUsd: 49,
          cadence: 'per request',
          description: 'Request a rules-first view on a liquid token or setup.',
          delivery: '24h turnaround target',
          protocol: 'x402',
          network: 'TRON',
          asset: 'USDT',
        },
        {
          kind: 'compare_report',
          label: 'Systematic Compare Memo',
          amountUsd: 12,
          cadence: 'per report',
          description: 'Buy a quantitative compare memo across multiple managers.',
          delivery: 'Generated on demand',
          protocol: 'x402',
          network: 'TRON',
          asset: 'USDT',
        },
      ],
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
      'Blends market structure, catalyst detection, and thematic context to operate a flagship paid manager strategy.',
    style: 'Hybrid',
    riskProfile: 'Adaptive',
    rebalanceCadence: 'Daily',
    memoStyle: 'Balanced portfolio letter',
    universe: 'Tokens, prediction markets, and cross-market catalyst baskets',
    pricingSummary: '$49/month flagship strategy · USDT on TRON',
    metadata: JSON.stringify({
      tagline:
        'A flagship desk packaging full memo access, compare products, and high-touch custom research.',
      chainFocus: ['TRON', 'Cross-market Web3', 'Portfolio Construction'],
      paymentRail: 'x402 Payment Protocol',
      settlementAsset: 'USDT',
      settlementNetwork: 'TRON',
      identityProvider: '8004 On-chain Identity',
      identityStatus: 'reputation-active',
      marketplaceStatus: 'x402-ready',
      serviceModes: [
        'paid memos',
        'signal subscriptions',
        'custom research',
        'compare reports',
      ],
      serviceCatalog: [
        {
          kind: 'memo_unlock',
          label: 'Flagship Memo Unlock',
          amountUsd: 4,
          cadence: 'per unlock',
          description: 'Unlock the full flagship memo, rationale, and allocation framing.',
          delivery: 'Instant unlock after payment intent',
          protocol: 'x402',
          network: 'TRON',
          asset: 'USDT',
          featured: true,
        },
        {
          kind: 'signal_subscription',
          label: 'Flagship Atlas',
          amountUsd: 49,
          cadence: 'monthly',
          description: 'Full memo access, portfolio visibility, and premium unlocks.',
          delivery: 'Recurring manager feed',
          protocol: 'x402',
          network: 'TRON',
          asset: 'USDT',
          featured: true,
        },
        {
          kind: 'custom_research',
          label: 'Flagship Research Request',
          amountUsd: 109,
          cadence: 'per request',
          description: 'Commission high-conviction custom research from the flagship desk.',
          delivery: '24h turnaround target',
          protocol: 'x402',
          network: 'TRON',
          asset: 'USDT',
        },
        {
          kind: 'compare_report',
          label: 'Flagship Compare Memo',
          amountUsd: 24,
          cadence: 'per report',
          description: 'Compare the flagship desk against the rest of the manager layer.',
          delivery: 'Generated on demand',
          protocol: 'x402',
          network: 'TRON',
          asset: 'USDT',
        },
      ],
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

function buildSampleMemo(manager: (typeof managers)[number]) {
  const intro = `${manager.name} is publishing a premium ${manager.memoStyle.toLowerCase()} memo for Conviction Atlas buyers.`;
  const summary = `${manager.name} outlines the current setup, risk map, and execution framing for paid clients on TRON.`;
  const content = [
    `# ${manager.name} Premium Memo`,
    '',
    intro,
    '',
    '## Thesis',
    `${manager.description} The desk is currently emphasizing ${manager.universe.toLowerCase()} with a ${manager.riskProfile.toLowerCase()} risk posture and ${manager.rebalanceCadence.toLowerCase()} rebalance cadence.`,
    '',
    '## Portfolio Framing',
    `This sample paid memo is designed to test x402 unlock flows. It mirrors the manager marketplace positioning in the app and gives paying users a full-length research note instead of a static preview.`,
    '',
    '## What Paying Users Receive',
    '- Current market regime summary',
    '- Risk triggers and invalidation levels',
    '- Position sizing guidance and next review window',
    '- TRON settlement context for x402-paid research delivery',
    '',
    '## Execution Notes',
    'Use this memo as the unlock target for end-to-end payment testing. It is intentionally generated from seed data so local environments always have at least one premium research artifact available.',
  ].join('\n');

  return {
    title: `${manager.name} Premium Memo`,
    summary,
    content,
  };
}

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

    const sampleMemo = buildSampleMemo(manager);
    const existingMemo = await prisma.memo.findFirst({
      where: {
        managerId: record.id,
        title: sampleMemo.title,
      },
    });

    if (existingMemo) {
      await prisma.memo.update({
        where: { id: existingMemo.id },
        data: {
          summary: sampleMemo.summary,
          content: sampleMemo.content,
          isPremium: true,
          accessTier: 'premium',
          generatedBy: 'seed',
        },
      });
    } else {
      await prisma.memo.create({
        data: {
          managerId: record.id,
          title: sampleMemo.title,
          summary: sampleMemo.summary,
          content: sampleMemo.content,
          isPremium: true,
          accessTier: 'premium',
          generatedBy: 'seed',
        },
      });
    }
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
