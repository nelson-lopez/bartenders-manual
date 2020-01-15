import Axios from "axios";
import { errorLogger } from "./errorLogger";
import { Cocktails } from '../types/cocktail.interface';

export const apiHelper = (url: string, method: string, stateHook: (data: Cocktails) => void, type?: string) => {
  if (method === "GET") {
    console.log(type);
    return Axios.get(url)
      .then(response => {
        console.log(response.data)
        stateHook(response.data)
      })
      .catch(err => {
        errorLogger(err);
      });
  }
};
