import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  Param,
  ParseIntPipe,
  Patch,
  UseGuards,
  Logger,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto) {
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }

  @UseGuards(AuthGuard())
  @Patch(':id/add')
  addCocktail(
    @Param('id', ParseIntPipe) id: number,
    @Body('cocktailId', ParseIntPipe) cocktailId: number,
  ) {
    return this.authService.addCocktail(id, cocktailId);
  }

  @UseGuards(AuthGuard())
  @Patch(':id/delete')
  deleteCocktail(
    @Param('id', ParseIntPipe) id: number,
    @Body('cocktailId', ParseIntPipe) cocktailId: number,
  ) {
    return this.authService.deleteCocktail(id, cocktailId);
  }

  @Post('/find')
  getUser(@Body('username') username: string): Promise<User[]> {
    return this.authService.getUser(username);
  }
}
