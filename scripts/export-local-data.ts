import { mkdirSync, rmSync, writeFileSync, cpSync } from 'node:fs';
import { join } from 'node:path';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const baseUrl = process.env.APP_URL ?? 'http://localhost:3001';
const downloadsRoot = join(process.cwd(), 'data', 'downloads');
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const snapshotDir = join(downloadsRoot, timestamp);
const latestDir = join(downloadsRoot, 'latest');

type ApiResponse<T> = {
  ok: boolean;
  status: number;
  data: T | null;
  error?: string;
};

function ensureDir(path: string) {
  mkdirSync(path, { recursive: true });
}

function writeJson(path: string, data: unknown) {
  writeFileSync(path, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}

function escapeCsv(value: unknown) {
  const stringValue =
    value === null || value === undefined ? '' : String(value).replace(/\r?\n/g, ' ');
  const escaped = stringValue.replace(/"/g, '""');
  return /[",]/.test(escaped) ? `"${escaped}"` : escaped;
}

function writeCsv(path: string, rows: Array<Record<string, unknown>>) {
  if (!rows.length) {
    writeFileSync(path, '', 'utf8');
    return;
  }

  const headers = Object.keys(rows[0]);
  const lines = [
    headers.join(','),
    ...rows.map((row) => headers.map((header) => escapeCsv(row[header])).join(',')),
  ];
  writeFileSync(path, `${lines.join('\n')}\n`, 'utf8');
}

async function fetchJson<T>(path: string): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${baseUrl}${path}`);
    if (!response.ok) {
      return {
        ok: false,
        status: response.status,
        data: null,
        error: await response.text(),
      };
    }

    return {
      ok: true,
      status: response.status,
      data: (await response.json()) as T,
    };
  } catch (error) {
    return {
      ok: false,
      status: 0,
      data: null,
      error: error instanceof Error ? error.message : 'Unknown fetch error',
    };
  }
}

function sanitizeName(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

async function exportApiData() {
  const apiDir = join(snapshotDir, 'api');
  const tokenDir = join(apiDir, 'tokens');
  ensureDir(apiDir);
  ensureDir(tokenDir);

  const status = await fetchJson('/api/status');
  writeJson(join(apiDir, 'status.json'), status);

  if (!status.ok) {
    return {
      apiAvailable: false,
      exportedTokenIds: [] as string[],
    };
  }

  const [opportunities, managers, leaderboardManagers, leaderboardOpportunities] =
    await Promise.all([
      fetchJson<any[]>('/api/opportunities'),
      fetchJson<any[]>('/api/managers'),
      fetchJson<any[]>('/api/leaderboard/managers'),
      fetchJson<any[]>('/api/leaderboard/opportunities'),
    ]);

  writeJson(join(apiDir, 'opportunities.json'), opportunities);
  writeJson(join(apiDir, 'managers.json'), managers);
  writeJson(join(apiDir, 'leaderboard-managers.json'), leaderboardManagers);
  writeJson(join(apiDir, 'leaderboard-opportunities.json'), leaderboardOpportunities);

  const opportunitiesList = opportunities.data ?? [];
  writeCsv(
    join(apiDir, 'opportunities-summary.csv'),
    opportunitiesList.map((item) => ({
      id: item.id,
      slug: item.slug,
      title: item.title,
      symbol: item.symbol,
      type: item.type,
      sourceKind: item.sourceKind,
      currentPrice: item.currentPrice,
      priceChange24h: item.priceChange24h,
      volume24h: item.volume24h,
      marketCap: item.marketCap,
      liquidity: item.liquidity,
      updatedAt: item.updatedAt,
    })),
  );

  writeCsv(
    join(apiDir, 'leaderboard-managers.csv'),
    (leaderboardManagers.data ?? []).map((item) => ({
      slug: item.slug,
      name: item.name,
      nav: item.nav,
      cumulativeReturn: item.cumulativeReturn,
      sharpe: item.sharpe,
      hitRate: item.hitRate,
      averageRating: item.averageRating,
    })),
  );

  writeCsv(
    join(apiDir, 'leaderboard-opportunities.csv'),
    (leaderboardOpportunities.data ?? []).map((item) => ({
      id: item.id,
      slug: item.slug,
      title: item.title,
      type: item.type,
      currentPrice: item.currentPrice,
      priceChange24h: item.priceChange24h,
      volume24h: item.volume24h,
      convictionAverage: item.convictionAverage,
      signalStrength: item.signalStrength,
    })),
  );

  const topTokens = opportunitiesList
    .filter((item) => item.type === 'TOKEN')
    .slice(0, 3);

  for (const token of topTokens) {
    const [detail, signals, news, history] = await Promise.all([
      fetchJson(`/api/opportunities/${token.id}`),
      fetchJson(`/api/opportunities/${token.id}/signals`),
      fetchJson(`/api/opportunities/${token.id}/news`),
      fetchJson(`/api/opportunities/${token.id}/history`),
    ]);
    const tokenName = sanitizeName(token.slug || token.title || token.id);

    writeJson(join(tokenDir, `${tokenName}.json`), {
      detail,
      signals,
      news,
      history,
    });
  }

  return {
    apiAvailable: true,
    exportedTokenIds: topTokens.map((token) => token.id),
  };
}

async function exportDatabaseData() {
  const dbDir = join(snapshotDir, 'db');
  ensureDir(dbDir);

  const [
    managerCount,
    opportunityCount,
    rawIngestionCount,
    newsItemCount,
    signalCount,
    managerDecisionCount,
    portfolioSnapshotCount,
    performanceSnapshotCount,
    memoCount,
  ] = await Promise.all([
    prisma.manager.count(),
    prisma.opportunity.count(),
    prisma.rawIngestion.count(),
    prisma.newsItem.count(),
    prisma.signal.count(),
    prisma.managerDecision.count(),
    prisma.portfolioSnapshot.count(),
    prisma.performanceSnapshot.count(),
    prisma.memo.count(),
  ]);

  const counts = {
    managerCount,
    opportunityCount,
    rawIngestionCount,
    newsItemCount,
    signalCount,
    managerDecisionCount,
    portfolioSnapshotCount,
    performanceSnapshotCount,
    memoCount,
  };

  const [
    managers,
    opportunities,
    newsItems,
    rawIngestions,
    signals,
    managerDecisions,
    portfolioSnapshots,
    performanceSnapshots,
    memos,
  ] = await Promise.all([
    prisma.manager.findMany({ orderBy: { createdAt: 'asc' } }),
    prisma.opportunity.findMany({ orderBy: [{ marketCap: 'desc' }, { updatedAt: 'desc' }] }),
    prisma.newsItem.findMany({ orderBy: { publishedAt: 'desc' }, take: 200 }),
    prisma.rawIngestion.findMany({ orderBy: { fetchedAt: 'desc' }, take: 300 }),
    prisma.signal.findMany({ orderBy: { computedAt: 'desc' }, take: 300 }),
    prisma.managerDecision.findMany({ orderBy: { computedAt: 'desc' }, take: 300 }),
    prisma.portfolioSnapshot.findMany({ orderBy: { computedAt: 'desc' }, take: 50 }),
    prisma.performanceSnapshot.findMany({ orderBy: { computedAt: 'desc' }, take: 50 }),
    prisma.memo.findMany({ orderBy: { createdAt: 'desc' }, take: 100 }),
  ]);

  writeJson(join(dbDir, 'counts.json'), counts);
  writeJson(join(dbDir, 'managers.json'), managers);
  writeJson(join(dbDir, 'opportunities.json'), opportunities);
  writeJson(join(dbDir, 'news-items.json'), newsItems);
  writeJson(join(dbDir, 'raw-ingestions.json'), rawIngestions);
  writeJson(join(dbDir, 'signals.json'), signals);
  writeJson(join(dbDir, 'manager-decisions.json'), managerDecisions);
  writeJson(join(dbDir, 'portfolio-snapshots.json'), portfolioSnapshots);
  writeJson(join(dbDir, 'performance-snapshots.json'), performanceSnapshots);
  writeJson(join(dbDir, 'memos.json'), memos);

  writeCsv(
    join(dbDir, 'opportunities-summary.csv'),
    opportunities.map((item) => ({
      id: item.id,
      slug: item.slug,
      title: item.title,
      symbol: item.symbol,
      sourceKind: item.sourceKind,
      type: item.type,
      currentPrice: item.currentPrice,
      priceChange24h: item.priceChange24h,
      volume24h: item.volume24h,
      marketCap: item.marketCap,
      lastUpdatedAt: item.lastUpdatedAt,
    })),
  );

  writeCsv(
    join(dbDir, 'news-summary.csv'),
    newsItems.map((item) => ({
      id: item.id,
      provider: item.provider,
      title: item.title,
      sourceName: item.sourceName,
      publishedAt: item.publishedAt,
      url: item.url,
      opportunityId: item.opportunityId,
    })),
  );

  return counts;
}

async function main() {
  ensureDir(downloadsRoot);
  ensureDir(snapshotDir);

  const [apiExport, dbCounts] = await Promise.all([
    exportApiData(),
    exportDatabaseData(),
  ]);

  const manifest = {
    generatedAt: new Date().toISOString(),
    baseUrl,
    snapshotDir,
    apiAvailable: apiExport.apiAvailable,
    exportedTokenIds: apiExport.exportedTokenIds,
    dbCounts,
  };

  writeJson(join(snapshotDir, 'manifest.json'), manifest);

  rmSync(latestDir, { recursive: true, force: true });
  cpSync(snapshotDir, latestDir, { recursive: true });

  console.log(JSON.stringify(manifest, null, 2));
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
