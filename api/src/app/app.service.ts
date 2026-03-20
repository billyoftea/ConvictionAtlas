import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async getStatus() {
    const [managerCount, opportunityCount, memoCount, reviewCount, latestRun] =
      await Promise.all([
        this.prisma.manager.count(),
        this.prisma.opportunity.count(),
        this.prisma.memo.count(),
        this.prisma.review.count(),
        this.prisma.portfolioSnapshot.findFirst({
          orderBy: { computedAt: 'desc' },
        }),
      ]);

    return {
      name: process.env.APP_NAME ?? 'Conviction Atlas',
      status: 'ok',
      timestamp: new Date().toISOString(),
      counts: {
        managers: managerCount,
        opportunities: opportunityCount,
        memos: memoCount,
        reviews: reviewCount,
      },
      latestPortfolioRunAt: latestRun?.computedAt ?? null,
    };
  }
}
