"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    const port = parseInt(process.env.PORT || '3000', 10);
    try {
        await app.listen(port, '0.0.0.0');
        console.log(`Application is running on: http://localhost:${port}`);
    }
    catch (e) {
        console.error(`Failed to bind to port ${port}:`, e.message);
        process.exit(1);
    }
    // keep process alive even if Nest does not keep handles open
    await new Promise(() => {
        /* never resolve */
    });
}
bootstrap().catch(err => {
    console.error('Bootstrap failed', err);
    process.exit(1);
});
//# sourceMappingURL=main.js.map