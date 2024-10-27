import { PastorsService } from './pastors.service';
import { CreatePastorDto } from './dto/create-pastor.dto';
export declare class PastorsController {
    private readonly pastorsService;
    constructor(pastorsService: PastorsService);
    create(dto: CreatePastorDto): Promise<import("./pastor.entity").Pastor>;
    findAll(): Promise<import("./pastor.entity").Pastor[]>;
    findOne(id: string): Promise<import("./pastor.entity").Pastor>;
    update(id: string, dto: CreatePastorDto): Promise<import("./pastor.entity").Pastor>;
    remove(id: string): Promise<void>;
}
