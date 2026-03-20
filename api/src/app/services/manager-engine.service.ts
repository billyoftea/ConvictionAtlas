import { Direction } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { getManagerBlueprint } from '../core/manager-blueprints';
import { clamp, round, serializeJson } from '../core/helpers';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ManagerEngineService {
  constructor(private readonly prisma: PrismaService) {}

  async runManagers() {
    await this.prisma.managerDecision.deleteMany({});

    const managers = await this.prisma.manager.findMany();
    const opportunities = await this.prisma.opportunity.findMany({
      include: {
        signals: true,
        newsItems: {
          orderBy: { publishedAt: 'desc' },
          take: 2,
        },
      },
    });

    const computedAt = new Date();
    const rows = [];

    for (const manager of managers) {
      const blueprint = getManagerBlueprint(manager.slug);

      for (const opportunity of opportunities) {
        const signalMap = Object.fromEntries(
          opportunity.signals.map((signal) => [signal.name, signal.value]),
        );
        const opportunityBias = Number(
          blueprint.opportunityTypeBias?.[opportunity.type] ?? 0,
        );
        const drivers = Object.entries(blueprint.signalWeights).map(
          ([signalName, weight]) => {
            const value = Number(signalMap[signalName] ?? 0);
            return {
              signalName,
              value,
              weight,
              contribution: round(value * weight, 4),
            };
          },
        );
        const rawScore = clamp(
          drivers.reduce((sum, driver) => sum + driver.contribution, 0) +
            opportunityBias,
          -1,
          1,
        );
        const direction =
          rawScore > blueprint.bullishThreshold
            ? Direction.BULLISH
            : rawScore < blueprint.bearishThreshold
              ? Direction.BEARISH
              : Direction.NEUTRAL;
        const targetWeight =
          direction === Direction.BULLISH ? clamp(rawScore, 0.03, 0.35) : 0;
        const rationaleDrivers = [...drivers]
          .sort(
            (left, right) =>
              Math.abs(right.contribution) - Math.abs(left.contribution),
          )
          .slice(0, 3)
          .map(
            (driver) =>
              `${driver.signalName}=${round(driver.value, 3)} @ ${round(driver.weight, 2)}`,
          );

        rows.push({
          managerId: manager.id,
          opportunityId: opportunity.id,
          direction,
          convictionScore: round(rawScore, 4),
          targetWeight: round(targetWeight, 4),
          rationale: `${manager.name} is leaning ${direction.toLowerCase()} because ${rationaleDrivers.join(
            ', ',
          )}.`,
          computedAt,
          metadata: serializeJson({
            blueprint: blueprint.label,
            opportunityBias,
            thresholds: {
              bullish: blueprint.bullishThreshold,
              bearish: blueprint.bearishThreshold,
            },
            drivers,
            topHeadline: opportunity.newsItems[0]?.title ?? null,
          }),
        });
      }
    }

    if (rows.length) {
      await this.prisma.managerDecision.createMany({ data: rows });
    }

    return {
      managers: managers.length,
      opportunities: opportunities.length,
      decisions: rows.length,
      computedAt,
    };
  }
}
