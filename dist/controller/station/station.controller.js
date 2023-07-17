"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationController = void 0;
const common_1 = require("@nestjs/common");
const db_1 = require("../../helper/db");
const knn_service_1 = require("../../services/knn.service");
const location_entity_1 = require("../../entities/location.entity");
let StationController = exports.StationController = class StationController {
    constructor(knnService) {
        this.knnService = knnService;
        this.locationRepository = db_1.AppDataSource.getRepository(location_entity_1.Location);
    }
    async getCalculate() {
        return {
            "message": "welcome to rotation calculate app"
        };
    }
};
__decorate([
    (0, common_1.Get)('calculate'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StationController.prototype, "getCalculate", null);
exports.StationController = StationController = __decorate([
    (0, common_1.Controller)('station'),
    __metadata("design:paramtypes", [knn_service_1.KnnService])
], StationController);
//# sourceMappingURL=station.controller.js.map