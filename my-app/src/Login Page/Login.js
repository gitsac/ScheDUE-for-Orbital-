import React from 'react'
import InputBox from './InputBox'

const Login = () => {
  return (
    <> 
        <div className='loginWidget'>
            <h1 className='scheduetext'>ScheDue</h1>
            <InputBox text = "Username" 
            className="loginUsernameInput"
            />
            <InputBox text = "Password"
            className="loginPasswordInput"
            />
        </div>
    </>
  )
}

export default Login