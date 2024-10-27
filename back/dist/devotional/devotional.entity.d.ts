import { Pastor } from '../pastor/pastor.entity';
export declare class Devotional {
    id: string;
    date: string;
    description: string;
    text: string;
    citationText: string;
    pastor: Pastor;
}
