"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
    console.log({ frontendUrl });
    app.enableCors({
        origin: frontendUrl,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
        allowedHeaders: 'Authorization,Content-Type, Accept',
        maxAge: 3600,
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle("Kairos")
        .setDescription("Este proyecto es una gestión de la Iglesia Kairos")
        .setVersion("1.0")
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup("api", app, document);
    await app.listen(3010);
}
bootstrap();
//# sourceMappingURL=main.js.map