// src/credentials/credentials.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Credential } from './credential.entity';
import { CreateCredentialDto } from './dto/create-credential.dto';
import { UpdateCredentialDto } from './dto/update-credential.dto';

@Injectable()
export class CredentialsService {
  constructor(
    @InjectRepository(Credential)
    private readonly credentialRepository: Repository<Credential>,
  ) {}

  async create(createCredentialDto: CreateCredentialDto): Promise<Credential> {
    const newCredential = this.credentialRepository.create(createCredentialDto);
    return await this.credentialRepository.save(newCredential);
  }

  async findAll(): Promise<Credential[]> {
    return await this.credentialRepository.find();
  }

  async findOne(id: string): Promise<Credential> {
    const credential = await this.credentialRepository.findOne({ where: { id } });
    if (!credential) {
      throw new NotFoundException(`Credencial con ID ${id} no encontrada.`);
    }
    return credential;
  }

  async update(id: string, updateCredentialDto: UpdateCredentialDto): Promise<Credential> {
    const credential = await this.credentialRepository.preload({
      id,
      ...updateCredentialDto,
    });
    if (!credential) {
      throw new NotFoundException(`Credencial con ID ${id} no encontrada.`);
    }
    return await this.credentialRepository.save(credential);
  }

  async remove(id: string): Promise<void> {
    const credential = await this.findOne(id);
    await this.credentialRepository.remove(credential);
  }
}
