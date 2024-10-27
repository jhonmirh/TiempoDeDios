// src/devotional/devotional.entity.ts
import { Pastor } from '../pastor/pastor.entity'; // Ajusta la ruta según tu estructura
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('devotionals')
export class Devotional {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'date' })
  date: string;

  @Column({ length: 300 })
  description: string;

  @Column('text')
  text: string;

  @Column('text')
  citationText: string;

  @ManyToOne(() => Pastor, pastor => pastor.devotionals) // Ajusta la relación
  pastor: Pastor; // Esto es la propiedad que falta
}
