import { Controller, Get, Post, Body } from '@nestjs/common';
import { CocktailService } from './cocktail.service';
import { CreateCocktailDto } from './dto/createCocktail.dto';
import { Cocktail } from './cocktail.entity';
import { CocktailTypeValidationPipe } from './pipes/type-validation.pipe';
import { CocktailType } from './cocktailtype.enum';

@Controller('cocktails')
export class CocktailController {
  constructor(private cocktailService: CocktailService) {}

  @Get()
  getCocktail() {
    return this.cocktailService.getCocktails();
  }

  @Post()
  createCocktail(
    @Body('type', CocktailTypeValidationPipe)
    cocktailType: CocktailType,
    @Body() createCockTailDto: CreateCocktailDto,
  ): Promise<Cocktail> {
    return this.cocktailService.createCocktail(createCockTailDto, cocktailType);
  }
}
