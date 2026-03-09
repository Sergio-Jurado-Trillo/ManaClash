import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors();

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
        }),
    );

    const port = parseInt(process.env.PORT || '3000', 10);
    try {
        await app.listen(port, '0.0.0.0');
        console.log(`Application is running on: http://localhost:${port}`);
    } catch (e) {
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