import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import { AppDataSource } from "src/helper/db";
import { KnnService } from "src/services/knn.service";
import { Location } from "src/entities/location.entity";

@Controller('station')
export class StationController {

    private locationRepository:any

    constructor(
        private knnService: KnnService
    ){
        this.locationRepository = AppDataSource.getRepository(Location)
    }

    @Post('calculate')
    async calculate(@Body() myLocaiton:{latitude: string, longitude: string}){
        try{

            // Get All Station
            const allLocation = await this.locationRepository.find()
            
            const data = await this.knnService.createRotator(allLocation, myLocaiton)

            return {
                "message": "ratation calculate success",
                "data": data
            }

        }catch(err){
            console.log(err)
            throw new HttpException({
                "message": "Distance calculate error"
            }, HttpStatus.BAD_REQUEST)
        }
    }
}