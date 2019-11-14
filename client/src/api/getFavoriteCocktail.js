import { useState, useEffect } from "react";
import axios from "axios";

const useGetFavorites = (token, username) => {
  const url =
    "http://cocktail-db-production.us-east-1.elasticbeanstalk.com/auth/find";
  const [data, setData] = useState(null);

  console.log(data);
  useEffect(() => {
    if (token && username) {
      axios
        .get(
          url,
          {
            username
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        .then(response => setData(response))
        .catch(error => new Error(error));
    }
  }, [token, username]);

  return data;
};

export default useGetFavorites;
