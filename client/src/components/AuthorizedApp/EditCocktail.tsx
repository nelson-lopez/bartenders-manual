import React, { useState, useEffect } from "react";
import StyledAddCocktail from "../component-styles/StyledAddCocktail";
import { CocktailID } from "../../types/cocktail.interface";
import updateCocktail from "../../api/patchUpdateCocktail";

const EditCocktail = (props: CocktailID) => {
  const [isClicked, setClick] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [cocktailInfo, setState] = useState({
    type: "",
    photo_url: "",
    name: "",
    description: "",
    ingredients: "",
    directions: ""
  });

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    updateCocktail(cocktailInfo, isClicked, token, props.id);
  }, [isClicked]);

  const onInput = (e: React.FormEvent<HTMLInputElement>) => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;
    setState(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const submitCocktail = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setClick(!isClicked);
  };

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

export default EditCocktail;
