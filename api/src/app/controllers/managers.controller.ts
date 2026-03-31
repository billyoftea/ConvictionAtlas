import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { QueryService } from '../services/query.service';
import { TronPaymentService } from '../services/tron-payment.service';

@Controller('managers')
export class ManagersController {
  constructor(
    private readonly queryService: QueryService,
    private readonly tronPayment: TronPaymentService,
  ) {}

  @Get()
  getManagers() {
    return this.queryService.getManagers();
  }

  @Get(':slug/shares/payment-info')
  getSharesPaymentInfo(
    @Param('slug') slug: string,
    @Query('shares') sharesStr?: string,
  ) {
    const shares = Math.max(1, Math.floor(Number(sharesStr) || 10));
    const baseInfo = this.tronPayment.getPaymentInfo(`shares:${slug}:${shares}`);
    return {
      ...baseInfo,
      shares,
      totalUsdt: shares,
      memo: `shares:${slug}:${shares}`,
    };
  }

  @Post(':slug/shares/purchase')
  async purchaseShares(
    @Param('slug') slug: string,
    @Body() payload: { txHash: string; shares: number },
  ) {
    const { txHash, shares } = payload;
    if (!txHash?.trim()) {
      return { success: false, message: 'Transaction hash is required.' };
    }
    const requestedShares = Math.max(1, Math.floor(Number(shares) || 0));
    const result = await this.tronPayment.verifyPayment(txHash.trim());

    if (result.verified === false) {
      return { success: false, message: result.reason };
    }

    if (result.amount < requestedShares) {
      return {
        success: false,
        message: `Insufficient payment: ${result.amount} USDT received, but ${requestedShares} USDT required for ${requestedShares} shares.`,
      };
    }

    return {
      success: true,
      message: `Successfully purchased ${requestedShares} shares of ${slug}! Tx confirmed from ${result.from}.`,
      shares: requestedShares,
      txHash: result.txHash,
      paidUsdt: result.amount,
    };
  }

  @Get(':slug')
  getManager(@Param('slug') slug: string) {
    return this.queryService.getManager(slug);
  }

  @Get(':slug/performance')
  getManagerPerformance(@Param('slug') slug: string) {
    return this.queryService.getManagerPerformance(slug);
  }

  @Get(':slug/portfolio')
  getManagerPortfolio(@Param('slug') slug: string) {
    return this.queryService.getManagerPortfolio(slug);
  }

  @Get(':slug/rebalances')
  getManagerRebalances(@Param('slug') slug: string) {
    return this.queryService.getManagerRebalances(slug);
  }

  @Get(':slug/memos')
  getManagerMemos(@Param('slug') slug: string) {
    return this.queryService.getManagerMemos(slug);
  }

  @Get(':slug/reviews')
  getManagerReviews(@Param('slug') slug: string) {
    return this.queryService.getManagerReviews(slug);
  }

  @Post(':slug/reviews')
  createManagerReview(
    @Param('slug') slug: string,
    @Body() payload: { authorName?: string; rating?: number; comment?: string },
  ) {
    return this.queryService.createReview(slug, payload);
  }
}
