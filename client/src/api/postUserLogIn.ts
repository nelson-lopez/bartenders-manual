import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

const useUserLogIn = (username: string, password: string) => {
  const [token, setToken] = useState<any>(null);
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url =
    "http://cocktail-db-production.us-east-1.elasticbeanstalk.com/auth/signin";

  useEffect(() => {
    if (password) {
      axios
        .post(proxy + url, {
          username: username,
          password: password
        })
        .then((response): void => {
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
