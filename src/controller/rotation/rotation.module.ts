import { Module } from "@nestjs/common";
import { RotationController } from "./rotation.controller";

@Module({
    imports: [],
    controllers: [RotationController],
    providers: [],
})


export class RotationModel {}