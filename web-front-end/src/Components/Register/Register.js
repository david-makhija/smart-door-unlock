import './Register.css';
import { Link } from "react-router-dom";
import React, { useState } from 'react';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async () => {

  }

  return (
    <div id='cardBody'>
      <div class="card" id='RegisterCard'>
        <div class="card-header"> Register </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <form>
              {/* First and Last Name */}
              <div class="form-row">
                <div class="col-md-4 mb-3" id='first-name'>
                  <label for="validationCustom01">First name</label>
                  <input type="text" class="form-control" id="validationCustom01" placeholder="First name" required />
                </div>
                <div class="col-md-4 mb-3" id='last-name'>
                  <label for="validationCustom02">Last name</label>
                  <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" required />
                </div>
              </div>
              {/* Email for verification */}
              <div class="form-row">
                <label for="validationCustomUsername">Email</label>
                <div class="input-group">
                  <span class="input-group-text" id="inputGroupPrepend">@</span>
                  <input type="email" class="form-control" id="validationCustomUsername" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
              {/* Password security */}
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Password</label>
                  <input type="password" class="form-control" id="inputPassword4" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Confirm Password</label>
                  <input type="password" class="form-control" id="inputPassword4" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
              </div>

              <button type="submit" class="btn btn-primary" onClick={handleSignUp}>Sign Up</button>
              <p className="card-text" id='login'>Already have an account?
                <Link to="/"> Login </Link>
              </p>
            </form>
          </blockquote>
        </div>
      </div>
    </div>

  )
}

export default Register;