import { Controller, Get, HttpException, HttpStatus } from "@nestjs/common";
import { AppDataSource } from "src/helper/db";
import { Location } from "src/entities/location.entity";
import { ScraperService } from "src/services/scraper.service";

@Controller('location')
export class LocationController {

    private locationRepository:any
    constructor(
        private scraperService :ScraperService
        ){
            this.locationRepository = AppDataSource.getRepository(Location)
        }
    

     @Get('get/all')
     async getAllLocation(){
        try{
            // Scraping All Location
            const data = await this.scraperService._locationDetail()
            // Save Database

            data.flatMap(child => child).forEach((item) => {
                
                const jsonData = JSON.parse(JSON.stringify(item))
                const saveData = {
                    "mapLong" : jsonData.mapLong,
                    "mapLat": jsonData.mapLat,
                    "name": jsonData.name
                }
                // 
                this.locationRepository.save(saveData, {
                    flush: true
                })

            })
            

            return {
                "message": "Get all location success",
                "data": data
            }

        }catch(err){
            console.log(err)
            throw new HttpException({
                "message": "not success",
                "err": "get all location error"
            }, HttpStatus.BAD_GATEWAY)
        }
     }
}