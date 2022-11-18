import React, { useState } from 'react';
import './Login.css';
import {Link, useNavigate} from "react-router-dom";
import { loginApi, forgotPasswordApi } from '../../Api/Users';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("");
  
  const handleLogin = () => {
    const user = loginApi(email, password);
    console.log(user)
    if (user){
      navigate("/groups")
    }
  }

  return (
    <div id='Body'>
    <div className="card" id='appCard'>
      <div className="card-body">
        <h5 className="card-title" id='title'>Login</h5>
        <h6 className="card-subtitle mb-2 text-muted" id='subTitle'>Enter email & password</h6>
        {/* EMAIL */}
        <div className="input-group flex-nowrap" id="userName">
          <span className="input-group-text" id="addon-wrapping">@</span>
          <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        {/* PASSWORD */}
        <div className="input-group flex-nowrap" id="passWord">
          <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-lock"></i></span>
          <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping"value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {/* SUBMIT */}
        <button type="button" className="btn btn-primary btn-lg btn-block" id='login-btn' onClick={handleLogin}>Log in</button>

        <button onClick={() => forgotPasswordApi(email)} className="btn btn-primary btn-lg btn-block" id="forgot-btn">Forgot password</button>

        <p className="card-text" id='signUp'>Don't have an account?
          <Link to="/register"> Sign up </Link>
        </p>
      </div>
    </div>
    </div>
  );
}

export default Login;