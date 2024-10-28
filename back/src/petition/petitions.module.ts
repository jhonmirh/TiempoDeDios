// src/petitions/petitions.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetitionsController } from './petitions.controller';
import { PetitionsService } from './petitions.service';
import { Petition } from './petition.entity';
import { CredentialsModule } from 'src/credential/credentials.module';
CredentialsModule
@Module({
  imports: [TypeOrmModule.forFeature([Petition]), CredentialsModule],
  controllers: [PetitionsController],
  providers: [PetitionsService],
})
export class PetitionsModule {}
