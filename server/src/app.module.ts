import { Module } from '@nestjs/common';
import { CocktailModule } from './cocktail/cocktail.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './cocktail/config/typeorm.config';

@Module({
  imports: [CocktailModule, TypeOrmModule.forRoot(typeOrmConfig)],
})
export class AppModule {}
