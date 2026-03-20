import { Injectable } from '@nestjs/common';
import {
  average,
  round,
  serializeJson,
  standardDeviation,
} from '../core/helpers';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PerformanceService {
  constructor(private readonly prisma: PrismaService) {}

  async snapshotPerformance() {
    const managers = await this.prisma.manager.findMany();
    let created = 0;

    for (const manager of managers) {
      const latestPortfolio = await this.prisma.portfolioSnapshot.findFirst({
        where: { managerId: manager.id },
        orderBy: { computedAt: 'desc' },
        include: {
          positions: {
            include: {
              opportunity: true,
            },
          },
        },
      });

      if (!latestPortfolio) {
        continue;
      }

      const existing = await this.prisma.performanceSnapshot.findFirst({
        where: { portfolioSnapshotId: latestPortfolio.id },
      });

      if (existing) {
        continue;
      }

      const previous = await this.prisma.performanceSnapshot.findFirst({
        where: { managerId: manager.id },
        orderBy: { computedAt: 'desc' },
      });
      const historical = await this.prisma.performanceSnapshot.findMany({
        where: { managerId: manager.id },
        orderBy: { computedAt: 'asc' },
      });

      const positionReturns = latestPortfolio.positions.map((position) => {
        return (position.weight * (position.opportunity.priceChange24h ?? 0)) / 100;
      });
      const dailyReturn = round(
        positionReturns.reduce((sum, value) => sum + value, 0),
        4,
      );
      const nav = round((previous?.nav ?? 100) * (1 + dailyReturn), 4);
      const cumulativeReturn = round(nav / 100 - 1, 4);
      const maxNav = Math.max(100, nav, ...historical.map((entry) => entry.nav));
      const drawdown = round(nav / maxNav - 1, 4);
      const returns = [...historical.map((entry) => entry.dailyReturn), dailyReturn];
      const avgReturn = average(returns);
      const stdDev = standardDeviation(returns);
      const sharpe = round(stdDev === 0 ? avgReturn : avgReturn / stdDev, 4);
      const hitRate = latestPortfolio.positions.length
        ? round(
            latestPortfolio.positions.filter(
              (position) => (position.opportunity.priceChange24h ?? 0) > 0,
            ).length / latestPortfolio.positions.length,
            4,
          )
        : 0;

      await this.prisma.performanceSnapshot.create({
        data: {
          managerId: manager.id,
          portfolioSnapshotId: latestPortfolio.id,
          nav,
          dailyReturn,
          cumulativeReturn,
          drawdown,
          sharpe,
          hitRate,
          metadata: serializeJson({
            positionCount: latestPortfolio.positions.length,
            model: 'performance-engine-v1',
          }),
        },
      });

      await this.prisma.portfolioSnapshot.update({
        where: { id: latestPortfolio.id },
        data: { nav },
      });

      created += 1;
    }

    return { created };
  }
}
