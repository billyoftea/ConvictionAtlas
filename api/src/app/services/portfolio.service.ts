import { Direction } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { getManagerBlueprint } from '../core/manager-blueprints';
import { average, parseJson, round, serializeJson } from '../core/helpers';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PortfolioService {
  constructor(private readonly prisma: PrismaService) {}

  async rebalancePortfolios() {
    const managers = await this.prisma.manager.findMany();
    let snapshotsCreated = 0;

    for (const manager of managers) {
      const blueprint = getManagerBlueprint(manager.slug);
      const decisions = await this.prisma.managerDecision.findMany({
        where: { managerId: manager.id, direction: Direction.BULLISH },
        orderBy: [{ convictionScore: 'desc' }, { targetWeight: 'desc' }],
        take: blueprint.maxPositions,
        include: {
          opportunity: {
            include: {
              signals: true,
            },
          },
        },
      });
      const previousSnapshot = await this.prisma.portfolioSnapshot.findFirst({
        where: { managerId: manager.id },
        orderBy: { computedAt: 'desc' },
      });

      const investableCapital = decisions.length ? 1 - blueprint.cashFloor : 0;
      const scoreTotal =
        decisions.reduce((sum, decision) => sum + decision.targetWeight, 0) || 1;
      const riskValues = decisions.map((decision) => {
        const riskSignal = decision.opportunity.signals.find(
          (signal) => signal.name === 'risk_flag',
        );
        return riskSignal?.value ?? 0;
      });

      const snapshot = await this.prisma.portfolioSnapshot.create({
        data: {
          managerId: manager.id,
          cashWeight: round(1 - investableCapital, 4),
          grossExposure: round(investableCapital, 4),
          netExposure: round(investableCapital, 4),
          riskScore: round(average(riskValues), 4),
          nav: previousSnapshot?.nav ?? 100,
          metadata: serializeJson({
            decisionCount: decisions.length,
            model: 'portfolio-engine-v1',
          }),
        },
      });

      if (decisions.length) {
        await this.prisma.position.createMany({
          data: decisions.map((decision) => ({
            portfolioSnapshotId: snapshot.id,
            opportunityId: decision.opportunityId,
            weight: round((decision.targetWeight / scoreTotal) * investableCapital, 4),
            convictionScore: decision.convictionScore,
            entryPrice: decision.opportunity.currentPrice ?? null,
            note: parseJson<any>(decision.metadata, {}).topHeadline ?? null,
          })),
        });
      }

      snapshotsCreated += 1;
    }

    return { snapshotsCreated };
  }
}
