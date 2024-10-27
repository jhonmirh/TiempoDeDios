// src/pastors/dto/create-pastor.dto.ts
import { IsString, IsInt, IsPhoneNumber } from 'class-validator';

export class CreatePastorDto {
  @IsPhoneNumber() phone: string; // Asegúrate de usar un validador de teléfono si es necesario
  @IsString() address: string;
  @IsString() country: string;
  @IsString() city: string;
  @IsInt() age: number;
  @IsInt() nid: number;
  @IsString() account: string; // Cambia a string si así lo deseas
  @IsString() bank: string;
  @IsString() federation: string;
}
