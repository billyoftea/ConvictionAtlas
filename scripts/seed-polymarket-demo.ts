/**
 * Seed Polymarket demo opportunities for polymarket-specialist-manager.
 * Used when gamma-api.polymarket.com is unreachable (network policy).
 * Data structure matches real Polymarket API, prices reflect realistic crypto prediction markets.
 */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const POLYMARKET_DEMO_MARKETS = [
  {
    id: 'demo-btc-100k-2026',
    slug: 'will-bitcoin-reach-100k-by-end-of-2026',
    question: 'Will Bitcoin reach $100,000 by end of 2026?',
    description: 'Resolves YES if BTC/USD closes above $100,000 on any major exchange on or before Dec 31, 2026.',
    outcomes: ['Yes', 'No'],
    outcomePrices: ['0.68', '0.32'],
    currentPrice: 0.68,
    priceChange24h: 2.1,
    volume24h: 487320,
    liquidity: 2840000,
    eventDate: new Date('2026-12-31'),
    category: 'Crypto Price Targets',
    tags: ['crypto', 'bitcoin', 'price'],
    oneDayPriceChange: 0.021,
    oneWeekPriceChange: 0.045,
    spread: 0.015,
    bestBid: 0.673,
    bestAsk: 0.688,
  },
  {
    id: 'demo-eth-5k-2026',
    slug: 'will-ethereum-reach-5000-by-end-of-2026',
    question: 'Will Ethereum reach $5,000 by end of 2026?',
    description: 'Resolves YES if ETH/USD closes above $5,000 on any major exchange on or before Dec 31, 2026.',
    outcomes: ['Yes', 'No'],
    outcomePrices: ['0.41', '0.59'],
    currentPrice: 0.41,
    priceChange24h: -1.8,
    volume24h: 312440,
    liquidity: 1920000,
    eventDate: new Date('2026-12-31'),
    category: 'Crypto Price Targets',
    tags: ['crypto', 'ethereum', 'price'],
    oneDayPriceChange: -0.018,
    oneWeekPriceChange: -0.031,
    spread: 0.018,
    bestBid: 0.402,
    bestAsk: 0.42,
  },
  {
    id: 'demo-sol-200-q2-2026',
    slug: 'will-solana-reach-200-by-q2-2026',
    question: 'Will Solana reach $200 in Q2 2026?',
    description: 'Resolves YES if SOL/USD trades above $200 at any point during Q2 2026 (Apr–Jun).',
    outcomes: ['Yes', 'No'],
    outcomePrices: ['0.35', '0.65'],
    currentPrice: 0.35,
    priceChange24h: -3.2,
    volume24h: 198760,
    liquidity: 980000,
    eventDate: new Date('2026-06-30'),
    category: 'Crypto Price Targets',
    tags: ['crypto', 'solana', 'price'],
    oneDayPriceChange: -0.032,
    oneWeekPriceChange: -0.058,
    spread: 0.022,
    bestBid: 0.341,
    bestAsk: 0.363,
  },
  {
    id: 'demo-tron-etf-2026',
    slug: 'will-a-tron-trx-etf-be-approved-in-2026',
    question: 'Will a TRON (TRX) ETF be approved in 2026?',
    description: 'Resolves YES if the SEC or any major regulator approves a spot TRON ETF by Dec 31, 2026.',
    outcomes: ['Yes', 'No'],
    outcomePrices: ['0.22', '0.78'],
    currentPrice: 0.22,
    priceChange24h: 0.5,
    volume24h: 89420,
    liquidity: 430000,
    eventDate: new Date('2026-12-31'),
    category: 'Crypto Regulation',
    tags: ['crypto', 'tron', 'etf', 'regulation'],
    oneDayPriceChange: 0.005,
    oneWeekPriceChange: 0.012,
    spread: 0.028,
    bestBid: 0.208,
    bestAsk: 0.236,
  },
  {
    id: 'demo-defi-tvl-100b-2026',
    slug: 'will-defi-total-tvl-exceed-100-billion-in-2026',
    question: 'Will total DeFi TVL exceed $100 billion in 2026?',
    description: 'Resolves YES if DeFiLlama total TVL exceeds $100 billion at any point during 2026.',
    outcomes: ['Yes', 'No'],
    outcomePrices: ['0.58', '0.42'],
    currentPrice: 0.58,
    priceChange24h: 1.2,
    volume24h: 143200,
    liquidity: 670000,
    eventDate: new Date('2026-12-31'),
    category: 'DeFi Milestones',
    tags: ['crypto', 'defi', 'tvl'],
    oneDayPriceChange: 0.012,
    oneWeekPriceChange: 0.024,
    spread: 0.019,
    bestBid: 0.572,
    bestAsk: 0.591,
  },
  {
    id: 'demo-crypto-market-cap-5t-2026',
    slug: 'will-total-crypto-market-cap-reach-5-trillion-in-2026',
    question: 'Will total crypto market cap reach $5 trillion in 2026?',
    description: 'Resolves YES if CoinGecko total market cap exceeds $5T at any point during 2026.',
    outcomes: ['Yes', 'No'],
    outcomePrices: ['0.47', '0.53'],
    currentPrice: 0.47,
    priceChange24h: -0.8,
    volume24h: 267800,
    liquidity: 1240000,
    eventDate: new Date('2026-12-31'),
    category: 'Crypto Market Cap',
    tags: ['crypto', 'marketcap', 'bull'],
    oneDayPriceChange: -0.008,
    oneWeekPriceChange: 0.018,
    spread: 0.017,
    bestBid: 0.463,
    bestAsk: 0.48,
  },
];

async function main() {
  let count = 0;

  for (const market of POLYMARKET_DEMO_MARKETS) {
    const externalKey = `polymarket:${market.id}`;
    const sourceUrl = `https://polymarket.com/event/${market.slug}`;

    await prisma.opportunity.upsert({
      where: { externalKey },
      update: {
        currentPrice: market.currentPrice,
        priceChange24h: market.priceChange24h,
        volume24h: market.volume24h,
        liquidity: market.liquidity,
        lastUpdatedAt: new Date(),
        metadata: JSON.stringify({
          outcomes: market.outcomes,
          outcomePrices: market.outcomePrices,
          spread: market.spread,
          bestBid: market.bestBid,
          bestAsk: market.bestAsk,
          oneWeekPriceChange: market.oneWeekPriceChange,
          isDemoData: true,
          dataSource: 'polymarket-demo-seed',
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
        sourceUrl,
        status: 'active',
        category: market.category,
        currentPrice: market.currentPrice,
        priceChange24h: market.priceChange24h,
        volume24h: market.volume24h,
        liquidity: market.liquidity,
        eventDate: market.eventDate,
        lastUpdatedAt: new Date(),
        metadata: JSON.stringify({
          outcomes: market.outcomes,
          outcomePrices: market.outcomePrices,
          spread: market.spread,
          bestBid: market.bestBid,
          bestAsk: market.bestAsk,
          oneWeekPriceChange: market.oneWeekPriceChange,
          isDemoData: true,
          dataSource: 'polymarket-demo-seed',
        }),
      },
    });

    console.log(`  ✅ ${market.question.slice(0, 60)}`);
    count++;
  }

  console.log(`\nSeeded ${count} Polymarket demo markets.`);
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
