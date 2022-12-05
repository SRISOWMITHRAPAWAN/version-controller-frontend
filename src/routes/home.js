import React from 'react'
import ButtonAppBar from '../components/Navebar'
import "./homeStyless.css"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BasicCard from '../components/cards';
import { useEffect,useState } from 'react';
import axios from "axios";

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Home = () => {
  let navigate = useNavigate();
  const [students, setStudents] = useState([]);
  
  async function fetchAll() {
    try {
      let studentsData = await axios.get("https://version-backend.onrender.com/employees/get", {
        headers: {
          accesstoken: window.localStorage.getItem("token"),
        },
      });
      setStudents(studentsData.data);
    } catch (error) {
      alert("Something went wrong");
    }
  }

  useEffect(() => {
    fetchAll();
  }, []);


  let handleDelete = async (id) => {
    try {
      let ask = window.confirm(
        "Are you sure, do you want to delete this repository?"
      );
      if (ask) {
        await axios.delete(`https://version-backend.onrender.com/employees/delete/${id}`, {
          headers: {
            accesstoken: window.localStorage.getItem("token"),
          },
        });
        fetchAll();
      }
    } catch (error) {
      alert("Something went wrong please login again");
    }
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:"transparent" ,boxShadow:"none",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <div className='conta'>
     <ButtonAppBar buttonName= "logout"/>
    
    <Box sx={{ flexGrow: 1 }} style={{marginTop:"10rem"}}className="griding">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item className='page'>
         
          <h1 style={{fontSize:"2rem"}}>The home for all developers — including you.</h1>
      <p style={{color:"gray",fontSize:"1.2rem"}}>Welcome to your personal dashboard, where you can find an introduction to how GitHub works, tools to help you build software, and help merging your first lines of code.</p>
      
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item className='card1'><BasicCard title="Start a new repository"
           subtitle="A repository contains all of your project's files, revision history, and collaborator discussion."
           button="create new repository"
           /></Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
          <table className="table table-striped">
            <thead>
              <tr className="text-center" color='white'>
                <th scope="col">Repository name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => {
                return (
                  <tr className="text-center">
                    <td className="h5 text-dark">{student.name}</td>
                    <td>
                      <Link to={`/viewrepo/${student._id}`}
                        className="btn btn-primary btn-sm ms-2">
                        view
                      </Link>
                      <Link to={`/editrepo/${student._id}`} 
                        className="btn btn-warning btn-sm ms-2"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(student._id)}
                        className="btn btn-danger btn-sm ms-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>k,lm</Item>
        </Grid>
        
      </Grid>
    </Box>
      

    
   
    
       
       
  </div>
  )
}

export default Home