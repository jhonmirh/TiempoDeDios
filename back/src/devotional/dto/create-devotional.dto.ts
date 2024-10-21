// src/devotional/dto/create-devotional.dto.ts
import { IsString, IsDateString, MaxLength } from 'class-validator';

export class CreateDevotionalDto {
  @IsDateString()
  date: string; // Obligatorio en creación

  @IsString()
  @MaxLength(300)
  description: string; // Obligatorio en creación

  @IsString()
  text: string; // Obligatorio en creación

  @IsString()
  citationText: string; // Obligatorio en creación

  @IsString()
  pastorId: string; // Obligatorio en creación
}
