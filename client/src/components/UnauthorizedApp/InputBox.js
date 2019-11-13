import React from "react";
import StyledSignUp from "../component-styles/StyledSignUp";

const InputBox = ({ handleOnInput, handleSubmit }) => {
  const onInput = e => {
    handleOnInput(e);
  };

  const onSubmit = e => {
    handleSubmit(e);
  };

  return (
    <StyledSignUp>
      <h2>To continue please Sign up:</h2>
      <div className="login-container">
        <form onSubmit={onSubmit}>
          <div>
            <input
              placeholder="User Name"
              className="username"
              onChange={onInput}
            ></input>
          </div>
          <div>
            <input
              placeholder="Password"
              className="password"
              onChange={onInput}
            ></input>
          </div>
          <div>
            <input type="submit" value="Submit" className="submit-button" />
          </div>
        </form>
      </div>
    </StyledSignUp>
  );
};

export default InputBox;
