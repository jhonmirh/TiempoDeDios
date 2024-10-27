import { Repository } from 'typeorm';
import { Sermon } from './sermon.entity';
import { CreateSermonDto } from './dto/create-sermon.dto';
import { UpdateSermonDto } from './dto/update-sermon.dto';
export declare class SermonsService {
    private sermonsRepository;
    constructor(sermonsRepository: Repository<Sermon>);
    create(dto: CreateSermonDto): Promise<Sermon>;
    findAll(): Promise<Sermon[]>;
    findOne(id: string): Promise<Sermon>;
    update(id: string, dto: UpdateSermonDto): Promise<Sermon>;
    remove(id: string): Promise<void>;
    findByPastorId(pastorId: string): Promise<Sermon[]>;
}
