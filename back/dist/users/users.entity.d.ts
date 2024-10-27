import { Petition } from 'src/petition/petition.entity';
export declare class User {
    id: string;
    phone: string;
    address: string;
    country: string;
    city: string;
    age: number;
    nid: number;
    petitions: Petition[];
}
