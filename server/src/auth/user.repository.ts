import { EntityRepository, Repository, getCustomRepository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CocktailRepository } from 'src/cocktail/cocktail.repository';

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
    const cocktailRepository = getCustomRepository(CocktailRepository);
    const cocktail = await cocktailRepository.findOne(cocktailId);
    user.cocktails = cocktail;
    user.save();
    return user;
  }

  /// validate user password

  async validatUserPassword(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<string> {
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
