// src/sermon/sermons.controller.ts
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SermonsService } from './sermons.service';
import { CreateSermonDto } from './dto/create-sermon.dto';
import { UpdateSermonDto } from './dto/update-sermon.dto';
import { ResponseSermonDto } from './dto/response-sermon.dto';
import { Sermon } from './sermon.entity';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guard/auth.guard';
import { RolesGuard } from 'src/guard/roles.guard';
import { ApiSecurity } from '@nestjs/swagger';
import { UseGuards } from '@nestjs/common';
import { Roles } from 'src/decorators/roles.decorator';

@ApiTags('sermons')
@Controller('sermons')
export class SermonsController {
  constructor(private readonly sermonsService: SermonsService) {}

  @Post()
  @UseGuards(AuthGuard, RolesGuard)
  @ApiSecurity('bearer')
  @Roles('admin')
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
  @UseGuards(AuthGuard, RolesGuard)
  @ApiSecurity('bearer')
  @Roles('admin')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateSermonDto,
  ): Promise<ResponseSermonDto> {
    const sermon = await this.sermonsService.update(id, dto);
    return new ResponseSermonDto(sermon);
  }

  @Delete(':id')
  @UseGuards(AuthGuard, RolesGuard)
  @ApiSecurity('bearer')
  @Roles('admin')
  async remove(@Param('id') id: string): Promise<void> {
    return this.sermonsService.remove(id);
  }

  @Get('pastor/:pastorId')
  @UseGuards(AuthGuard, RolesGuard)
  @ApiSecurity('bearer')
  @Roles('admin')
  async findByPastorId(@Param('pastorId') pastorId: string): Promise<ResponseSermonDto[]> {
    const sermons = await this.sermonsService.findByPastorId(pastorId);
    return sermons.map(sermon => new ResponseSermonDto(sermon));
  }
}
