import React, { useState } from "react";
import {Link} from 'react-router-dom'
import axios from "axios"



const Register = () => {


    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    })

    const handlerChange = e =>{
        setInputs(prev=> ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        try{
            const response = await axios.post("/auth/register", inputs)
            console.log(response);
        } 
        catch(err){
            console.log(err)
        }
    }

    return (
        <div className="auth">
            <h1>Register</h1>
            <form action="">
                <input required type="text" name="username" onChange={handlerChange} placeholder="Username" />
                <input required type="email" name="email" onChange={handlerChange} placeholder="E-mail" />
                <input required type="password" name="password" onChange={handlerChange} placeholder="Password"/>
                <button onClick={handleSubmit}>Register</button>
                <p>Error!</p>
                <span>Do you have an account? <Link to="/login">Register</Link></span>
            </form>
        </div>
    )
}



export default Register