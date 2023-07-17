import { Controller, Get } from "@nestjs/common";

@Controller('rotation')
export class RotationController {
    
    @Get('calculate')
    async getCalculate(){
        return {
            "message": "calculate"
        }
    }
}