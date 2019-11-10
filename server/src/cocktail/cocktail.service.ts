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
import { User } from 'src/auth/user.entity';

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

  updateCockTail(id: number, updateCocktailDto: CreateCocktailDto, user: User) {
    return this.cocktailRepository.updateCocktail(id, updateCocktailDto, user);
  }

  createCocktail(
    createCocktailDto: CreateCocktailDto,
    cocktailType: CocktailType,
    user: User,
  ): Promise<Cocktail> {
    return this.cocktailRepository.createCocktails(
      createCocktailDto,
      cocktailType,
      user,
    );
  }

  async deleteCocktail(id: number, user: User): Promise<void> {
    const result = await this.cocktailRepository.delete(id);
    //// Checking for our result to return a proper delete response
    if (result.affected === 0) {
      throw new NotFoundException(`This cocktail ${id} is not valid!!`);
    }
  }
}
