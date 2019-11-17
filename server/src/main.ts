import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import * as config from 'config';
import * as compression from 'compression';

async function bootstrap() {
  const serverConfig = config.get('server');
  const logger = new Logger('bootstrap');

  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELTE,OPTIONS',
    credentials: true,
  });
  app.use(compression());
  const port = process.env.PORT || serverConfig.port;
  await app.listen(port);

  logger.log(`Application listening on port ${port}`);
}
bootstrap();
