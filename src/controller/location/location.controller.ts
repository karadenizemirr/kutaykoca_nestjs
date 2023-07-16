import { Controller, Get, HttpException, HttpStatus } from "@nestjs/common";
import { AppDataSource } from "src/helper/db";
import { Location } from "src/entities/location.entity";
import { ScraperService } from "src/services/scraper.service";

interface LocationDetail {
    mapLong: string;
    mapLat: string;
    name: string;
}

@Controller('location')
export class LocationController {
    constructor(
        private scraperService :ScraperService
        ){
            const locationRepository = AppDataSource.getRepository(Location)
        }

     @Get('get/all')
     async getAllLocation(){
        try{
            // Scraping All Location
            const data = await this.scraperService._locationDetail()

            // Save Database
            
            return {
                "message": "Get all location success",
                "data": data
            }
        }catch(err){
            throw new HttpException({
                "message": "not success",
                "err": "get all location error"
            }, HttpStatus.BAD_GATEWAY)
        }
     }
}