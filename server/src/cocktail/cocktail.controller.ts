import { Controller, Get, Post, Body } from '@nestjs/common';
import { CocktailService } from './cocktail.service';
import { CreateCocktailDto } from './dto/createCocktail.dto';
import { Cocktail } from './cocktail.entity';

@Controller('cocktails')
export class CocktailController {
  constructor(private cocktailService: CocktailService) {}

  @Get()
  getCocktail() {
    return this.cocktailService.getCocktails();
  }

  @Post()
  createCocktail(
    @Body() createCocktailDto: CreateCocktailDto,
  ): Promise<Cocktail> {
    return this.cocktailService.createCocktail(createCocktailDto);
  }
}
