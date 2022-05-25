import React from 'react'
import InputBox from './InputBox'

const Login = () => {
  return (
    <> 
        <div className='loginWidget'>
            <InputBox text = "Username" 
            style = {{
                left: "359px",
                top: "480px"
                }}
            />
            <InputBox text = "Password" 
            style = {{
                left: "359px",
                top: "575px"
                }}
            />
        </div>
    </>
  )
}

export default Login