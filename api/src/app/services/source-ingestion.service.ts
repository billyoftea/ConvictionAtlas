import axios from 'axios';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SourceKind } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import {
  average,
  parseJson,
  round,
  serializeJson,
  standardDeviation,
  toSlug,
  truncate,
} from '../core/helpers';

type CoinGeckoMarket = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  price_change_percentage_24h: number;
  ath_change_percentage: number;
  ath: number;
  last_updated: string;
  sparkline_in_7d?: { price: number[] };
};

type PolymarketMarket = {
  id: string;
  question: string;
  slug: string;
  description: string;
  image?: string;
  icon?: string;
  endDate?: string;
  liquidity?: string;
  liquidityNum?: number;
  volume24hr?: number;
  volume1wk?: number;
  volume1mo?: number;
  volume24hrClob?: number;
  volume1wkClob?: number;
  volume1moClob?: number;
  volumeNum?: number;
  lastTradePrice?: number;
  oneDayPriceChange?: number;
  oneWeekPriceChange?: number;
  oneMonthPriceChange?: number;
  spread?: number;
  bestBid?: number;
  bestAsk?: number;
  outcomes?: string;
  outcomePrices?: string;
  clobTokenIds?: string;
  updatedAt?: string;
  active?: boolean;
  closed?: boolean;
  events?: Array<{ title?: string; slug?: string; image?: string }>;
};

type NewsTargetOpportunity = {
  id: string;
  externalKey: string;
  title: string;
  symbol: string | null;
  type: 'TOKEN' | 'PREDICTION_MARKET';
};

type ProviderArticle = {
  externalId: string;
  provider: 'CRYPTOPANIC' | 'GNEWS' | 'NEWSAPI';
  title: string;
  summary: string;
  url: string;
  imageUrl?: string;
  publishedAt: string;
  sourceName?: string;
  sentimentScore?: number | null;
  metadata?: Record<string, unknown>;
};

type PolymarketPriceHistory = {
  history?: Array<{
    t: number;
    p: number;
  }>;
};

type CoinGeckoMarketChart = {
  prices?: Array<[number, number]>;
  total_volumes?: Array<[number, number]>;
};

type NormalizedHistoryPoint = {
  pointAt: Date;
  price: number;
  volume: number | null;
  source: string;
};

@Injectable()
export class SourceIngestionService {
  private readonly execFileAsync = promisify(execFile);

  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async runBootstrap() {
    const coinGecko = await this.ingestCoinGecko();
    const polymarket = await this.ingestPolymarket();
    const normalized = await this.normalizeOpportunities();
    const news = await this.ingestNews();

    return { coinGecko, polymarket, normalized, news };
  }

