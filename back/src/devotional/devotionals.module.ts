// src/pastor/pastor.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pastor } from 'src/pastor/pastor.entity';
import { PastorsService } from 'src/pastor/pastors.service';
import { DevotionalsService } from '../devotional/devotionals.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pastor])],
  providers: [PastorsService, DevotionalsService],
  exports: [PastorsService], // Asegúrate de exportar el servicio si lo necesitas en otros módulos
})
export class PastorsModule {}
