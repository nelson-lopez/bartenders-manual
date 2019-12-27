import Axios from "axios";

const getUser = async (
  username: string | null,
  token: string
): Promise<number> => {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url = `http://cocktail-db-production.us-east-1.elasticbeanstalk.com/auth/find`;

  let userId = null;
  if (username) {
    userId = await Axios.post(
      proxy + url,
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
