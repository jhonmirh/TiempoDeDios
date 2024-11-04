// src/petitions/petitions.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { PetitionsService } from './petitions.service';
import { CreatePetitionDto } from './dto/create-petition.dto';
import { Petition } from './petition.entity';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guard/auth.guard';
import { RolesGuard } from 'src/guard/roles.guard';
import { ApiSecurity } from '@nestjs/swagger';
import { UseGuards } from '@nestjs/common';
import { Roles } from 'src/decorators/roles.decorator';

@ApiTags('petitions')
@Controller('petitions')
export class PetitionsController {
  constructor(private readonly petitionsService: PetitionsService) {}

  @Post()
  @UseGuards(AuthGuard, RolesGuard)
  @ApiSecurity('bearer')

  async create(@Body() dto: CreatePetitionDto): Promise<Petition> {
    return this.petitionsService.create(dto);
  }

  @Get()
  async findAll(): Promise<Petition[]> {
    return this.petitionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Petition> {
    return this.petitionsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: CreatePetitionDto,
  ): Promise<Petition> {
    return this.petitionsService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard, RolesGuard)
  @ApiSecurity('bearer')
  @Roles('admin')
  async remove(@Param('id') id: string): Promise<void> {
    return this.petitionsService.remove(id);
  }
}
