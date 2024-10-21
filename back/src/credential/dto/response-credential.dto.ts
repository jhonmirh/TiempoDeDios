// src/credential/dto/response-credential.dto.ts
import { IsString } from 'class-validator';

export class ResponseCredentialDto {
  id: string;

  @IsString()
  email: string;

  // Campos opcionales o adicionales pueden incluirse aquí
  userId?: string; // ID del usuario o pastor relacionado

  constructor(credential: any) { // Cambiar 'any' por 'Credential' si es necesario
    this.id = credential.id;
    this.email = credential.email;
    this.userId = credential.userId; // Asegúrate de que este campo esté relacionado
  }
}
