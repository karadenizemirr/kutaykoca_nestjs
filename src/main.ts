import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './helper/db';


// DatabaseConnect
AppDataSource.initialize()
  .then(() => {
    console.log('Database connect success')
  })
  .catch((err) => {
    console.log(err)
    console.log('Database connect not success')
  })
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
