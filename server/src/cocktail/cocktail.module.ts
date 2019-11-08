import { Module } from '@nestjs/common';
import { CocktailController } from './cocktail.controller';
import { CocktailService } from './cocktail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CocktailRepository } from './cocktail.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([CocktailRepository]), AuthModule],
  controllers: [CocktailController],
  providers: [CocktailService],
})
export class CocktailModule {}
