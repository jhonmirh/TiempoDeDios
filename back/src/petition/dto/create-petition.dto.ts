// src/petitions/dto/create-petition.dto.ts
import { IsEnum, IsString, MaxLength } from 'class-validator';

export enum PetitionType {
  HEALTH = 'Sanidad',
  FAMILY = 'Familiar',
  SPIRITUAL = 'Espiritual',
  LOSS = 'Perdida',
  FORGIVENESS = 'Perdón',
}

export class CreatePetitionDto {
  @IsEnum(PetitionType)
  type: PetitionType;

  @IsString()
  @MaxLength(100)
  description: string;

  @IsString()
  userId: string; // Asumiendo que este será el ID del usuario relacionado
}
