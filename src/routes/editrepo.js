import React from 'react'
import "./editrepoStyles.css"
import ButtonAppBar from '../components/Navebar'
import axios from 'axios';
import { useFormik } from 'formik';
import  { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from "react";
const Editrepo = () => {
  let navigate = useNavigate();
   let params = useParams()
  const [currentStudent, setCurrentStudet] = useState("");
  let formik = useFormik({
    initialValues: {
      name:"",
      commit:"",
      code:'',
      
    },
    onSubmit: async (values) => {
      try {
        
          await axios.put(
            `https://v-c-s-backend.onrender.com/employees/update/${currentStudent}`,
            values,
            {
              headers: {
                accesstoken: window.localStorage.getItem("token"),
              },
            }
          );
        navigate("/home")
        alert("updated successfully")
      } catch (error) {
          console.log(error)
        alert("Something went wrong");
      }
    },
  });
  
  
    useEffect( async () => {
      try {
        console.log(params.id)
          let studetData = await axios.get(`https://v-c-s-backend.onrender.com/employees/get/${params.id}`, {
              headers: {
                accesstoken: window.localStorage.getItem("token"),
              },
            });
            formik.setValues({
                    name: studetData.data.name,
                    commit: studetData.data.commit,
                    code:studetData.data.code
                  });
            setCurrentStudet(studetData.data._id)
           
          } catch (error) {
            alert("Something went wrong1");
      }         
   }, [])
  return (
    
    <div style={{display:"flex!important",justifyContent:"center!important",alignContent:"center!important"}}>
      <ButtonAppBar buttonName="Logout"/>
      <div className="container card-body ">
       <form onSubmit={formik.handleSubmit}>
      <div className="card"style={{marginTop:"7rem",backgroundColor:"rgba(27, 33, 40, 0.427)"}}>
          <h5 className="card-header fs-3"> <h1 style={{fontColor:"white!important",fontSize:"1.5rem"}}>Version Control system</h1> </h5>
        <div className="container row mt-3 mb-3">
             <div className="">
               <h3  className="link-primary">{formik.values.name}</h3>
              
             </div>
             <div className="mt-2">
                <label htmlFor="formGroupExampleInput2" className="form-label"> Commit</label>
                <input type="text" className="form-control" id="commit"  onChange={formik.handleChange} value={formik.values.commit} placeholder="Commit" />
             </div>
             <div className="mt-5">
             <div className="form-group">
                 <textarea className="form-control text-info bg-dark " placeholder="Enter your code here" value={formik.values.code}
                      id="code"  rows="15" onChange={formik.handleChange}></textarea>
               </div>
            </div>
            <span className="text-center text-danger"></span>
            <div className="d-grid mt-3 col-1 mx-auto">
                <button className="btn btn-success" type={'submit'} value="Submit" >Update</button>
                
           </div>
        </div>
      </div>    
      </form>
    </div>
    </div>
  )
}

export default Editrepo