import { Injectable } from '@nestjs/common';
import { truncate } from '../core/helpers';
import { PrismaService } from '../prisma/prisma.service';
import { LlmService } from './llm.service';

@Injectable()
export class MemoService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly llmService: LlmService,
  ) {}

  async generateMemos(managerSlug?: string) {
    const managers = await this.prisma.manager.findMany({
      where: managerSlug ? { slug: managerSlug } : undefined,
    });
    const created: Array<{ manager: string; memoId: string }> = [];
    const skipped: Array<{ manager: string; reason: string }> = [];

    for (const manager of managers) {
      const portfolio = await this.prisma.portfolioSnapshot.findFirst({
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
                  newsItems: {
                    orderBy: { publishedAt: 'desc' },
                    take: 3,
                  },
                },
              },
            },
          },
        },
      });

      if (!portfolio || !portfolio.positions.length) {
        continue;
      }

      const leadPosition = portfolio.positions[0];
      const content = await this.generateMemoContent(manager, portfolio);
      if (!content) {
        skipped.push({
          manager: manager.slug,
          reason: this.llmService.isConfigured()
            ? 'DeepSeek generation failed.'
            : 'DeepSeek is not configured.',
        });
        continue;
      }

      await this.prisma.memo.deleteMany({
        where: { managerId: manager.id },
      });

      const memo = await this.prisma.memo.create({
        data: {
          managerId: manager.id,
          opportunityId: leadPosition.opportunityId,
          title: `${manager.name}: ${leadPosition.opportunity.title}`,
          summary: truncate(
            content
              .replace(/[#>*`_-]/g, ' ')
              .replace(/\s+/g, ' ')
              .trim(),
            220,
          ),
          content,
          generatedBy: this.llmService.getProviderName(),
        },
      });

      created.push({ manager: manager.slug, memoId: memo.id });
    }

    return { created: created.length, memos: created, skipped };
  }

  private async generateMemoContent(manager: any, portfolio: any) {
    const topLines = portfolio.positions.map((position: any) => {
      const topSignals = position.opportunity.signals
        .filter((signal: any) => signal.name !== 'risk_flag')
        .sort((left: any, right: any) => Math.abs(right.value) - Math.abs(left.value))
        .slice(0, 3)
        .map((signal: any) => `${signal.name}:${signal.value}`)
        .join(', ');
      const headlines = position.opportunity.newsItems
        .map((item: any) => item.title)
        .join(' | ');

      return `- ${position.opportunity.title} (${Math.round(
        position.weight * 100,
      )}%): signals [${topSignals}] | headlines [${headlines || 'none'}]`;
    });

    const prompt = [
      'You are writing an investment memo for Conviction Atlas.',
      `Manager style: ${manager.style}.`,
      `Risk profile: ${manager.riskProfile}.`,
      'Return markdown only. Do not wrap the answer in code fences.',
      'Use exactly this structure:',
      '## Thesis',
      'A concise thesis paragraph.',
      '### Portfolio shifts',
      'A bullet list describing the current top positions and why they matter.',
      '### Risk notes',
      'A short bullet list of current risks.',
      'Base the memo only on the supplied portfolio state.',
      '',
      ...topLines,
    ].join('\n');

    const content = await this.llmService.generateMarkdown({
      temperature: 0.2,
      messages: [
        {
          role: 'system',
          content:
            'You are an investment research assistant writing crisp, analytical markdown memos.',
        },
        { role: 'user', content: prompt },
      ],
    });

    if (content) {
      return content;
    }

    return null;
  }
}
