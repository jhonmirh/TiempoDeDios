// src/pastors/pastors.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PastorsService } from './pastors.service';
import { PastorsController } from './pastors.controller';
import { Pastor } from './pastor.entity';
import { CredentialsModule } from 'src/credential/credentials.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pastor]), CredentialsModule],
  controllers: [PastorsController],
  providers: [PastorsService],
  exports: [PastorsService],
})
export class PastorsModule {}
