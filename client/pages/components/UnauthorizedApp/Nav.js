import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <div>
      <h2>Nelson's Bartending Manual</h2>
      <ul>
        <li>
          <Link href="/index">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/unAuthCocktailList">
            <a>Cocktails</a>
          </Link>
        </li>
        <li>
          <Link href="/unAuthIngredientsList">
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
