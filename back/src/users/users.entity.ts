import { Petition } from 'src/petition/petition.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';


@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  phone: string;

  @Column({ length: 50 })
  address: string;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column({ type: 'int', width: 2 })
  age: number;

  @Column({ type: 'bigint', unique: true })
  nid: number;

  @OneToMany(() => Petition, (petition) => petition.user)
  petitions: Petition[];
}
