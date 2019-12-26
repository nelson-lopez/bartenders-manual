import React, { useState } from "react";
import useUserLogin from "../../api/postUserLogIn";
import InputBox from "./InputBox";
import { Redirect } from "react-router-dom";

export default function LogIn({ handleSetToken }) {
  const [redirect, setRedirect] = useState(false);
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
    setRedirect(!redirect);
  };

  const token = useUserLogin(userData.username, userData.password);
  if (token && token.data.accessToken) {
    localStorage.setItem("token", token.data.accessToken);
    const jwt = localStorage.getItem("token");
    handleSetToken(jwt);
  }
  const handleOnInput = e => {
    const key = e.target.className;
    const value = e.target.value;
    setInput(prevState => ({
      ...prevState,
      [key]: value
    }));
  };
  if (redirect && token) return <Redirect to="/" />;
  return (
    <div>
      <InputBox
        type="Login"
        handleOnInput={handleOnInput}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
