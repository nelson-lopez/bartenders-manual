export interface Cocktail {
  name: string;
  photo_url: string;
  description: string;
  ingredients: string;
  directions: string;
  type: string;
  id?: string;
}

export interface CocktailID {
  id: number;
}

export type Cocktails = Cocktail[]