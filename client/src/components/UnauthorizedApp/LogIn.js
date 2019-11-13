import React, { useState } from "react";
import useUserLogin from "../../api/postUserLogIn";
import InputBox from "./InputBox";

export default function LogIn() {
  const [input, setInput] = useState({
    username: "",
    password: ""
  });

  console.log(input);
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
