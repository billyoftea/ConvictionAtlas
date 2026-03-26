import { OpportunityType } from '@prisma/client';

export type ManagerBlueprint = {
  slug: string;
  label: string;
  signalWeights: Record<string, number>;
  bullishThreshold: number;
  bearishThreshold: number;
  opportunityTypeBias?: Partial<Record<OpportunityType, number>>;
  cashFloor: number;
  maxPositions: number;
};

export const MANAGER_BLUEPRINTS: ManagerBlueprint[] = [
  {
    slug: 'narrative-manager',
    label: 'Narrative Manager',
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
    bullishThreshold: 0.12,
    bearishThreshold: -0.12,
    cashFloor: 0.18,
    maxPositions: 5,
  },
  {
    slug: 'event-driven-manager',
    label: 'Event-driven Manager',
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
    bullishThreshold: 0.035,
    bearishThreshold: -0.12,
    opportunityTypeBias: {
      TOKEN: 0.04,
      PREDICTION_MARKET: 0.06,
    },
    cashFloor: 0.15,
    maxPositions: 6,
  },
  {
    slug: 'quant-manager',
    label: 'Quant Manager',
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
    bullishThreshold: 0.11,
    bearishThreshold: -0.12,
    cashFloor: 0.2,
    maxPositions: 6,
  },
  {
    slug: 'hybrid-manager',
    label: 'Hybrid Manager',
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
    bullishThreshold: 0.1,
    bearishThreshold: -0.12,
    cashFloor: 0.15,
    maxPositions: 6,
  },
  {
    // Polymarket Specialist: focuses exclusively on prediction markets.
    // Buys YES positions when probability edge is mispriced vs. news sentiment.
    // Only holds PREDICTION_MARKET opportunities; ignores pure token plays.
    slug: 'polymarket-specialist-manager',
    label: 'Polymarket Specialist',
    signalWeights: {
      probability_edge: 0.30,       // Core: price vs. fair-value gap
      event_proximity: 0.22,        // Catalyst timing is everything
      catalyst_setup: 0.18,         // News-confirmed catalyst
      news_heat: 0.12,              // Volume of relevant coverage
      narrative_strength: 0.10,     // Macro narrative alignment
      volume_spike: 0.08,           // Unusual liquidity = smart money
      market_momentum: 0.06,        // Momentum confirmation
      risk_flag: -0.22,             // Hard penalise stale/low-liquidity markets
    },
    bullishThreshold: 0.08,         // Lower bar: prediction markets mean-revert fast
    bearishThreshold: -0.08,
    opportunityTypeBias: {
      TOKEN: -0.20,                 // Strong bias away from tokens
      PREDICTION_MARKET: 0.20,      // Strong bias toward prediction markets
    },
    cashFloor: 0.25,                // Stay 25% cash minimum — markets can resolve overnight
    maxPositions: 8,                // More positions, smaller size — diversify resolution risk
  },
];

export function getManagerBlueprint(slug: string): ManagerBlueprint {
  return (
    MANAGER_BLUEPRINTS.find((blueprint) => blueprint.slug === slug) ??
    MANAGER_BLUEPRINTS[MANAGER_BLUEPRINTS.length - 1]
  );
}
