import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import type { Response } from 'express';
import { CommerceService } from '../services/commerce.service';

@Controller()
export class ResearchOrdersController {
  constructor(private readonly commerceService: CommerceService) {}

  @Post('managers/:slug/research-requests')
  createResearchOrder(
    @Param('slug') slug: string,
    @Body()
    payload?: {
      requesterRef?: string;
      topic?: string;
      brief?: string;
    },
  ) {
    return this.commerceService.createResearchOrder(slug, payload ?? {});
  }

  @Get('research-orders/:id')
  getResearchOrder(@Param('id') id: string) {
    return this.commerceService.getResearchOrder(id);
  }

  @Get('research-orders/:id/deliverable')
  async getProtectedDeliverable(
    @Param('id') id: string,
    @Headers('payment-signature') paymentHeader: string | undefined,
    @Res({ passthrough: true }) response: Response,
  ) {
    const result = await this.commerceService.getProtectedResearchOrderDeliverable(
      id,
      paymentHeader,
    );

    response.status(result.status);
    for (const [key, value] of Object.entries(result.headers)) {
      response.setHeader(key, value);
    }

    return result.body;
  }

  @Post('research-orders/:id/pay')
  payResearchOrder(@Param('id') id: string) {
    return this.commerceService.payResearchOrderWithBroker(id);
  }
}
