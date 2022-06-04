import React from "react";
import LoginUsername from "./LoginUsername";
import LoginPassword from "./LoginPassword";

const Login = () => {
  return (
    <div>
      <div className="loginWidget">
        <h2 className="schedue">ScheDue</h2>
        <h3 className="login">Log In</h3>
        <LoginUsername />
        <LoginPassword />
        <div className="loginText">Forgot your password?</div>
        <div className="loginText">Register</div>
      </div>
    </div>
  );
};

export default Login;
