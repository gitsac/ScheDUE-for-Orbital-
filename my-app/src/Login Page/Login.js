import React from "react";
import InputBox from "./InputBox";

const Login = () => {
  return (
    <>
      <div className="loginWidget">
        <InputBox
          text="Username"
          style={{
            left: 612,
            top: 480,
          }}
        />

        <InputBox
          text="Password"
          style={{
            left: 612,
            top: 600,
          }}
        />
      </div>
    </>
  );
};

export default Login;
