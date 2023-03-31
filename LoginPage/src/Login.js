import React , { useState }  from "react";

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

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

    return (
        <div className="auth-form-container">
            <h2>Log In</h2>
            <form onSubmit={submitHandler} className="login-form">
                <label htmlFor="email">Email</label>
                <input value={email} onChange={emailHandler} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={passHandler} type="password" placeholder="*******" id="password" name="password" />
                <button className="btn" type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={ () => {props.onFormSwitch('register')}}>Don't have an account? Register Here!</button>
        </div>
    )
}

export default Login;