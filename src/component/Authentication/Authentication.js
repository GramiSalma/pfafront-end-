import React from 'react';
import './Authenticaton.css';
import {FaUser,FaLock} from "react-icons/fa";

const Authentication = () => {
  return (
    <div className='wrapper'>
      <form action="">
        <h1>Login</h1>
        <div className='input-box'>
            <input type="text" 
            placeholder='Username' required/>
            <FaUser className='icon'/>
        </div>
        <div className='input-box'>
            <input type="text" 
            placeholder='password' required/>
            <FaLock className='icon'/>
        </div>
        <button  type="submit">Login</button>
        <div className='register-link'>
              
        </div>
      </form>
    </div>
  )
}

export default Authentication
