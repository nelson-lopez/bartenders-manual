import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CocktailRepository } from './cocktail.repository';
import { Cocktail } from './cocktail.entity';
import { CreateCocktailDto } from './dto/createCocktail.dto';
import { CocktailType } from './cocktailtype.enum';

@Injectable()
export class CocktailService {
  constructor(
    @InjectRepository(CocktailRepository)
    private cocktailRepository: CocktailRepository,
  ) {}

  getCocktails(): Promise<Cocktail[]> {
    return this.cocktailRepository.getCocktails();
  }

  getCocktailById(id: number): Promise<Cocktail> {
    const cocktail = this.cocktailRepository.findOne(id);
    if (!cocktail) {
      throw new NotAcceptableException(`Cocktail with ${id} not found!`);
    }
    return cocktail;
  }

  async updateCocktail(
    id: number,
    createCocktailDto: CreateCocktailDto,
    cocktailType: CocktailType,
  ): Promise<Cocktail> {
    const cocktail = await this.getCocktailById(id);
    cocktail.photo_url = createCocktailDto.photo_url;
    cocktail.name = createCocktailDto.name;
    cocktail.description = createCocktailDto.description;
    cocktail.ingredients = createCocktailDto.ingredients;
    cocktail.directions = createCocktailDto.directions;
    cocktail.type = cocktailType;

    return cocktail;
  }

  createCocktail(
    createCocktailDto: CreateCocktailDto,
    cocktailType: CocktailType,
  ): Promise<Cocktail> {
    return this.cocktailRepository.createCocktails(
      createCocktailDto,
      cocktailType,
    );
  }

  async deleteCocktail(id: number): Promise<void> {
    const result = await this.cocktailRepository.delete(id);
    //// Checking for our result to return a proper delete response
    if (result.affected === 0) {
      throw new NotFoundException(`This cocktail ${id} is not valid!!`);
    }
  }
}
