import axios from "axios";

const getUser = async (username: string | null, token: string) => {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url = `http://cocktail-db-production.us-east-1.elasticbeanstalk.com/auth/find`;

  if (username) {
    return await axios
      .post(
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
};

export default getUser;
