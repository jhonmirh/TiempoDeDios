// src/petitions/petition.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { PetitionType } from './dto/create-petition.dto'; // Asegúrate de importar el tipo
import { User } from 'src/users/users.entity';

@Entity('petitions')
export class Petition {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: PetitionType; // Aquí aseguramos que sea de tipo PetitionType

  @Column({ length: 100 })
  description: string;

  @ManyToOne(() => User, (user) => user.petitions)
  user: User;
}
