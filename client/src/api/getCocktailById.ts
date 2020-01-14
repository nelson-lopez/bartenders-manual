import Axios from "axios";
import { Cocktail } from "../types/cocktail.interface";

const getCocktailByID = async (id: number): Promise<Cocktail> => {
  const url = `http://localhost:3001/cocktails/${id}`;
  const data: Cocktail = await Axios.get(url)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      throw new Error(err);
    });

  return data;
};

export default getCocktailByID;
