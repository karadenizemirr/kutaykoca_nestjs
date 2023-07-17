import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScraperService } from './services/scraper.service';
import { KnnService } from './services/knn.service';
import { RotationModel } from './controller/rotation/rotation.module';
import { LocationModule } from './controller/location/location.module';

@Module({
  imports: [RotationModel,LocationModule],
  controllers: [AppController],
  providers: [AppService,ScraperService, KnnService],
})
export class AppModule {}
