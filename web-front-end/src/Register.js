import './Register.css';
import {Link} from "react-router-dom";
function Register() {
    
    return (
        <div id='cardBody'>
        <div class="card" id='RegisterCard'>
            <div class="card-header">
                Register
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                <form>
                    <div class="form-row">
                    <div class="col-md-4 mb-3" id='first-name'>
                        <label for="validationCustom01">First name</label>
                        <input type="text" class="form-control" id="validationCustom01" placeholder="First name" required/>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationCustom02">Last name</label>
                        <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" required/>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationCustomUsername">Username</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroupPrepend">@</span>
                            </div>
                            <input type="text" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required/>
                            <div class="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">Password</label>
                            <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">Confirm Password</label>
                            <input type="password" class="form-control" id="inputPassword4" placeholder="Confirm Password"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                        </div>
                    </div>
                    {/* <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck"/>
                            <label class="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div> */}
                    <Link to="/groups"><button type="submit" class="btn btn-primary">Sign Up</button></Link>
                    <p className="card-text" id='login'>Already have an account?  <a href="/" className="card-link"><Link to="/">  Login</Link></a></p>
                </form>
                </blockquote>
            </div>
        </div>
        </div>
        
    )
}

export default Register;