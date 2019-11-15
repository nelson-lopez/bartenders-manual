import React from "react";
import StyledLanding from "../component-styles/StyledLanding";

const Landing = () => {
  const username = localStorage.getItem("username");

  return (
    <React.Fragment>
      <StyledLanding>
        <h2>{username ? `Welcome ${username}!` : `Welcome!`}</h2>
      </StyledLanding>
    </React.Fragment>
  );
};

export default Landing;
