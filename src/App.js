import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './routes/signup';
import Login from './routes/login';
import Newrepo from './routes/newrepo';
import Editrepo from './routes/editrepo';
import Viewrepo from './routes/viewrepo';
import Home from './routes/home';
import Signin from './routes/Signin';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/newrepo' element={<Newrepo/>}/>
      <Route path='/editrepo/:id' element={<Editrepo/>}/>
      <Route path='/viewrepo/:id' element={<Viewrepo/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
