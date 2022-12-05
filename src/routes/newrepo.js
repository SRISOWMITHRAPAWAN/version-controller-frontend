import React from 'react'
import ButtonAppBar from '../components/Navebar'
import { useFormik } from "formik";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Newrepo = () => {

  let navigate = useNavigate();
  const [wait, setwait] = useState("");
  
  let formik = useFormik({
    initialValues: {
      name: "",
      commit: "",
      code: "",
    },
    onSubmit: async (values) => {
      setwait("Wait for a moment");
      try {
        await axios.post(
          "https://version-backend.onrender.com/employees/create",
          values,
          {
            headers: {
              accesstoken: window.localStorage.getItem("token"),
            },
          }
        );
      } catch (error) {
        alert("Something went wrong");
      }
      navigate("/home");
    },
  });
  return (
    <div style={{position:"absolute",width:"100%",height:"100%"}}>
      <ButtonAppBar buttonName= "logout"/>
      <div className="container card-body " style={{marginTop:"10rem"}}>
      <form onSubmit={formik.handleSubmit}>
        <div className="card" style={{backgroundColor:"rgba(27, 33, 40, 0.427)"}}>
          <h5 className="card-header fs-3" style={{color:"white"}}> Version Control system </h5>
          <div className="container row mt-3 mb-3">
            <div className="col-6">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Create a new repository
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder="Repository name"
              />
            </div>
            <div className="col-6">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Commit new file
              </label>
              <input
                type="text"
                className="form-control"
                id="commit"
                onChange={formik.handleChange}
                value={formik.values.commit}
                placeholder="Commit"
                style={{backgroundColor:"rgb(12, 12, 23)",borderRadius:"7px"}}
              />
            </div>
            <div className="mt-5">
              <div className="form-group">
                <textarea
                  className="form-control text-info bg-dark "
                  placeholder="Enter your code here"
                  value={formik.values.code}
                  id="code"
                  rows="15"
                  onChange={formik.handleChange}
                ></textarea>
              </div>
            </div>
            <span className="text-center text-danger">{wait}</span>
            <div className="d-grid mt-3 col-1 mx-auto">
              <button
                className="btn btn-success"
                type={"submit"}
                value="Submit"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Newrepo