  async ingestCoinGecko(limit?: number) {
    const marketLimit =
      limit ??
      Number(this.configService.get('COINGECKO_MARKET_LIMIT') ?? '12');
    const historyLimit = Number(
      this.configService.get('COINGECKO_HISTORY_LIMIT') ?? '4',
    );
    const baseUrl = this.configService.get<string>('COINGECKO_BASE_URL')!;
    const url = this.buildUrl(baseUrl, 'coins/markets');

    url.searchParams.set('vs_currency', 'usd');
    url.searchParams.set('order', 'market_cap_desc');
    url.searchParams.set('per_page', String(marketLimit));
    url.searchParams.set('page', '1');
    url.searchParams.set('sparkline', 'true');
    url.searchParams.set('price_change_percentage', '24h');

    const marketsResponse = await this.fetchJson<CoinGeckoMarket[] | CoinGeckoMarket>(
      url.toString(),
    );
    const markets = Array.isArray(marketsResponse)
      ? marketsResponse
      : [marketsResponse].filter(Boolean);
    let ingested = 0;

    for (const market of markets) {
      const longWindowEligible =
        market.market_cap_rank <= historyLimit &&
        !['usdt', 'usdc', 'usds', 'dai', 'usde', 'fdusd'].includes(
          market.symbol.toLowerCase(),
        );
      const historyPoints = longWindowEligible
        ? await this.fetchCoinGeckoHistory(market.id)
        : [];
      const normalizedHistory = historyPoints.length
        ? historyPoints
        : this.mapCoinGeckoSparkline(market);
      const historyMetrics = this.summarizeCoinGeckoHistory(
        market,
        normalizedHistory,
      );
      const historyMetadata = {
        marketCapRank: market.market_cap_rank,
        ath: market.ath,
        athGap: Math.abs((market.ath_change_percentage ?? 0) / 100),
        ...historyMetrics,
      };

      await this.prisma.rawIngestion.create({
        data: {
          sourceKind: SourceKind.COINGECKO,
          externalId: market.id,
          opportunityExternalKey: `coingecko:${market.id}`,
          itemType: 'market',
          payload: serializeJson(market),
        },
      });

      const opportunity = await this.prisma.opportunity.upsert({
        where: { externalKey: `coingecko:${market.id}` },
        update: {
          sourceKind: SourceKind.COINGECKO,
          type: 'TOKEN',
          slug: toSlug(`${market.name}-${market.symbol}`),
          title: market.name,
          symbol: market.symbol.toUpperCase(),
          summary: `${market.name} ranks #${market.market_cap_rank} by market cap with ${round(
            market.price_change_percentage_24h ?? 0,
            2,
          )}% 24h move.`,
          description: `${market.name} is tracked from CoinGecko market data.`,
          imageUrl: market.image,
          sourceUrl: `https://www.coingecko.com/en/coins/${market.id}`,
          status: 'active',
          category: 'token',
          currentPrice: market.current_price,
          priceChange24h: market.price_change_percentage_24h,
          volume24h: market.total_volume,
          marketCap: market.market_cap,
          liquidity: market.total_volume,
          lastUpdatedAt: new Date(market.last_updated),
          metadata: serializeJson(historyMetadata),
        },
        create: {
          externalKey: `coingecko:${market.id}`,
          sourceKind: SourceKind.COINGECKO,
          type: 'TOKEN',
          slug: toSlug(`${market.name}-${market.symbol}`),
          title: market.name,
          symbol: market.symbol.toUpperCase(),
          summary: `${market.name} ranks #${market.market_cap_rank} by market cap with ${round(
            market.price_change_percentage_24h ?? 0,
            2,
          )}% 24h move.`,
          description: `${market.name} is tracked from CoinGecko market data.`,
          imageUrl: market.image,
          sourceUrl: `https://www.coingecko.com/en/coins/${market.id}`,
          status: 'active',
          category: 'token',
          currentPrice: market.current_price,
          priceChange24h: market.price_change_percentage_24h,
          volume24h: market.total_volume,
          marketCap: market.market_cap,
          liquidity: market.total_volume,
          lastUpdatedAt: new Date(market.last_updated),
          metadata: serializeJson(historyMetadata),
        },
      });

      if (normalizedHistory.length > 1) {
        await this.prisma.opportunityHistory.deleteMany({
          where: { opportunityId: opportunity.id },
        });

        await this.prisma.opportunityHistory.createMany({
          data: normalizedHistory.map((point) => ({
            opportunityId: opportunity.id,
            pointAt: point.pointAt,
            price: round(point.price, 6),
            volume: point.volume ?? market.total_volume,
            metadata: serializeJson({ source: point.source }),
          })),
        });
      }

      ingested += 1;
    }

    return { source: 'coingecko', ingested };
  }

