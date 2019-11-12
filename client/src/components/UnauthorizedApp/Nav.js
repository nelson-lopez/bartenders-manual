import React, { useState } from "react";
import { Link } from "react-router-dom";
import StyledNav from "../component-styles/StyledNav";
import { Redirect } from "react-router-dom";

const Nav = () => {
  const [redirect, setRedirect] = useState(false);

  const handleOnClick = () => {
    setRedirect(!redirect);
  };
  if (redirect) return <Redirect to="/login" />;
  return (
    <StyledNav>
      <h2>Nelson's Bartending Manual</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cocktails">Cocktails</Link>
        </li>
        <li>
          <Link to="/ingredients">Ingredients</Link>
        </li>
        <li>Favorites</li>
        <li>Search</li>
        <li onClick={handleOnClick}>Sign In</li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
