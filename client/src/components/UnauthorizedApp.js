import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CocktailCategories from './UnauthorizedApp/CocktailCategories';
import IngredientsList from './UnauthorizedApp/IngredientsList';
import CocktailList from './UnauthorizedApp/CocktailList';
import Landing from './UnauthorizedApp/Landing';
import Nav from './UnauthorizedApp/Nav';
import AppWrapper from './component-styles/AppWrapper';

const UnauthorizedApp = () => {
  return (
    <AppWrapper>
      <Nav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/cocktails" component={CocktailCategories} />
        <Route exact path="/ingredients" component={IngredientsList} />
        <Route exact path="/cocktail-list" component={CocktailList} />
      </Switch>
    </AppWrapper>
  );
};

export default () => (
  <Router>
    <UnauthorizedApp />
  </Router>
);
