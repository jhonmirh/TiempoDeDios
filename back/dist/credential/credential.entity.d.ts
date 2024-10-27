import { Pastor } from 'src/pastor/pastor.entity';
import { User } from 'src/users/users.entity';
export declare class Credential {
    id: string;
    email: string;
    password: string;
    user: User;
    pastor: Pastor;
}
