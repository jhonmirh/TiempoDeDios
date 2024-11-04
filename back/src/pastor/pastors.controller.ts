// src/pastors/pastors.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PastorsService } from './pastors.service';
import { CreatePastorDto } from './dto/create-pastor.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guard/auth.guard';
import { RolesGuard } from 'src/guard/roles.guard';
import { ApiSecurity } from '@nestjs/swagger';
import { UseGuards } from '@nestjs/common';
import { Roles } from 'src/decorators/roles.decorator';

@ApiTags('Pastor')
@Controller('pastors')
export class PastorsController {
  constructor(private readonly pastorsService: PastorsService) {}

  @Post()
  @UseGuards(AuthGuard, RolesGuard)
  @ApiSecurity('bearer')
  @Roles('admin')
  create(@Body() dto: CreatePastorDto) {
    return this.pastorsService.create(dto);
  }

  @Get()
  @UseGuards(AuthGuard, RolesGuard)
  @ApiSecurity('bearer')
  @Roles('admin')
  findAll() {
    return this.pastorsService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard, RolesGuard)
  @ApiSecurity('bearer')
  findOne(@Param('id') id: string) {
    return this.pastorsService.findOne(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard, RolesGuard)
  @ApiSecurity('bearer')
  @Roles('admin')
  update(@Param('id') id: string, @Body() dto: CreatePastorDto) {
    return this.pastorsService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard, RolesGuard)
  @ApiSecurity('bearer')
  @Roles('admin')
  remove(@Param('id') id: string) {
    return this.pastorsService.remove(id);
  }
}
