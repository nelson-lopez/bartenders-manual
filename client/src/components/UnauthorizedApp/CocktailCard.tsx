import React, { useState } from "react";
import useGetCocktailById from "../../api/getCocktailById";
import StyledCocktail from "../component-styles/StyledCocktail";

const CocktailCard = props => {
  const [id, setId] = useState(props.location.state.id);

  const data = useGetCocktailById(id);

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
