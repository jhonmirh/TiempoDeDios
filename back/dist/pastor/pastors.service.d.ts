import { Repository } from 'typeorm';
import { Pastor } from './pastor.entity';
import { CreatePastorDto } from './dto/create-pastor.dto';
export declare class PastorsService {
    private pastorRepository;
    constructor(pastorRepository: Repository<Pastor>);
    create(dto: CreatePastorDto): Promise<Pastor>;
    findAll(): Promise<Pastor[]>;
    findOne(id: string): Promise<Pastor>;
    update(id: string, dto: CreatePastorDto): Promise<Pastor>;
    remove(id: string): Promise<void>;
}
