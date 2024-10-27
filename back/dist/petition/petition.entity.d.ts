import { PetitionType } from './dto/create-petition.dto';
import { User } from 'src/users/users.entity';
export declare class Petition {
    id: string;
    type: PetitionType;
    description: string;
    user: User;
}
