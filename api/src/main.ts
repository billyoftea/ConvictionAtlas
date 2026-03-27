import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  const port = Number(process.env.PORT || 3001);
  const webUrl = process.env.WEB_URL || 'http://localhost:3000';

  app.enableCors({
    origin: [
      webUrl,
      process.env.APP_URL || `http://localhost:${port}`,
      'https://billyoftea.github.io',
      /\.github\.io$/,
    ],
    credentials: true,
  });
  app.setGlobalPrefix(globalPrefix);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Conviction Atlas API')
    .setDescription('MVP API for real-time Web3 opportunities and AI fund managers.')
    .setVersion('0.1.0')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, swaggerDocument);

  await app.listen(port);
  Logger.log(`Application is running on: http://localhost:${port}/${globalPrefix}`);
  Logger.log(`Swagger docs available at: http://localhost:${port}/docs`);
}

bootstrap();
