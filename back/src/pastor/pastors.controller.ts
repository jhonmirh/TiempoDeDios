// src/pastors/pastors.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PastorsService } from './pastors.service';
import { CreatePastorDto } from './dto/create-pastor.dto';

@Controller('pastors')
export class PastorsController {
  constructor(private readonly pastorsService: PastorsService) {}

  @Post()
  create(@Body() dto: CreatePastorDto) {
    return this.pastorsService.create(dto);
  }

  @Get()
  findAll() {
    return this.pastorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pastorsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: CreatePastorDto) {
    return this.pastorsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pastorsService.remove(id);
  }
}
