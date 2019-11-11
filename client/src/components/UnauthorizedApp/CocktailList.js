import React from 'react';
import StyledCocktailList from '../component-styles/StyledCocktailList';

const CocktailList = () => {
  return (
    <StyledCocktailList>
      <h2>Cocktails</h2>
      <div className="container">
        <div className="cocktail-category">
          <img src="https://imgur.com/f8zE6QV.png" alt="woops" />
          <p>Stirred</p>
        </div>
        <div className="cocktail-category">
          <img src="https://imgur.com/kHTje9z.png" alt="woops" />
          <p>Sour</p>
        </div>
        <div className="cocktail-category">
          <img src="https://imgur.com/u21qIgB.png" alt="woops" />
          <p>Smash</p>
        </div>
        <div className="cocktail-category">
          <img src="https://imgur.com/kHTje9z.png" alt="woops" />
          <p>Swizzle</p>
        </div>
        <div className="cocktail-category">
          <img src="https://imgur.com/mosU7WR.png" alt="woops" />
          <p>Champagne</p>
        </div>
        <div className="cocktail-category">
          <img src="https://imgur.com/1PMUcyd.png" alt="woops" />
          <p>Dessert</p>
        </div>
      </div>
    </StyledCocktailList>
  );
};

export default CocktailList;
