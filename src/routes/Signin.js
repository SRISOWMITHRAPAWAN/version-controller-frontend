import React from 'react'
import "./signinStyles.css"
import axios from 'axios';
import { AiFillGithub} from "react-icons/ai";

import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';


const Signin = () => {
  let navigate=useNavigate();
  const [formData,setFormData]=useState({
    email:"",
    password:"",
  });

 const handleSubmit =async (e)=>{
  e.preventDefault();
  try{
    const response = await axios.post("https://version-backend.onrender.com/register/signin",{
      ...formData  
      });
      console.log(response.data);
      if(response){
        localStorage.setItem("token",response.data);
        navigate("/home")
      }
  }catch(error){
    console.log(error);
    alert("Invalid email or password")
   
  }
 
 }

 
  
  return (
    <div style={{color:"white"}} className="si">
<div className='icon'>
    <div style={{marginBottom:"1.5rem"}}><AiFillGithub size={50}/></div>
    <div ><h1 style={{fontSize:"1.5rem" ,fontWeight:"lighter"}}>Signin to GitHub</h1></div>
   <div className='Card'>
   <form onSubmit={handleSubmit}>
      <div className='mailid'>
        <label style={{marginBottom:"0.5rem",fontWeight:"lighter" }}>Email</label>
        <input
        type={"email"}
        className="mail"
        name="email"
        id="email"

       
        value={formData.email}
        onChange={(e)=>
          setFormData({...formData,email:e.target.value})}
        >
        </input>
      </div>
      <div className='password'>
        <label style={{marginBottom:"0.5rem" , fontWeight:"lighter" }}>Password</label>
        <input
          type={"password"}
          className="pass"
          name="password"
          id="password"
          
          value={formData.password}
          onChange={(e)=>
            setFormData({...formData,password:e.target.value})}
          >
        </input>
        <span className="text-start text-danger"></span>
      </div>
      <div className='submitbutton'>
      <input
                type={"submit"}
                className="btn btn-primary"
                value={"Login"}
                style={{backgroundColor:"green",border:"none"}}
              />
              <div className='register'>New to GitHub?<Link to="/signup">Create an account.</Link></div>
 

      </div>
    </form>
   </div>
  
  
</div>

    </div>
  )
}

export default Signin