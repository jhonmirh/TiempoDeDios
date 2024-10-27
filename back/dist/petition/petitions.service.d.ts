import { Repository } from 'typeorm';
import { Petition } from './petition.entity';
import { CreatePetitionDto } from './dto/create-petition.dto';
export declare class PetitionsService {
    private petitionsRepository;
    constructor(petitionsRepository: Repository<Petition>);
    create(dto: CreatePetitionDto): Promise<Petition>;
    findAll(): Promise<Petition[]>;
    findOne(id: string): Promise<Petition>;
    update(id: string, dto: CreatePetitionDto): Promise<Petition>;
    remove(id: string): Promise<void>;
}
