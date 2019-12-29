import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

const useUserSignUp = (username: string, password: string) => {
  const [result, setResult] = useState<AxiosResponse | null | void>(null);
  const url = "http://localhost:3001/auth/signup";

  useEffect(() => {
    if (password) {
      axios
        .post(url, {
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
