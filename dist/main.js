"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const fs_1 = require("fs");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('demo project')
        .setDescription('demo project description')
        .setVersion('1.0')
        .addTag('demo')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    (0, fs_1.writeFileSync)('./swagger-spec.json', JSON.stringify(document));
    swagger_1.SwaggerModule.setup('api', app, document, { yamlDocumentUrl: 'yaml' });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map