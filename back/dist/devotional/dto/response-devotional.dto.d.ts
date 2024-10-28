import { Devotional } from '../devotional.entity';
export declare class ResponseDevotionalDto {
    id: string;
    date: string;
    description: string;
    text: string;
    citationText: string;
    pastor: {
        id: string;
        name: string;
        email: string;
        phone: string;
    };
    constructor(devotional: Devotional);
}
