import Axios from "axios";

const getUser = async (
  username: string | null,
  token: string
): Promise<number> => {
  const url = `http://localhost:3001/auth/find`;

  let userId = null;
  if (username) {
    userId = await Axios.post(
      url,
      {
        username: username
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
      .then(response => {
        return response.data[0].id;
      })
      .catch(error => console.log(error));
  }

  return userId;
};

export default getUser;
