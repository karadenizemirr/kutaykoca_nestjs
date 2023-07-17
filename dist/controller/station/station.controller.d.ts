import { KnnService } from "src/services/knn.service";
export declare class StationController {
    private knnService;
    private locationRepository;
    constructor(knnService: KnnService);
    getCalculate(): Promise<{
        message: string;
    }>;
}
