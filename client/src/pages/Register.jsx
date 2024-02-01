import React from "react";
import {Link} from 'react-router-dom'



const Register = () => {

    return (
        <div className="auth">
            <h1>Register</h1>
            <form action="">
                <input required type="text" name="username" placeholder="Username" />
                <input required type="email" name="email" placeholder="E-mail" />
                <input required type="password" name="password" placeholder="Password"/>
                <button type="submit">Login</button>
                <p>Error!</p>
                <span>Do you have an account? <Link to="/login">Login</Link></span>
            </form>
        </div>
    )
}



export default Register