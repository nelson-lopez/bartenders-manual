import { useEffect } from "react";
import axios from "axios";
import { Cocktail } from "../types/cocktail.interface";

const useUpdateCocktail = (
  cocktail: Cocktail,
  isClicked: boolean,
  token: string,
  id: number
) => {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url = `http://cocktail-db-production.us-east-1.elasticbeanstalk.com/cocktails/${id}/update`;

  useEffect(() => {
    if (isClicked === true)
      axios
        .patch(
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

export default useUpdateCocktail;
