import { useEffect } from "react";
import {useNavigate} from "react-router-dom"

const Protected = (props) => {
    const  {Component}=props;
    const navigate= useNavigate();
    let login = localStorage.getItem('token');

    console.log('token in',login);

    useEffect(()=>{
      
        if(!login){
            navigate('/login');
        }
     
       
    },[login, navigate]);
    return ( 
        
        <div>
        {login ? <Component /> : null}



        </div>


    )}
export default Protected