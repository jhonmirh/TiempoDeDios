// src/devotional/dto/update-devotional.dto.ts
import { IsString, IsOptional, IsDateString, MaxLength } from 'class-validator';

export class UpdateDevotionalDto {
  @IsDateString()
  @IsOptional() // Hacer opcional
  date?: string; // Opcional en actualización

  @IsString()
  @MaxLength(300)
  @IsOptional() // Hacer opcional
  description?: string; // Opcional en actualización

  @IsString()
  @IsOptional() // Hacer opcional
  text?: string; // Opcional en actualización

  @IsString()
  @IsOptional() // Hacer opcional
  citationText?: string; // Opcional en actualización

  @IsString()
  @IsOptional() // Hacer opcional
  pastorId?: string; // Opcional en actualización
}
