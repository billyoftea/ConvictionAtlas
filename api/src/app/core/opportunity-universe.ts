import { OpportunityType, SourceKind } from '@prisma/client';
import { parseJson } from './helpers';

const CRYPTO_RELEVANCE_PATTERNS = [
  /\bbitcoin\b/i,
  /\bbtc\b/i,
  /\bethereum\b/i,
  /\beth\b/i,
  /\bsolana\b/i,
  /\btron\b/i,
  /\btrx\b/i,
  /\bxrp\b/i,
  /\bbnb\b/i,
  /\bdogecoin\b/i,
  /\bdoge\b/i,
  /\bcrypto\b/i,
  /\bdefi\b/i,
  /\bweb3\b/i,
  /\bblockchain\b/i,
  /\bstablecoin\b/i,
  /\betf\b/i,
  /\btvl\b/i,
  /\bprotocol\b/i,
  /\btoken\b/i,
  /\baltcoin\b/i,
  /\bmemecoin\b/i,
  /\bairdrop\b/i,
  /\bstaking\b/i,
  /\bdex\b/i,
  /\byield\b/i,
  /\blayer[\s-]?2\b/i,
  /\brollup\b/i,
  /\bon[\s-]?chain\b/i,
  /\bmarket cap\b/i,
  /\bprice target\b/i,
];

/**
 * Negative patterns — if ANY of these match the searchable text,
 * the market is NOT crypto-relevant regardless of positive matches.
 * This prevents sports betting, politics, and entertainment markets
 * from leaking through just because their metadata tags include "crypto".
 */
const NON_CRYPTO_EXCLUSION_PATTERNS = [
  // Sports
  /\bnba\b/i,
  /\bncaa\b/i,
  /\bnfl\b/i,
  /\bmlb\b/i,
  /\bnhl\b/i,
  /\bmls\b/i,
  /\bpremier\s+league\b/i,
  /\bchampions\s+league\b/i,
  /\bla\s*liga\b/i,
  /\bserie\s+a\b/i,
  /\bbundesliga\b/i,
  /\bworld\s+cup\b/i,
  /\bolympic/i,
  /\bsuper\s*bowl\b/i,
  /\bplayoff/i,
  /\btournament\b/i,
  /\bchampionship\b/i,
  /\bseed(?:ed|ing)?\b/i,
  /\bbasketball\b/i,
  /\bfootball\b/i,
  /\bsoccer\b/i,
  /\bbaseball\b/i,
  /\bhockey\b/i,
  /\btennis\b/i,
  /\bgolf\b/i,
  /\bboxing\b/i,
  /\bufc\b/i,
  /\bmma\b/i,
  /\bf1\b/i,
  /\bformula[\s-]?1\b/i,
  /\bnascar\b/i,
  /\besports?\b/i,
  // Entertainment / pop culture
  /\boscars?\b/i,
  /\bemmy/i,
  /\bgrammy/i,
  /\bgolden\s+globes?\b/i,
  /\bbox\s+office\b/i,
  /\bmovie\b/i,
  /\balbum\b/i,
  /\bcelebrit/i,
  /\breality\s+tv\b/i,
  // Weather / natural events
  /\bhurricane\b/i,
  /\bearthquake\b/i,
  /\bweather\b/i,
  /\btemperature\b/i,
];

type PolymarketSeriesLike = {
  title?: string;
  slug?: string;
};

type PolymarketEventLike = {
  title?: string;
  slug?: string;
  series?: PolymarketSeriesLike[];
};

type PolymarketMarketLike = {
  question?: string;
  slug?: string;
  description?: string;
  events?: PolymarketEventLike[];
};

type PredictionOpportunityLike = {
  type?: OpportunityType | string | null;
  sourceKind?: SourceKind | string | null;
  title?: string | null;
  summary?: string | null;
  description?: string | null;
  category?: string | null;
  metadata?: string | Record<string, unknown> | null;
};

type CurrentOpportunityLike = PredictionOpportunityLike & {
  status?: string | null;
  eventDate?: Date | null;
  currentPrice?: number | null;
};

function matchesCryptoUniverse(text: string) {
  // First check exclusion patterns — if the text mentions sports / entertainment
  // / weather, it is NOT crypto-relevant even if it also contains "crypto".
  if (NON_CRYPTO_EXCLUSION_PATTERNS.some((pattern) => pattern.test(text))) {
    return false;
  }
  return CRYPTO_RELEVANCE_PATTERNS.some((pattern) => pattern.test(text));
}

function buildSearchText(parts: Array<string | null | undefined>) {
  return parts
    .map((part) => part?.trim())
    .filter((part): part is string => Boolean(part))
    .join(' ');
}

function extractMetadataArray(
  metadata: Record<string, unknown>,
  key: string,
) {
  const value = metadata[key];
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === 'string')
    : [];
}

export function isCryptoRelevantPolymarketMarket(market: PolymarketMarketLike) {
  const seriesParts =
    market.events?.flatMap((event) =>
      (event.series ?? []).flatMap((series) => [series.title, series.slug]),
    ) ?? [];

  const searchable = buildSearchText([
    market.question,
    market.slug,
    market.description,
    ...(market.events?.flatMap((event) => [event.title, event.slug]) ?? []),
    ...seriesParts,
  ]);

  return matchesCryptoUniverse(searchable);
}

export function isCryptoRelevantPredictionOpportunity(
  opportunity: PredictionOpportunityLike,
) {
  if (opportunity.type !== OpportunityType.PREDICTION_MARKET) {
    return true;
  }

  if (
    opportunity.sourceKind &&
    opportunity.sourceKind !== SourceKind.POLYMARKET
  ) {
    return true;
  }

  const metadata =
    typeof opportunity.metadata === 'string'
      ? parseJson<Record<string, unknown>>(opportunity.metadata, {})
      : (opportunity.metadata ?? {});

  const searchable = buildSearchText([
    opportunity.title,
    opportunity.summary,
    opportunity.description,
    opportunity.category,
    typeof metadata.eventTitle === 'string' ? metadata.eventTitle : null,
    typeof metadata.seriesTitle === 'string' ? metadata.seriesTitle : null,
    ...extractMetadataArray(metadata, 'seriesTitles'),
    ...extractMetadataArray(metadata, 'seriesSlugs'),
  ]);

  return matchesCryptoUniverse(searchable);
}

export function isCurrentInvestableOpportunity(
  opportunity: CurrentOpportunityLike,
) {
  if (opportunity.status !== 'active') {
    return false;
  }

  if (
    opportunity.eventDate instanceof Date &&
    opportunity.eventDate.getTime() <= Date.now()
  ) {
    return false;
  }

  if (opportunity.type !== OpportunityType.PREDICTION_MARKET) {
    return true;
  }

  if (!isCryptoRelevantPredictionOpportunity(opportunity)) {
    return false;
  }

  const currentPrice = Number(opportunity.currentPrice ?? NaN);
  if (Number.isFinite(currentPrice) && (currentPrice <= 0.02 || currentPrice >= 0.98)) {
    return false;
  }

  return true;
}
