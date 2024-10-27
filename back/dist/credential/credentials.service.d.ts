import { Repository } from 'typeorm';
import { Credential } from './credential.entity';
import { CreateCredentialDto } from './dto/create-credential.dto';
import { UpdateCredentialDto } from './dto/update-credential.dto';
export declare class CredentialsService {
    private readonly credentialRepository;
    constructor(credentialRepository: Repository<Credential>);
    create(createCredentialDto: CreateCredentialDto): Promise<Credential>;
    findAll(): Promise<Credential[]>;
    findOne(id: string): Promise<Credential>;
    update(id: string, updateCredentialDto: UpdateCredentialDto): Promise<Credential>;
    remove(id: string): Promise<void>;
}
