import { CredentialsService } from './credentials.service';
import { CreateCredentialDto } from './dto/create-credential.dto';
import { UpdateCredentialDto } from './dto/update-credential.dto';
import { ResponseCredentialDto } from './dto/response-credential.dto';
export declare class CredentialsController {
    private readonly credentialsService;
    constructor(credentialsService: CredentialsService);
    create(createCredentialDto: CreateCredentialDto): Promise<import("./credential.entity").Credential>;
    update(id: string, updateCredentialDto: UpdateCredentialDto): Promise<import("./credential.entity").Credential>;
    remove(id: string): Promise<void>;
    findOne(id: string): Promise<ResponseCredentialDto>;
    findAll(): Promise<ResponseCredentialDto[]>;
}
