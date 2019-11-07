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
  @IsNotEmpty()
  type: CocktailType;
}

export enum CocktailType {
  Champagne_Cocktail = 'Champagne Cocktail',
  Shaken = 'Shaken',
  Sour = 'Sour',
  Smash = 'Sour',
  Swizzle = 'Swizzle',
  Stirred = 'Stirred',
}
