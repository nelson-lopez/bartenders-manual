import { apiHelper } from "./apiHelper";
import { Cocktails } from '../types/cocktail.interface';


const getCocktails = (stateHook: (data: Cocktails) => void, type: string) => {
  const url = "http://localhost:3001/cocktails";
  const method = "GET";
  apiHelper(url, method, stateHook, type);
};

export default getCocktails;
