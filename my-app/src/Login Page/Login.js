import React from 'react'
import InputBox from './InputBox'

const Login = () => {
  return (
    <> 
        <div className='loginWidget'>
            <InputBox text = "Username" 
            style = {{
                marginLeft: "359px",
                marginTop: "480px"
                }}
            />
            <InputBox text = "Password" 
            style = {{
                marginLeft: "359px",
                marginTop: "575px"
                }}
            />
        </div>
    </>
  )
}

export default Login