import { NestFactory } from '@nestjs/core';
import { WsAdapter } from '@nestjs/platform-ws';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
		cors: true,
		bodyParser: true,
	})

  app.useWebSocketAdapter(new WsAdapter(app));
  await app.listen(4000);
  console.log(`Application is running on: ${await app.getUrl()}`);

}
bootstrap();
