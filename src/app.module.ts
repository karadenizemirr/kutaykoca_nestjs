import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationController } from './controller/location/location.controller';
import { LocationModule } from './controller/location/location.module';
import { ScraperService } from './services/scraper.service';
import { KnnService } from './services/knn.service';
import { StationModule } from './controller/station/station.module';
import { StationController } from './controller/station/station.controller';

@Module({
  imports: [LocationModule, StationModule],
  controllers: [AppController, LocationController, StationController],
  providers: [AppService,ScraperService, KnnService],
})
export class AppModule {}
