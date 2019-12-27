import axios from "axios";

export const patchFavorite = (
  userId: Promise<number>,
  cocktailId: number,
  isFavorite: boolean,
  token: string
) => {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url = `http://cocktail-db-production.us-east-1.elasticbeanstalk.com/auth/${userId}/add`;

  if (isFavorite) {
    axios
      .patch(
        proxy + url,
        {
          cocktailId: cocktailId
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
};
