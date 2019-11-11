import React from 'react';
import Nav from './UnauthorizedApp/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CocktailList from './UnauthorizedApp/CocktailList';
import IngredientsList from './UnauthorizedApp/IngredientsList';

const UnauthorizedApp = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/cocktails" component={CocktailList} />
        <Route exact path="/ingredients" component={IngredientsList} />
      </Switch>
    </div>
  );
};

export default () => (
  <Router>
    <UnauthorizedApp />
  </Router>
);
