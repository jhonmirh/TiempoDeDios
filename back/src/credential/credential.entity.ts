import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Pastor } from 'src/pastor/pastor.entity';
import { User } from 'src/users/users.entity';


@Entity('credentials')
export class Credential {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  user: User;

  @OneToOne(() => Pastor, { nullable: true })
  @JoinColumn()
  pastor: Pastor;
}