  async ingestPolymarket(limit?: number) {
    const marketLimit =
      limit ??
      Number(this.configService.get('POLYMARKET_MARKET_LIMIT') ?? '12');
    const baseUrl = this.configService.get<string>('POLYMARKET_GAMMA_BASE_URL')!;
    const url = this.buildUrl(baseUrl, 'markets');

    url.searchParams.set('limit', String(marketLimit));
    url.searchParams.set('closed', 'false');
    url.searchParams.set('archived', 'false');

    const marketsResponse = await this.fetchJson<
      PolymarketMarket[] | PolymarketMarket
    >(url.toString());
    const markets = Array.isArray(marketsResponse)
      ? marketsResponse
      : [marketsResponse].filter(Boolean);
    let ingested = 0;

    for (const market of markets) {
      const outcomes = parseJson<string[]>(market.outcomes, []);
      const outcomePrices = parseJson<string[]>(market.outcomePrices, []);
      const clobTokenIds = parseJson<string[]>(market.clobTokenIds, []);
      const currentPrice =
        market.lastTradePrice ?? Number(outcomePrices[0] ?? 0.5);
      const previousPrice =
        currentPrice - Number(market.oneDayPriceChange ?? 0);
      const event = market.events?.[0];
      const sourceUrl = `https://polymarket.com/event/${event?.slug ?? market.slug}`;

      await this.prisma.rawIngestion.create({
        data: {
          sourceKind: SourceKind.POLYMARKET,
          externalId: market.id,
          opportunityExternalKey: `polymarket:${market.id}`,
          itemType: 'market',
          payload: serializeJson(market),
        },
      });

      const opportunity = await this.prisma.opportunity.upsert({
        where: { externalKey: `polymarket:${market.id}` },
        update: {
          sourceKind: SourceKind.POLYMARKET,
          type: 'PREDICTION_MARKET',
          slug: market.slug,
          title: market.question,
          summary: truncate(
            market.description?.replace(/\s+/g, ' ') ?? market.question,
            180,
          ),
          description: market.description,
          imageUrl: market.image ?? market.icon ?? event?.image ?? null,
          sourceUrl,
          status: market.closed ? 'closed' : market.active ? 'active' : 'pending',
          category: event?.title ? truncate(event.title, 80) : 'prediction',
          currentPrice,
          priceChange24h: Number(market.oneDayPriceChange ?? 0) * 100,
          volume24h: Number(
            market.volume24hr ?? market.volume24hrClob ?? market.volumeNum ?? 0,
          ),
          liquidity: Number(market.liquidityNum ?? market.liquidity ?? 0),
          eventDate: market.endDate ? new Date(market.endDate) : null,
          lastUpdatedAt: market.updatedAt ? new Date(market.updatedAt) : new Date(),
          metadata: serializeJson({
            outcomes,
            outcomePrices,
            spread: market.spread ?? null,
            bestBid: market.bestBid ?? null,
            bestAsk: market.bestAsk ?? null,
            eventTitle: event?.title ?? null,
            clobTokenId: clobTokenIds[0] ?? null,
            oneWeekPriceChange: market.oneWeekPriceChange ?? null,
            oneMonthPriceChange: market.oneMonthPriceChange ?? null,
            volume1wk:
              market.volume1wk ?? market.volume1wkClob ?? null,
            volume1mo:
              market.volume1mo ?? market.volume1moClob ?? null,
          }),
        },
        create: {
          externalKey: `polymarket:${market.id}`,
          sourceKind: SourceKind.POLYMARKET,
          type: 'PREDICTION_MARKET',
          slug: market.slug,
          title: market.question,
          summary: truncate(
            market.description?.replace(/\s+/g, ' ') ?? market.question,
            180,
          ),
          description: market.description,
          imageUrl: market.image ?? market.icon ?? event?.image ?? null,
          sourceUrl,
          status: market.closed ? 'closed' : market.active ? 'active' : 'pending',
          category: event?.title ? truncate(event.title, 80) : 'prediction',
          currentPrice,
          priceChange24h: Number(market.oneDayPriceChange ?? 0) * 100,
          volume24h: Number(
            market.volume24hr ?? market.volume24hrClob ?? market.volumeNum ?? 0,
          ),
          liquidity: Number(market.liquidityNum ?? market.liquidity ?? 0),
          eventDate: market.endDate ? new Date(market.endDate) : null,
          lastUpdatedAt: market.updatedAt ? new Date(market.updatedAt) : new Date(),
          metadata: serializeJson({
            outcomes,
            outcomePrices,
            spread: market.spread ?? null,
            bestBid: market.bestBid ?? null,
            bestAsk: market.bestAsk ?? null,
            eventTitle: event?.title ?? null,
            clobTokenId: clobTokenIds[0] ?? null,
            oneWeekPriceChange: market.oneWeekPriceChange ?? null,
            oneMonthPriceChange: market.oneMonthPriceChange ?? null,
            volume1wk:
              market.volume1wk ?? market.volume1wkClob ?? null,
            volume1mo:
              market.volume1mo ?? market.volume1moClob ?? null,
          }),
        },
      });

      await this.prisma.opportunityHistory.deleteMany({
        where: { opportunityId: opportunity.id },
      });

      const historyPoints = await this.fetchPolymarketHistory(
        clobTokenIds[0],
        market.updatedAt,
      );
      const fallbackHistory = [
        {
          opportunityId: opportunity.id,
          pointAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
          price: round(previousPrice, 6),
          volume: Number(
            market.volume24hr ?? market.volume24hrClob ?? market.volumeNum ?? 0,
          ),
          metadata: serializeJson({ source: 'implied_24h_ago' }),
        },
        {
          opportunityId: opportunity.id,
          pointAt: market.updatedAt ? new Date(market.updatedAt) : new Date(),
          price: round(currentPrice, 6),
          volume: Number(
            market.volume24hr ?? market.volume24hrClob ?? market.volumeNum ?? 0,
          ),
          metadata: serializeJson({ source: 'current_market' }),
        },
      ];

      await this.prisma.opportunityHistory.createMany({
        data: historyPoints.length
          ? historyPoints.map((point) => ({
              opportunityId: opportunity.id,
              pointAt: new Date(point.t * 1000),
              price: round(point.p, 6),
              volume: Number(
                market.volume24hr ?? market.volume24hrClob ?? market.volumeNum ?? 0,
              ),
              metadata: serializeJson({
                source: 'clob_prices_history',
                tokenId: clobTokenIds[0] ?? null,
              }),
            }))
          : fallbackHistory,
      });

      ingested += 1;
    }

    return { source: 'polymarket', ingested };
  }

