import { PipeTransform, BadRequestException } from '@nestjs/common';
import { CocktailType } from '../cocktailtype.enum';

export class CocktailTypeValidationPipe implements PipeTransform {
  readonly allowedTypes = [
    CocktailType.Champagne_Cocktail,
    CocktailType.Shaken,
    CocktailType.Smash,
    CocktailType.Stirred,
    CocktailType.Swizzle,
  ];

  transform(value: any) {
    value = value.charAt(0).toUpperCase() + value.slice(1);
    if (!this.isTypeValid(value)) {
      throw new BadRequestException(`"${value}" is an invalid cocktail type!`);
    }
    return value;
  }

  private isTypeValid(type: any) {
    const index = this.allowedTypes.indexOf(type);
    return index !== -1;
  }
}
