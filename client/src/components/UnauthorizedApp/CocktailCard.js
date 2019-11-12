import React, { useState } from "react";
import useGetCocktailById from "../../api/getCocktailById";
import StyledCocktail from "../component-styles/StyledCocktail";

const CocktailCard = props => {
  const [id, setId] = useState(props.location.state.id);

  const data = useGetCocktailById(id);
  console.log(data);

  if (data)
    return (
      <StyledCocktail>
        <h2>{data.name}</h2>
        <img src={data.photo_url} alt="woops" />
        <p>{data.directions}</p>
        <p>{data.ingredients}</p>
      </StyledCocktail>
    );
  else return <div>loading</div>;
};

export default CocktailCard;
