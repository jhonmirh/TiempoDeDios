// src/sermon/dto/update-sermon.dto.ts
import { IsOptional, IsString, IsDateString, MaxLength } from 'class-validator';

export class UpdateSermonDto {
  @IsOptional()
  @IsDateString()
  date?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  description?: string;

  @IsOptional()
  @IsString()
  text?: string;

  @IsOptional()
  @IsString()
  citationText?: string;
}
