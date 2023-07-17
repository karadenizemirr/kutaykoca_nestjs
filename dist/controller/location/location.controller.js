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
exports.LocationController = void 0;
const common_1 = require("@nestjs/common");
const db_1 = require("../../helper/db");
const location_entity_1 = require("../../entities/location.entity");
const scraper_service_1 = require("../../services/scraper.service");
let LocationController = exports.LocationController = class LocationController {
    constructor(scraperService) {
        this.scraperService = scraperService;
        this.locationRepository = db_1.AppDataSource.getRepository(location_entity_1.Location);
    }
    async getAllLocation() {
        try {
            const data = await this.scraperService._locationDetail();
            data.flatMap(child => child).forEach((item) => {
                const jsonData = JSON.parse(JSON.stringify(item));
                const saveData = {
                    "mapLong": jsonData.mapLong,
                    "mapLat": jsonData.mapLat,
                    "name": jsonData.name
                };
                this.locationRepository.save(saveData, {
                    flush: true
                });
            });
            return {
                "message": "Get all location success",
                "data": data
            };
        }
        catch (err) {
            console.log(err);
            throw new common_1.HttpException({
                "message": "not success",
                "err": "get all location error"
            }, common_1.HttpStatus.BAD_GATEWAY);
        }
    }
};
__decorate([
    (0, common_1.Get)('get/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "getAllLocation", null);
exports.LocationController = LocationController = __decorate([
    (0, common_1.Controller)('location'),
    __metadata("design:paramtypes", [scraper_service_1.ScraperService])
], LocationController);
//# sourceMappingURL=location.controller.js.map