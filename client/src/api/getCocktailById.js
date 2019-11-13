import { useState, useEffect } from "react";
import axios from "axios";

const useGetCocktailsById = id => {
  const url = `http://cocktail-db-production.us-east-1.elasticbeanstalk.com/cocktails/${id}`;
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        throw new Error(err);
      });
  }, [id, url]);

  return data;
};

export default useGetCocktailsById;
