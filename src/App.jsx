import NavBar from "./components/NavBar"
import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Feed from "./components/Feed";



function App() {
  return (
     <BrowserRouter>
        <Routes>
        <Route path="/" element={<Body />}>   
          <Route path="/" element={<Feed/>}/>  
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />    
        </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
