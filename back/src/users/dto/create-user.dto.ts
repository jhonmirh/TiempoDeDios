// src/users/dto/create-user.dto.ts
import { IsString, IsInt, IsUUID, Length, Matches, MinLength, MaxLength, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Matches(/^\+\d{2}\d{7,10}$/, {
    message: 'El formato del teléfono debe ser +0000000000 (con 2 dígitos de país y 7-10 dígitos).',
  })
  phone: string;

  @IsString()
  @Length(1, 50, { message: 'La dirección debe tener entre 1 y 50 caracteres.' })
  address: string;

  @IsString()
  country: string;

  @IsString()
  city: string;

  @IsInt()
  @Matches(/^\d{2}$/, { message: 'La edad debe ser un número de dos dígitos.' })
  age: number;

  @IsInt()
  @MinLength(6, { message: 'El NID debe tener al menos 6 dígitos.' })
  @MaxLength(9, { message: 'El NID no puede tener más de 9 dígitos.' })
  nid: number;
}
