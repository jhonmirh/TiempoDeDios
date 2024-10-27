import { PetitionsService } from './petitions.service';
import { CreatePetitionDto } from './dto/create-petition.dto';
import { Petition } from './petition.entity';
export declare class PetitionsController {
    private readonly petitionsService;
    constructor(petitionsService: PetitionsService);
    create(dto: CreatePetitionDto): Promise<Petition>;
    findAll(): Promise<Petition[]>;
    findOne(id: string): Promise<Petition>;
    update(id: string, dto: CreatePetitionDto): Promise<Petition>;
    remove(id: string): Promise<void>;
}
