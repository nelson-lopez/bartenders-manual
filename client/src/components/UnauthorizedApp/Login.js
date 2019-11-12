import React from "react";
import StyledLogin from "../component-styles/StyledLogin";

const Login = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div>
      <StyledLogin>
        <h2>To continue please login:</h2>
        <div className="login-container">
          <form onSubmit={handleSubmit}>
            <div>
              <input placeholder="User Name" className="username"></input>
            </div>
            <div>
              <input placeholder="Password" className="password"></input>
            </div>
            <div>
              <input type="submit" value="Submit" className="submit-button" />
            </div>
          </form>
        </div>
      </StyledLogin>
    </div>
  );
};

export default Login;
