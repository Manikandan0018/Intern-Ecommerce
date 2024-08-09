import React, { useState } from 'react'
import "./SignUp.css"
import logo from "./logo.jpeg"
import world from "./worldback.jpeg"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "./firebase";
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";






export const SignUp = () => {
  const [fName ,setFname] = useState("");
  const [lName ,setLname] = useState("");
  const [email ,setEmail] = useState("");
  const [password ,setPass] = useState("");

  const handle = async(e) => {
    e.preventDefault();
    
    try{
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      toast.success("Account Create Successfully", {position:"top-center"})
      window.location.href="/pro"

    }catch (error){
      console.log(error.message);
  }
  };

  const login = (e)=>{
    e.preventDefault();
    window.location.href="/login"
  }

 



  return (
   
    <div >
           <img className='world' src={world} alt="" />
      
       <div className='filter'></div>
      <img className='logo' src={logo} alt="" />
      <form className='form' action="">
        <h1 className='reg'>Create Account</h1>
        <span className='span'>Enter FirstName</span>
        <input placeholder='First Name' onChange={(e) => setFname(e.target.value)} className='inp' required type="text"  />
        <span  className='span'>Enter LastName</span>
        <input placeholder='Last Name' onChange={(e) => setLname(e.target.value)} className='inp' required type="text"  />
        <span className='spa'>Enter email</span>
        <input placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} className='inp' required type="email" /> 
        <span className='span'>Enter password</span>
        <input placeholder='Enter strong Password' onChange={(e) => setPass(e.target.value)} className='inp' required type="password"/>
        
        <button onClick={handle} className='cre-but'>Create Account</button>
        <span  onClick={login} className='login'>Or Login</span>
        <h1 className='google'><FaGoogle/></h1>
        <h1 className='youtube'><FaYoutube/></h1>
      </form>
    </div>
  )
}
