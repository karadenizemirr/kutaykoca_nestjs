import { Module } from "@nestjs/common";
import { LocationController } from "./location.controller";
import { ScraperService } from "src/services/scraper.service";

@Module({
    controllers: [LocationController],
    providers: [ScraperService],
})

export class LocationModule {}