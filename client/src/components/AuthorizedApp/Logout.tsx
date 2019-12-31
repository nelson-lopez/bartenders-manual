import React from "react";
import { Redirect } from "react-router-dom";
import { LogoutMethods } from "../../types/auth-methods.interface";

const Logout = (props: LogoutMethods) => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  props.handleRemoveToken();
  return <Redirect to="/" />;
};

export default Logout;
