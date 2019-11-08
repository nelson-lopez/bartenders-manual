import { Module } from '@nestjs/common';
import { CocktailModule } from './cocktail/cocktail.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CocktailModule, TypeOrmModule.forRoot(typeOrmConfig), AuthModule],
})
export class AppModule {}
