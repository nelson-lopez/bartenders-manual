import { useState, useEffect } from "react";
import axios from "axios";
import { Cocktail } from "../types/cocktail.interface";

const useGetCocktails = (type: string) => {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url =
    "http://cocktail-db-production.us-east-1.elasticbeanstalk.com/cocktails";
  const [data, setData] = useState<Cocktail[] | null>(null);

  useEffect(() => {
    axios
      .get(proxy + url)
      .then(response => {
        setData(
          response.data.filter((cocktail: Cocktail) => cocktail.type === type)
        );
      })
      .catch(err => {
        throw new Error(err);
      });
  }, [type]);

  return data;
};

export default useGetCocktails;
