// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetitionsModule } from './petition/petitions.module';
import { CredentialsModule } from './credential/credentials.module';
import { DevotionalModule } from './devotional/devotionals.module';
import { UsersModule } from './users/users.module';
// import { ConfigModule } from '@nestjs/config';
import { SermonsModule } from './sermon/sermons.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'gori',
      database: 'kairos',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PetitionsModule,
    CredentialsModule,
    SermonsModule,
    DevotionalModule,
    UsersModule,

  ],
  controllers: [AppController],
  providers: [AppService],
  exports: []

})
export class AppModule { }
