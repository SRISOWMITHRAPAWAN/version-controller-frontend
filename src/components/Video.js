import React from "react";
import "./VideoStyles.css";
import spaceVideo from "../assests/space.mp4";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'



const Video = () => {
  

    const handleType = (count: number) => {
      // access word count number
      console.log(count)}
    
  
    const handleDone = () => {
      console.log(`Done after 5 loops!`)
    }

  let navi=useNavigate();
  const login=()=>{
  let path="/signin"
  navi(path)
  }

  let navig=useNavigate();
  const signup=()=>{
  let path="/signup"
  navig(path)
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:"transparent",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    boxShadow:"none",
    color: theme.palette.text.secondary,
  }));
  

  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={spaceVideo} type="video/mp4" />
      </video>
      <div className="content">
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
            <div className="para">
              <h1 style={{fontSize:"5rem"}}>Lets build from here</h1>
              <p>Harnessed for productivity. Designed for collaboration. Celebrated for built-in security. Welcome to the platform developers love.</p>
            </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <div className="log">
            <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal',marginBottom:"0rem" }}>
        Have an account{' '}
        <span style={{ color: 'skyblue', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['already?']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={30}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>
            <Button variant="contained" disableElevation onClick={()=>login()} style={{backgroundColor:"transparent" ,border:"1px solid gray"}}>
      CLICK HERE TO LOGIN
    </Button>
    <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        Create an{' '}
        <span style={{ color: 'skyblue', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['account']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={30}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>
      <Button variant="contained" disableElevation onClick={()=>signup()} style={{backgroundColor:"transparent" ,border:"1px solid gray"}}>
      CLICK HERE TO CREATE AN ACCOUNT
    </Button>
            </div>
          </Item>
        </Grid>
        </Grid>
        </Box>


      </div>
      </div>
    
  );
};

export default Video;
