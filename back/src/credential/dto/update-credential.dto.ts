// src/credentials/dto/update-credential.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateCredentialDto } from './create-credential.dto';

export class UpdateCredentialDto extends PartialType(CreateCredentialDto) {}
