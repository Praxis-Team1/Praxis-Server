import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const SERVER_PORT = process.env.PORT || 3000;
  const CLIENT_FILES = join(__dirname, '..', '..', 'client', 'dist');

  const options = new DocumentBuilder()
    .setTitle('Praxis backend')
    .setDescription('Praxis PSL API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(SERVER_PORT);
}
bootstrap();
