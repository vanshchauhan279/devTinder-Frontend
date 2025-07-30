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
import Chat from "./components/Chat";


function App() {
  return (
     <BrowserRouter>
        <Routes>
        <Route path="/" element={<Body />}>   
          <Route index element={<Feed />} />         
          <Route path="profile/view" element={<Profile />} />    
          <Route path="connections" element={<Connections/>}/>
          <Route path="requests" element={<Requests/>}/>    
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<SignUp/>}/> 
          <Route path="chat/:id" element={<Chat/>}/>
        </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
