import { Module } from "@nestjs/common";
import { StationController } from "./station.controller";
import { KnnService } from "src/services/knn.service";

@Module({
    controllers: [StationController],
    providers: [KnnService],
})
export class StationModule {}