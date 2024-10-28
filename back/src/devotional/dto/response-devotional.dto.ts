// src/devotional/dto/response-devotional.dto.ts
import { IsString, IsDateString } from 'class-validator';
import { Devotional } from '../devotional.entity';

export class ResponseDevotionalDto {
  id: string;
  date: string;
  description: string;
  text: string;
  citationText: string;
  pastor: { id: string; name: string; email: string, phone:string };

  constructor(devotional: Devotional) {
    this.id = devotional.id;
    this.date = devotional.date;
    this.description = devotional.description;
    this.text = devotional.text;
    this.citationText = devotional.citationText;
    this.pastor = {
      id: devotional.pastor.id,
      name: devotional.pastor.name,
      email: devotional.pastor.email,
      phone: devotional.pastor.phone,
    };
  }
}
