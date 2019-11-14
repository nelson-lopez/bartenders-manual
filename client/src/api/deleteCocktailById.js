import { useEffect } from "react";
import axios from "axios";

const useDeleteCocktail = (id, isClicked, token) => {
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
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          throw new Error(err);
        });
    else console.log("waiting for something to happen");
  }, [id, isClicked, token, url]);
};

export default useDeleteCocktail;