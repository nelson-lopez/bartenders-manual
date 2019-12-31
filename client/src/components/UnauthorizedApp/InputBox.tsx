import React from "react";
import StyledSignUp from "../component-styles/StyledSignUp";
import { UserInput } from "../../types/auth-methods.interface";

const InputBox = (props: UserInput) => {
  const onInput = (e: React.FormEvent<HTMLInputElement>) => {
    props.handleOnInput(e);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    props.handleSubmit(e);
  };

  return (
    <StyledSignUp>
      <h2>To continue please {props.type}:</h2>
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
