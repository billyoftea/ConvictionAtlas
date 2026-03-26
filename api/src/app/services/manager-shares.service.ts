import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { parseJson, round, serializeJson } from '../core/helpers';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ManagerSharesService {
  constructor(private readonly prisma: PrismaService) {}

  async listShareOrders(slug: string) {
    const manager = await this.getManagerOrThrow(slug);
    const shareOffering = this.getShareOffering(manager);
    const [orders, totalOrders, recordedAggregate] = await Promise.all([
      this.prisma.managerShareOrder.findMany({
        where: { managerId: manager.id },
        orderBy: { createdAt: 'desc' },
        take: 8,
      }),
      this.prisma.managerShareOrder.count({
        where: { managerId: manager.id },
      }),
      this.prisma.managerShareOrder.aggregate({
        where: {
          managerId: manager.id,
          status: {
            not: 'quoted',
          },
        },
        _count: {
          _all: true,
        },
        _sum: {
          shares: true,
          amountUsd: true,
        },
        _max: {
          createdAt: true,
        },
      }),
    ]);

    return {
      shareOffering,
      stats: {
        totalOrders,
        recordedTransfers: recordedAggregate._count._all,
        totalShares: recordedAggregate._sum.shares ?? 0,
        volumeUsd: round(recordedAggregate._sum.amountUsd ?? 0, 2),
        lastOrderAt: recordedAggregate._max.createdAt?.toISOString() ?? null,
      },
      orders: orders.map((order) =>
        this.serializeManagerShareOrder(order, shareOffering),
      ),
    };
  }

  async createShareOrder(
    slug: string,
    payload?: { shares?: number; buyerAddress?: string },
  ) {
    const manager = await this.getManagerOrThrow(slug);
    const shareOffering = this.getShareOffering(manager);

    if (!shareOffering.enabled) {
      throw new BadRequestException(
        'share purchases are not enabled for this manager',
      );
    }

    const shares = Number(payload?.shares);
    if (!Number.isInteger(shares)) {
      throw new BadRequestException('shares must be an integer');
    }

    if (shares < shareOffering.minShares || shares > shareOffering.maxShares) {
      throw new BadRequestException(
        `shares must be between ${shareOffering.minShares} and ${shareOffering.maxShares}`,
      );
    }

    const buyerAddress = payload?.buyerAddress?.trim() || null;
    if (buyerAddress) {
      this.assertBuyerAddress(buyerAddress);
    }

    const amountUsd = round(shareOffering.priceUsd * shares, 2);
    const order = await this.prisma.managerShareOrder.create({
      data: {
        managerId: manager.id,
        buyerAddress,
        shares,
        priceUsdPerShare: shareOffering.priceUsd,
        amountUsd,
        paymentScheme: 'direct_transfer',
        paymentNetwork: shareOffering.network,
        paymentAsset: shareOffering.asset,
        tokenAddress: shareOffering.tokenAddress,
        tokenDecimals: shareOffering.tokenDecimals,
        amountAtomic: this.toAtomicAmount(
          amountUsd,
          shareOffering.tokenDecimals,
        ),
        treasuryAddress: shareOffering.treasuryAddress,
        status: 'quoted',
        metadata: serializeJson({
          shareLabel: shareOffering.shareLabel,
          shareSymbol: shareOffering.shareSymbol,
          purchaseRail: shareOffering.purchaseRail,
          explorerBaseUrl: shareOffering.explorerBaseUrl,
          note: shareOffering.note,
          perks: shareOffering.perks,
          createdFrom: 'manager-share-purchase',
        }),
      },
    });

    return this.serializeManagerShareOrder(order, shareOffering);
  }

  async confirmShareOrder(
    slug: string,
    id: string,
    payload?: { buyerAddress?: string; transactionHash?: string },
  ) {
    const order = await this.prisma.managerShareOrder.findUnique({
      where: { id },
      include: {
        manager: true,
      },
    });

    if (!order || order.manager.slug !== slug) {
      throw new NotFoundException(
        `Share order "${id}" was not found for manager "${slug}".`,
      );
    }

    const shareOffering = this.getShareOffering(order.manager);
    const buyerAddress =
      payload?.buyerAddress?.trim() || order.buyerAddress?.trim() || '';
    const transactionHash = payload?.transactionHash?.trim() || '';

    this.assertBuyerAddress(buyerAddress);
    this.assertTransactionHash(transactionHash);

    if (order.transactionHash && order.transactionHash !== transactionHash) {
      throw new BadRequestException(
        'this share order already has a different transaction hash attached',
      );
    }

    if (
      order.status !== 'quoted' &&
      order.transactionHash === transactionHash &&
      order.buyerAddress === buyerAddress
    ) {
      return this.serializeManagerShareOrder(order, shareOffering);
    }

    const updated = await this.prisma.managerShareOrder.update({
      where: { id: order.id },
      data: {
        buyerAddress,
        transactionHash,
        status: 'transfer_submitted',
        settledAt: new Date(),
        metadata: serializeJson({
          ...(parseJson(order.metadata, {}) as Record<string, unknown>),
          explorerBaseUrl: shareOffering.explorerBaseUrl,
          transferSubmittedAt: new Date().toISOString(),
        }),
      },
    });

    return this.serializeManagerShareOrder(updated, shareOffering);
  }

  private serializeManagerShareOrder(
    order: ManagerShareOrderRecord,
    shareOffering: ReturnType<ManagerSharesService['getShareOffering']>,
  ) {
    const metadata = parseJson(order.metadata, {}) as Record<string, unknown>;
    const explorerBaseUrl = this.pickString(
      metadata.explorerBaseUrl,
      shareOffering.explorerBaseUrl,
    );
    const transactionHash = order.transactionHash?.trim() || null;

    return {
      id: order.id,
      managerId: order.managerId,
      buyerAddress: order.buyerAddress,
      shares: order.shares,
      shareLabel: this.pickString(
        metadata.shareLabel,
        shareOffering.shareLabel,
      ),
      shareSymbol: this.pickString(
        metadata.shareSymbol,
        shareOffering.shareSymbol,
      ),
      priceUsdPerShare: order.priceUsdPerShare,
      amountUsd: order.amountUsd,
      paymentScheme: order.paymentScheme,
      paymentNetwork: order.paymentNetwork,
      paymentAsset: order.paymentAsset,
      tokenAddress: order.tokenAddress,
      tokenDecimals: order.tokenDecimals,
      amountAtomic: order.amountAtomic,
      treasuryAddress: order.treasuryAddress,
      status: order.status,
      transactionHash,
      createdAt: order.createdAt.toISOString(),
      updatedAt: order.updatedAt.toISOString(),
      settledAt: order.settledAt?.toISOString() ?? null,
      explorerUrl: transactionHash
        ? `${explorerBaseUrl}${transactionHash}`
        : null,
      metadata,
    };
  }

  private async getManagerOrThrow(slug: string) {
    const manager = await this.prisma.manager.findUnique({
      where: { slug },
    });

    if (!manager) {
      throw new NotFoundException(`Manager "${slug}" was not found.`);
    }

    return manager;
  }

  private getShareOffering(manager: {
    slug: string;
    name: string;
    metadata: string | null;
  }) {
    const metadata = parseJson(manager.metadata, {}) as {
      shareOffering?: Record<string, unknown>;
    };
    const record = metadata.shareOffering ?? {};
    const fallback = this.getFallbackShareOffering(manager.slug, manager.name);
    const minShares = Math.max(
      1,
      this.pickInteger(record.minShares, fallback.minShares),
    );

    return {
      enabled:
        typeof record.enabled === 'boolean' ? record.enabled : fallback.enabled,
      shareLabel: this.pickString(record.shareLabel, fallback.shareLabel),
      shareSymbol: this.pickString(record.shareSymbol, fallback.shareSymbol),
      priceUsd: this.pickNumber(record.priceUsd, fallback.priceUsd),
      minShares,
      maxShares: Math.max(
        minShares,
        this.pickInteger(record.maxShares, fallback.maxShares),
      ),
      availableShares: this.pickInteger(
        record.availableShares,
        fallback.availableShares,
      ),
      issuedShares: this.pickInteger(
        record.issuedShares,
        fallback.issuedShares,
      ),
      purchaseRail: this.pickString(record.purchaseRail, fallback.purchaseRail),
      network: this.pickString(record.network, fallback.network),
      asset: this.pickString(record.asset, fallback.asset),
      tokenAddress: this.pickString(record.tokenAddress, fallback.tokenAddress),
      tokenDecimals: this.pickInteger(
        record.tokenDecimals,
        fallback.tokenDecimals,
      ),
      treasuryAddress: this.pickString(
        record.treasuryAddress,
        fallback.treasuryAddress,
      ),
      explorerBaseUrl: this.pickString(
        record.explorerBaseUrl,
        fallback.explorerBaseUrl,
      ),
      note: this.pickString(record.note, fallback.note),
      perks: this.pickStringArray(record.perks, fallback.perks),
    };
  }

  private getFallbackShareOffering(slug: string, managerName: string) {
    switch (slug) {
      case 'event-driven-manager':
        return {
          enabled: true,
          shareLabel: `${managerName} Desk Share`,
          shareSymbol: 'EVNT',
          priceUsd: 32,
          minShares: 1,
          maxShares: 24,
          availableShares: 240,
          issuedShares: 64,
          purchaseRail: 'Direct Nile TRC20 transfer',
          network: 'tron:nile',
          asset: 'USDT',
          tokenAddress: 'TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf',
          tokenDecimals: 6,
          treasuryAddress: 'TBvJUBXorwBPzqvV38vjDgegj5Eh6g2Tsq',
          explorerBaseUrl: 'https://nile.tronscan.org/#/transaction/',
          note: 'Designed for Nile testnet demos. Share purchases are tracked as manager allocations inside the marketplace.',
          perks: [
            'Catalyst calendar access for the next cycle',
            'Priority event risk notes after major deadline shifts',
            'Desk-level scenario map for paid holders',
          ],
        };
      case 'quant-manager':
        return {
          enabled: true,
          shareLabel: `${managerName} Desk Share`,
          shareSymbol: 'QNTM',
          priceUsd: 18,
          minShares: 1,
          maxShares: 40,
          availableShares: 420,
          issuedShares: 140,
          purchaseRail: 'Direct Nile TRC20 transfer',
          network: 'tron:nile',
          asset: 'USDT',
          tokenAddress: 'TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf',
          tokenDecimals: 6,
          treasuryAddress: 'TJRabPrwbZy45sbavfcjinPJC18kjpRTv8',
          explorerBaseUrl: 'https://nile.tronscan.org/#/transaction/',
          note: 'Quant desk shares are quoted in Nile USDT for local demo trading and recorded off-chain in the product database.',
          perks: [
            'Systematic ranking snapshots',
            'Priority access to rebalance explanations',
            'Lower-cost follow-up requests for holders',
          ],
        };
      case 'hybrid-manager':
        return {
          enabled: true,
          shareLabel: `${managerName} Desk Share`,
          shareSymbol: 'HYBR',
          priceUsd: 40,
          minShares: 1,
          maxShares: 20,
          availableShares: 180,
          issuedShares: 96,
          purchaseRail: 'Direct Nile TRC20 transfer',
          network: 'tron:nile',
          asset: 'USDT',
          tokenAddress: 'TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf',
          tokenDecimals: 6,
          treasuryAddress: 'TLfuw4tRywtxCusvTudbjf7PbcXjfe7qrw',
          explorerBaseUrl: 'https://nile.tronscan.org/#/transaction/',
          note: 'This is a flagship demo allocation flow on Nile. It records a purchase relationship with the manager, not a regulated fund share.',
          perks: [
            'Flagship desk letter and allocation notes',
            'Priority compare memos against the full manager set',
            'Holder-only portfolio review snapshots',
          ],
        };
      default:
        return {
          enabled: true,
          shareLabel: `${managerName} Desk Share`,
          shareSymbol: 'NARR',
          priceUsd: 24,
          minShares: 1,
          maxShares: 30,
          availableShares: 320,
          issuedShares: 88,
          purchaseRail: 'Direct Nile TRC20 transfer',
          network: 'tron:nile',
          asset: 'USDT',
          tokenAddress: 'TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf',
          tokenDecimals: 6,
          treasuryAddress: 'TCLBgkbfVkJroVBJVqBEsxtPNQEQMTQCLQ',
          explorerBaseUrl: 'https://nile.tronscan.org/#/transaction/',
          note: 'Testnet only. Buying a desk share records a demo allocation inside Conviction Atlas.',
          perks: [
            'Priority access to thematic desk letters',
            'Early watchlist drops before the public tape',
            'Quarterly narrative positioning recap',
          ],
        };
    }
  }

  private toAtomicAmount(amount: number, decimals: number) {
    const [intPart, decimalPart = ''] = amount.toFixed(decimals).split('.');
    return (
      `${intPart}${decimalPart.padEnd(decimals, '0').slice(0, decimals)}`.replace(
        /^0+/,
        '',
      ) || '0'
    );
  }

  private assertBuyerAddress(value: string) {
    if (!/^T[1-9A-HJ-NP-Za-km-z]{33}$/.test(value)) {
      throw new BadRequestException(
        'buyerAddress must be a valid TRON base58 address',
      );
    }
  }

  private assertTransactionHash(value: string) {
    if (!/^[0-9a-fA-F]{64}$/.test(value)) {
      throw new BadRequestException(
        'transactionHash must be a 64-character hex string',
      );
    }
  }

  private pickString(value: unknown, fallback: string) {
    return typeof value === 'string' && value.trim() ? value.trim() : fallback;
  }

  private pickNumber(value: unknown, fallback: number) {
    return typeof value === 'number' && Number.isFinite(value)
      ? value
      : fallback;
  }

  private pickInteger(value: unknown, fallback: number) {
    return typeof value === 'number' && Number.isFinite(value)
      ? Math.max(0, Math.round(value))
      : fallback;
  }

  private pickStringArray(value: unknown, fallback: string[]) {
    if (!Array.isArray(value)) {
      return fallback;
    }

    const items = value
      .filter(
        (entry): entry is string => typeof entry === 'string' && !!entry.trim(),
      )
      .map((entry) => entry.trim());

    return items.length ? items : fallback;
  }
}

type ManagerShareOrderRecord = Prisma.ManagerShareOrderGetPayload<{}>;
