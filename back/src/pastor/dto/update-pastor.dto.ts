// src/pastors/dto/update-pastor.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreatePastorDto } from './create-pastor.dto';

export class UpdatePastorDto extends PartialType(CreatePastorDto) {}
