// src/credentials/credentials.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CredentialsService } from './credentials.service';
import { CreateCredentialDto } from './dto/create-credential.dto';
import { UpdateCredentialDto } from './dto/update-credential.dto';
import { ResponseCredentialDto } from './dto/response-credential.dto';

@Controller('credentials')
export class CredentialsController {
  constructor(private readonly credentialsService: CredentialsService) {}

  @Post()
  create(@Body() createCredentialDto: CreateCredentialDto) {
    return this.credentialsService.create(createCredentialDto);
  }


  @Put(':id')
  update(@Param('id') id: string, @Body() updateCredentialDto: UpdateCredentialDto) {
    return this.credentialsService.update(id, updateCredentialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.credentialsService.remove(id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResponseCredentialDto> {
    const credential = await this.credentialsService.findOne(id);
    return new ResponseCredentialDto(credential);
  }
  
  @Get()
  async findAll(): Promise<ResponseCredentialDto[]> {
    const credentials = await this.credentialsService.findAll();
    return credentials.map(credential => new ResponseCredentialDto(credential));
  }
  

}
