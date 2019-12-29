import axios from "axios";

const deleteFavorite = (
  userId: Promise<number> | null,
  cocktailId: number,
  removeFavorite: boolean,
  token: string | null
) => {
  const url = `http://localhost:3001/auth/${userId}/delete`;

  if (removeFavorite) {
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

export default deleteFavorite;
