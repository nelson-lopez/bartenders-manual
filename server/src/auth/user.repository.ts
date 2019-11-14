import { EntityRepository, Repository, getCustomRepository } from 'typeorm';
import * as bcrypt from '../../node_modules/bcryptjs';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import {
  ConflictException,
  InternalServerErrorException,
  NotAcceptableException,
} from '@nestjs/common';
import { CocktailRepository } from '../cocktail/cocktail.repository';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async singUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const newUser = new User();
    const { username, password } = authCredentialsDto;

    newUser.salt = await bcrypt.genSalt();
    newUser.username = username;

    /// making sure we append a new hashed password before saving user
    newUser.password = await this.hashPassword(password, newUser.salt);

    /// Throw an error if user name  already exist beforehand

    try {
      await newUser.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async addCocktail(id: number, cocktailId: number): Promise<User> {
    const user = await this.findOne(id);
    /// Import cocktail typeorm connection
    const cocktailRepository = getCustomRepository(CocktailRepository);

    const cocktail = await cocktailRepository.findOne(cocktailId);
    if (user.cocktails.indexOf(cocktail) === -1) {
      user.cocktails.push(cocktail);
      user.save();
    } else {
      throw new ConflictException('Cocktail already exist in favorites');
    }

    return user;
  }

  async getUser(username: string): Promise<User[]> {
    const user = await this.find({ username: username });
    console.log(user);
    if (!user) {
      throw new NotAcceptableException(`User with ${username} not found!`);
    }
    return user;
  }

  async deleteCocktail(id: number, cocktailId: number): Promise<User> {
    const user = await this.findOne(id);
    const cocktailRepository = getCustomRepository(CocktailRepository);
    const cocktail = await cocktailRepository.findOne(cocktailId);
    /// Grab requested cocktails index and remove cocktail from index.
    const idx = user.cocktails.findIndex(
      cocktails => cocktails.id === cocktail.id,
    );
    user.cocktails.splice(idx, 1);
    user.save();
    return user;
  }

  async validatUserPassword(authCredentialsDto: AuthCredentialsDto) {
    const { username, password } = authCredentialsDto;
    const user = await this.findOne({ username });

    if (user && user.validatePassword(password)) {
      return user.username;
    } else {
      return null;
    }
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
