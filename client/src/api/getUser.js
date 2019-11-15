import axios from "axios";
import { useEffect, useState } from "react";

const useGetUser = (username, token) => {
  const [user, setUser] = useState(null);
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url = `http://cocktail-db-production.us-east-1.elasticbeanstalk.com/auth/find`;

  useEffect(() => {
    if (username) {
      axios
        .post(
          proxy + url,
          {
            username: username
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        .then(response => setUser(response.data[0].id))
        .catch(error => console.log(error));
    }
  }, [token, url, username]);
  return user;
};

export default useGetUser;
