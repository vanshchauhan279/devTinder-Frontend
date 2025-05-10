import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { addUser } from './utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setEmail] = useState("Soni@gmail.com");
    const [password,setPassword] = useState("Soni279@");
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogin = async ()=>{
        try{
             const res =await axios.post("http://localhost:7777/login",{
                email,
                password,
             },{
                withCredentials: true,  
             });
             
             dispatch(addUser(res.data))
             navigate('/');
        }
        catch(err){
            console.error(err)
        }
    }
  return (
    <div className="card bg-neutral text-neutral-content w-96 h-96 mt-8 rounded-3xl">
    <div className="card-body items-center ">
      <h2 className="card-title mb-5">Login!</h2>
      <div className="card-actions justify-end">
      <fieldset className="fieldset">
        <legend className="fieldset-legend text-white text-sm">Gmail</legend>
        <input type="text" className="input text-black w-72" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        
        <legend className="fieldset-legend text-white text-sm">Password</legend>
        <input type="password" className="input text-black"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className="btn btn-primary w-20 btn-sm mt-8 items-center" onClick={handleLogin}>login</button>
      </fieldset> 
      </div>
    </div>
  </div>
  )
}

export default Login
