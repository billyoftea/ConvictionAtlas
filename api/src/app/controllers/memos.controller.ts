import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import type { Response } from 'express';
import { QueryService } from '../services/query.service';
import { CommerceService } from '../services/commerce.service';

@Controller('memos')
export class MemosController {
  constructor(
    private readonly queryService: QueryService,
    private readonly commerceService: CommerceService,
  ) {}

  @Get(':id')
  getMemo(@Param('id') id: string) {
    return this.queryService.getMemo(id);
  }

  @Get(':id/content')
  async getProtectedMemoContent(
    @Param('id') id: string,
    @Headers('payment-signature') paymentHeader: string | undefined,
    @Query('customerRef') customerRef: string | undefined,
    @Res({ passthrough: true }) response: Response,
  ) {
    const result = await this.commerceService.getProtectedMemoContent(
      id,
      paymentHeader,
      customerRef,
    );

    response.status(result.status);
    for (const [key, value] of Object.entries(result.headers)) {
      response.setHeader(key, value);
    }

    return result.body;
  }

  @Post(':id/unlock')
  unlockMemo(
    @Param('id') id: string,
    @Body() payload?: { customerRef?: string },
  ) {
    return this.commerceService.unlockMemoWithBroker(id, payload?.customerRef);
  }
}
