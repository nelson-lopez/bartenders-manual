import React from "react";
import { Redirect } from "react-router-dom";

const Logout = ({ handleRemoveToken }) => {
  localStorage.removeItem("token");
  handleRemoveToken();
  return <Redirect to="/" />;
};

export default Logout;
