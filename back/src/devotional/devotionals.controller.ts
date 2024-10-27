import { Body, Controller, Post, Param } from '@nestjs/common';
import { DevotionalsService } from './devotionals.service';
import { CreateDevotionalDto } from './dto/create-devotional.dto';
import { Pastor } from '../pastor/pastor.entity';
import { ResponseDevotionalDto } from './dto/response-devotional.dto';
import { PastorsService } from '../pastor/pastors.service';

@Controller('devotionals')
export class DevotionalsController {
  constructor(
    private readonly devotionalsService: DevotionalsService,
    private readonly pastorsService: PastorsService,
  ) {}
  @Post()
  async create(@Body() createDto: CreateDevotionalDto, @Param('pastorId') pastorId: string): Promise<ResponseDevotionalDto> {
    const pastor = await this.findPastorById(pastorId);
    const devotional = await this.devotionalsService.create(createDto, pastor);
    return new ResponseDevotionalDto(devotional);
  }

  private async findPastorById(pastorId: string): Promise<Pastor> {
    return this.pastorsService.findById(pastorId);
  }
}
