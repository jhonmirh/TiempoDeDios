import { SermonsService } from './sermons.service';
import { CreateSermonDto } from './dto/create-sermon.dto';
import { UpdateSermonDto } from './dto/update-sermon.dto';
import { ResponseSermonDto } from './dto/response-sermon.dto';
export declare class SermonsController {
    private readonly sermonsService;
    constructor(sermonsService: SermonsService);
    create(dto: CreateSermonDto): Promise<ResponseSermonDto>;
    findAll(): Promise<ResponseSermonDto[]>;
    findOne(id: string): Promise<ResponseSermonDto>;
    update(id: string, dto: UpdateSermonDto): Promise<ResponseSermonDto>;
    remove(id: string): Promise<void>;
    findByPastorId(pastorId: string): Promise<ResponseSermonDto[]>;
}
