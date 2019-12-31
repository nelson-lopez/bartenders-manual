import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

const useUserSignUp = (username: string, password: string) => {
  const [result, setResult] = useState<AxiosResponse | null | void>(null);
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url =
    "http://cocktail-db-production.us-east-1.elasticbeanstalk.com/auth/signup";

  useEffect(() => {
    if (password) {
      axios
        .post(proxy + url, {
          username: username,
          password: password
        })
        .then(response => {
          setResult(response);
        })
        .catch(error => {
          throw new Error(error);
        });
    }
  }, [username, password]);

  return result;
};

export default useUserSignUp;
