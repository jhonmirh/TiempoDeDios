// src/pastors/entities/pastor.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Devotional } from 'src/devotional/devotional.entity';
import { Sermon } from 'src/sermon/sermon.entity';

@Entity('pastors')
export class Pastor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  age: number;

  @Column()
  nid: number;

  @Column() // Cambia a number si realmente es un número o mantén string si es un texto largo
  account: string;

  @Column()
  bank: string;

  @Column()
  federation: string;

  @OneToMany(() => Devotional, (devotional) => devotional.pastor)
  devotionals: Devotional[];

  @OneToMany(() => Sermon, (sermon) => sermon.pastor)
  sermons: Sermon[];
}
