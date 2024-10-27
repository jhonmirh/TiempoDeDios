import { DevotionalsService } from './devotionals.service';
import { CreateDevotionalDto } from './dto/create-devotional.dto';
import { ResponseDevotionalDto } from './dto/response-devotional.dto';
import { PastorsService } from '../pastor/pastors.service';
export declare class DevotionalsController {
    private readonly devotionalsService;
    private readonly pastorsService;
    constructor(devotionalsService: DevotionalsService, pastorsService: PastorsService);
    create(createDto: CreateDevotionalDto, pastorId: string): Promise<ResponseDevotionalDto>;
    private findPastorById;
}
