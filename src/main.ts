import tracer from './tracing';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// Importing as a namespace
import * as basicAuth from "express-basic-auth";
import { ValidationPipe } from '@nestjs/common';


const config = new DocumentBuilder()
    .setTitle('Gateway API Kimo Marketing')
    .setDescription('The Gateway API Kimo Marketing description')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'access-token', // This name here is important for matching up with @ApiBearerAuth() in your controller!
    )
    .build();


async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  
  //start tracing using jaeger exporter (open telemetry) 
  await tracer.start();
  // end tracing
  
  
  // swagger setup
  const document = SwaggerModule.createDocument(app, config);

  const swaggerUiOptions = {
    // make hex color red = #ff0000
    customCss: '.swagger-ui .topbar { background-color: #ff0000; }',
    // customJs: '/path/to/custom.js', // Specify the path to your custom JavaScript file
    swaggerOptions: {
      persistAuthorization: true,
      // requestInterceptor: (req) => {
      //   // Modify the request as needed, e.g., add headers

      //   if (accessToken) {
      //     req.headers['Authorization'] = `Bearer ${accessToken}`;
      //   }
      //   return req;
      // },
    },
  };

  SwaggerModule.setup('api', app, document, swaggerUiOptions);
  // end swagger setup


  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();
  
  app.use(
    '/api',
    basicAuth({
      users: { 
        admin : "password",
       },
      challenge: true,
    }),
  );

  await app.listen(process.env.PORT || 3000);
}

bootstrap();
