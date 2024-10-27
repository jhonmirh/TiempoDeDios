import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Pastor } from 'src/pastor/pastor.entity';

@Entity('sermons')
export class Sermon {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'date' })
  date: string;

  @Column({ length: 1000 })
  description: string;

  @Column('text')
  text: string;

  @Column('text')
  citationText: string;

  @Column('text')
  quote: string;

  @ManyToOne(() => Pastor, (pastor) => pastor.sermons)
  pastor: Pastor;
}
