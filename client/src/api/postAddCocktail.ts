import { useEffect } from "react";
import axios from "axios";
import { Cocktail } from "../types/cocktail.interface";
import { UserToken } from "../types/user.interface";

const postCocktail = (
  cocktail: Cocktail,
  isClicked: boolean,
  token: UserToken
): void => {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url = `http://cocktail-db-production.us-east-1.elasticbeanstalk.com/cocktails`;

  if (isClicked) {
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
  }
};
export default postCocktail;
