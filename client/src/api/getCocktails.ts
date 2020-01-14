import { apiHelper } from "./apiHelper";

const getCocktails = (type: string) => {
  const url = "http://localhost:3001/cocktails";
  const method = "GET";
  apiHelper(url, type, method);
};

export default getCocktails;
