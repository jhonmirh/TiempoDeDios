// src/users/dto/update-user.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsOptional } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  phone?: string;

  @IsOptional()
  address?: string;

  @IsOptional()
  country?: string;

  @IsOptional()
  city?: string;

  @IsOptional()
  age?: number;

  @IsOptional()
  nid?: number;
}
