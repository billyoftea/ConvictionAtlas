/**
 * Seed realistic demo data for the full pipeline.
 * Used when external APIs (CoinGecko, Polymarket) are unavailable.
 * Creates TOKEN + PREDICTION_MARKET opportunities so all 6 managers
 * have meaningful data to work with.
 */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/* ── TOKEN opportunities ────────────────────────────────── */
const TOKEN_OPPORTUNITIES = [
  {
    slug: 'bitcoin',
    symbol: 'BTC',
    title: 'Bitcoin',
    summary: 'The original cryptocurrency and largest by market cap.',
    currentPrice: 87420,
    priceChange24h: 2.4,
    volume24h: 28_400_000_000,
    marketCap: 1_720_000_000_000,
    liquidity: 15_000_000_000,
    category: 'Layer 1',
    priceHistory: [82000, 83500, 84200, 85800, 86100, 87000, 87420],
  },
  {
    slug: 'ethereum',
    symbol: 'ETH',
    title: 'Ethereum',
    summary: 'Leading smart contract platform powering DeFi and NFTs.',
    currentPrice: 2040,
    priceChange24h: -1.2,
    volume24h: 12_800_000_000,
    marketCap: 245_000_000_000,
    liquidity: 8_000_000_000,
    category: 'Layer 1',
    priceHistory: [2120, 2080, 2060, 2050, 2030, 2025, 2040],
  },
  {
    slug: 'tron',
    symbol: 'TRX',
    title: 'TRON',
    summary: 'High-throughput blockchain focused on USDT transfers and DeFi.',
    currentPrice: 0.238,
    priceChange24h: 4.8,
    volume24h: 1_200_000_000,
    marketCap: 20_500_000_000,
    liquidity: 800_000_000,
    category: 'Layer 1',
    priceHistory: [0.218, 0.220, 0.225, 0.228, 0.232, 0.235, 0.238],
  },
  {
    slug: 'solana',
    symbol: 'SOL',
    title: 'Solana',
    summary: 'Fast L1 blockchain with growing DeFi and memecoin ecosystem.',
    currentPrice: 138.5,
    priceChange24h: 3.1,
    volume24h: 3_400_000_000,
    marketCap: 67_000_000_000,
    liquidity: 2_500_000_000,
    category: 'Layer 1',
    priceHistory: [128, 130, 132, 134, 136, 137, 138.5],
  },
  {
    slug: 'bnb',
    symbol: 'BNB',
    title: 'BNB',
    summary: 'Binance ecosystem token powering BSC and exchange utility.',
    currentPrice: 612,
    priceChange24h: 0.8,
    volume24h: 1_600_000_000,
    marketCap: 88_000_000_000,
    liquidity: 1_200_000_000,
    category: 'Layer 1',
    priceHistory: [598, 600, 604, 606, 608, 610, 612],
  },
  {
    slug: 'xrp',
    symbol: 'XRP',
    title: 'XRP',
    summary: 'Cross-border payment token with institutional adoption.',
    currentPrice: 2.18,
    priceChange24h: -0.5,
    volume24h: 2_100_000_000,
    marketCap: 125_000_000_000,
    liquidity: 1_500_000_000,
    category: 'Payments',
    priceHistory: [2.22, 2.20, 2.19, 2.18, 2.17, 2.16, 2.18],
  },
  {
    slug: 'sui',
    symbol: 'SUI',
    title: 'Sui',
    summary: 'Move-based L1 with parallel execution and growing TVL.',
    currentPrice: 2.85,
    priceChange24h: 6.2,
    volume24h: 980_000_000,
    marketCap: 9_200_000_000,
    liquidity: 400_000_000,
    category: 'Layer 1',
    priceHistory: [2.40, 2.50, 2.55, 2.65, 2.72, 2.80, 2.85],
  },
  {
    slug: 'aave',
    symbol: 'AAVE',
    title: 'Aave',
    summary: 'Leading decentralized lending protocol across multiple chains.',
    currentPrice: 205,
    priceChange24h: 1.8,
    volume24h: 320_000_000,
    marketCap: 3_100_000_000,
    liquidity: 250_000_000,
    category: 'DeFi',
    priceHistory: [192, 195, 198, 200, 202, 204, 205],
  },
  {
    slug: 'uniswap',
    symbol: 'UNI',
    title: 'Uniswap',
    summary: 'Dominant decentralized exchange protocol and governance token.',
    currentPrice: 8.42,
    priceChange24h: -2.1,
    volume24h: 180_000_000,
    marketCap: 5_100_000_000,
    liquidity: 320_000_000,
    category: 'DeFi',
    priceHistory: [8.80, 8.70, 8.60, 8.55, 8.50, 8.45, 8.42],
  },
  {
    slug: 'pendle',
    symbol: 'PENDLE',
    title: 'Pendle',
    summary: 'Yield tokenization protocol enabling fixed-rate DeFi strategies.',
    currentPrice: 3.12,
    priceChange24h: 8.5,
    volume24h: 120_000_000,
    marketCap: 520_000_000,
    liquidity: 85_000_000,
    category: 'DeFi',
    priceHistory: [2.60, 2.70, 2.80, 2.88, 2.95, 3.05, 3.12],
  },
  {
    slug: 'dogecoin',
    symbol: 'DOGE',
    title: 'Dogecoin',
    summary: 'Original memecoin with strong community and brand recognition.',
    currentPrice: 0.178,
    priceChange24h: 5.2,
    volume24h: 2_800_000_000,
    marketCap: 26_000_000_000,
    liquidity: 1_800_000_000,
    category: 'Meme',
    priceHistory: [0.158, 0.162, 0.165, 0.168, 0.172, 0.175, 0.178],
  },
  {
    slug: 'sunpump',
    symbol: 'SUN',
    title: 'SunPump (SUN)',
    summary: 'TRON ecosystem DeFi hub — DEX aggregator, stablecoin, staking.',
    currentPrice: 0.0245,
    priceChange24h: 12.3,
    volume24h: 45_000_000,
    marketCap: 320_000_000,
    liquidity: 28_000_000,
    category: 'TRON DeFi',
    priceHistory: [0.019, 0.020, 0.021, 0.022, 0.023, 0.024, 0.0245],
  },
];

