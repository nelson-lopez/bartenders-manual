import Axios from "axios";
import { errorLogger } from "./errorLogger";

export const apiHelper = (url: string, method: string, type?: string) => {
  if (method === "GET") {
    console.log(type);
    return Axios.get(url)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        errorLogger(err);
      });
  }
};
