import { useEffect } from "react";
import axios from "axios";

const useDeleteCocktail = (id: number, isClicked: boolean, token: string) => {
  const url = `http://localhost:3001/cocktails/${id}`;

  useEffect(() => {
    if (isClicked === true)
      axios
        .delete(url, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {})
        .catch(err => {
          throw new Error(err);
        });
  }, [id, isClicked, token, url]);
};

export default useDeleteCocktail;
