import React, { useState } from "react";

const Register = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    const passHandler = (event) => {
        setPass(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(email);
    }

    return <div className="auth-form-container">
        <h2>Register</h2>
        <form onSubmit={submitHandler} className="register-form">
            <label htmlFor="name">Name</label>
            <input value={name} onChange={nameHandler} placeholder="Full Name" type='text' id="name" name="name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={emailHandler} placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={passHandler} placeholder="******" id="password" name="password" />
            <button className="btn" type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={()=>{props.onFormSwitch('login')}}>Already have an account? Login Here!</button>
    </div>
    
}

export default Register;