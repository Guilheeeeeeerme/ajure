import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for frontend communication
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:19006'], // React admin and React Native
    credentials: true,
  });
  
  await app.listen(3001);
  console.log('Backend server running on http://localhost:3001');
}
bootstrap();