  async normalizeOpportunities() {
    const opportunities = await this.prisma.opportunity.findMany();
    let normalized = 0;

    for (const opportunity of opportunities) {
      const nextStatus =
        opportunity.eventDate && opportunity.eventDate.getTime() < Date.now()
          ? 'expired'
          : opportunity.status ?? 'active';

      await this.prisma.opportunity.update({
        where: { id: opportunity.id },
        data: {
          status: nextStatus,
          category:
            opportunity.category ??
            (opportunity.type === 'TOKEN' ? 'token' : 'prediction'),
          summary:
            opportunity.summary ??
            truncate(opportunity.description ?? opportunity.title, 180),
        },
      });

      normalized += 1;
    }

    return { normalized };
  }

  async ingestNews(limitPerOpportunity?: number) {
    const cryptoPanicKey = this.configService.get<string>('CRYPTOPANIC_API_KEY');
    const gNewsKey = this.configService.get<string>('GNEWS_API_KEY');
    const newsApiKey = this.configService.get<string>('NEWSAPI_KEY');
    const providers = [
      {
        provider: SourceKind.CRYPTOPANIC,
        perOpportunity:
          limitPerOpportunity ??
          Number(
            this.configService.get('CRYPTOPANIC_RESULTS_PER_QUERY') ?? '3',
          ),
        skipped: !cryptoPanicKey,
        reason: cryptoPanicKey
          ? undefined
          : 'CRYPTOPANIC_API_KEY not configured.',
        fetchArticles: cryptoPanicKey
          ? (opportunity: NewsTargetOpportunity, query: string, limit: number) =>
              this.fetchCryptoPanicArticles(
                opportunity,
                query,
                limit,
                cryptoPanicKey,
              )
          : undefined,
      },
      {
        provider: SourceKind.GNEWS,
        perOpportunity:
          limitPerOpportunity ??
          Number(this.configService.get('GNEWS_RESULTS_PER_QUERY') ?? '3'),
        skipped: !gNewsKey,
        reason: gNewsKey ? undefined : 'GNEWS_API_KEY not configured.',
        fetchArticles: gNewsKey
          ? (_opportunity: NewsTargetOpportunity, query: string, limit: number) =>
              this.fetchGNewsArticles(query, limit)
          : undefined,
      },
      {
        provider: SourceKind.NEWSAPI,
        perOpportunity:
          limitPerOpportunity ??
          Number(this.configService.get('NEWSAPI_RESULTS_PER_QUERY') ?? '3'),
        skipped: !newsApiKey,
        reason: newsApiKey ? undefined : 'NEWSAPI_KEY not configured.',
        fetchArticles: newsApiKey
          ? (_opportunity: NewsTargetOpportunity, query: string, limit: number) =>
              this.fetchNewsApiArticles(query, limit, newsApiKey)
          : undefined,
      },
    ];

    const activeProviders = providers.filter(
      (provider) => !provider.skipped && provider.fetchArticles,
    );

    if (!activeProviders.length) {
      return {
        ingested: 0,
        skipped: true,
        reason:
          'No CRYPTOPANIC_API_KEY, GNEWS_API_KEY, or NEWSAPI_KEY configured.',
        providers: providers.map(({ provider, skipped, reason }) => ({
          provider,
          ingested: 0,
          skipped,
          reason,
        })),
      };
    }

    const opportunities = await this.prisma.opportunity.findMany({
      orderBy: [{ volume24h: 'desc' }, { marketCap: 'desc' }, { updatedAt: 'desc' }],
      take: 6,
    });

    let ingested = 0;
    const providerSummaries = providers.map(({ provider, skipped, reason }) => ({
      provider,
      ingested: 0,
      skipped,
      reason,
      error: undefined as string | undefined,
    }));
    const summaryByProvider = new Map(
      providerSummaries.map((summary) => [summary.provider, summary]),
    );

    for (const opportunity of opportunities) {
      const query = this.buildOpportunityNewsQuery(opportunity);

      for (const provider of activeProviders) {
        const summary = summaryByProvider.get(provider.provider)!;
        if (summary.error) {
          continue;
        }

        try {
          const articles = await provider.fetchArticles!(
            opportunity,
            query,
            provider.perOpportunity,
          );

          for (const article of articles) {
            await this.persistNewsArticle(opportunity, query, article);
            ingested += 1;
            summary.ingested += 1;
          }
        } catch (error) {
          summary.error = this.describeProviderError(error);
        }
      }
    }

    return { ingested, providers: providerSummaries };
  }

