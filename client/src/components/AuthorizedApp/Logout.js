import React from "react";
import { Redirect } from "react-router-dom";

const Logout = ({ handleRemoveToken }) => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  handleRemoveToken();
  return <Redirect to="/" />;
};

export default Logout;
