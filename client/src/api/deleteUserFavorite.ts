import axios from "axios";
import { useEffect } from "react";

const useDeleteFavorite = (userId, cocktailId, removeFavorite, token) => {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url = `http://cocktail-db-production.us-east-1.elasticbeanstalk.com/auth/${userId}/delete`;

  useEffect(() => {
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
  }, [cocktailId, removeFavorite, token, url]);
};

export default useDeleteFavorite;
