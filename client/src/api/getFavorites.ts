import { Cocktail } from "../types/cocktail.interface";
import Axios from "axios";

const getFavorites = async (
  token: string | null,
  username: string | undefined
): Promise<Cocktail[]> => {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url =
    "http://cocktail-db-production.us-east-1.elasticbeanstalk.com/auth/find";

  let cocktails = null;
  if (token && username) {
    cocktails = await Axios.post(
      proxy + url,
      {
        username
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
      .then(res => {
        return res.data;
      })
      .catch(error => new Error(error));
  }
  return cocktails;
};

export default getFavorites;