/* ── PREDICTION_MARKET opportunities ────────────────────── */
const PREDICTION_MARKETS = [
  {
    id: 'demo-btc-100k-2026',
    slug: 'will-bitcoin-reach-100k-by-end-of-2026',
    question: 'Will Bitcoin reach $100,000 by end of 2026?',
    description: 'Resolves YES if BTC/USD closes above $100,000 on any major exchange on or before Dec 31, 2026.',
    currentPrice: 0.68,
    priceChange24h: 2.1,
    volume24h: 487320,
    liquidity: 2840000,
    eventDate: new Date('2026-12-31'),
    category: 'Crypto Price Targets',
  },
  {
    id: 'demo-eth-5k-2026',
    slug: 'will-ethereum-reach-5000-by-end-of-2026',
    question: 'Will Ethereum reach $5,000 by end of 2026?',
    description: 'Resolves YES if ETH/USD closes above $5,000 on any major exchange on or before Dec 31, 2026.',
    currentPrice: 0.41,
    priceChange24h: -1.8,
    volume24h: 312440,
    liquidity: 1920000,
    eventDate: new Date('2026-12-31'),
    category: 'Crypto Price Targets',
  },
  {
    id: 'demo-sol-200-q2-2026',
    slug: 'will-solana-reach-200-by-q2-2026',
    question: 'Will Solana reach $200 in Q2 2026?',
    description: 'Resolves YES if SOL/USD trades above $200 at any point during Q2 2026 (Apr–Jun).',
    currentPrice: 0.35,
    priceChange24h: -3.2,
    volume24h: 198760,
    liquidity: 980000,
    eventDate: new Date('2026-06-30'),
    category: 'Crypto Price Targets',
  },
  {
    id: 'demo-tron-etf-2026',
    slug: 'will-a-tron-trx-etf-be-approved-in-2026',
    question: 'Will a TRON (TRX) ETF be approved in 2026?',
    description: 'Resolves YES if the SEC or any major regulator approves a spot TRON ETF by Dec 31, 2026.',
    currentPrice: 0.22,
    priceChange24h: 0.5,
    volume24h: 89420,
    liquidity: 430000,
    eventDate: new Date('2026-12-31'),
    category: 'Crypto Regulation',
  },
  {
    id: 'demo-defi-tvl-100b-2026',
    slug: 'will-defi-total-tvl-exceed-100-billion-in-2026',
    question: 'Will total DeFi TVL exceed $100 billion in 2026?',
    description: 'Resolves YES if DeFiLlama total TVL exceeds $100 billion at any point during 2026.',
    currentPrice: 0.58,
    priceChange24h: 1.2,
    volume24h: 143200,
    liquidity: 670000,
    eventDate: new Date('2026-12-31'),
    category: 'DeFi Milestones',
  },
  {
    id: 'demo-crypto-market-cap-5t-2026',
    slug: 'will-total-crypto-market-cap-reach-5-trillion-in-2026',
    question: 'Will total crypto market cap reach $5 trillion in 2026?',
    description: 'Resolves YES if CoinGecko total market cap exceeds $5T at any point during 2026.',
    currentPrice: 0.47,
    priceChange24h: -0.8,
    volume24h: 267800,
    liquidity: 1240000,
    eventDate: new Date('2026-12-31'),
    category: 'Crypto Market Cap',
  },
];

