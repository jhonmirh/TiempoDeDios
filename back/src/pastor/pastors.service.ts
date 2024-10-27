// src/pastors/pastors.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pastor } from './pastor.entity';
import { CreatePastorDto } from './dto/create-pastor.dto';

@Injectable()
export class PastorsService {
  constructor(
    @InjectRepository(Pastor) private pastorRepository: Repository<Pastor>,
  ) {}

  async create(dto: CreatePastorDto): Promise<Pastor> {
    const pastor = this.pastorRepository.create(dto);
    return this.pastorRepository.save(pastor);
  }

  async findAll(): Promise<Pastor[]> {
    return this.pastorRepository.find();
  }

  async findOne(id: string): Promise<Pastor> {
    const pastor = await this.pastorRepository.findOne({ where: { id } });
    if (!pastor) throw new NotFoundException('Pastor no encontrado');
    return pastor;
  }

  async update(id: string, dto: CreatePastorDto): Promise<Pastor> {
    const pastor = await this.pastorRepository.preload({ id, ...dto });
    if (!pastor) throw new NotFoundException('Pastor no encontrado');
    return this.pastorRepository.save(pastor);
  }

  async remove(id: string): Promise<void> {
    const pastor = await this.findOne(id);
    await this.pastorRepository.remove(pastor);
  }
}
