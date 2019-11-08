import {
  Controller,
  Get,
  Post,
  Body,
  ParseIntPipe,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
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
  @Get('/:id')
  getCocktailById(@Param('id', ParseIntPipe) id: number): Promise<Cocktail> {
    return this.cocktailService.getCocktailById(id);
  }

  @Patch('/:id')
  updateCocktail(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    cockTailDto: CreateCocktailDto,
    @Body('type')
    cocktailType: CocktailType,
  ): Promise<Cocktail> {
    return this.cocktailService.updateCocktail(id, cockTailDto, cocktailType);
  }

  @Post()
  createCocktail(
    @Body('type', CocktailTypeValidationPipe)
    cocktailType: CocktailType,
    @Body() createCockTailDto: CreateCocktailDto,
  ): Promise<Cocktail> {
    return this.cocktailService.createCocktail(createCockTailDto, cocktailType);
  }

  @Delete('/:id')
  deleteCocktail(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.cocktailService.deleteCocktail(id);
  }
}
