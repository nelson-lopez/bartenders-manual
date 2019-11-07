import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { CocktailType } from './dto/createCocktail.dto';

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
}
