// src/petitions/petitions.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetitionsController } from './petitions.controller';
import { PetitionsService } from './petitions.service';
import { Petition } from './petition.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Petition])],
  controllers: [PetitionsController],
  providers: [PetitionsService],
})
export class PetitionsModule {}
