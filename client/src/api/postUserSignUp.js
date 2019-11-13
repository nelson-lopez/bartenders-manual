import { useState, useEffect } from "react";
import axios from "axios";

const useUserSignUp = (username, password) => {
  const [result, setResult] = useState(null);
  const url =
    "http://cocktail-db-production.us-east-1.elasticbeanstalk.com/auth/signup";

  useEffect(() => {
    if ((username, password)) {
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
