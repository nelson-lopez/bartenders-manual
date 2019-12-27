import React, { useState, useEffect } from "react";
import StyledList from "../component-styles/StyledList";
import { Redirect } from "react-router-dom";
import { UserCredentials } from "../../types/user.interface";
import getFavorites from "../../api/getFavorites";
import { Cocktail } from "../../types/cocktail.interface";

const FavoritesList = (props: UserCredentials) => {
  const [redirect, setRedirect] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [data, setData] = useState<Cocktail[] | null>(null);
  const [id, setId] = useState<string | undefined>(undefined);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const handleOnClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const id = e.currentTarget.alt;
    setId(id);
    setRedirect(!redirect);
  };

  useEffect(() => {
    const data = getFavorites(token, props.username);
    data.then(res => {
      setData(res);
    });
  });

  if (redirect)
    return (
      <Redirect
        to={{
          pathname: `/cocktail/${id}`,
          state: { id: id }
        }}
      />
    );
  else if (data)
    return (
      <StyledList>
        <h2>Favorites</h2>
        <div className="container">
          {data.map(cocktail => {
            return (
              <div
                className="cocktail-category"
                key={cocktail.id}
                onClick={handleOnClick}
              >
                <img src={cocktail.photo_url} alt={cocktail.id} />
                <p>{cocktail.name}</p>
              </div>
            );
          })}
        </div>
      </StyledList>
    );

  return <div>loading..</div>;
};

export default FavoritesList;
