import { IsNotEmpty } from 'class-validator';
import { CocktailType } from '../cocktailtype.enum';

export class CreateCocktailDto {
  @IsNotEmpty()
  photo_url: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  ingredients: string;
  @IsNotEmpty()
  directions: string;
  @IsNotEmpty()
  type: CocktailType;
}
