import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import useGetCocktailById from "../../api/getCocktailById";
import StyledCocktail from "../component-styles/StyledCocktail";
import StyledButton from "../component-styles/StyledButton";
import useDeleteCocktail from "../../api/deleteCocktailById";

const CocktailCard = props => {
  const [id, setId] = useState(props.location.state.id);
  const [isClicked, setClicked] = useState(false);
  const [isDeleted, setDeleted] = useState(false);

  const token = localStorage.getItem("token");

  const data = useGetCocktailById(id);

  const handleOnDelete = () => {
    setClicked(!isClicked);
  };
  useDeleteCocktail(id, isClicked, token);

  useEffect(() => {
    if (isClicked === true) {
      setDeleted(!isDeleted);
    }
  }, [isClicked, isDeleted]);

  if (isDeleted) return <Redirect to="/cocktails" />;
  if (data)
    return (
      <StyledCocktail>
        <h2>{data.name}</h2>
        <StyledButton onClick={handleOnDelete}>Delete</StyledButton>
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
