import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join }  from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const SERVER_PORT = process.env.PORT || 3000;
  const CLIENT_FILES = join(__dirname, '..', '..', 'client', 'dist');

  await app.listen(SERVER_PORT);
}
bootstrap();
