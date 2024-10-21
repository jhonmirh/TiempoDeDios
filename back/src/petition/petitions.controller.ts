// src/petitions/petitions.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { PetitionsService } from './petitions.service';
import { CreatePetitionDto } from './dto/create-petition.dto';
import { Petition } from './petition.entity';

@Controller('petitions')
export class PetitionsController {
  constructor(private readonly petitionsService: PetitionsService) {}

  @Post()
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
  async remove(@Param('id') id: string): Promise<void> {
    return this.petitionsService.remove(id);
  }
}
