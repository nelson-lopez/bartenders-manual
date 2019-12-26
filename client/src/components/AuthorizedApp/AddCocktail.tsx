import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import StyledAddCocktail from "../component-styles/StyledAddCocktail";
import useAddCocktail from "../../api/postAddCocktail";

const AddCocktail = () => {
  const [isClicked, setClick] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [cocktailInfo, setState] = useState({
    type: "",
    photo_url: "",
    name: "",
    description: "",
    ingredients: "",
    directions: ""
  });

  const token = localStorage.getItem("token");

  const onInput = e => {
    const key = e.target.name;
    const value = e.target.value;
    setState(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const submitCocktail = e => {
    e.preventDefault();
    setClick(!isClicked);
    setRedirect(!redirect);
  };
  useAddCocktail(cocktailInfo, isClicked, token);

  if (redirect) return <Redirect to="cocktails" />;
  return (
    <StyledAddCocktail>
      <h2>To continue please:</h2>
      <div className="login-container">
        <form>
          <div>
            <input
              placeholder="Type"
              className="input"
              name="type"
              onChange={onInput}
            ></input>
          </div>
          <div>
            <input
              placeholder="photo url"
              className="input"
              name="photo_url"
              onChange={onInput}
            ></input>
          </div>
          <div>
            <input
              placeholder="name"
              className="input"
              name="name"
              onChange={onInput}
            ></input>
          </div>
          <div>
            <input
              placeholder="description"
              className="input"
              name="description"
              onChange={onInput}
            ></input>
          </div>
          <div>
            <input
              placeholder="ingredients"
              className="input"
              name="ingredients"
              onChange={onInput}
            ></input>
          </div>
          <div>
            <input
              placeholder="directions"
              className="input"
              name="directions"
              onChange={onInput}
            ></input>
          </div>
          <div>
            <input
              type="submit"
              value="Submit"
              className="submit-button"
              onClick={submitCocktail}
            />
          </div>
        </form>
      </div>
    </StyledAddCocktail>
  );
};

export default AddCocktail;
