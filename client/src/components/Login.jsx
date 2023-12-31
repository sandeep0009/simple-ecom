import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate= useNavigate()

    const[username,setusername]=useState('');
    const[password,setpassword]=useState('');
    const handleClick=async()=>{

        try{
            const res= await axios.post("https://dummyjson.com/auth/login",{username,password});
            const {token}=res.data;
            localStorage.setItem('token',token);
            console.log("token",token);
            navigate('/')

        }

        catch(error){
            console.log(error)
        }
       

    }
  return (
    <div className="container h-80 w-96 bg-slate-900 justify-center m-auto mt-20 rounded-lg">
        <h2 className="text-center text-3xl text-white mt-5 pt-10 italic">Login in</h2>

        <div className="container mt-5  m-auto text-center">
        
        <input className="w-80 h-8   rounded-sm mt-2" type="text" placeholder="Enter your name"  value={username} onChange={(e)=>(setusername(e.target.value))}/>


        </div>

        <div className="container mt-5 text-center">
        <input className="w-80 h-8 rounded-sm mt-2" type="text" placeholder="Enter your password"  value={password} onChange={(e)=>(setpassword(e.target.value))}/>


        </div>

        <button className="w-80 h-10 text-center  bg-slate-200 text-black flex mt-12 m-auto justify-center rounded-lg hover:bg-slate-400 cursor-pointer" onClick={handleClick}>Submit</button>

    </div>
  )
}

export default Login