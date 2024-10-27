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

  async findById(id: string): Promise<Pastor> {
    const pastor = await this.pastorRepository.findOne({ where: { id } });
    if (!pastor) {
      throw new NotFoundException(`Pastor with ID ${id} not found`);
    }
    return pastor;
  }
  // Eliminar este método, ya que se maneja en el PastorsService
  // async findById(id: string): Promise<Pastor> {
  //   const pastor = await this.pastorRepository.findOne({ where: { id } });
  //   if (!pastor) {
  //     throw new NotFoundException(`Pastor with ID ${id} not found`);
  //   }
  //   return pastor;
  // }

  // Otros métodos...
}
