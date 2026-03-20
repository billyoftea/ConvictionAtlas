import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QueryService } from '../services/query.service';

@Controller('memos')
export class MemosController {
  constructor(private readonly queryService: QueryService) {}

  @Get(':id')
  getMemo(@Param('id') id: string) {
    return this.queryService.getMemo(id);
  }

  @Post(':id/unlock')
  unlockMemo(
    @Param('id') id: string,
    @Body() payload?: { customerRef?: string },
  ) {
    return this.queryService.unlockMemo(id, payload?.customerRef);
  }
}
