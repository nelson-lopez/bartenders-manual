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
    const {
      photo_url,
      name,
      description,
      ingredients,
      directions,
    } = createCocktailDto;

    cocktail.photo_url = photo_url;
    cocktail.name = name;
    cocktail.description = description;
    cocktail.ingredients = ingredients;
    cocktail.directions = directions;
    cocktail.type = cocktailType;

    await cocktail.save();
    return cocktail;
  }
}
