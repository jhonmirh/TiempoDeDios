import { Repository } from 'typeorm';
import { Devotional } from './devotional.entity';
import { Pastor } from '../pastor/pastor.entity';
import { CreateDevotionalDto } from './dto/create-devotional.dto';
import { PastorsService } from '../pastor/pastors.service';
export declare class DevotionalsService {
    private readonly devotionalRepository;
    private readonly pastorsService;
    constructor(devotionalRepository: Repository<Devotional>, pastorsService: PastorsService);
    create(createDto: CreateDevotionalDto, pastor: Pastor): Promise<Devotional>;
    findPastorById(id: string): Promise<Pastor>;
}
