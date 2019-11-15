import axios from "axios";
import { useEffect } from "react";

const useDeleteFavorite = (userId, cocktailId, isFavorite, token) => {
  const url = `http://cocktail-db-production.us-east-1.elasticbeanstalk.com/auth/${userId}/delete`;

  useEffect(() => {
    if (!isFavorite) {
      axios
        .patch(
          url,
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
    } else console.log("waiting for something to happen");
  }, [cocktailId, isFavorite, token, url]);
};

export default useDeleteFavorite;
