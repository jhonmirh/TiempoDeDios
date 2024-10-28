// src/sermon/sermons.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sermon } from './sermon.entity';
import { SermonsController } from './sermons.controller';
import { SermonsService } from './sermons.service';
import { CredentialsModule } from 'src/credential/credentials.module';

@Module({
  imports: [TypeOrmModule.forFeature([Sermon]), CredentialsModule],
  controllers: [SermonsController],
  providers: [SermonsService],
})
export class SermonsModule {}
