import { Sermon } from '../sermon.entity';
export declare class ResponseSermonDto {
    id: string;
    date: string;
    description: string;
    text: string;
    citationText: string;
    pastorId: string;
    constructor(sermon: Sermon);
}
