import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <h2>Nelson's Bartending Manual</h2>
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <Link to="/cocktails">
            <a>Cocktails</a>
          </Link>
        </li>
        <li>
          <Link to="/ingredients">
            <a>Ingredients</a>
          </Link>
        </li>
        <li>
          <a>Favorites</a>
        </li>
        <li>
          <a>Search</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
