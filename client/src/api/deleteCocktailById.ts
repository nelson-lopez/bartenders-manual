import { useEffect } from "react";
import axios from "axios";

const useDeleteCocktail = (id: number, isClicked: boolean, token: string) => {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url = `http://cocktail-db-production.us-east-1.elasticbeanstalk.com/cocktails/${id}`;

  useEffect(() => {
    if (isClicked === true)
      axios
        .delete(proxy + url, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {})
        .catch(err => {
          throw new Error(err);
        });
  }, [id, isClicked, token, url]);
};

export default useDeleteCocktail;
