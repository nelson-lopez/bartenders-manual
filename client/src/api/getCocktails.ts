import { useState, useEffect } from "react";
import axios from "axios";
import { Cocktail } from "../types/cocktail.interface";

const useGetCocktails = (type: string) => {
  const url = "http://localhost:3001/cocktails";
  const [data, setData] = useState<Cocktail[] | null>(null);

  useEffect(() => {
    axios
      .get(url)
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
