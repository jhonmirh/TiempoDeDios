// src/credentials/credentials.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CredentialsService } from './credentials.service';
import { CreateCredentialDto } from './dto/create-credential.dto';
import { UpdateCredentialDto } from './dto/update-credential.dto';
import { ResponseCredentialDto } from './dto/response-credential.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guard/auth.guard';
import { RolesGuard } from 'src/guard/roles.guard';
import { ApiSecurity } from '@nestjs/swagger';
import { UseGuards } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';

@ApiTags('credentials')
@Controller('credentials')
export class CredentialsController {
  constructor(private readonly credentialsService: CredentialsService) { }

  @Post('credential')
  @ApiOperation({ summary: 'Loguear un usuario' })
  @ApiResponse({ status: 201, description: 'Usuario logueado exitosamente', type: LoginUserDto })
  @ApiResponse({ status: 500, description: 'Error inesperado al loguear el usuario' })
  @UseGuards(AuthGuard, RolesGuard)
  @ApiSecurity('bearer')
  create(@Body() createCredentialDto: CreateCredentialDto) {
    return this.credentialsService.create(createCredentialDto);
  }


  @Put(':id')
  @ApiOperation({ summary: 'Modificar Credencial' })
  @ApiResponse({ status: 201, description: 'Usuario logueado exitosamente', type: LoginUserDto })
  @ApiResponse({ status: 500, description: 'Error inesperado al loguear el usuario' })
  @UseGuards(AuthGuard, RolesGuard)
  @ApiSecurity('bearer')
  update(@Param('id') id: string, @Body() updateCredentialDto: UpdateCredentialDto) {
    return this.credentialsService.update(id, updateCredentialDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard, RolesGuard)
  @ApiSecurity('bearer')
  remove(@Param('id') id: string) {
    return this.credentialsService.remove(id);
  }

  @Get(':id')
  @UseGuards(AuthGuard, RolesGuard)
  @ApiSecurity('bearer')
  async findOne(@Param('id') id: string): Promise<ResponseCredentialDto> {
    const credential = await this.credentialsService.findOne(id);
    return new ResponseCredentialDto(credential);
  }

  @Get()
  @UseGuards(AuthGuard, RolesGuard)
  @ApiSecurity('bearer')
  async findAll(): Promise<ResponseCredentialDto[]> {
    const credentials = await this.credentialsService.findAll();
    return credentials.map(credential => new ResponseCredentialDto(credential));
  }


}
