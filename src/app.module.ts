import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationController } from './controller/location/location.controller';
import { ScraperService } from './services/scraper.service';
import { KnnService } from './services/knn.service';
import { StationController } from './controller/station/station.controller';

@Module({
  imports: [],
  controllers: [AppController, LocationController, StationController],
  providers: [AppService,ScraperService, KnnService],
})
export class AppModule {}
