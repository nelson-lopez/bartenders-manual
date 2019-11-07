import { Module } from '@nestjs/common';
import { CocktailController } from './cocktail.controller';
import { CocktailService } from './cocktail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CocktailRepository } from './cocktail.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CocktailRepository])],
  controllers: [CocktailController],
  providers: [CocktailService],
})
export class CocktailModule {}
