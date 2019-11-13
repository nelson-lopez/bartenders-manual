import { useEffect, useState } from "react";
import axios from "axios";

const useUserLogIn = (username, password) => {
  const [token, setToken] = useState(null);

  const url =
    "http://cocktail-db-production.us-east-1.elasticbeanstalk.com/auth/signin";

  useEffect(() => {
    if ((username, password)) {
      axios
        .post(url, {
          username: username,
          password: password
        })
        .then(response => {
          setToken(response);
        })
        .catch(error => {
          throw new Error(error);
        });
    }
  }, [username, password]);

  return token;
};

export default useUserLogIn;
