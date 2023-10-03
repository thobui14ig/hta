"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const dotenv_1 = require("dotenv");
const app_module_1 = require("./app.module");
const logging_interceptor_1 = require("./libs/interceptors/logging.interceptor");
async function bootstrap() {
    (0, dotenv_1.config)();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalInterceptors(new logging_interceptor_1.LoggingInterceptor());
    app.setGlobalPrefix('api');
    const configSwag = new swagger_1.DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addTag('cats')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, configSwag);
    swagger_1.SwaggerModule.setup('api', app, document);
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
//# sourceMappingURL=main.js.map