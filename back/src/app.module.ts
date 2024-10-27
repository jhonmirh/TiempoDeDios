// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetitionsModule } from './petitions/petitions.module'; // Ajusta la ruta según sea necesario

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'your_db_user',
      password: 'your_db_password',
      database: 'kairos',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PetitionsModule,
    
    // Otros módulos...
  ],
})
export class AppModule {}
