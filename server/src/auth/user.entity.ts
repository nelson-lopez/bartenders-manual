import {
  Entity,
  Unique,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Cocktail } from 'src/cocktail/cocktail.entity';

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  salt: string;

  @ManyToMany(type => Cocktail, cocktails => cocktails.user, {
    eager: true,
  })
  @JoinTable()
  cocktails: Cocktail[];

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
