import { useState, useEffect } from "react";
import axios from "axios";

const useGetCocktails = type => {
  const url =
    "http://cocktail-db-production.us-east-1.elasticbeanstalk.com/cocktails";
  const [data, setData] = useState(null);

  console.log(data);
  useEffect(() => {
    axios
      .get(url)
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
