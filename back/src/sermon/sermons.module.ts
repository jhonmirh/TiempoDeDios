// src/sermon/sermons.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sermon } from './sermon.entity';
import { SermonsController } from './sermons.controller';
import { SermonsService } from './sermons.service';

@Module({
  imports: [TypeOrmModule.forFeature([Sermon])],
  controllers: [SermonsController],
  providers: [SermonsService],
})
export class SermonsModule {}
