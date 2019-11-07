import { Repository, EntityRepository } from 'typeorm';
import { Cocktail } from './cocktail.entity';
import { CreateCocktailDto } from './dto/createCocktail.dto';
import { CocktailType } from './cocktailtype.enum';

@EntityRepository(Cocktail)
export class CocktailRepository extends Repository<Cocktail> {
  async getCocktails(): Promise<Cocktail[]> {
    const query = this.createQueryBuilder('cocktail');

    const cocktails = await query.getMany();
    return cocktails;
  }

  async createCocktails(
    createCocktailDto: CreateCocktailDto,
    cocktailType: CocktailType,
  ): Promise<Cocktail> {
    const cocktail = new Cocktail();

    cocktail.photo_url = createCocktailDto.photo_url;
    cocktail.name = createCocktailDto.name;
    cocktail.description = createCocktailDto.description;
    cocktail.ingredients = createCocktailDto.ingredients;
    cocktail.directions = createCocktailDto.directions;
    cocktail.type = cocktailType;

    await cocktail.save();
    return cocktail;
  }
}
