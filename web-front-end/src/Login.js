import './Login.css';
import {Link} from "react-router-dom";
function Login() {
  return (
    <div id='Body'>
    <div className="card" id='appCard'>
      <div className="card-body">
        <h5 className="card-title" id='title'>Login</h5>
        <h6 className="card-subtitle mb-2 text-muted" id='subTitle'>Enter username & password</h6>
        <div class="input-group flex-nowrap" id="userName">
          <span class="input-group-text" id="addon-wrapping">@</span>
          <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>
        <div class="input-group flex-nowrap" id="passWord">
          <span class="input-group-text" id="addon-wrapping"><i class="fa-solid fa-lock"></i></span>
          <input type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>
        <button type="button" class="btn btn-primary btn-lg btn-block" id='login-btn'>Log in</button>
        <a href="/" className="card-link" id='forgotLink'>Forgotten your password?</a>
        <p className="card-text" id='signUp'>Don't have an account?  <a href="/" className="card-link"><Link to="register">  Sign up</Link></a></p>
      </div>
    </div>
    </div>
  );
}

export default Login;