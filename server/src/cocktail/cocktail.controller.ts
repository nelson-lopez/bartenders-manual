import {
  Controller,
  Get,
  Post,
  Body,
  ParseIntPipe,
  Param,
  Patch,
  Delete,
  UseGuards,
  Logger,
  UseInterceptors,
  CacheInterceptor,
} from '@nestjs/common';
import { CocktailService } from './cocktail.service';
import { CreateCocktailDto } from './dto/createCocktail.dto';
import { Cocktail } from './cocktail.entity';
import { CocktailTypeValidationPipe } from './pipes/type-validation.pipe';
import { CocktailType } from './cocktailtype.enum';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/get-user.decorator';
import { User } from '../auth/user.entity';

@Controller('cocktails')
export class CocktailController {
  private logger = new Logger('CocktailController');

  constructor(private cocktailService: CocktailService) {}

  @Get()
  @UseInterceptors(CacheInterceptor)
  getCocktail() {
    return this.cocktailService.getCocktails();
  }

  @Get('/:id')
  @UseInterceptors(CacheInterceptor)
  getCocktailById(@Param('id', ParseIntPipe) id: number): Promise<Cocktail> {
    return this.cocktailService.getCocktailById(id);
  }

  @UseGuards(AuthGuard())
  @Post()
  createCocktail(
    @Body('type', CocktailTypeValidationPipe)
    cocktailType: CocktailType,
    @Body() createCockTailDto: CreateCocktailDto,
  ): Promise<Cocktail> {
    return this.cocktailService.createCocktail(createCockTailDto, cocktailType);
  }

  @UseGuards(AuthGuard())
  @Patch('/:id/update')
  updateCocktail(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCocktailDto: CreateCocktailDto,
    @GetUser() user: User,
  ): Promise<Cocktail> {
    this.logger.verbose(`User ${user.username} is updating cocktail`);
    return this.cocktailService.updateCockTail(id, updateCocktailDto, user);
  }

  @UseGuards(AuthGuard())
  @Delete('/:id')
  deleteCocktail(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<void> {
    this.logger.verbose(`User ${user.username} deleted a cocktail`);
    return this.cocktailService.deleteCocktail(id, user);
  }
}
