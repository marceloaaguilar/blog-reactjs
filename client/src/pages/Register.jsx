import React, { useState } from "react";
import {Link} from 'react-router-dom'



const Register = () => {


    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    })

    const handlerChange = e =>{
        setInputs(prev=> ({...prev, [e.target.name]: e.target.value}))
    }

    return (
        <div className="auth">
            <h1>Register</h1>
            <form action="">
                <input required type="text" name="username" onChange={handlerChange} placeholder="Username" />
                <input required type="email" name="email" onChange={handlerChange} placeholder="E-mail" />
                <input required type="password" name="password" onChange={handlerChange} placeholder="Password"/>
                <button type="submit">Login</button>
                <p>Error!</p>
                <span>Do you have an account? <Link to="/login">Login</Link></span>
            </form>
        </div>
    )
}



export default Register