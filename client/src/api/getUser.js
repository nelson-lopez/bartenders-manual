import axios from "axios";
import { useEffect, useState } from "react";

const useGetUser = (username, token) => {
  const [user, setUser] = useState(null);
  const url = `http://cocktail-db-production.us-east-1.elasticbeanstalk.com/auth/find`;

  useEffect(() => {
    if (username) {
      axios
        .post(
          url,
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
    } else console.log("waiting for something to happen");
  }, [token, url, username]);
  return user;
};

export default useGetUser;
