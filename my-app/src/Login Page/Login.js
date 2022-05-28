<<<<<<< HEAD
import React from 'react'
import LoginUsername from './LoginUsername'
import LoginPassword from './LoginPassword'

const Login = () => {
  return (
    <> 
        <div className='loginWidget'>
            <h1 className='scheduetext'>ScheDue</h1>
            <LoginUsername />
            <LoginPassword />
        </div>
    </>
  )
}
=======
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
>>>>>>> e980b7941120075cebc0624d835e5ef0d3aaa1ed

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
