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

export default Login