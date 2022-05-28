import React from "react";
import LoginUsername from "./LoginUsername";
import LoginPassword from "./LoginPassword";

const Login = () => {
  return (
    <>
      <div className="loginWidget">
        <LoginUsername />
        <LoginPassword />
      </div>
    </>
  );
};

export default Login;
