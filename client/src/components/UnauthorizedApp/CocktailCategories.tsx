import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import StyledList from "../component-styles/StyledList";
import CocktailList from './CocktailList'
import dessert from '../../imgs/dessert.jpg'
import stirred from '../../imgs/stirred.jpeg'
import sour from '../../imgs/sour.jpeg'
import smash from '../../imgs/smash.jpeg'
import swizzle from '../../imgs/swizzle.jpg'
import champagne from '../../imgs/champagne.jpeg'

const CocktailCategories = () => {
  /**
   * TODO retool this component to send data down to EventList in a different fashion.
   * ! Call GET at the Cocktail list level
   */
  const [redirect, setRedirect] = useState(false);
  const [cocktailType, setCocktailType] = useState('test');

  const handleOnClick = (e: any) => {
    console.log(e.target.alt)
    setCocktailType(e.target.alt);
    setRedirect(true)
  };




  if (redirect)
    return (
      <CocktailList cocktailType={cocktailType} />

    );
  return (
    <StyledList>
      <h2>Cocktails</h2>
      <div className="container">
        <div className="cocktail-category" onClick={handleOnClick}>
          <img
            src={stirred}
            alt="Stirred"
            onClick={handleOnClick}
          />
          <p>Stirred</p>
        </div>
        <div className="cocktail-category" onClick={handleOnClick}>
          <img
            src={dessert}
            alt="Dessert Cocktail"
          />
          <p>Dessert</p>
        </div>
        <div className="cocktail-category" onClick={handleOnClick}>
          <img src={sour} alt="Sour" />
          <p>Sour</p>
        </div>
        <div className="cocktail-category" onClick={handleOnClick}>
          <img src={smash} alt="Smash" />
          <p>Smash</p>
        </div>
        <div className="cocktail-category" onClick={handleOnClick}>
          <img
            src={swizzle}
            alt="Swizzle"
          />
          <p>Swizzle</p>
        </div>
        <div className="cocktail-category" onClick={handleOnClick}>
          <img src={champagne} alt="Champagne Cocktail" />
          <p>Champagne</p>
        </div>
      </div>
    </StyledList>
  );
};

export default CocktailCategories;
