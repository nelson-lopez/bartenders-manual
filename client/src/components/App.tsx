import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CocktailCategories from "./UnauthorizedApp/CocktailCategories";
import IngredientsList from "./UnauthorizedApp/IngredientsList";
import CocktailList from "./UnauthorizedApp/CocktailList";
import CocktailCard from "./UnauthorizedApp/CocktailCard";
import AddCocktail from "./AuthorizedApp/AddCocktail";
import AuthCocktailCard from "./AuthorizedApp/AuthCocktailCard";
import Landing from "./UnauthorizedApp/Landing";
import SignUp from "./UnauthorizedApp/SignUp";
import Nav from "./UnauthorizedApp/Nav";
import AppWrapper from "./component-styles/AppWrapper";
import LogIn from "./UnauthorizedApp/LogIn";
import Logout from "./AuthorizedApp/Logout";
import FavoritesList from "./AuthorizedApp/FavoritesList";

const App = () => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUsername] = useState<string | undefined>(undefined);

  const handleSetToken = (value: string) => {
    if (value !== null) {
      setToken(value);
      const { username } = jwt_decode(value);
      localStorage.setItem("username", username);
      setUsername(username);
    }
  };

  const handleRemoveToken = (): void => {
    setToken(null);
  };

  if (!token)
    return (
      <AppWrapper>
        <Nav isLoggedIn={false} />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={SignUp} />
          <Route
            exact
            path="/login"
            component={() => <LogIn handleSetToken={handleSetToken} />}
          />
          <Route exact path="/cocktails" component={CocktailCategories} />
          <Route exact path="/ingredients" component={IngredientsList} />
          <Route exact path="/cocktail-list" component={CocktailList} />
          <Route exact path="/cocktail/:id" component={CocktailCard} />
        </Switch>
      </AppWrapper>
    );
  return (
    <AppWrapper>
      <Nav isLoggedIn={true} />

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={SignUp} />
        <Route
          exact
          path="/login"
          component={() => <LogIn handleSetToken={handleSetToken} />}
        />
        <Route exact path="/cocktails" component={CocktailCategories} />
        <Route exact path="/ingredients" component={IngredientsList} />
        <Route exact path="/cocktail-list" component={CocktailList} />
        <Route exact path="/cocktail/:id" component={AuthCocktailCard} />
        <Route
          exact
          path="/logout"
          component={() => <Logout handleRemoveToken={handleRemoveToken} />}
        />
        <Route exact path="/addcocktail" component={AddCocktail} />
        <Route
          exact
          path="/favorites"
          component={() => <FavoritesList username={user} />}
        />
      </Switch>
    </AppWrapper>
  );
};

export default () => (
  <Router>
    <App />
  </Router>
);
