import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationController } from './controller/location/location.controller';
import { LocationModule } from './controller/location/location.module';
import { ScraperService } from './services/scraper.service';

@Module({
  imports: [LocationModule],
  controllers: [AppController, LocationController],
  providers: [AppService,ScraperService],
})
export class AppModule {}
