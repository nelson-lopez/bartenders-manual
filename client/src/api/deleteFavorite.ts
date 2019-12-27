import axios from "axios";

const deleteFavorite = (
  userId: Promise<number> | null,
  cocktailId: number,
  removeFavorite: boolean,
  token: string | null
) => {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url = `http://cocktail-db-production.us-east-1.elasticbeanstalk.com/auth/${userId}/delete`;

  if (removeFavorite) {
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

export default deleteFavorite;