  private async persistNewsArticle(
    opportunity: NewsTargetOpportunity,
    query: string,
    article: ProviderArticle,
  ) {
    await this.prisma.rawIngestion.create({
      data: {
        sourceKind: article.provider,
        externalId: article.externalId,
        opportunityExternalKey: opportunity.externalKey,
        itemType: 'article',
        payload: serializeJson(article),
      },
    });

    const metadata = serializeJson({
      query,
      matchedOpportunity: opportunity.title,
      providerMetadata: article.metadata ?? null,
    });
    const existingByUrl = await this.prisma.newsItem.findUnique({
      where: { url: article.url },
    });

    if (
      existingByUrl &&
      !(
        existingByUrl.provider === article.provider &&
        existingByUrl.externalId === article.externalId
      )
    ) {
      await this.prisma.newsItem.update({
        where: { id: existingByUrl.id },
        data: {
          opportunityId: opportunity.id,
          title: article.title,
          summary: article.summary,
          imageUrl: article.imageUrl ?? existingByUrl.imageUrl,
          publishedAt: new Date(article.publishedAt),
          sourceName: article.sourceName ?? existingByUrl.sourceName,
          sentimentScore: article.sentimentScore ?? existingByUrl.sentimentScore,
          metadata,
        },
      });

      return;
    }

    await this.prisma.newsItem.upsert({
      where: {
        provider_externalId: {
          provider: article.provider,
          externalId: article.externalId,
        },
      },
      update: {
        opportunityId: opportunity.id,
        title: article.title,
        summary: article.summary,
        url: article.url,
        imageUrl: article.imageUrl ?? null,
        publishedAt: new Date(article.publishedAt),
        sourceName: article.sourceName ?? null,
        sentimentScore: article.sentimentScore ?? null,
        metadata,
      },
      create: {
        provider: article.provider,
        externalId: article.externalId,
        opportunityId: opportunity.id,
        title: article.title,
        summary: article.summary,
        url: article.url,
        imageUrl: article.imageUrl ?? null,
        publishedAt: new Date(article.publishedAt),
        sourceName: article.sourceName ?? null,
        sentimentScore: article.sentimentScore ?? null,
        metadata,
      },
    });
  }

  private async fetchCryptoPanicArticles(
    opportunity: NewsTargetOpportunity,
    query: string,
    limit: number,
    apiKey: string,
  ): Promise<ProviderArticle[]> {
    const baseUrl = this.configService.get<string>('CRYPTOPANIC_BASE_URL')!;
    const url = this.buildUrl(baseUrl, 'posts/');
    const currencyCode = this.getCryptoPanicCurrencyCode(opportunity);

    url.searchParams.set('auth_token', apiKey);
    url.searchParams.set('kind', 'news');
    if (currencyCode) {
      url.searchParams.set('currencies', currencyCode);
    }

    const response = await this.fetchJson<{
      results?: Array<{
        id?: number | string;
        title?: string;
        url?: string;
        published_at?: string;
        created_at?: string;
        domain?: string;
        kind?: string;
        source?: { title?: string; domain?: string };
        metadata?: { description?: string; image?: string };
        currencies?: Array<{ code?: string; title?: string; slug?: string }>;
        votes?: { positive?: number; negative?: number; important?: number };
      }>;
    }>(url.toString());

    const mappedArticles = (response.results ?? [])
      .filter((article) => Boolean(article.url))
      .map((article) => ({
        externalId: String(article.id ?? article.url),
        provider: SourceKind.CRYPTOPANIC,
        title: article.title ?? 'Untitled CryptoPanic article',
        summary: article.metadata?.description ?? '',
        url: article.url!,
        imageUrl: article.metadata?.image,
        publishedAt:
          article.published_at ??
          article.created_at ??
          new Date().toISOString(),
        sourceName: article.source?.title ?? article.source?.domain ?? article.domain,
        sentimentScore: this.deriveCryptoPanicSentiment(article.votes),
        metadata: {
          currencies:
            article.currencies?.map(
              (currency) => currency.code ?? currency.title ?? currency.slug,
            ) ?? [],
          domain: article.domain ?? null,
          kind: article.kind ?? 'news',
          votes: article.votes ?? null,
        },
      }));

    return mappedArticles
      .map((article) => ({
        article,
        score: this.scoreNewsArticleMatch(opportunity, article),
      }))
      .filter(({ article, score }) => Boolean(currencyCode) || score > 0 || query.length < 12)
      .sort((left, right) => right.score - left.score)
      .slice(0, limit)
      .map(({ article }) => article);
  }

