/**
 * Hybrid seed script: Real Opportunity data + Simulated signals & NAV curves
 *
 * This script:
 * 1. Fetches REAL market data from CoinGecko and Polymarket APIs
 * 2. Generates SIMULATED signals based on real data characteristics
 * 3. Runs Manager decisions using the simulated signals
 * 4. Generates SIMULATED NAV history (180 days / 6 months) for beautiful frontend charts
 *
 * Usage:
 *   npx ts-node scripts/seed-simulated-signals-and-nav.ts
 *   # or via npm script:
 *   npm run seed:hybrid
 */
import { PrismaClient, Direction, OpportunityType } from '@prisma/client';

const prisma = new PrismaClient();

/* ── Configuration ─────────────────────────────────────── */
const NAV_HISTORY_DAYS = 180;  // 6 months of history
const INITIAL_NAV = 100;

/* ── Helper utilities ──────────────────────────────────── */
function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function round(value: number, decimals: number) {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

/** Seeded pseudo-random for reproducibility (using opportunity + signal as seed) */
function seededRandom(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  // Simple LCG
  return () => {
    hash = (hash * 1664525 + 1013904223) | 0;
    return (hash >>> 0) / 4294967296;
  };
}

function gaussianRandom(rng: () => number, mean = 0, stdDev = 1) {
  const u1 = rng();
  const u2 = rng();
  const z = Math.sqrt(-2 * Math.log(Math.max(u1, 1e-10))) * Math.cos(2 * Math.PI * u2);
  return mean + z * stdDev;
}

/* ── Signal names used by the system ───────────────────── */
const SIGNAL_NAMES = [
  'market_momentum',
  'trend_regime',
  'volume_spike',
  'news_heat',
  'narrative_strength',
  'catalyst_setup',
  'event_proximity',
  'probability_edge',
  'price_dislocation',
  'opportunity_quality',
  'risk_flag',
];

/* ── Manager blueprints (must match manager-blueprints.ts) */
const MANAGER_BLUEPRINTS: Record<string, {
  label: string;
  signalWeights: Record<string, number>;
  bullishThreshold: number;
  bearishThreshold: number;
  opportunityTypeBias: Record<string, number>;
  cashFloor: number;
  maxPositions: number;
}> = {
  'narrative-manager': {
    label: 'Narrative Manager',
    signalWeights: {
      narrative_strength: 0.26, news_heat: 0.18, market_momentum: 0.14,
      trend_regime: 0.16, opportunity_quality: 0.18, volume_spike: 0.08,
      event_proximity: 0.04, price_dislocation: 0.06, risk_flag: -0.16,
    },
    bullishThreshold: 0.14, bearishThreshold: -0.12,
    opportunityTypeBias: { TOKEN: 0.10, PREDICTION_MARKET: -0.18 },
    cashFloor: 0.18, maxPositions: 5,
  },
  'event-driven-manager': {
    label: 'Event-driven Manager',
    signalWeights: {
      catalyst_setup: 0.26, event_proximity: 0.18, probability_edge: 0.12,
      trend_regime: 0.1, news_heat: 0.08, narrative_strength: 0.08,
      opportunity_quality: 0.08, market_momentum: 0.05, volume_spike: 0.07, risk_flag: -0.18,
    },
    bullishThreshold: 0.10, bearishThreshold: -0.12,
    opportunityTypeBias: { TOKEN: 0.04, PREDICTION_MARKET: 0.04 },
    cashFloor: 0.15, maxPositions: 6,
  },
  'quant-manager': {
    label: 'Quant Manager',
    signalWeights: {
      market_momentum: 0.26, trend_regime: 0.22, volume_spike: 0.16,
      price_dislocation: 0.14, opportunity_quality: 0.16, probability_edge: 0.04,
      event_proximity: 0.02, risk_flag: -0.18,
    },
    bullishThreshold: 0.14, bearishThreshold: -0.12,
    opportunityTypeBias: { TOKEN: 0.12, PREDICTION_MARKET: -0.22 },
    cashFloor: 0.2, maxPositions: 6,
  },
  'hybrid-manager': {
    label: 'Hybrid Manager',
    signalWeights: {
      market_momentum: 0.14, trend_regime: 0.12, narrative_strength: 0.14,
      news_heat: 0.12, opportunity_quality: 0.16, event_proximity: 0.08,
      volume_spike: 0.12, price_dislocation: 0.10, probability_edge: 0.06, risk_flag: -0.14,
    },
    bullishThreshold: 0.12, bearishThreshold: -0.12,
    opportunityTypeBias: { TOKEN: 0.06, PREDICTION_MARKET: -0.12 },
    cashFloor: 0.15, maxPositions: 6,
  },
  'onchain-fundamentals-manager': {
    label: 'On-chain Fundamentals',
    signalWeights: {
      opportunity_quality: 0.28, volume_spike: 0.22, trend_regime: 0.16,
      price_dislocation: 0.18, probability_edge: 0.04, event_proximity: 0.06,
      narrative_strength: 0.04, risk_flag: -0.24,
    },
    bullishThreshold: 0.16, bearishThreshold: -0.10,
    opportunityTypeBias: { TOKEN: 0.12, PREDICTION_MARKET: -0.25 },
    cashFloor: 0.30, maxPositions: 5,
  },
  'polymarket-specialist-manager': {
    label: 'Polymarket Specialist',
    signalWeights: {
      probability_edge: 0.30, event_proximity: 0.22, catalyst_setup: 0.18,
      news_heat: 0.12, narrative_strength: 0.10, volume_spike: 0.08,
      market_momentum: 0.06, risk_flag: -0.22,
    },
    bullishThreshold: 0.08, bearishThreshold: -0.08,
    opportunityTypeBias: { TOKEN: -0.20, PREDICTION_MARKET: 0.20 },
    cashFloor: 0.25, maxPositions: 8,
  },
};

/* ── Step 1: Generate simulated signals for each opportunity ── */
function generateSimulatedSignals(opportunity: {
  id: string;
  type: OpportunityType;
  slug: string;
  currentPrice: number | null;
  priceChange24h: number | null;
  volume24h: number | null;
  marketCap: number | null;
  liquidity: number | null;
  eventDate: Date | null;
}) {
  const rng = seededRandom(`${opportunity.slug}-signals-v3`);
  const change24h = opportunity.priceChange24h ?? 0;
  const isToken = opportunity.type === OpportunityType.TOKEN;
  const isPM = !isToken;

  // Base signals derived from real data characteristics
  const momentumBase = clamp(change24h / 10, -0.8, 0.8);
  const trendBase = momentumBase * 0.7 + gaussianRandom(rng, 0, 0.1);
  const volumeBase = opportunity.volume24h
    ? clamp(Math.log10(opportunity.volume24h / 1e8) / 3, 0, 1)
    : gaussianRandom(rng, 0.3, 0.15);

  // Event proximity for prediction markets
  let eventProximity = 0;
  if (opportunity.eventDate) {
    const daysToEvent = (opportunity.eventDate.getTime() - Date.now()) / (24 * 60 * 60 * 1000);
    eventProximity = daysToEvent > 0 ? clamp(1 - daysToEvent / 120, 0, 1) : 0;
  }

  // Probability edge for prediction markets
  const currentPrice = opportunity.currentPrice ?? (isPM ? 0.5 : 0);
  const probEdge = isPM
    ? clamp((currentPrice - 0.5) * 1.6 + gaussianRandom(rng, 0, 0.08), -1, 1)
    : clamp(momentumBase * 0.55 + trendBase * 0.25, -1, 1);

  const signals: Record<string, number> = {
    market_momentum: clamp(momentumBase + gaussianRandom(rng, 0, 0.08), -1, 1),
    trend_regime: clamp(trendBase, -1, 1),
    volume_spike: clamp(volumeBase + gaussianRandom(rng, 0, 0.1), 0, 1),
    news_heat: clamp(gaussianRandom(rng, 0.3, 0.2), 0, 1),
    narrative_strength: clamp(
      gaussianRandom(rng, 0.2, 0.2) + Math.max(momentumBase, 0) * 0.3,
      -1, 1,
    ),
    catalyst_setup: isPM
      ? clamp(eventProximity * 0.4 + gaussianRandom(rng, 0.15, 0.12), -1, 1)
      : clamp(gaussianRandom(rng, 0.15, 0.18), -1, 1),
    event_proximity: eventProximity,
    probability_edge: probEdge,
    price_dislocation: isToken
      ? clamp(gaussianRandom(rng, 0.1, 0.2), -1, 1)
      : clamp(gaussianRandom(rng, 0.05, 0.15), -1, 1),
    opportunity_quality: isToken
      ? clamp(0.32 + gaussianRandom(rng, 0, 0.15), -1, 1)
      : clamp(0.24 + eventProximity * 0.2 + gaussianRandom(rng, 0, 0.12), -1, 1),
    risk_flag: clamp(
      Math.abs(change24h) / 18 + gaussianRandom(rng, 0.15, 0.1),
      0, 1,
    ),
  };

  return SIGNAL_NAMES.map((name) => {
    const value = round(signals[name] ?? 0, 4);
    const direction =
      name === 'risk_flag'
        ? value > 0.35 ? Direction.BEARISH : Direction.NEUTRAL
        : value > 0.15 ? Direction.BULLISH : value < -0.15 ? Direction.BEARISH : Direction.NEUTRAL;

    return {
      opportunityId: opportunity.id,
      name,
      value,
      direction,
      confidence: round(clamp(Math.abs(value) + 0.18, 0.22, 1), 4),
      rationale: `Simulated ${name} signal based on real market characteristics.`,
      metadata: JSON.stringify({ generator: 'simulated-signal-v1' }),
    };
  });
}

/* ── Step 2: Run manager decisions ─────────────────────── */
function computeManagerDecisions(
  manager: { id: string; slug: string },
  opportunities: Array<{
    id: string;
    type: OpportunityType;
    signals: Array<{ name: string; value: number }>;
  }>,
) {
  const blueprint = MANAGER_BLUEPRINTS[manager.slug];
  if (!blueprint) return [];

  const computedAt = new Date();
  return opportunities.map((opportunity) => {
    const signalMap = Object.fromEntries(
      opportunity.signals.map((s) => [s.name, s.value]),
    );
    const opportunityBias = blueprint.opportunityTypeBias[opportunity.type] ?? 0;
    const drivers = Object.entries(blueprint.signalWeights).map(([signalName, weight]) => {
      const value = signalMap[signalName] ?? 0;
      return { signalName, value, weight, contribution: round(value * weight, 4) };
    });
    const rawScore = clamp(
      drivers.reduce((sum, d) => sum + d.contribution, 0) + opportunityBias,
      -1, 1,
    );
    const direction =
      rawScore > blueprint.bullishThreshold
        ? Direction.BULLISH
        : rawScore < blueprint.bearishThreshold
          ? Direction.BEARISH
          : Direction.NEUTRAL;
    const targetWeight = direction === Direction.BULLISH ? clamp(rawScore, 0.03, 0.35) : 0;
    const topDrivers = [...drivers]
      .sort((a, b) => Math.abs(b.contribution) - Math.abs(a.contribution))
      .slice(0, 3)
      .map((d) => `${d.signalName}=${round(d.value, 3)} @ ${round(d.weight, 2)}`);

    return {
      managerId: manager.id,
      opportunityId: opportunity.id,
      direction,
      convictionScore: round(rawScore, 4),
      targetWeight: round(targetWeight, 4),
      rationale: `${blueprint.label} is leaning ${direction.toLowerCase()} because ${topDrivers.join(', ')}.`,
      computedAt,
      metadata: JSON.stringify({
        blueprint: blueprint.label,
        opportunityBias,
        thresholds: { bullish: blueprint.bullishThreshold, bearish: blueprint.bearishThreshold },
        drivers,
        simulated: true,
      }),
    };
  });
}

/* ── Step 3: Build portfolio snapshots ─────────────────── */
function buildPortfolio(
  manager: { id: string; slug: string },
  decisions: Array<{
    opportunityId: string;
    direction: Direction;
    convictionScore: number;
    targetWeight: number;
  }>,
) {
  const blueprint = MANAGER_BLUEPRINTS[manager.slug];
  if (!blueprint) return { positions: [], cashWeight: 1, investableCapital: 0 };

  const bullishDecisions = decisions
    .filter((d) => d.direction === Direction.BULLISH)
    .sort((a, b) => b.convictionScore - a.convictionScore)
    .slice(0, blueprint.maxPositions);

  const investableCapital = bullishDecisions.length ? 1 - blueprint.cashFloor : 0;
  const scoreTotal = bullishDecisions.reduce((sum, d) => sum + d.targetWeight, 0) || 1;

  const positions = bullishDecisions.map((d) => ({
    opportunityId: d.opportunityId,
    weight: round((d.targetWeight / scoreTotal) * investableCapital, 4),
    convictionScore: d.convictionScore,
  }));

  return {
    positions,
    cashWeight: round(1 - investableCapital, 4),
    investableCapital: round(investableCapital, 4),
  };
}

/* ── Step 4: Generate simulated NAV history (180 days) ─── */
/**
 * Generates realistic 6-month NAV curves with:
 * - Market regime phases (bull / consolidation / correction / recovery)
 * - Volatility clustering (high-vol and low-vol periods)
 * - Mean-reverting drawdowns
 * - Each manager has a unique "personality" curve
 */
function generateNavHistory(
  managerSlug: string,
  days: number,
): Array<{ dayOffset: number; nav: number; dailyReturn: number }> {
  const rng = seededRandom(`${managerSlug}-nav-v7-allpos`);

  // ── Manager personality profiles (tuned for 180-day horizon, all positive) ──
  // All managers end positive, but with different return levels & risk profiles
  const profiles: Record<string, {
    meanDailyReturn: number;
    baseVol: number;
    cycleSensitivity: number;
    drawdownResistance: number;
    recoverySpeed: number;
  }> = {
    // Highest return: Polymarket Specialist - niche alpha, target ~45-65%
    'polymarket-specialist-manager': {
      meanDailyReturn: 0.0028, baseVol: 0.018,
      cycleSensitivity: 0.20, drawdownResistance: 0.80, recoverySpeed: 1.15,
    },
    // Second: Quant Manager - systematic edge, target ~35-50%
    'quant-manager': {
      meanDailyReturn: 0.0023, baseVol: 0.015,
      cycleSensitivity: 0.22, drawdownResistance: 0.82, recoverySpeed: 1.05,
    },
    // Third: Event-driven - catalyst profits, target ~25-40%
    'event-driven-manager': {
      meanDailyReturn: 0.0018, baseVol: 0.017,
      cycleSensitivity: 0.28, drawdownResistance: 0.72, recoverySpeed: 1.08,
    },
    // Fourth: Hybrid - balanced approach, target ~15-25%
    'hybrid-manager': {
      meanDailyReturn: 0.0015, baseVol: 0.016,
      cycleSensitivity: 0.30, drawdownResistance: 0.65, recoverySpeed: 1.0,
    },
    // Fifth: Narrative - trend-following, target ~8-18%
    'narrative-manager': {
      meanDailyReturn: 0.0012, baseVol: 0.017,
      cycleSensitivity: 0.32, drawdownResistance: 0.58, recoverySpeed: 0.95,
    },
    // Lowest but still positive: On-chain Fundamentals - conservative, target ~3-12%
    'onchain-fundamentals-manager': {
      meanDailyReturn: 0.0010, baseVol: 0.011,
      cycleSensitivity: 0.18, drawdownResistance: 0.88, recoverySpeed: 0.90,
    },
  };

  const p = profiles[managerSlug] ?? {
    meanDailyReturn: 0.0015, baseVol: 0.020,
    cycleSensitivity: 0.8, drawdownResistance: 0.5, recoverySpeed: 1.0,
  };

  // ── Market regime schedule (shared macro backdrop) ──
  // Defines phases across the 180-day window:
  //   Phase 0-30:   Early bull (moderate up)
  //   Phase 30-65:  Acceleration (strong up, rising vol)
  //   Phase 65-90:  Consolidation / distribution (sideways, choppy)
  //   Phase 90-120: Correction (drawdown period)
  //   Phase 120-150: Recovery (bounce, decreasing vol)
  //   Phase 150-180: Late bull / new highs
  function getMarketRegime(dayIndex: number): { driftMult: number; volMult: number } {
    const t = dayIndex / days; // 0..1 normalized time
    if (t < 0.17) {
      // Early bull - steady uptrend
      return { driftMult: 1.2, volMult: 0.8 };
    } else if (t < 0.36) {
      // Acceleration - strong momentum
      return { driftMult: 1.8, volMult: 1.0 };
    } else if (t < 0.50) {
      // Consolidation / distribution - sideways
      return { driftMult: 0.3, volMult: 1.2 };
    } else if (t < 0.67) {
      // Correction - mild pullback (not crash)
      return { driftMult: -0.5, volMult: 1.4 };
    } else if (t < 0.83) {
      // Recovery - bouncing back
      return { driftMult: 1.0, volMult: 0.9 };
    } else {
      // Late bull / new highs
      return { driftMult: 1.5, volMult: 0.85 };
    }
  }

  const history: Array<{ dayOffset: number; nav: number; dailyReturn: number }> = [];
  let nav = INITIAL_NAV;
  let prevReturn = 0; // for autocorrelation / momentum

  for (let dayIndex = 0; dayIndex <= days; dayIndex++) {
    const dayOffset = dayIndex - days; // e.g. -180, -179, ..., 0
    const regime = getMarketRegime(dayIndex);

    // Manager-specific drift: base + cycle influence
    const managerDrift = p.meanDailyReturn
      + regime.driftMult * p.meanDailyReturn * p.cycleSensitivity;

    // Manager-specific volatility: base * regime vol * some manager quirk
    const managerVol = p.baseVol * regime.volMult;

    // Volatility clustering: if previous return was big, today's vol is slightly higher
    const volCluster = 1 + 0.3 * Math.min(Math.abs(prevReturn) / p.baseVol, 2);

    // Drawdown resistance: in correction regime, good managers lose less
    let adjustedDrift = managerDrift;
    if (regime.driftMult < 0) {
      adjustedDrift = managerDrift * (1 - p.drawdownResistance * 0.6);
    }
    // Recovery speed: in recovery regime, some managers bounce faster
    if (regime.driftMult > 0 && dayIndex > days * 0.67) {
      adjustedDrift = managerDrift * p.recoverySpeed;
    }

    // Autocorrelation: slight momentum (crypto markets tend to trend)
    const momentumComponent = prevReturn * 0.15;

    const dailyReturn = round(
      clamp(
        gaussianRandom(rng, adjustedDrift + momentumComponent, managerVol * volCluster),
        -0.08,  // max daily loss: -8%
        0.08,   // max daily gain: +8%
      ),
      6,
    );

    nav = round(nav * (1 + dailyReturn), 4);
    // Floor at 50 to avoid unrealistic collapse
    if (nav < 50) nav = 50 + rng() * 2;

    history.push({ dayOffset, nav, dailyReturn: round(dailyReturn, 6) });
    prevReturn = dailyReturn;
  }

  return history;
}

/* ── Main execution ────────────────────────────────────── */
async function main() {
  console.log('🔄 Hybrid Seed: Real Opportunities + Simulated Signals & NAV');
  console.log('═'.repeat(60));

  // Step 0: Ensure managers exist (run seed first if needed)
  const managers = await prisma.manager.findMany();
  if (managers.length === 0) {
    console.error('❌ No managers found. Run `npm run db:seed` first.');
    process.exit(1);
  }
  console.log(`✅ Found ${managers.length} managers`);

  // Step 1: Try to fetch real opportunities via pipeline API, or use existing DB data
  let opportunities = await prisma.opportunity.findMany({
    where: { status: 'active' },
  });

  if (opportunities.length === 0) {
    console.log('⚠️  No active opportunities in DB. Attempting real API ingestion...');
    // Try to call the internal API endpoints directly
    const baseUrl = process.env.APP_URL ?? 'http://localhost:3001';
    try {
      console.log('  📡 Fetching from CoinGecko...');
      await fetch(`${baseUrl}/api/internal/ingest/coingecko`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: '{}',
      });
      console.log('  📡 Fetching from Polymarket...');
      await fetch(`${baseUrl}/api/internal/ingest/polymarket`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: '{}',
      });
      console.log('  📡 Normalizing...');
      await fetch(`${baseUrl}/api/internal/normalize/opportunities`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: '{}',
      });
      opportunities = await prisma.opportunity.findMany({
        where: { status: 'active' },
      });
    } catch (err) {
      console.log('  ⚠️  API server not running. Using seed-demo-data as fallback...');
    }
  }

  if (opportunities.length === 0) {
    console.error('❌ No opportunities available. Start the API server and run pipeline step 1-3 first,');
    console.error('   or run: npx ts-node scripts/seed-demo-data.ts');
    process.exit(1);
  }

  console.log(`✅ Found ${opportunities.length} active opportunities`);
  const tokenCount = opportunities.filter((o) => o.type === 'TOKEN').length;
  const pmCount = opportunities.filter((o) => o.type === 'PREDICTION_MARKET').length;
  console.log(`   📊 ${tokenCount} tokens, ${pmCount} prediction markets`);

  // Step 2: Clear old simulated data
  console.log('\n🧹 Clearing old signals, decisions, portfolios, performance...');
  await prisma.signal.deleteMany({});
  await prisma.managerDecision.deleteMany({});
  // Clear positions before portfolio snapshots due to FK
  await prisma.position.deleteMany({});
  await prisma.performanceSnapshot.deleteMany({});
  await prisma.portfolioSnapshot.deleteMany({});

  // Step 3: Generate simulated signals
  console.log('\n📡 Generating simulated signals...');
  let totalSignals = 0;
  const opportunitySignalMap = new Map<string, Array<{ name: string; value: number }>>();

  for (const opportunity of opportunities) {
    const signals = generateSimulatedSignals(opportunity);
    await prisma.signal.createMany({ data: signals });
    opportunitySignalMap.set(
      opportunity.id,
      signals.map((s) => ({ name: s.name, value: s.value })),
    );
    totalSignals += signals.length;
  }
  console.log(`✅ Created ${totalSignals} signals for ${opportunities.length} opportunities`);

  // Step 4: Run manager decisions
  console.log('\n🤖 Running manager decisions...');
  let totalDecisions = 0;
  const managerDecisionMap = new Map<string, Array<{
    opportunityId: string;
    direction: Direction;
    convictionScore: number;
    targetWeight: number;
  }>>();

  for (const manager of managers) {
    const oppsWithSignals = opportunities
      .filter((o) => o.status === 'active')
      .map((o) => ({
        id: o.id,
        type: o.type,
        signals: opportunitySignalMap.get(o.id) ?? [],
      }));

    const decisions = computeManagerDecisions(manager, oppsWithSignals);
    if (decisions.length) {
      await prisma.managerDecision.createMany({ data: decisions });
    }
    managerDecisionMap.set(manager.id, decisions);
    const bullish = decisions.filter((d) => d.direction === Direction.BULLISH).length;
    console.log(`  🎯 ${manager.name}: ${decisions.length} decisions (${bullish} bullish)`);
    totalDecisions += decisions.length;
  }
  console.log(`✅ Created ${totalDecisions} total decisions`);

  // Step 5: Build portfolios and generate NAV history
  console.log('\n📈 Building portfolios and generating NAV history...');
  console.log(`   ⏱️  Generating ${NAV_HISTORY_DAYS} days (≈6 months) per manager...`);

  for (const manager of managers) {
    const decisions = managerDecisionMap.get(manager.id) ?? [];
    const portfolio = buildPortfolio(manager, decisions);
    const navHistory = generateNavHistory(manager.slug, NAV_HISTORY_DAYS);

    // Batch create portfolio + performance snapshots for speed
    // We need portfolioSnapshot IDs for positions and performance, so we batch by chunks
    const BATCH_SIZE = 50;

    for (let batchStart = 0; batchStart < navHistory.length; batchStart += BATCH_SIZE) {
      const batchEnd = Math.min(batchStart + BATCH_SIZE, navHistory.length);
      const batch = navHistory.slice(batchStart, batchEnd);

      for (let j = 0; j < batch.length; j++) {
        const i = batchStart + j;
        const entry = batch[j];
        const snapshotDate = new Date(Date.now() + entry.dayOffset * 24 * 60 * 60 * 1000);

        const snapshot = await prisma.portfolioSnapshot.create({
          data: {
            managerId: manager.id,
            cashWeight: portfolio.cashWeight,
            grossExposure: portfolio.investableCapital,
            netExposure: portfolio.investableCapital,
            riskScore: round(0.2 + Math.random() * 0.3, 4),
            nav: entry.nav,
            computedAt: snapshotDate,
            metadata: JSON.stringify({
              model: 'simulated-portfolio-v2',
              dayOffset: entry.dayOffset,
            }),
          },
        });

        // Create positions only for the latest snapshot (today)
        if (i === navHistory.length - 1 && portfolio.positions.length > 0) {
          await prisma.position.createMany({
            data: portfolio.positions.map((pos) => ({
              portfolioSnapshotId: snapshot.id,
              opportunityId: pos.opportunityId,
              weight: pos.weight,
              convictionScore: pos.convictionScore,
              entryPrice: opportunities.find((o) => o.id === pos.opportunityId)?.currentPrice ?? null,
            })),
          });
        }

        // Create performance snapshot
        const allNavs = navHistory.slice(0, i + 1).map((h) => h.nav);
        const maxNav = Math.max(INITIAL_NAV, ...allNavs);
        const returns = navHistory.slice(0, i + 1).map((h) => h.dailyReturn);
        const avgReturn = returns.reduce((s, r) => s + r, 0) / returns.length;
        const stdDev = Math.sqrt(
          returns.reduce((s, r) => s + Math.pow(r - avgReturn, 2), 0) / returns.length,
        );
        const hitRate = returns.filter((r) => r > 0).length / Math.max(returns.length, 1);
        // Annualized sharpe (√252 scaling)
        const sharpe = stdDev === 0 ? 0 : round((avgReturn / stdDev) * Math.sqrt(252), 4);

        await prisma.performanceSnapshot.create({
          data: {
            managerId: manager.id,
            portfolioSnapshotId: snapshot.id,
            nav: entry.nav,
            dailyReturn: entry.dailyReturn,
            cumulativeReturn: round(entry.nav / INITIAL_NAV - 1, 4),
            drawdown: round(entry.nav / maxNav - 1, 4),
            sharpe,
            hitRate: round(hitRate, 4),
            computedAt: snapshotDate,
            metadata: JSON.stringify({ model: 'simulated-performance-v2' }),
          },
        });
      }
    }

    const latestNav = navHistory[navHistory.length - 1];
    const totalReturn = ((latestNav.nav / INITIAL_NAV) - 1) * 100;
    const maxDD = Math.min(...navHistory.map((h, idx) => {
      const peak = Math.max(INITIAL_NAV, ...navHistory.slice(0, idx + 1).map(hh => hh.nav));
      return (h.nav / peak - 1) * 100;
    }));
    console.log(
      `  📊 ${manager.name}: NAV ${round(latestNav.nav, 2)} (${totalReturn >= 0 ? '+' : ''}${round(totalReturn, 1)}%), MaxDD ${round(maxDD, 1)}%, ${navHistory.length} data points`,
    );
  }

  // Summary
  console.log('\n' + '═'.repeat(60));
  console.log('✅ Hybrid seed complete!');
  console.log(`   🏛️  ${managers.length} managers with simulated decisions`);
  console.log(`   📊 ${opportunities.length} real opportunities with simulated signals`);
  console.log(`   📈 ${NAV_HISTORY_DAYS} days (≈6 months) of simulated NAV history per manager`);
  console.log(`   📅 Total data points: ${managers.length * (NAV_HISTORY_DAYS + 1)} portfolio + performance snapshots`);
  console.log(`   🔗 Opportunity data: REAL (CoinGecko + Polymarket)`);
  console.log(`   🧮 Signals & NAV: SIMULATED (with market cycles & drawdowns)`);
}

main()
  .catch((error) => {
    console.error('❌ Error:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
