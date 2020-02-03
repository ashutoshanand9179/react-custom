import React,{Component} from 'react'
import {Link} from 'react-router-dom'

const LoingData = [{
    username: 'vinod',
    password:123123
},
{
    username: 'ashu',
    password: 123456
}]
export default class Login extends Component{
    state = {
        username: "",
        password: "",
    }
    SubmitForm = (event) => {
        event.preventDefault();
        
    }
    render(){
        return(
            <div className="form-content-container">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure>
                            <img alt="sing up image" src="images/signin-image.png" />
                        </figure>
                        {/* <a className="signup-image-link" href="#">Create an account</a> */}
                        <Link to="register" className="inlink-link">Create an account</Link>
                        <Link to="reset-password" className="inlink-link">Forgot Password</Link>
                    </div>
                    <div className="signin-form">
                        <h2 className="form-title">Sign In</h2>
                        <form className="register-form login-form" id="login-form" method="post" name="login-form">
                            <div className="form-group">
                                <label for="login_username"><i className="zmdi fa fa-user"></i></label> 
                                <input id="login_username" name="login_username" className="login_username form-controls" placeholder="Username or Email" type="text" />
                            </div>
                            <div className="form-group">
                                <label for="login_password"><i className="zmdi fa fa-lock"></i></label> 
                                <input id="login_password" name="login_password" className="login_password form-controls" placeholder="Password" type="password" />
                            </div>
                            <div className="form-group">
                                <input className="agree-term" id="remember-me" name="remember-me" type="checkbox" /> 
                                <label className="label-agree-term" for="remember-me"><span><span></span></span>Remember me</label>
                            </div>
                            <div className="form-group form-button">
                                <input className="form-submit" id="signin" name="signin" type="submit" value="Log in" />
                            </div>
                        </form>
                        <div className="social-login">
                            <span className="social-label">Or login with</span>
                            <ul className="socials">
                                <li>
                                    <a href="#"><i className="display-flex-center zmdi zmdi-facebook fa fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="display-flex-center zmdi zmdi-twitter fa fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="display-flex-center zmdi zmdi-google fa fa-google-plus"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}