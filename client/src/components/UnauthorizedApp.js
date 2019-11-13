import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CocktailCategories from "./UnauthorizedApp/CocktailCategories";
import IngredientsList from "./UnauthorizedApp/IngredientsList";
import CocktailList from "./UnauthorizedApp/CocktailList";
import CocktailCard from ".//UnauthorizedApp/CocktailCard";
import Landing from "./UnauthorizedApp/Landing";
import SignUp from "./UnauthorizedApp/SignUp";
import Nav from "./UnauthorizedApp/Nav";
import AppWrapper from "./component-styles/AppWrapper";

const UnauthorizedApp = () => {
  return (
    <AppWrapper>
      <Nav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/cocktails" component={CocktailCategories} />
        <Route exact path="/ingredients" component={IngredientsList} />
        <Route exact path="/cocktail-list" component={CocktailList} />
        <Route exact path="/cocktail/:id" component={CocktailCard} />
      </Switch>
    </AppWrapper>
  );
};

export default () => (
  <Router>
    <UnauthorizedApp />
  </Router>
);
