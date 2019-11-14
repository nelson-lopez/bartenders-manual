import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtPayload } from './jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.singUp(authCredentialsDto);
  }

  async signIn(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    const username = await this.userRepository.validatUserPassword(
      authCredentialsDto,
    );

    if (!username) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    const payload: JwtPayload = { username };
    const accessToken = await this.jwtService.sign(payload);
    return { accessToken };
  }

  addCocktail(id: number, cockTailId: number): Promise<User> {
    return this.userRepository.addCocktail(id, cockTailId);
  }

  deleteCocktail(id: number, cockTailId: number): Promise<User> {
    return this.userRepository.deleteCocktail(id, cockTailId);
  }

  getUser(username: string): Promise<User[]> {
    return this.userRepository.getUser(username);
  }
}