  private async fetchGNewsArticles(
    query: string,
    limit: number,
  ): Promise<ProviderArticle[]> {
    const baseUrl = this.configService.get<string>('GNEWS_BASE_URL')!;
    const apiKey = this.configService.get<string>('GNEWS_API_KEY')!;
    const url = this.buildUrl(baseUrl, 'search');

    url.searchParams.set('q', query);
    url.searchParams.set('lang', 'en');
    url.searchParams.set('max', String(limit));
    url.searchParams.set('apikey', apiKey);

    const response = await this.fetchJson<{
      articles?: Array<{
        title: string;
        description?: string;
        url: string;
        image?: string;
        publishedAt: string;
        source?: { name?: string };
      }>;
    }>(url.toString());

    return (response.articles ?? []).map((article) => ({
      externalId: article.url,
      provider: SourceKind.GNEWS,
      title: article.title,
      summary: article.description ?? '',
      url: article.url,
      imageUrl: article.image,
      publishedAt: article.publishedAt,
      sourceName: article.source?.name,
      metadata: null,
    }));
  }

  private async fetchNewsApiArticles(
    query: string,
    limit: number,
    apiKey: string,
  ): Promise<ProviderArticle[]> {
    const baseUrl = this.configService.get<string>('NEWSAPI_BASE_URL')!;
    const url = this.buildUrl(baseUrl, 'everything');

    url.searchParams.set('q', query);
    url.searchParams.set('language', 'en');
    url.searchParams.set('pageSize', String(limit));
    url.searchParams.set('sortBy', 'publishedAt');
    url.searchParams.set('apiKey', apiKey);

    const response = await this.fetchJson<{
      articles?: Array<{
        title: string;
        description?: string;
        url: string;
        urlToImage?: string;
        publishedAt: string;
        source?: { name?: string };
      }>;
    }>(url.toString());

    return (response.articles ?? []).map((article) => ({
      externalId: article.url,
      provider: SourceKind.NEWSAPI,
      title: article.title,
      summary: article.description ?? '',
      url: article.url,
      imageUrl: article.urlToImage,
      publishedAt: article.publishedAt,
      sourceName: article.source?.name,
      metadata: null,
    }));
  }

  private async fetchCoinGeckoHistory(coinId: string) {
    const baseUrl = this.configService.get<string>('COINGECKO_BASE_URL')!;
    const url = this.buildUrl(baseUrl, `coins/${coinId}/market_chart`);

    url.searchParams.set('vs_currency', 'usd');
    url.searchParams.set('days', '90');
    url.searchParams.set('interval', 'daily');

    try {
      const response = await this.fetchJson<CoinGeckoMarketChart>(url.toString());
      const volumeByTimestamp = new Map(
        (response.total_volumes ?? []).map(([timestamp, volume]) => [
          Number(timestamp),
          Number(volume),
        ]),
      );

      return (response.prices ?? [])
        .map(([timestamp, price]) => ({
          pointAt: new Date(Number(timestamp)),
          price: Number(price),
          volume: volumeByTimestamp.get(Number(timestamp)) ?? null,
          source: 'market_chart_90d',
        }))
        .filter(
          (point) =>
            Number.isFinite(point.pointAt.getTime()) &&
            Number.isFinite(point.price),
        );
    } catch {
      return [];
    }
  }

