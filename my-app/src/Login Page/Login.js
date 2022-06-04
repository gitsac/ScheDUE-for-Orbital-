import React from "react";
import LoginUsername from "./loginUsername";
import LoginPassword from "./loginPassword";

const Login = () => {
  return (
    <body style={{ backgroundColor: "lightcyan" }}>
      <div className="loginWidget">
        <h2 className="schedue">ScheDue</h2>
        <h3 className="login">Log In</h3>
        <LoginUsername />
        <LoginPassword />
        <div className="loginText">Forgot your password?</div>
        <div className="loginText">Register</div>
      </div>
    </body>
  );
};

export default Login;
