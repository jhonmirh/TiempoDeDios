// src/petitions/petitions.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Petition } from './petition.entity';
import { CreatePetitionDto } from './dto/create-petition.dto';

@Injectable()
export class PetitionsService {
  constructor(
    @InjectRepository(Petition)
    private petitionsRepository: Repository<Petition>,
  ) {}

  async create(dto: CreatePetitionDto): Promise<Petition> {
    const petition = this.petitionsRepository.create(dto);
    return this.petitionsRepository.save(petition);
  }

  async findAll(): Promise<Petition[]> {
    return this.petitionsRepository.find({ relations: ['user'] });
  }

  async findOne(id: string): Promise<Petition> {
    const petition = await this.petitionsRepository.findOne({
      where: { id },
      relations: ['user'],
    });
    if (!petition) throw new NotFoundException('Petición no encontrada');
    return petition;
  }

  async update(id: string, dto: CreatePetitionDto): Promise<Petition> {
    const petition = await this.petitionsRepository.preload({ id, ...dto });
    if (!petition) throw new NotFoundException('Petición no encontrada');
    return this.petitionsRepository.save(petition);
  }

  async remove(id: string): Promise<void> {
    const petition = await this.findOne(id);
    await this.petitionsRepository.remove(petition);
  }
}
