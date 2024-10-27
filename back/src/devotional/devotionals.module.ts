// src/pastor/pastor.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Devotional } from './devotional.entity';
import { DevotionalsService } from '../devotional/devotionals.service';
import { DevotionalsController } from './devotionals.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Devotional])],
  controllers: [DevotionalsController],
  providers: [DevotionalsService],
  exports: [DevotionalsService], 
})
export class DevotionalModule {}
