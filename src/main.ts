import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'dotenv';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './libs/interceptors/logging.interceptor';

async function bootstrap() {
  config();
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.setGlobalPrefix('api');
  const configSwag = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    // .addBearerAuth(
    //   {
    //     type: 'http',
    //     scheme: 'bearer',
    //     bearerFormat: 'Token',
    //   },
    //   'access-token',
    // )
    // .addCookieAuth('token')
    .build();
  const document = SwaggerModule.createDocument(app, configSwag);
  SwaggerModule.setup('api', app, document);

  // app.use(cors());
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://103.79.143.150',
      'http://buithanhtho.name.vn',
      'https://buithanhtho.name.vn',
    ],
    credentials: true,
  });

  await app.listen(9000);
}
bootstrap();
