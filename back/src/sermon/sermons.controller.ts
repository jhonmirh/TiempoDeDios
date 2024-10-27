// src/sermon/sermons.controller.ts
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SermonsService } from './sermons.service';
import { CreateSermonDto } from './dto/create-sermon.dto';
import { UpdateSermonDto } from './dto/update-sermon.dto';
import { ResponseSermonDto } from './dto/response-sermon.dto';
import { Sermon } from './sermon.entity';

@Controller('sermons')
export class SermonsController {
  constructor(private readonly sermonsService: SermonsService) {}

  @Post()
  async create(@Body() dto: CreateSermonDto): Promise<ResponseSermonDto> {
    const sermon = await this.sermonsService.create(dto);
    return new ResponseSermonDto(sermon);
  }

  @Get()
  async findAll(): Promise<ResponseSermonDto[]> {
    const sermons = await this.sermonsService.findAll();
    return sermons.map(sermon => new ResponseSermonDto(sermon));
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResponseSermonDto> {
    const sermon = await this.sermonsService.findOne(id);
    return new ResponseSermonDto(sermon);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateSermonDto,
  ): Promise<ResponseSermonDto> {
    const sermon = await this.sermonsService.update(id, dto);
    return new ResponseSermonDto(sermon);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.sermonsService.remove(id);
  }

  @Get('pastor/:pastorId')
  async findByPastorId(@Param('pastorId') pastorId: string): Promise<ResponseSermonDto[]> {
    const sermons = await this.sermonsService.findByPastorId(pastorId);
    return sermons.map(sermon => new ResponseSermonDto(sermon));
  }
}