  private mapCoinGeckoSparkline(market: CoinGeckoMarket): NormalizedHistoryPoint[] {
    const sparkline = market.sparkline_in_7d?.price ?? [];
    if (sparkline.length <= 1) {
      return [];
    }

    const now = new Date(market.last_updated);
    const spacingMs =
      (7 * 24 * 60 * 60 * 1000) / Math.max(sparkline.length - 1, 1);

    return sparkline.map((price, index) => ({
      pointAt: new Date(now.getTime() - (sparkline.length - index - 1) * spacingMs),
      price: Number(price),
      volume: market.total_volume,
      source: 'sparkline_7d',
    }));
  }

  private summarizeCoinGeckoHistory(
    market: CoinGeckoMarket,
    points: NormalizedHistoryPoint[],
  ) {
    const latestPrice = points[points.length - 1]?.price ?? market.current_price;
    const latestTimestamp =
      points[points.length - 1]?.pointAt.getTime() ??
      new Date(market.last_updated).getTime();
    const price7d = this.findClosestPrice(points, latestTimestamp - 7 * 24 * 60 * 60 * 1000);
    const price30d = this.findClosestPrice(
      points,
      latestTimestamp - 30 * 24 * 60 * 60 * 1000,
    );
    const prices = points.map((point) => point.price);
    const trailing7d = points.filter(
      (point) => latestTimestamp - point.pointAt.getTime() <= 7 * 24 * 60 * 60 * 1000,
    );
    const trailing7dReturns = trailing7d
      .slice(1)
      .map((point, index) =>
        this.computePercentChange(point.price, trailing7d[index].price) / 100,
      )
      .filter((value) => Number.isFinite(value));
    const priceRange30d =
      prices.length > 1
        ? (Math.max(...prices) - Math.min(...prices)) / Math.max(latestPrice, 1e-9)
        : 0;
    const priceRange7d =
      trailing7d.length > 1
        ? (Math.max(...trailing7d.map((point) => point.price)) -
            Math.min(...trailing7d.map((point) => point.price))) /
          Math.max(latestPrice, 1e-9)
        : 0;
    const stablecoinSymbols = new Set([
      'USDT',
      'USDC',
      'USDS',
      'DAI',
      'FDUSD',
      'USDE',
      'BUSD',
      'PYUSD',
      'TUSD',
      'USDD',
    ]);
    const sevenDayPriceChange =
      price7d !== null
        ? this.computePercentChange(latestPrice, price7d)
        : round(market.price_change_percentage_24h ?? 0, 4);
    const thirtyDayPriceChange =
      price30d !== null ? this.computePercentChange(latestPrice, price30d) : sevenDayPriceChange;
    const averageVolume7d = average(
      trailing7d
        .map((point) => Number(point.volume ?? 0))
        .filter((value) => Number.isFinite(value) && value > 0),
    );
    const averageVolume30d = average(
      points
        .map((point) => Number(point.volume ?? 0))
        .filter((value) => Number.isFinite(value) && value > 0),
    );
    const volatility7d = standardDeviation(trailing7dReturns);
    const flatAssetScore = Math.min(
      1,
      Math.max(
        0,
        1 -
          Math.min(Math.abs(sevenDayPriceChange) / 6, 1) -
          Math.min(priceRange7d / 0.08, 1) * 0.5,
      ),
    );
    const isStablecoin =
      stablecoinSymbols.has(market.symbol.toUpperCase()) ||
      (latestPrice >= 0.95 &&
        latestPrice <= 1.05 &&
        Math.abs(sevenDayPriceChange) < 2.5 &&
        priceRange30d < 0.12);

    return {
      sevenDayPriceChange: round(sevenDayPriceChange, 4),
      thirtyDayPriceChange: round(thirtyDayPriceChange, 4),
      volatility7d: round(volatility7d, 6),
      priceRange30d: round(priceRange30d, 4),
      averageVolume7d: round(averageVolume7d, 2),
      averageVolume30d: round(averageVolume30d, 2),
      flatAssetScore: round(flatAssetScore, 4),
      isStablecoin,
    };
  }

  private async fetchPolymarketHistory(
    clobTokenId?: string,
    _marketUpdatedAt?: string,
  ) {
    if (!clobTokenId) {
      return [];
    }

    const clobBaseUrl =
      this.configService.get<string>('POLYMARKET_CLOB_BASE_URL') ??
      'https://clob.polymarket.com';
    const url = this.buildUrl(clobBaseUrl, 'prices-history');

    url.searchParams.set('market', clobTokenId);
    url.searchParams.set('interval', 'max');
    url.searchParams.set('fidelity', '240');

    try {
      const response = await this.fetchJson<PolymarketPriceHistory>(url.toString());
      return (response.history ?? []).filter(
        (point) => Number.isFinite(point.t) && Number.isFinite(point.p),
      );
    } catch {
      return [];
    }
  }

