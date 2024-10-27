// src/devotional/dto/response-devotional.dto.ts
import { IsString, IsDateString } from 'class-validator';

export class ResponseDevotionalDto {
  @IsString()
  id: string;

  @IsDateString()
  date: string;

  @IsString()
  description: string;

  @IsString()
  text: string;

  @IsString()
  citationText: string;

  @IsString()
  pastorId: string;

  constructor(partial: Partial<ResponseDevotionalDto>) {
    Object.assign(this, partial);
  }
}
