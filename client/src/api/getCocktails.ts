import { useState, useEffect } from "react";
import axios from "axios";

const useGetCocktails = (type: string) => {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url =
    "http://cocktail-db-production.us-east-1.elasticbeanstalk.com/cocktails";
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(proxy + url)
      .then(response => {
        setData(response.data.filter(cocktail => cocktail.type === type));
      })
      .catch(err => {
        throw new Error(err);
      });
  }, [type]);

  return data;
};

export default useGetCocktails;
