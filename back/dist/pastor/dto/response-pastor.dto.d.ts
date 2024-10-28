import { Devotional } from 'src/devotional/devotional.entity';
import { Sermon } from 'src/sermon/sermon.entity';
export declare class ResponsePastorDto {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    age: number;
    nid: number;
    account: string;
    bank: string;
    federation: string;
    devotionals: Devotional[];
    sermons: Sermon[];
    constructor(pastor: any);
}
