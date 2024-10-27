// src/credentials/credentials.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CredentialsService } from './credentials.service';
import { CredentialsController } from './credentials.controller';
import { Credential } from './credential.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Credential])],
  controllers: [CredentialsController],
  providers: [CredentialsService],
  exports: [CredentialsService],
})
export class CredentialsModule {}
