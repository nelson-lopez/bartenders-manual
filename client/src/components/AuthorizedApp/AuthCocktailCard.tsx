import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import useGetCocktailById from "../../api/getCocktailById";
import StyledCocktail from "../component-styles/StyledCocktail";
import useDeleteCocktail from "../../api/deleteCocktailById";
import useDeleteFavorite from "../../api/deleteUserFavorite";
import EditCocktail from "./EditCocktail";

import useAddFavorite from "../../api/patchAddFavorite";
import { FaStar } from "react-icons/fa";
import getUser from "../../api/getUser";
import Axios from "axios";

/**
 *
 * TODO This whole component needs to be refactored into smaller functions.
 */

const CocktailCard = (props: any) => {
  const [id, setId] = useState(props.location.state.id);
  const [isFavorite, setFavorite] = useState(false);
  const [removeFavorite, setRemove] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const [isDeleted, setDeleted] = useState(false);
  const [back, setBack] = useState(false);
  const [edit, setEdit] = useState(false);

  const token = localStorage.getItem("token");
  const username: string | null = localStorage.getItem("username");
  if (username && token) {
    getUser(username, token);
  }

  /**
   * Delete
   */
  useEffect(() => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = `http://cocktail-db-production.us-east-1.elasticbeanstalk.com/cocktails/${id}`;

    if (isClicked === true)
      Axios.delete(proxy + url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {})
        .catch(err => {
          throw new Error(err);
        });
  }, [[id, isClicked, token]]);

  const data = useGetCocktailById(id);

  const handleOnDelete = () => {
    setClicked(!isClicked);
  };

  useEffect(() => {
    if (isClicked === true) {
      setDeleted(!isDeleted);
    }
  }, [isClicked, isDeleted]);

  const handleOnEdit = () => {
    setEdit(!edit);
  };

  const handleOnBack = () => {
    setBack(!back);
  };

  const handleOnFavorite = () => {
    setFavorite(!isFavorite);
  };

  const handleOnRemove = () => {
    setRemove(!removeFavorite);
  };

  useAddFavorite(user, id, isFavorite, token);

  useDeleteFavorite(user, id, removeFavorite, token);

  if (back) return <Redirect to="/cocktails" />;
  if (isDeleted) return <Redirect to="/cocktails" />;
  if (edit) return <EditCocktail id={id} />;
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
        <div className="buttons-container">
          <p onClick={handleOnBack} className="cocktail-buttons">
            Back
          </p>
          <p onClick={handleOnDelete} className="cocktail-buttons">
            Delete
          </p>
          <p onClick={handleOnEdit} className="cocktail-buttons">
            Edit
          </p>
          <FaStar
            className={isFavorite ? "black-star" : "star"}
            onClick={isFavorite ? handleOnRemove : handleOnFavorite}
          />
        </div>
      </StyledCocktail>
    );
  else return <div>loading</div>;
};

export default CocktailCard;
