import React from "react";
import { Link } from "react-router-dom";
import StyledNav from "../component-styles/StyledNav";

const Nav = ({ isLoggedIn }) => {
  if (!isLoggedIn)
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
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </StyledNav>
    );
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
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
