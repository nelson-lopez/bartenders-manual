import React, { useState } from "react";
import StyledList from "../component-styles/StyledList";
import useGetFavorites from "../../api/getFavoriteCocktail";
import { Redirect } from "react-router-dom";

const FavoritesList = ({ username }) => {
  const [redirect, setRedirect] = useState(false);
  const [id, setId] = useState(0);

  const token = localStorage.getItem("token");

  const handleOnClick = e => {
    const id = e.target.alt;
    setId(id);
    setRedirect(!redirect);
  };

  const data = useGetFavorites(token, username);
  console.log(data);
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
        <h2>Cocktails</h2>
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
