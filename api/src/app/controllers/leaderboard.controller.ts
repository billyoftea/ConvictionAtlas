import { Controller, Get } from '@nestjs/common';
import { QueryService } from '../services/query.service';

@Controller('leaderboard')
export class LeaderboardController {
  constructor(private readonly queryService: QueryService) {}

  @Get('managers')
  getManagerLeaderboard() {
    return this.queryService.getManagerLeaderboard();
  }

  @Get('opportunities')
  getOpportunityLeaderboard() {
    return this.queryService.getOpportunityLeaderboard();
  }
}