  private findClosestPrice(points: NormalizedHistoryPoint[], targetTimestamp: number) {
    if (!points.length) {
      return null;
    }

    let closestPoint = points[0];
    let closestDistance = Math.abs(points[0].pointAt.getTime() - targetTimestamp);

    for (const point of points.slice(1)) {
      const distance = Math.abs(point.pointAt.getTime() - targetTimestamp);
      if (distance < closestDistance) {
        closestPoint = point;
        closestDistance = distance;
      }
    }

    return closestPoint.price;
  }

  private computePercentChange(current: number, previous: number) {
    if (!Number.isFinite(current) || !Number.isFinite(previous) || previous === 0) {
      return 0;
    }

    return ((current - previous) / previous) * 100;
  }

  private async fetchJson<T>(url: string): Promise<T> {
    try {
      const response = await axios.get<T>(url, {
        headers: { Accept: 'application/json' },
        timeout: 20_000,
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw error;
      }

      if (process.platform !== 'win32') {
        throw error;
      }

      const psScript = [
        "[Console]::OutputEncoding = [System.Text.Encoding]::UTF8",
        "$ProgressPreference = 'SilentlyContinue'",
        `(Invoke-RestMethod -Uri '${url.replace(/'/g, "''")}') | ConvertTo-Json -Depth 100`,
      ].join('; ');

      const { stdout } = await this.execFileAsync(
        'powershell.exe',
        ['-NoProfile', '-Command', psScript],
        {
          maxBuffer: 20 * 1024 * 1024,
        },
      );

      return JSON.parse(stdout) as T;
    }
  }

  private buildOpportunityNewsQuery(opportunity: NewsTargetOpportunity) {
    return opportunity.type === 'TOKEN' && opportunity.symbol
      ? `\"${opportunity.title}\" OR \"${opportunity.symbol}\" crypto`
      : `\"${opportunity.title}\" crypto OR web3`;
  }

  private getCryptoPanicCurrencyCode(opportunity: NewsTargetOpportunity) {
    if (opportunity.type !== 'TOKEN' || !opportunity.symbol) {
      return null;
    }

    const code = opportunity.symbol.trim().toUpperCase();
    return /^[A-Z0-9]{2,10}$/.test(code) ? code : null;
  }

  private scoreNewsArticleMatch(
    opportunity: NewsTargetOpportunity,
    article: Pick<ProviderArticle, 'title' | 'summary' | 'metadata'>,
  ) {
    const haystack = [
      article.title,
      article.summary,
      ...(Array.isArray(article.metadata?.currencies)
        ? article.metadata.currencies
        : []),
    ]
      .join(' ')
      .toLowerCase();
    const keywords = opportunity.title
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((token) => token.length > 3);
    let score = 0;

    if (haystack.includes(opportunity.title.toLowerCase())) {
      score += 4;
    }

    if (opportunity.symbol && haystack.includes(opportunity.symbol.toLowerCase())) {
      score += 3;
    }

    for (const keyword of keywords.slice(0, 5)) {
      if (haystack.includes(keyword)) {
        score += 1;
      }
    }

    return score;
  }

  private deriveCryptoPanicSentiment(votes?: {
    positive?: number;
    negative?: number;
    important?: number;
  }) {
    const positive = Number(votes?.positive ?? 0);
    const negative = Number(votes?.negative ?? 0);
    const important = Number(votes?.important ?? 0);
    const total = positive + negative + important;

    if (!total) {
      return null;
    }

    return round((positive - negative + important * 0.25) / total, 4);
  }

  private describeProviderError(error: unknown) {
    if (axios.isAxiosError(error)) {
      const statusCode = error.response?.status;
      const errorInfo =
        typeof error.response?.data === 'string'
          ? error.response.data
          : error.response?.data?.info ?? error.response?.data?.message;

      return [statusCode ? `HTTP ${statusCode}` : null, errorInfo ?? error.message]
        .filter(Boolean)
        .join(' ');
    }

    if (error instanceof Error) {
      return error.message;
    }

    return 'Unknown provider error';
  }

  private buildUrl(baseUrl: string, path: string) {
    const url = new URL(baseUrl);
    url.pathname = `${url.pathname.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
    return url;
  }
}
