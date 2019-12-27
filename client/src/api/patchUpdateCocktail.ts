import axios from "axios";
import { Cocktail } from "../types/cocktail.interface";

const updateCocktail = (
  cocktail: Cocktail,
  isClicked: boolean,
  token: string | null,
  id: number
) => {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url = `http://cocktail-db-production.us-east-1.elasticbeanstalk.com/cocktails/${id}/update`;
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
};

export default updateCocktail;
