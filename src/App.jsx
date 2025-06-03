import NavBar from "./components/NavBar"
import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import EditProfile from "./components/EditProfile";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import SignUp from "./components/SignUp";


function App() {
  return (
     <BrowserRouter>
        <Routes>
        <Route path="/" element={<Body />}>   
          <Route index element={<Feed />} />   
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />    
          <Route path="profile/edit" element={<EditProfile/>}/>
          <Route path="connections" element={<Connections/>}/>
          <Route path="requests" element={<Requests/>}/>
          <Route path="signUp" element={<SignUp/>}/>
        </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
