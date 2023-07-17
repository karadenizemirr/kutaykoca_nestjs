import { ScraperService } from "src/services/scraper.service";
export declare class LocationController {
    private scraperService;
    private locationRepository;
    constructor(scraperService: ScraperService);
    getAllLocation(): Promise<{
        message: string;
        data: string[];
    }>;
}
