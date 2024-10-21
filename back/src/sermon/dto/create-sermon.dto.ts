// src/sermon/dto/create-sermon.dto.ts
import { IsNotEmpty, IsString, IsDateString, MaxLength } from 'class-validator';

export class CreateSermonDto {
  @IsDateString()
  date: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  description: string;

  @IsString()
  @IsNotEmpty()
  text: string;

  @IsString()
  @IsNotEmpty()
  citationText: string;

  @IsNotEmpty()
  pastorId: string; // Para relacionar con el Pastor
}
