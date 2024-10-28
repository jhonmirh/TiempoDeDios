// src/credentials/credentials.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CredentialsService } from './credentials.service';
import { CredentialsController } from './credentials.controller';
import { Credential } from './credential.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthGuard } from 'src/guard/auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([Credential]),
  JwtModule.registerAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      secret: configService.get<string>('JWT_SECRET'),
      signOptions: { expiresIn: '1h' },
    }),
  }),
  ConfigModule,

],

  


  controllers: [CredentialsController],
  providers: [CredentialsService, AuthGuard],
  exports: [CredentialsService, JwtModule, AuthGuard],
})
export class CredentialsModule {}
