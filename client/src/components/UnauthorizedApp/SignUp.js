import React, { useState } from "react";
import userUserSignup from "../../api/postUserSignUp";
import InputBox from "./InputBox";
import SuccessfulSignUp from "./SuccessfulSignup";

const SignUp = () => {
  const [input, setInput] = useState({
    username: "",
    password: ""
  });

  console.log(input);
  const [userData, setData] = useState({
    username: "",
    password: ""
  });
  const [isClicked, setClicked] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setData({
      username: input.username,
      password: input.password
    });
    setClicked(!isClicked);
  };

  const isSignedUp = userUserSignup(userData.username, userData.password);

  const handleOnInput = e => {
    const key = e.target.className;
    const value = e.target.value;
    setInput(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  if (isSignedUp && isSignedUp.statusText === "Created")
    return <SuccessfulSignUp />;
  return (
    <div>
      <InputBox handleOnInput={handleOnInput} handleSubmit={handleSubmit} />
    </div>
  );
};

export default SignUp;
