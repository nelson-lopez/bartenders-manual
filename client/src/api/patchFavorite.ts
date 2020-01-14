import axios from "axios";

export const patchFavorite = (
  userId: Promise<number>,
  cocktailId: number,
  isFavorite: boolean,
  token: string
) => {
  const url = `http://localhost:3001/auth/${userId}/add`;

  if (isFavorite) {
    axios
      .patch(
        url,
        {
          cocktailId: cocktailId
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
};
