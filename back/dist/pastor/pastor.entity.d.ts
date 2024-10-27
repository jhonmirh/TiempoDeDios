import { Devotional } from 'src/devotional/devotional.entity';
import { Sermon } from 'src/sermon/sermon.entity';
export declare class Pastor {
    id: string;
    phone: string;
    address: string;
    country: string;
    city: string;
    age: number;
    nid: number;
    account: string;
    bank: string;
    federation: string;
    devotionals: Devotional[];
    sermons: Sermon[];
}
