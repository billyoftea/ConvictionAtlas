/**
 * Standalone memo generator — uses DeepSeek via axios (non-streaming)
 */
import { PrismaClient } from '@prisma/client';
import axios from 'axios';

const prisma = new PrismaClient();

const BASE = process.env['DEEPSEEK_BASE_URL'] ?? 'https://api.deepseek.com';
const TOKEN = process.env['DEEPSEEK_API_KEY'] ?? process.env['LLM_API_KEY'] ?? '';
const MODEL = process.env['DEEPSEEK_MODEL'] ?? 'deepseek-chat';

function truncate(s: string, n: number) {
  return s.length <= n ? s : s.slice(0, n - 1) + '…';
}

async function callLLM(systemMsg: string, userMsg: string): Promise<string | null> {
  try {
    const resp = await axios.post(
      `${BASE}/chat/completions`,
      {
        model: MODEL,
        messages: [
          { role: 'system', content: systemMsg },
          { role: 'user', content: userMsg },
        ],
        max_tokens: 800,
        temperature: 0.25,
        stream: false,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${TOKEN}`,
        },
        timeout: 40000,
      },
    );
    return resp.data?.choices?.[0]?.message?.content?.trim() ?? null;
  } catch (e: any) {
    console.error(`  LLM error: ${e.response?.data?.message ?? e.message}`);
    return null;
  }
}

async function generateMemoContent(manager: any, portfolio: any): Promise<string | null> {
  const topLines = portfolio.positions.map((pos: any) => {
    const topSignals = pos.opportunity.signals
      .filter((s: any) => s.name !== 'risk_flag')
      .sort((a: any, b: any) => Math.abs(b.value) - Math.abs(a.value))
      .slice(0, 3)
      .map((s: any) => `${s.name}:${Number(s.value).toFixed(3)}`)
      .join(', ');
    const headlines = pos.opportunity.newsItems.map((n: any) => n.title).join(' | ');
    return `- ${pos.opportunity.title} (${Math.round(pos.weight * 100)}%): signals [${topSignals}]${headlines ? ` | news: "${headlines}"` : ''}`;
  });

  const systemMsg = `You are an investment research AI writing crisp, data-driven memos for ConvictionAtlas — a Web3 AI fund manager marketplace. Be analytical, specific, and avoid generic disclaimers.`;

  const userMsg = [
    `Write an investment memo for the "${manager.name}" portfolio.`,
    `Style: ${manager.style}. Risk profile: ${manager.riskProfile}. Universe: ${manager.universe}.`,
    ``,
    `Current top positions:`,
    ...topLines,
    ``,
    `Return markdown only. No code fences. Use this structure:`,
    `## Thesis`,
    `(1-2 sentence conviction statement based on signals)`,
    ``,
    `### Portfolio Shifts`,
    `(bullets: what you hold and why, citing specific signal values)`,
    ``,
    `### Risk Notes`,
    `(2-3 bullets: key risks specific to these positions)`,
    ``,
    `### AI Payment Layer`,
    `(1 sentence: unlock this full memo by micro-payment via TRON USDT)`,
  ].join('\n');

  const content = await callLLM(systemMsg, userMsg);
  return content;
}

async function main() {
  console.log(`Model: ${MODEL}`);
  console.log(`Auth: ${TOKEN ? 'configured' : 'missing'}\n`);

  const managers = await prisma.manager.findMany();

  for (const manager of managers) {
    const portfolio = await prisma.portfolioSnapshot.findFirst({
      where: { managerId: manager.id },
      orderBy: { computedAt: 'desc' },
      include: {
        positions: {
          orderBy: { weight: 'desc' },
          take: 4,
          include: {
            opportunity: {
              include: {
                signals: true,
                newsItems: { orderBy: { publishedAt: 'desc' }, take: 3 },
              },
            },
          },
        },
      },
    });

    if (!portfolio?.positions.length) {
      console.log(`⏭  ${manager.slug}: no portfolio`);
      continue;
    }

    process.stdout.write(`✍  ${manager.slug}... `);
    const content = await generateMemoContent(manager, portfolio);
    if (!content) {
      console.log('skipped (DeepSeek unavailable)');
      continue;
    }
    const leadPos = portfolio.positions[0];

    await prisma.memo.deleteMany({ where: { managerId: manager.id } });
    const memo = await prisma.memo.create({
      data: {
        managerId: manager.id,
        opportunityId: leadPos.opportunityId,
        title: `${manager.name}: ${leadPos.opportunity.title}`,
        summary: truncate(content.replace(/[#>*`_\-]/g, ' ').replace(/\s+/g, ' ').trim(), 220),
        content,
        generatedBy: 'deepseek',
      },
    });

    console.log(`🤖 DeepSeek → ${memo.id}`);
    console.log(`   ${content.slice(0, 160).replace(/\n/g, ' ')}\n`);
    await new Promise(r => setTimeout(r, 1200));
  }

  await prisma.$disconnect();
  console.log('✅ All memos generated.');
}

main().catch(e => { console.error(e); process.exit(1); });
