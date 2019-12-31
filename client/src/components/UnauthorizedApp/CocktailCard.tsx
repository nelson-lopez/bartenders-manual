import React, { useState, useEffect } from "react";
import StyledCocktail from "../component-styles/StyledCocktail";
import { Cocktail } from "../../types/cocktail.interface";
import getCocktailByID from "../../api/getCocktailById";

const CocktailCard = (props: any) => {
  const [id, setId] = useState<number>(props.location.state.id);
  const [data, setData] = useState<Cocktail | null>(null);

  useEffect(() => {
    if (id) {
      const newCocktail = getCocktailByID(id);

      newCocktail.then(res => setData(res));
    }
  }, []);

  if (data)
    return (
      <StyledCocktail>
        <h2>{data.name}</h2>

        <img src={data.photo_url} alt="woops" />
        <h3>{data.description}</h3>
        <div className="data-container">
          <div className="ingredients-container">
            <p className="ingredients">Ingredients</p>
            <p className="ingredient-items">{data.ingredients}</p>
          </div>
          <div className="directions-container">
            <p className="directions">Directions</p>
            <p className="direction-items">{data.directions}</p>
          </div>
        </div>
      </StyledCocktail>
    );
  else return <div>loading</div>;
};

export default CocktailCard;
