import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


export default function BasicCard({title,subtitle,button}) {
  let navigate=useNavigate();
  const handleNew=()=>{
  let path="/newrepo"
  navigate(path)
  }
  return (
    <Card sx={{ width: 375 }} style={{backgroundColor:" rgba(27, 33, 40, 0.427)",borderRadius:"10px"}}>
      <CardContent style={{textAlign:"left"}}>
        <Typography sx={{ fontSize: 17 }} color="white" gutterBottom style={{textAlign:"left"}}>
          {title}
        </Typography>
        
        <Typography sx={{ mb: 1 }} color="white" > 
        {subtitle}
        </Typography>
      </CardContent>
      <CardActions>
        {button ? <><Button onClick={()=>handleNew()} size="small" variant='contained' style={{textAlign:"center",backgroundColor:"green",marginBottom:"1rem"}}>{button}</Button></>:<></>}
      </CardActions>
    </Card>
  );
}
