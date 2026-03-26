import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InternalController } from './controllers/internal.controller';
import { LeaderboardController } from './controllers/leaderboard.controller';
import { ManagersController } from './controllers/managers.controller';
import { MemosController } from './controllers/memos.controller';
import { OpportunitiesController } from './controllers/opportunities.controller';
import { ResearchOrdersController } from './controllers/research-orders.controller';
import { PrismaService } from './prisma/prisma.service';
import { CommerceService } from './services/commerce.service';
import { ManagerSharesService } from './services/manager-shares.service';
import { ManagerEngineService } from './services/manager-engine.service';
import { MemoService } from './services/memo.service';
import { PerformanceService } from './services/performance.service';
import { PortfolioService } from './services/portfolio.service';
import { QueryService } from './services/query.service';
import { SignalEngineService } from './services/signal-engine.service';
import { SourceIngestionService } from './services/source-ingestion.service';
import { LlmService } from './services/llm.service';
import { X402Service } from './services/x402.service';
import { DataPipelineService } from './services/data-pipeline.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ScheduleModule.forRoot()],
  controllers: [
    AppController,
    ManagersController,
    OpportunitiesController,
    LeaderboardController,
    MemosController,
    InternalController,
    ResearchOrdersController,
  ],
  providers: [
    AppService,
    PrismaService,
    QueryService,
    CommerceService,
    ManagerSharesService,
    SourceIngestionService,
    SignalEngineService,
    ManagerEngineService,
    PortfolioService,
    PerformanceService,
    MemoService,
    LlmService,
    X402Service,
    DataPipelineService,
  ],
})
export class AppModule {}
