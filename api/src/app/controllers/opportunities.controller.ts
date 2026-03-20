import { Controller, Get, Param } from '@nestjs/common';
import { QueryService } from '../services/query.service';

@Controller('opportunities')
export class OpportunitiesController {
  constructor(private readonly queryService: QueryService) {}

  @Get()
  getOpportunities() {
    return this.queryService.getOpportunities();
  }

  @Get(':id')
  getOpportunity(@Param('id') id: string) {
    return this.queryService.getOpportunity(id);
  }

  @Get(':id/managers')
  getOpportunityManagers(@Param('id') id: string) {
    return this.queryService.getOpportunityManagers(id);
  }

  @Get(':id/signals')
  getOpportunitySignals(@Param('id') id: string) {
    return this.queryService.getOpportunitySignals(id);
  }

  @Get(':id/news')
  getOpportunityNews(@Param('id') id: string) {
    return this.queryService.getOpportunityNews(id);
  }

  @Get(':id/history')
  getOpportunityHistory(@Param('id') id: string) {
    return this.queryService.getOpportunityHistory(id);
  }
}
