import { useState, useEffect } from "react";
import axios from "axios";

const useGetFavorites = (token: string, username: string) => {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url =
    "http://cocktail-db-production.us-east-1.elasticbeanstalk.com/auth/find";
  const [data, setData] = useState(null);

  useEffect(() => {
    if (token && username) {
      axios
        .post(
          proxy + url,
          {
            username
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        .then(response => setData(response.data[0].cocktails))
        .catch(error => new Error(error));
    }
  }, [token, username]);

  return data;
};

export default useGetFavorites;
