import React from "react";
import StyledSignUp from "../component-styles/StyledSignUp";
import { Link } from "react-router-dom";

const SuccessfulSignup = () => {
  return (
    <StyledSignUp>
      <h2>Awesome you're all signed up!</h2>
      <div className="login-container">
        <p>To continue please click here:</p>
        <Link to="/login">login</Link>
      </div>
    </StyledSignUp>
  );
};

export default SuccessfulSignup;
