import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScraperService } from './services/scraper.service';
import { KnnService } from './services/knn.service';
import { LocationModule } from './controller/location/location.module';
import { StationModule } from './controller/station/station.module';

@Module({
  imports: [StationModule,LocationModule],
  controllers: [AppController],
  providers: [AppService,ScraperService, KnnService],
})
export class AppModule {}
