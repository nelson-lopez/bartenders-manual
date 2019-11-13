import { useState, useEffect } from "react";
import axios from "axios";

const useUserSignUp = (username, password) => {
  const [token, setToken] = useState(null);
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url =
    "http://cocktail-db-production.us-east-1.elasticbeanstalk.com/auth/signup";

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

export default useUserSignUp;
