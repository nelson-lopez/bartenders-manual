import Axios from "axios";
import { Cocktail } from "../types/cocktail.interface";

const getCocktailByID = async (id: number): Promise<Cocktail> => {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url = `http://cocktail-db-production.us-east-1.elasticbeanstalk.com/cocktails/${id}`;
  const data: Cocktail = await Axios.get(proxy + url)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      throw new Error(err);
    });

  return data;
};

export default getCocktailByID;
