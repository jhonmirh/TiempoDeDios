// // src/pastor/pastor.module.ts
// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Devotional } from './devotional.entity';
// import { DevotionalsService } from '../devotional/devotionals.service';
// import { DevotionalsController } from './devotionals.controller';
// @Module({
//   imports: [TypeOrmModule.forFeature([Devotional])],
//   controllers: [DevotionalsController],
//   providers: [DevotionalsService],
//   exports: [DevotionalsService], 
// })
// export class DevotionalModule {}


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevotionalsService } from './devotionals.service';
import { Devotional } from './devotional.entity';
import { PastorsModule } from '../pastor/pastors.module'; // Importa el módulo de pastores

@Module({
  imports: [TypeOrmModule.forFeature([Devotional]), PastorsModule], // Asegúrate de incluir PastorsModule aquí
  providers: [DevotionalsService],
})
export class DevotionalModule {}