import { DevotionalsService } from './devotionals.service';
import { CreateDevotionalDto } from './dto/create-devotional.dto';
import { ResponseDevotionalDto } from './dto/response-devotional.dto';
import { PastorsService } from '../pastor/pastors.service';
import { Devotional } from './devotional.entity';
export declare class DevotionalsController {
    private readonly devotionalsService;
    private readonly pastorsService;
    constructor(devotionalsService: DevotionalsService, pastorsService: PastorsService);
    create(createDto: CreateDevotionalDto, pastorId: string): Promise<ResponseDevotionalDto>;
    findAll(): Promise<ResponseDevotionalDto[]>;
    private findPastorById;
    findByPastor(pastorId: string): Promise<Devotional[]>;
}
