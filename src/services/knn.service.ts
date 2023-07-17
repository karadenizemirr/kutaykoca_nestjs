import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class KnnService {

    private API_KEY:string;

    constructor(){
        this.API_KEY = "AIzaSyDFlunIEVJ07Y7-s4wPdDAnOJA1ucg9HCI"
    }
    async createRotator(locations:any,myLocation:any){
        try{
            
            let minDistance = Infinity; // Başlangıçta en küçük değeri sonsuz olarak ayarlıyoruz
            let closestLocation:any;

           for (const location of locations){
            
                const calculateDistance = this.calculator(
                    parseFloat(location.mapLat),
                    parseFloat(location.mapLong),
                    parseFloat(myLocation.latitude),
                    parseFloat(myLocation.longitude)
                )

                if (calculateDistance < minDistance) {
                    minDistance = calculateDistance;
                    closestLocation = location;
                }
           }

           const startCoordinate = `${myLocation.latitude},${myLocation.longitude}`
           const endCoordinate = `${closestLocation.mapLat},${closestLocation.mapLong}`

           // Create Google API Rotaiton
           const URL = `https://maps.googleapis.com/maps/api/directions/json?origin=${startCoordinate}&destination=${endCoordinate}&key=${this.API_KEY}`

           const response = await axios.get(URL)
           console.log(response.data.routes)

           const resultData= {
            "distance": {
                name: closestLocation.name,
                latitude: closestLocation.mapLat,
                longitude: closestLocation.mapLong,
                distance: minDistance.toFixed(2) + "km"
            },
            "rotation": response.data.routes
           }
           

           return resultData

        }catch(err){
            throw new HttpException({
                "message": "Distance calculator and create rotation error"
            }, HttpStatus.BAD_REQUEST)
        }
    }

    private calculator(lat1:number, lon1:number, lat2:number,lon2:number){
        try{

            const R = 6371; // Dünya yarıçapı (kilometre cinsinden)
            const dLat = (lat2 - lat1) * Math.PI / 180; // Enlem farkı
            const dLon = (lon2 - lon1) * Math.PI / 180; // Boylam farkı
            const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const distance = R * c; // İki nokta arasındaki mesafe
            
            return distance;


        }catch(err){
            throw new HttpException({
                "message" : ""
            }, HttpStatus.BAD_GATEWAY)
        }
    }
}