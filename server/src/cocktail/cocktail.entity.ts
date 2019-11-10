import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
import { CocktailType } from './cocktailtype.enum';
import { User } from 'src/auth/user.entity';

@Entity()
export class Cocktail extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  photo_url: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  ingredients: string;
  @Column()
  directions: string;
  @Column()
  type: CocktailType;

  @ManyToMany(type => User, user => user.cocktails)
  user: User[];
}
