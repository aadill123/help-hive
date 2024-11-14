import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });

  const config = new DocumentBuilder()
    .setTitle('Help Hive')
    .setDescription('Help Hive is a platform that connects people who need help with people who can help.')
    .setVersion('1.0')
    .addTag('Help Hive')
    .setExternalDoc('Postman Collection', 'docs/json')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
