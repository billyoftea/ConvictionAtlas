import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { truncate, parseJson, serializeJson } from '../core/helpers';
import { LlmService } from './llm.service';
import { PrismaService } from '../prisma/prisma.service';
import { X402Service } from './x402.service';

@Injectable()
export class CommerceService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly llmService: LlmService,
    private readonly x402Service: X402Service,
  ) {}

  async unlockMemoWithBroker(id: string, customerRef?: string) {
    const resourceUrl = `${this.getApiBaseUrl()}/memos/${id}/content?customerRef=${encodeURIComponent(
      customerRef?.trim() || 'web-debug-user',
    )}`;

    const result = await this.x402Service.payProtectedJson<MemoUnlockResultBody>(
      resourceUrl,
      {
        method: 'GET',
      },
    );

    return result.body;
  }

  async getProtectedMemoContent(
    id: string,
    paymentHeader?: string,
    customerRef?: string,
  ) {
    const memo = await this.getMemoRecordOrThrow(id);
    const customer = customerRef?.trim() || 'web-debug-user';
    const existingUnlock = await this.prisma.memoUnlock.findFirst({
      where: {
        memoId: memo.id,
        customerRef: customer,
        status: 'settled',
      },
      orderBy: { createdAt: 'desc' },
    });

    if (existingUnlock) {
      return {
        status: 200,
        headers: {},
        body: this.buildMemoUnlockBody(
          memo,
          existingUnlock,
          'Memo already unlocked for this customer reference.',
        ),
      };
    }

    const priceUsd = this.getManagerServicePrice(memo.manager.metadata, 'memo_unlock', 2);
    return this.x402Service.createProtectedResource({
      paymentHeader,
      customerRef: customer,
      resourceId: memo.id,
      resourceUrl: `${this.getApiBaseUrl()}/memos/${memo.id}/content`,
      description: `${memo.manager.name} premium memo unlock`,
      mimeType: 'application/json',
      priceUsd,
      extra: {
        memoId: memo.id,
        managerSlug: memo.manager.slug,
        serviceKind: 'memo_unlock',
      },
      onSettled: async ({ paymentRequirements, settlement }) => {
        const unlock = await this.prisma.memoUnlock.create({
          data: {
            memoId: memo.id,
            customerRef: customer,
            status: 'settled',
            paymentId: settlement.paymentId,
            paymentScheme: settlement.scheme,
            paymentNetwork: settlement.network ?? paymentRequirements.network,
            paymentAsset: paymentRequirements.asset,
            amountUsd: settlement.amountUsd,
            payer: settlement.payer,
            transactionHash: settlement.transaction,
            settledAt: new Date(),
            metadata: serializeJson({
              accepted: paymentRequirements,
            }),
          },
        });

        return this.buildMemoUnlockBody(
          memo,
          unlock,
          `Payment settled for "${memo.title}". Full memo unlocked.`,
        );
      },
    });
  }

  async createResearchOrder(
    slug: string,
    payload: { requesterRef?: string; topic?: string; brief?: string },
  ) {
    const manager = await this.prisma.manager.findUnique({
      where: { slug },
    });

    if (!manager) {
      throw new NotFoundException(`Manager "${slug}" was not found.`);
    }

    const topic = payload.topic?.trim();
    const brief = payload.brief?.trim();
    if (!topic) {
      throw new BadRequestException('topic is required');
    }

    if (!brief) {
      throw new BadRequestException('brief is required');
    }

    const priceUsd = this.getManagerServicePrice(
      manager.metadata,
      'custom_research',
      79,
    );

    const order = await this.prisma.researchOrder.create({
      data: {
        managerId: manager.id,
        requesterRef: payload.requesterRef?.trim() || 'web-debug-user',
        topic,
        brief,
        status: 'payment_pending',
        paymentStatus: 'unpaid',
        paymentScheme: this.x402Service.getMarketplaceRail().protocol,
        paymentNetwork: this.x402Service.getMarketplaceRail().network,
        paymentAsset: this.x402Service.getMarketplaceRail().asset,
        priceUsd,
        metadata: serializeJson({
          createdFrom: 'manager-detail-form',
        }),
      },
      include: {
        manager: true,
      },
    });

    return this.serializeResearchOrder(order);
  }

  async getResearchOrder(id: string) {
    const order = await this.getResearchOrderRecordOrThrow(id);
    return this.serializeResearchOrder(order);
  }

  async payResearchOrderWithBroker(id: string) {
    const resourceUrl = `${this.getApiBaseUrl()}/research-orders/${id}/deliverable`;
    const result = await this.x402Service.payProtectedJson<ResearchOrderPaymentResultBody>(
      resourceUrl,
      {
        method: 'GET',
      },
    );

    return result.body;
  }

  async getProtectedResearchOrderDeliverable(
    id: string,
    paymentHeader?: string,
  ) {
    const order = await this.getResearchOrderRecordOrThrow(id);

    if (
      order.paymentStatus === 'settled' &&
      order.deliveryContent &&
      order.deliveryTitle
    ) {
      return {
        status: 200,
        headers: {},
        body: this.buildResearchOrderPaymentBody(
          order,
          'Custom research already generated for this order.',
        ),
      };
    }

    return this.x402Service.createProtectedResource({
      paymentHeader,
      customerRef: order.requesterRef,
      resourceId: order.id,
      resourceUrl: `${this.getApiBaseUrl()}/research-orders/${order.id}/deliverable`,
      description: `${order.manager.name} custom research delivery`,
      mimeType: 'application/json',
      priceUsd: order.priceUsd,
      extra: {
        orderId: order.id,
        managerSlug: order.manager.slug,
        serviceKind: 'custom_research',
      },
      onSettled: async ({ paymentRequirements, settlement }) => {
        const delivery = await this.generateResearchDelivery(order);
        const updatedOrder = await this.prisma.researchOrder.update({
          where: { id: order.id },
          data: {
            status: 'fulfilled',
            paymentStatus: 'settled',
            paymentId: settlement.paymentId,
            paymentScheme: settlement.scheme,
            paymentNetwork: settlement.network ?? paymentRequirements.network,
            paymentAsset: paymentRequirements.asset,
            payer: settlement.payer,
            transactionHash: settlement.transaction,
            paidAt: new Date(),
            fulfilledAt: new Date(),
            deliveryTitle: delivery.title,
            deliverySummary: delivery.summary,
            deliveryContent: delivery.content,
            metadata: serializeJson({
              ...(parseJson(order.metadata, {}) as Record<string, unknown>),
              accepted: paymentRequirements,
            }),
          },
          include: {
            manager: true,
          },
        });

        return this.buildResearchOrderPaymentBody(
          updatedOrder,
          `Payment settled and ${updatedOrder.manager.name} custom research was delivered.`,
        );
      },
    });
  }

  private async generateResearchDelivery(
    order: ResearchOrderRecord,
  ): Promise<{ title: string; summary: string; content: string }> {
    if (order.deliveryTitle && order.deliverySummary && order.deliveryContent) {
      return {
        title: order.deliveryTitle,
        summary: order.deliverySummary,
        content: order.deliveryContent,
      };
    }

    const latestPortfolio = await this.prisma.portfolioSnapshot.findFirst({
      where: { managerId: order.managerId },
      orderBy: { computedAt: 'desc' },
      include: {
        positions: {
          orderBy: { weight: 'desc' },
          take: 4,
          include: {
            opportunity: true,
          },
        },
      },
    });

    const portfolioLines = (latestPortfolio?.positions ?? []).map(
      (position) =>
        `- ${position.opportunity.title}: ${(position.weight * 100).toFixed(1)}% | conviction ${position.convictionScore.toFixed(3)} | 24h ${position.opportunity.priceChange24h ?? 0}`,
    );

    const prompt = [
      'You are fulfilling a paid custom research request for Conviction Atlas.',
      `Manager: ${order.manager.name}.`,
      `Style: ${order.manager.style}.`,
      `Risk profile: ${order.manager.riskProfile}.`,
      `User topic: ${order.topic}.`,
      `User brief: ${order.brief}.`,
      'Return markdown only. Do not use code fences.',
      'Use exactly this structure:',
      '## Executive take',
      '### Thesis',
      '### What matters now',
      '### Risk checks',
      '### Actionable next steps',
      '',
      'Current manager book context:',
      ...(portfolioLines.length ? portfolioLines : ['- No active portfolio context available.']),
    ].join('\n');

    const content =
      (await this.llmService.generateMarkdown({
        temperature: 0.25,
        messages: [
          {
            role: 'system',
            content:
              'You are an investment research analyst writing paid client-ready Web3 research in clear markdown.',
          },
          { role: 'user', content: prompt },
        ],
      })) ??
      [
        '## Executive take',
        '',
        `${order.manager.name} sees this request as a live research problem that should be framed through positioning, catalysts, and downside path first.`,
        '',
        '### Thesis',
        `The request focuses on ${order.topic}. The current manager stance is that the strongest edge comes from combining manager style, recent signal flow, and current market structure rather than relying on one headline.`,
        '',
        '### What matters now',
        '- Track the next catalyst window and whether the market is already pricing it in.',
        '- Compare this setup against current top book holdings before increasing conviction.',
        '- Use TRON ecosystem context when the request touches payments, liquidity, or chain-specific momentum.',
        '',
        '### Risk checks',
        '- Narrative and event repricing can reverse quickly in crypto markets.',
        '- Thin-liquidity assets can produce misleading short-term moves.',
        '- A paid memo is a research artifact, not execution advice.',
        '',
        '### Actionable next steps',
        '- Re-check price, volume, and news flow before acting.',
        '- Compare this idea against the manager leaderboard and current portfolio map.',
        '- Request a follow-up compare memo if you need multiple manager views.',
      ].join('\n');

    return {
      title: `${order.manager.name}: ${order.topic}`,
      summary: truncate(
        content
          .replace(/[#>*`\[\]\(\)_-]/g, ' ')
          .replace(/\s+/g, ' ')
          .trim(),
        220,
      ),
      content,
    };
  }

  private buildMemoUnlockBody(
    memo: MemoRecord,
    unlock: MemoUnlockRecord,
    message: string,
  ): MemoUnlockResultBody {
    return {
      success: true,
      message,
      memoTitle: memo.title,
      managerName: memo.manager.name,
      content: memo.content,
      unlock: {
        id: unlock.id,
        status: unlock.status,
        customerRef: unlock.customerRef,
        createdAt: unlock.createdAt.toISOString(),
      },
      paymentRequest: {
        protocol: this.x402Service.getMarketplaceRail().protocol,
        network:
          unlock.paymentNetwork ?? this.x402Service.getMarketplaceRail().network,
        asset:
          unlock.paymentAsset ?? this.x402Service.getMarketplaceRail().asset,
        amountUsd:
          unlock.amountUsd ??
          this.getManagerServicePrice(memo.manager.metadata, 'memo_unlock', 2),
        label: 'Premium Memo Unlock',
        identityProvider: this.x402Service.getMarketplaceRail().identityProvider,
        status: unlock.status,
      },
      settlement:
        unlock.transactionHash || unlock.payer || unlock.paymentNetwork
          ? {
              payer: unlock.payer ?? undefined,
              transaction: unlock.transactionHash ?? undefined,
              network: unlock.paymentNetwork ?? undefined,
            }
          : undefined,
    };
  }

  private buildResearchOrderPaymentBody(
    order: ResearchOrderRecord,
    message: string,
  ): ResearchOrderPaymentResultBody {
    return {
      success: true,
      message,
      order: this.serializeResearchOrder(order),
      paymentRequest: {
        protocol: this.x402Service.getMarketplaceRail().protocol,
        network:
          order.paymentNetwork ?? this.x402Service.getMarketplaceRail().network,
        asset:
          order.paymentAsset ?? this.x402Service.getMarketplaceRail().asset,
        amountUsd: order.priceUsd,
        label: 'Custom Research Request',
        identityProvider: this.x402Service.getMarketplaceRail().identityProvider,
        status: order.paymentStatus,
      },
      settlement:
        order.transactionHash || order.payer || order.paymentNetwork
          ? {
              payer: order.payer ?? undefined,
              transaction: order.transactionHash ?? undefined,
              network: order.paymentNetwork ?? undefined,
            }
          : undefined,
    };
  }

  private serializeResearchOrder(order: ResearchOrderRecord) {
    return {
      id: order.id,
      managerId: order.managerId,
      requesterRef: order.requesterRef,
      topic: order.topic,
      brief: order.brief,
      status: order.status,
      paymentStatus: order.paymentStatus,
      paymentId: order.paymentId,
      paymentScheme: order.paymentScheme,
      paymentNetwork: order.paymentNetwork,
      paymentAsset: order.paymentAsset,
      priceUsd: order.priceUsd,
      payer: order.payer,
      transactionHash: order.transactionHash,
      deliveryTitle: order.deliveryTitle,
      deliverySummary: order.deliverySummary,
      deliveryContent: order.deliveryContent,
      paidAt: order.paidAt?.toISOString() ?? null,
      fulfilledAt: order.fulfilledAt?.toISOString() ?? null,
      createdAt: order.createdAt.toISOString(),
      updatedAt: order.updatedAt.toISOString(),
      metadata: parseJson(order.metadata, {}),
    };
  }

  private async getMemoRecordOrThrow(id: string) {
    const memo = await this.prisma.memo.findUnique({
      where: { id },
      include: {
        manager: true,
        opportunity: true,
        unlocks: true,
      },
    });

    if (!memo) {
      throw new NotFoundException(`Memo "${id}" was not found.`);
    }

    return memo;
  }

  private async getResearchOrderRecordOrThrow(id: string) {
    const order = await this.prisma.researchOrder.findUnique({
      where: { id },
      include: {
        manager: true,
      },
    });

    if (!order) {
      throw new NotFoundException(`Research order "${id}" was not found.`);
    }

    return order;
  }

  private getManagerServicePrice(
    metadata: string | null | undefined,
    kind: string,
    fallback: number,
  ) {
    const metadataRecord = parseJson(metadata, {}) as {
      serviceCatalog?: Array<{ kind?: string; amountUsd?: number }>;
    };
    const match = metadataRecord.serviceCatalog?.find(
      (entry) => entry.kind === kind && Number.isFinite(entry.amountUsd),
    );

    return match?.amountUsd ?? fallback;
  }

  private getApiBaseUrl() {
    return `${this.getAppUrl().replace(/\/$/, '')}/api`;
  }

  private getAppUrl() {
    return process.env.APP_URL || 'http://localhost:3001';
  }
}

type MemoRecord = Prisma.MemoGetPayload<{
  include: {
    manager: true;
    opportunity: true;
    unlocks: true;
  };
}>;

type MemoUnlockRecord = Prisma.MemoUnlockGetPayload<{}>;

type ResearchOrderRecord = Prisma.ResearchOrderGetPayload<{
  include: {
    manager: true;
  };
}>;

type MemoUnlockResultBody = {
  success: boolean;
  message: string;
  memoTitle: string;
  managerName: string;
  content: string;
  unlock: {
    id: string;
    status: string;
    customerRef: string;
    createdAt: string;
  };
  paymentRequest: {
    protocol: string;
    network: string;
    asset: string;
    amountUsd: number;
    label: string;
    identityProvider: string;
    status: string;
  };
  settlement?: {
    payer?: string;
    transaction?: string;
    network?: string;
  };
};

type ResearchOrderPaymentResultBody = {
  success: boolean;
  message: string;
  order: ReturnType<CommerceService['serializeResearchOrder']>;
  paymentRequest: {
    protocol: string;
    network: string;
    asset: string;
    amountUsd: number;
    label: string;
    identityProvider: string;
    status: string;
  };
  settlement?: {
    payer?: string;
    transaction?: string;
    network?: string;
  };
};
