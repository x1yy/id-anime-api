import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

const Etag = require('fastify-etag');

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  app.register(Etag);
  app.register(require('fastify-cors'));
  let appPort = (process.env.PORT) ? parseInt(process.env.PORT) : 62545;
  console.log(appPort);
  await app.listen(appPort);
}
bootstrap();
