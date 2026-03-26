import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QueryService } from '../services/query.service';
import { ManagerSharesService } from '../services/manager-shares.service';

@Controller('managers')
export class ManagersController {
  constructor(
    private readonly queryService: QueryService,
    private readonly managerSharesService: ManagerSharesService,
  ) {}

  @Get()
  getManagers() {
    return this.queryService.getManagers();
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

  @Get(':slug/share-orders')
  getManagerShareOrders(@Param('slug') slug: string) {
    return this.managerSharesService.listShareOrders(slug);
  }

  @Post(':slug/reviews')
  createManagerReview(
    @Param('slug') slug: string,
    @Body() payload: { authorName?: string; rating?: number; comment?: string },
  ) {
    return this.queryService.createReview(slug, payload);
  }

  @Post(':slug/share-orders')
  createManagerShareOrder(
    @Param('slug') slug: string,
    @Body() payload?: { shares?: number; buyerAddress?: string },
  ) {
    return this.managerSharesService.createShareOrder(slug, payload);
  }

  @Post(':slug/share-orders/:id/confirm')
  confirmManagerShareOrder(
    @Param('slug') slug: string,
    @Param('id') id: string,
    @Body() payload?: { buyerAddress?: string; transactionHash?: string },
  ) {
    return this.managerSharesService.confirmShareOrder(slug, id, payload);
  }
}
