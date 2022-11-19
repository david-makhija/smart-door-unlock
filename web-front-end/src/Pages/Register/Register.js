import './Register.css';
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { registerApi } from '../../Api/Users';

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const user = await registerApi(email, password, confirmPassword, firstName, lastName, phone)
    if (user){
      navigate("/")
    }
  }

  return (
    <div id='cardBody'>
      <div className="card" id='RegisterCard'>
        <div className="card-header"> Register </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <form>
              {/* First and Last Name */}
              <div className="form-row">
                <div className="col-md-4 mb-3" id='first-name'>
                  <label htmlFor="validationCustom01">First name</label>
                  <input type="text" className="form-control" id="validationCustom01" placeholder="First name" required value={firstName} onChange={(e) => setFirstName(e.target.value) } />
                </div>
                <div className="col-md-4 mb-3" id='last-name'>
                  <label htmlFor="validationCustom02">Last name</label>
                  <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" required value={lastName} onChange={(e) => setLastName(e.target.value) } />
                </div>
                <div className="col-md-4 mb-3" id='phone'>
                  <label htmlFor="validationCustom03">Phone</label>
                  <input type="text" className="form-control" id="validationCustom03" placeholder="Phone" required value={phone} onChange={(e) => setPhone(e.target.value) } />
                </div>
              </div>
              {/* Email for verification */}
              <div className="form-row">
                <label htmlFor="validationCustomUsername">Email</label>
                <div className="input-group">
                  <span className="input-group-text" id="inputGroupPrepend">@</span>
                  <input type="email" className="form-control" id="validationCustomUsername" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
              {/* Password security */}
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword1">Password</label>
                  <input type="password" className="form-control" id="inputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword2">Confirm Password</label>
                  <input type="password" className="form-control" id="inputPassword2" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
              </div>

              <button type="submit" className="btn btn-primary" onClick={handleSignUp}>Sign Up</button>
              <p className="card-text" id='login'>Already have an account?
                <Link to="/login"> Login </Link>
              </p>
            </form>
          </blockquote>
        </div>
      </div>
    </div>

  )
}

export default Register;