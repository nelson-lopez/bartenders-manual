import { IsNotEmpty } from 'class-validator';

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
}
