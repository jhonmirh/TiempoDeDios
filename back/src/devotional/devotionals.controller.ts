import { Body, Controller, Post, Param , Get} from '@nestjs/common';
import { DevotionalsService } from './devotionals.service';
import { CreateDevotionalDto } from './dto/create-devotional.dto';
import { Pastor } from '../pastor/pastor.entity';
import { ResponseDevotionalDto } from './dto/response-devotional.dto';
import { PastorsService } from '../pastor/pastors.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guard/auth.guard';
import { RolesGuard } from 'src/guard/roles.guard';
import { ApiSecurity } from '@nestjs/swagger';
import { UseGuards } from '@nestjs/common';
import { Roles } from 'src/decorators/roles.decorator';
import { Devotional } from './devotional.entity';

@ApiTags('devotionals')
@Controller('devotionals')
export class DevotionalsController {
  constructor(
    private readonly devotionalsService: DevotionalsService,
    private readonly pastorsService: PastorsService,
  ) {}
  @Post('devotional')
  @UseGuards(AuthGuard, RolesGuard)
  @ApiSecurity('bearer')
  @Roles('admin')
  async create(@Body() createDto: CreateDevotionalDto, @Param('pastorId') pastorId: string): Promise<ResponseDevotionalDto> {
    const pastor = await this.findPastorById(pastorId);
    const devotional = await this.devotionalsService.create(createDto, pastor);
    return new ResponseDevotionalDto(devotional);
  }


  @Get()
  @UseGuards(AuthGuard, RolesGuard)
  @ApiSecurity('bearer')
  async findAll(): Promise<ResponseDevotionalDto[]> {
    const devotionals = await this.devotionalsService.findAll();
    return devotionals.map((devotional) => new ResponseDevotionalDto(devotional));
  }
  

  private async findPastorById(pastorId: string): Promise<Pastor> {
    return this.pastorsService.findById(pastorId);
  }


  @Get('pastor/:pastorId')
  @UseGuards(AuthGuard, RolesGuard)
  @ApiSecurity('bearer')
  @Roles('admin')
  async findByPastor(@Param('pastorId') pastorId: string): Promise<Devotional[]> {
    return this.devotionalsService.findByPastorId(pastorId);
  }

}
