import { useEffect } from "react";
import axios from "axios";

const useAddCocktail = (cocktail, isClicked, token) => {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url = `http://cocktail-db-production.us-east-1.elasticbeanstalk.com/cocktails`;

  useEffect(() => {
    if (isClicked === true)
      axios
        .post(
          proxy + url,
          {
            photo_url: cocktail.photo_url,
            name: cocktail.name,
            description: cocktail.description,
            ingredients: cocktail.ingredients,
            directions: cocktail.directions,
            type: cocktail.type
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          throw new Error(err);
        });
  }, [
    cocktail.description,
    cocktail.directions,
    cocktail.ingredients,
    cocktail.name,
    cocktail.photo_url,
    cocktail.type,
    isClicked,
    token,
    url
  ]);
};

export default useAddCocktail;