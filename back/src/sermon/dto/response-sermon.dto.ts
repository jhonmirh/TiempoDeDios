// src/sermon/dto/response-sermon.dto.ts
import { Sermon } from '../sermon.entity';

export class ResponseSermonDto {


  
  id: string;
  date: string;
  description: string;
  text: string;
  citationText: string;
  pastorId: string;

  constructor(sermon: Sermon) {
    this.id = sermon.id;
    this.date = sermon.date;
    this.description = sermon.description;
    this.text = sermon.text;
    this.citationText = sermon.citationText;
    this.pastorId = sermon.pastor.id; // Suponiendo que el pastor tiene un campo id
  }
}
