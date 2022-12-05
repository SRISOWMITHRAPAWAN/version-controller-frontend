import React from 'react'
import "./signupStyles.css"

import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { AiFillGithub} from "react-icons/ai";
import { Link } from 'react-router-dom';
import axios from "axios";

const Signup = () => {
  let navigate = useNavigate();
  
  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword:'',
    },
    validate : ( values ) => {
      const errors = {};

      if (!values.name) {
        errors.name  = 'This field cannot be empty';
      } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less';
      }
      

      if (!values.email) {
        errors.email  = 'This field cannot be empty';
      }
   
      if (!values.password) {
        errors.password = 'This field cannot be empty';
      } else if ( values.password.length < 8 ) {
        errors.password = 'Must be greater than 8 characters';
      }

      if (!values.confirmPassword) {
        errors.confirmPassword = 'This field cannot be empty';
      } else if ( values.confirmPassword.length < 8 ) {
        errors.confirmPassword = 'Must be greater than 8 characters';
      }
      if(values.password!==values.confirmPassword){
        errors.confirmPassword='password and confirm password are not same'
      }

      return errors;
    },
  
    onSubmit: async (values) => {
    
      try {

      const res= await axios.post('https://version-backend.onrender.com/register/signup', values);
     console.log(res)
     alert('Account created succesfully')
      navigate('/signin');
      } catch (error) {
        console.log(error);
        alert('Something went wrong');
      }
    },
  });

 
  return (
    <div className="container">
      
      
    
      
       <div className="row mt-5 p-2">
       <div style={{marginBottom:"1.5rem",display:"flex",alignItems:"center",justifyContent:"center"}}><AiFillGithub size={50} style={{color:"white"}}/></div>
       <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}><h1 style={{fontSize:"1.5rem" ,fontWeight:"lighter"}}>Register to GitHub</h1></div>
        <div className="col-4"></div>
        
        <div className="card shadow  col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" id="card" style={{borderRadius:"8px",padding:"1rem"}}>
      <form onSubmit={formik.handleSubmit}>
     

        <div className="row">
          <div className="col-lg-12 mt-2">
            <label style={{marginBottom:"0.5rem"}}>Username</label>
            <input
              type={'text'}
              name="name"
              id="name"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.name}
             
            
              style={{marginBottom:"1rem"}}
              
            /> {formik.errors.name ? <div style={{color : "red"}}>{formik.errors.name}</div> : null }
          </div>
          <div className="col-lg-12 mt-2">
            <label  style={{marginBottom:"0.5rem"}}>Email</label>
            <input
              type={'email'}
              name="email"
              id="email"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.email}
              style={{marginBottom:"1rem"}}
            /> {formik.errors.email ? <div style={{color : "red"}}>{formik.errors.email}</div> : null }
          </div>
          <div className="col-lg-12 mt-2">
            <label  style={{marginBottom:"0.5rem"}}>Password</label>
            <input
              type={'password'}
              name="password"
              id="password"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.password}
              style={{marginBottom:"1rem"}}
            />{formik.errors.password ? <div style={{color : "red"}}>{formik.errors.password}</div> : null }
<label  style={{marginBottom:"0.5rem"}}>confirmPassword</label>
            <input
              type={'password'}
              name="confirmPassword"
              id="confirmPassword"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              style={{marginBottom:"1rem",backgroundColor:  "rgb(12, 12, 23)"}}
            />{formik.errors.confirmPassword ? <div style={{color : "red"}}>{formik.errors.confirmPassword}</div> : null }

          </div>
          <div className="col-lg-12 m-2">
            <input type={'submit'} className="btn btn-primary" value="Submit" style={{backgroundColor:"green",width:"100%",marginLeft:"-0.5rem"}}/>
            <div className='register' style={{color:"white",marginRight:"1rem"}}>Already have an account!<Link to="/signin">click to signin</Link></div>
          </div>
        </div>
      </form>
     </div>  
     </div> 
    </div>
  )
}

export default Signup