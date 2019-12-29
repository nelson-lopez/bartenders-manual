import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

const useUserLogIn = (username: string, password: string) => {
  const [token, setToken] = useState<any>(null);
  const url = "http://localhost:3001/auth/signin";

  useEffect(() => {
    if (password) {
      axios
        .post(url, {
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
