import React, { useState } from 'react';
import './Login.css';
import {Link} from "react-router-dom";
import { loginApi } from '../../Api/Users';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("");
  
  const handleLogin = () => {
    const user = loginApi(email, password);
    console.log(user);
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

        <a href="/" className="card-link" id='forgotLink'>Forgotten your password?</a>
        <p className="card-text" id='signUp'>Don't have an account?
          <Link to="register"> Sign up </Link>
        </p>
      </div>
    </div>
    </div>
  );
}

export default Login;