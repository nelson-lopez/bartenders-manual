import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CocktailList from './UnauthorizedApp/CocktailList';
import IngredientsList from './UnauthorizedApp/IngredientsList';
import Landing from './UnauthorizedApp/Landing';
import Nav from './UnauthorizedApp/Nav';
import AppWrapper from './component-styles/AppWrapper';

const UnauthorizedApp = () => {
  return (
    <AppWrapper>
      <Nav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/cocktails" component={CocktailList} />
        <Route exact path="/ingredients" component={IngredientsList} />
      </Switch>
    </AppWrapper>
  );
};

export default () => (
  <Router>
    <UnauthorizedApp />
  </Router>
);
