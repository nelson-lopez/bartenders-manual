import React, { useState } from "react";
import userUserSignup from "../../api/postUserSignUp";
import InputBox from "./InputBox";
import SuccessfulSignUp from "./SuccessfulSignup";

const SignUp = () => {
  const [input, setInput] = useState({
    username: "",
    password: ""
  });

  const [userData, setData] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setData({
      username: input.username,
      password: input.password
    });
  };

  const isSignedUp = userUserSignup(userData.username, userData.password);

  const handleOnInput = (e: React.FormEvent<HTMLInputElement>) => {
    const key = e.currentTarget.className;
    const value = e.currentTarget.value;
    setInput(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  if (isSignedUp && isSignedUp.statusText === "Created")
    return <SuccessfulSignUp />;
  return (
    <div>
      <InputBox
        handleOnInput={handleOnInput}
        handleSubmit={handleSubmit}
        type="Sign up"
      />
    </div>
  );
};

export default SignUp;
