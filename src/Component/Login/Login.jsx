import React, { useState } from 'react'
import logo from "./logo.jpeg"
import world from "./worldback.jpeg"
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css"


import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "./firebase";

export const Login = () => {
  const [email ,setEmail] = useState("");
  const [password ,setPass] = useState("");

  const handle = async(e) => {
    e.preventDefault();
  
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href="/pro"
      console.log(email);
  };
  const regi = ()=>{
    window.location.href="/"
  }



 
  return (
    
    <div >
           <img className='world' src={world} alt="" />
       <div className='filter'></div>
      <img className='logo' src={logo} alt="" />
      <form className='form' action="">
        <h1 className='reg'>Login</h1>
        <span className='spa'>Enter email</span>
        <input placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} className='inp' required type="email" /> 
        <span className='span'>Enter password</span>
        <input placeholder='Enter strong Password' onChange={(e) => setPass(e.target.value)} className='inp' required type="password"/>
        
        <button onClick={handle}  className='cre-but'>Login</button>
        <p onClick={regi} className='sp'>or Register</p>
       
      </form>
    </div>
  )
}
