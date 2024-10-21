// src/sermon/sermons.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sermon } from './sermon.entity';
import { CreateSermonDto } from './dto/create-sermon.dto';
import { UpdateSermonDto } from './dto/update-sermon.dto';

@Injectable()
export class SermonsService {
  constructor(
    @InjectRepository(Sermon)
    private sermonsRepository: Repository<Sermon>,
  ) {}

  async create(dto: CreateSermonDto): Promise<Sermon> {
    const sermon = this.sermonsRepository.create(dto);
    return this.sermonsRepository.save(sermon);
  }

  async findAll(): Promise<Sermon[]> {
    return this.sermonsRepository.find({ relations: ['pastor'] });
  }

  async findOne(id: string): Promise<Sermon> {
    const sermon = await this.sermonsRepository.findOne({
      where: { id },
      relations: ['pastor'],
    });
    if (!sermon) throw new NotFoundException('Sermón no encontrado');
    return sermon;
  }

  async update(id: string, dto: UpdateSermonDto): Promise<Sermon> {
    const sermon = await this.sermonsRepository.preload({ id, ...dto });
    if (!sermon) throw new NotFoundException('Sermón no encontrado');
    return this.sermonsRepository.save(sermon);
  }

  async remove(id: string): Promise<void> {
    const sermon = await this.findOne(id);
    await this.sermonsRepository.remove(sermon);
  }

  async findByPastorId(pastorId: string): Promise<Sermon[]> {
    return this.sermonsRepository.find({ where: { pastor: { id: pastorId } } });
  }
}
