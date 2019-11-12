import React, { useState } from 'react';
import StyledList from '../component-styles/StyledList';
import useGetCocktails from '../../api/getCocktails';

const CocktailList = props => {
  const [type, setType] = useState(props.location.state.type);

  const data = useGetCocktails(type);
  if (data)
    return (
      <StyledList>
        <h2>Cocktails</h2>
        <div className="container">
          {data.map(cocktail => {
            return (
              <div className="cocktail-category" key={cocktail.id}>
                <img src={cocktail.photo_url} alt={cocktail.id} />
                <p>{cocktail.name}</p>
              </div>
            );
          })}
        </div>
      </StyledList>
    );

  return (
    <StyledList>
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
    </StyledList>
  );
};

export default CocktailList;
