import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getStatus();
  }

  @Get('status')
  getStatus() {
    return this.appService.getStatus();
  }
}