async function main() {
  console.log('🚀  Seeding TOKEN opportunities...');
  for (const token of TOKEN_OPPORTUNITIES) {
    const externalKey = `coingecko:${token.slug}`;
    await prisma.opportunity.upsert({
      where: { externalKey },
      update: {
        currentPrice: token.currentPrice,
        priceChange24h: token.priceChange24h,
        volume24h: token.volume24h,
        marketCap: token.marketCap,
        liquidity: token.liquidity,
        lastUpdatedAt: new Date(),
        status: 'active',
        metadata: JSON.stringify({
          priceHistory: token.priceHistory,
          isDemoData: true,
          dataSource: 'demo-seed',
        }),
      },
      create: {
        externalKey,
        sourceKind: 'COINGECKO',
        type: 'TOKEN',
        slug: token.slug,
        symbol: token.symbol,
        title: token.title,
        summary: token.summary,
        description: token.summary,
        sourceUrl: `https://www.coingecko.com/en/coins/${token.slug}`,
        status: 'active',
        category: token.category,
        currentPrice: token.currentPrice,
        priceChange24h: token.priceChange24h,
        volume24h: token.volume24h,
        marketCap: token.marketCap,
        liquidity: token.liquidity,
        lastUpdatedAt: new Date(),
        metadata: JSON.stringify({
          priceHistory: token.priceHistory,
          isDemoData: true,
          dataSource: 'demo-seed',
        }),
      },
    });
    console.log(`  ✅ ${token.symbol} — $${token.currentPrice}`);
  }

  console.log('\n🎰  Seeding PREDICTION_MARKET opportunities...');
  for (const market of PREDICTION_MARKETS) {
    const externalKey = `polymarket:${market.id}`;
    await prisma.opportunity.upsert({
      where: { externalKey },
      update: {
        currentPrice: market.currentPrice,
        priceChange24h: market.priceChange24h,
        volume24h: market.volume24h,
        liquidity: market.liquidity,
        lastUpdatedAt: new Date(),
        status: 'active',
        metadata: JSON.stringify({
          outcomes: ['Yes', 'No'],
          outcomePrices: [String(market.currentPrice), String(1 - market.currentPrice)],
          isDemoData: true,
          dataSource: 'demo-seed',
        }),
      },
      create: {
        externalKey,
        sourceKind: 'POLYMARKET',
        type: 'PREDICTION_MARKET',
        slug: market.slug,
        title: market.question,
        summary: market.description,
        description: market.description,
        sourceUrl: `https://polymarket.com/event/${market.slug}`,
        status: 'active',
        category: market.category,
        currentPrice: market.currentPrice,
        priceChange24h: market.priceChange24h,
        volume24h: market.volume24h,
        liquidity: market.liquidity,
        eventDate: market.eventDate,
        lastUpdatedAt: new Date(),
        metadata: JSON.stringify({
          outcomes: ['Yes', 'No'],
          outcomePrices: [String(market.currentPrice), String(1 - market.currentPrice)],
          isDemoData: true,
          dataSource: 'demo-seed',
        }),
      },
    });
    console.log(`  ✅ ${market.question.slice(0, 55)}`);
  }

  const counts = await prisma.opportunity.groupBy({
    by: ['type'],
    _count: true,
  });
  console.log('\n📊  Final opportunity counts:', counts);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
