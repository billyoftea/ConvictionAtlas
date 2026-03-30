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
