import { Pastor } from 'src/pastor/pastor.entity';
export declare class Sermon {
    id: string;
    date: string;
    description: string;
    text: string;
    citationText: string;
    quote: string;
    pastor: Pastor;
}
