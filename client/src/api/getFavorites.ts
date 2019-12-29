import { Cocktail } from "../types/cocktail.interface";
import Axios from "axios";

const getFavorites = async (
  token: string | null,
  username: string | undefined
): Promise<Cocktail[]> => {
  const url = "http://localhost:3001/auth/find";

  let cocktails = null;
  if (token && username) {
    cocktails = await Axios.post(
      url,
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
