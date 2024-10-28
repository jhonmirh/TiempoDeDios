import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Devotional } from './devotional.entity';
import { Pastor } from '../pastor/pastor.entity';
import { CreateDevotionalDto } from './dto/create-devotional.dto';
import { PastorsService } from '../pastor/pastors.service';

@Injectable()
export class DevotionalsService {
  constructor(
    @InjectRepository(Devotional)
    private readonly devotionalRepository: Repository<Devotional>,
    private readonly pastorsService: PastorsService,
  ) {}

  async create(createDto: CreateDevotionalDto, pastor: Pastor): Promise<Devotional> {
    const devotional = this.devotionalRepository.create({
      ...createDto,
      pastor,
    });
    return this.devotionalRepository.save(devotional);
  }

  async findAll(): Promise<Devotional[]> {
    return this.devotionalRepository.find({ relations: ['pastor'] });
  }


  async findPastorById(id: string): Promise<Pastor> {
    return this.pastorsService.findById(id); // Llama al método findById del servicio PastorsService
  }



  async findByPastorId(pastorId: string): Promise<Devotional[]> {
    const devotionals = await this.devotionalRepository.find({
      where: { pastor: { id: pastorId } },
      relations: ['pastor'],
    });

    if (devotionals.length === 0) {
      throw new NotFoundException(`No devotionals found for pastor with ID ${pastorId}`);
    }

    return devotionals;
  }


}