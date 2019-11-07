import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CocktailRepository } from './cocktail.repository';
import { Cocktail } from './cocktail.entity';
import { CreateCocktailDto } from './dto/createCocktail.dto';

@Injectable()
export class CocktailService {
  constructor(
    @InjectRepository(CocktailRepository)
    private cocktailRepository: CocktailRepository,
  ) {}

  getCocktails(): Promise<Cocktail[]> {
    return this.cocktailRepository.getCocktails();
  }

  createCocktail(createCocktailDto: CreateCocktailDto): Promise<Cocktail> {
    return this.cocktailRepository.createCocktails(createCocktailDto);
  }
}
