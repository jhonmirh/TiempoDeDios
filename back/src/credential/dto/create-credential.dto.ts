// src/credentials/dto/create-credential.dto.ts
import { IsString, IsEmail, Length, Matches } from 'class-validator';

export class CreateCredentialDto {
  @IsEmail({}, { message: 'Correo inválido' })
  email: string;

  @IsString()
  @Length(8, 10, { message: 'La contraseña debe tener entre 8 y 10 caracteres' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, {
    message: 'La contraseña debe contener al menos 2 números, 3 letras minúsculas y 3 letras mayúsculas.',
  })
  password: string;

  @IsString()
  userId?: string;

  @IsString()
  pastorId?: string;
}
