import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QueryService } from '../services/query.service';
import { TronPaymentService } from '../services/tron-payment.service';

@Controller('memos')
export class MemosController {
  constructor(
    private readonly queryService: QueryService,
    private readonly tronPayment: TronPaymentService,
  ) {}

  // Specific routes MUST come before `:id` wildcard
  @Get(':id/payment-info')
  getPaymentInfo(@Param('id') id: string) {
    return this.tronPayment.getPaymentInfo(id);
  }

  @Get(':id')
  getMemo(@Param('id') id: string) {
    return this.queryService.getMemo(id);
  }

  @Post(':id/unlock')
  unlockMemo(
    @Param('id') id: string,
    @Body() payload?: { customerRef?: string; txHash?: string },
  ) {
    return this.queryService.unlockMemo(id, payload?.customerRef, payload?.txHash);
  }
}
