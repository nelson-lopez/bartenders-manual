import React, { useState } from "react";
import StyledLogin from "../component-styles/StyledLogin";
import useUserLogin from "../../api/postUserLogin";

const Login = () => {
  const [input, setInput] = useState({
    username: "",
    password: ""
  });

  const [userData, setData] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    setData({
      username: input.username,
      password: input.password
    });
  };

  const token = useUserLogin(userData.username, userData.password);

  console.log(token);

  const handleOnInput = e => {
    const key = e.target.className;
    const value = e.target.value;
    setInput(prevState => ({
      ...prevState,
      [key]: value
    }));
  };
  // console.log(useUserLogin());
  return (
    <div>
      <StyledLogin>
        <h2>To continue please login:</h2>
        <div className="login-container">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                placeholder="User Name"
                className="username"
                onChange={handleOnInput}
              ></input>
            </div>
            <div>
              <input
                placeholder="Password"
                className="password"
                onChange={handleOnInput}
              ></input>
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
