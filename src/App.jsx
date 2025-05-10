import NavBar from "./NavBar"
import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";
import Feed from "./Feed";


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
