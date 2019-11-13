import React from "react";
import StyledSignUp from "../component-styles/StyledSignUp";
const SuccessfullSignup = () => {
  return (
    <StyledSignUp>
      <h2>Awesome you're all signed up!</h2>
      <div className="login-container">
        <p>To continue please click here:</p>
      </div>
    </StyledSignUp>
  );
};

export default SuccessfullSignup;
