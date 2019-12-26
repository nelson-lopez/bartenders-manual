import { useEffect, useState } from "react";
import axios from "axios";

const useUserLogIn = (username, password) => {
  const [token, setToken] = useState(null);
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url =
    "http://cocktail-db-production.us-east-1.elasticbeanstalk.com/auth/signin";

  useEffect(() => {
    if ((username, password)) {
      axios
        .post(proxy + url, {
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
