// src/devotional/devotionals.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Devotional } from './devotional.entity';
import { DevotionalsService } from './devotionals.service';
import { DevotionalsController } from './devotionals.controller';
import { Pastor } from '../pastor/pastor.entity';
import { PastorsService } from '../pastor/pastors.service';
import { ConfigModule } from '@nestjs/config'; // Importa ConfigModule si usas ConfigService
import { JwtModule } from '@nestjs/jwt'; // Si el guard usa JwtService

@Module({
  imports: [
    TypeOrmModule.forFeature([Devotional, Pastor]),
    ConfigModule,  
    JwtModule,     
  ],
  controllers: [DevotionalsController],
  providers: [DevotionalsService, PastorsService],
})
export class DevotionalModule {}
