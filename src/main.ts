import { otelSDK } from './tracing';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as basicAuth from "express-basic-auth";
import { ConfigService } from '@nestjs/config';



const config = new DocumentBuilder()
    .addBasicAuth()
    .setTitle('Gateway API Kimo Marketing')
    .setDescription('The Gateway API Kimo Marketing description')
    .setVersion('1.0')
    .build();


async function bootstrap() {
  
  //start tracing using jaeger exporter (open telemetry) 
  await otelSDK.start();
  
  // create nestjs app
  const app = await NestFactory.create(AppModule);

  // swagger setup
  const document = SwaggerModule.createDocument(app, config);
  app.use(
    '/docs',
    basicAuth({
      users: { 
        admin : "password",
       },
      challenge: true,
    }),
  );
  SwaggerModule.setup('docs', app, document);
  // end swagger setup


  await app.listen(3000);
}
bootstrap();
