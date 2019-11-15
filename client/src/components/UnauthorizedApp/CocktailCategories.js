import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import StyledList from "../component-styles/StyledList";

const CocktailCategories = () => {
  const [redirect, setRedirect] = useState(false);
  const [type, setType] = useState("");

  const handleOnClick = e => {
    const type = e.target.alt;
    setType(type);
    setRedirect(!redirect);
  };

  if (redirect)
    return (
      <Redirect
        to={{
          pathname: "/cocktail-list",
          state: { type: type }
        }}
      />
    );
  return (
    <StyledList>
      <h2>Cocktails</h2>
      <div className="container">
        <div className="cocktail-category" onClick={handleOnClick}>
          <img
            src="https://imgur.com/f8zE6QV.png"
            alt="Stirred"
            onClick={handleOnClick}
          />
          <p>Stirred</p>
        </div>
        <div className="cocktail-category" onClick={handleOnClick}>
          <img src="https://imgur.com/kHTje9z.png" alt="Sour" />
          <p>Sour</p>
        </div>
        <div className="cocktail-category" onClick={handleOnClick}>
          <img src="https://imgur.com/u21qIgB.png" alt="Smash" />
          <p>Smash</p>
        </div>
        <div className="cocktail-category" onClick={handleOnClick}>
          <img src="https://imgur.com/kHTje9z.png" alt="Swizzle" />
          <p>Swizzle</p>
        </div>
        <div className="cocktail-category" onClick={handleOnClick}>
          <img src="https://imgur.com/mosU7WR.png" alt="Champagne Cocktail" />
          <p>Champagne</p>
        </div>
        <div className="cocktail-category" onClick={handleOnClick}>
          <img src="https://imgur.com/1PMUcyd.png" alt="Dessert Cocktail" />
          <p>Dessert</p>
        </div>
      </div>
    </StyledList>
  );
};

export default CocktailCategories;
