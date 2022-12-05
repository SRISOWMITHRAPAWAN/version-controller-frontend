import React, { useState } from 'react'
import axios from 'axios';
import { useFormik } from 'formik';
import { useEffect } from "react";
import { useParams } from 'react-router-dom';


function Viewrepo() {

    let params = useParams()
    const [users, setusers] = useState("_")

    
    let formik = useFormik({
        initialValues: {
          name:"",
          commit:""
    
    
        }})   
    
    
    useEffect( async () => {
        try {
            let repoData = await axios.get(`https://version-backend.onrender.com/employees/get/${params.id}`, {
                headers: {
                  accesstoken: window.localStorage.getItem("token"),
                },
              });
              console.log(repoData)
              formik.setValues({
                      name: repoData.data.name,
                      commit: repoData.data.commit,
                      code:repoData.data.code
                    });
                    setusers(repoData.data)
            } catch (error) {
              alert("sorry Something went wrong");
        }         
     }, [])

  return (
    
    <div className="container card-body ">
    <div style={{backgroundColor:"gray",marginTop:"5rem",padding:"2rem",borderRadius:"2rem"}}>
      <p>{`Name : ${users.name}`}</p>
      <p>{`Message : ${users.commit}`}</p>
      <p>{`Code : ${users.code}`}</p>

    </div>
 </div>
);
}

export default Viewrepo