import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { AiFillGithub} from "react-icons/ai";
import "./NavebarStyles.css"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';






export default function ButtonAppBar(props) {
  let navigate=useNavigate();
  const handleSignup=()=>{
  let path="/signin"
  navigate(path)
  }
  return (
    <div >
     <Box className='header' >
      <AppBar  position="sticky"  style={{ background: 'transparent', boxShadow: 'none'}}>
      
        <Toolbar>
         <AiFillGithub size={40}/>&nbsp;&nbsp;
          <Typography variant="h6"  component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{textDecoration:"none" ,color:"white"}}>GitHub</Link>
          </Typography>
          <Button color="inherit" style={{fontSize:20}} onClick={()=>handleSignup()}>{props.buttonName}</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
   
  );
}
