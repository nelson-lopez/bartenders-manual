import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto) {
    return this.authService.signUp(authCredentialsDto);
  }

  @Patch(':id')
  addCocktail(
    @Param('id', ParseIntPipe) id: number,
    @Body('cocktailId', ParseIntPipe) cocktailId: number,
  ) {
    return this.authService.addCocktail(id, cocktailId);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }
}
