import React,{Component} from 'react'
import {Link} from 'react-router-dom'

export default class Register extends Component{
    
    render(){
        return(
            <div className="form-content-container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form className="register-form" id="register-form" method="post" name="register-form">
                            <div className="form-group">
                                <label for="display_name"><i className="zmdi zmdi-account material-icons-name fa fa-user"></i></label> 
                                <input id="display_name" name="display_name" placeholder="Name" type="text" />
                            </div>
                            <div className="form-group">
                                <label for="user_email"><i className="zmdi zmdi-email fa fa-envelope"></i></label> 
                                <input id="user_email" name="user_email" placeholder="Your Email" type="email" />
                            </div>
                            <div className="form-group">
                                <label for="user_register_as"><i className="zmdi zmdi-email fa fa-info-circle"></i></label> 
                                <select className="user_register_as" name="user_register_as" placeholder="Register as">
                                    <option value="" disabled selected hidden>Register as</option>
                                    <option value="self_vendor">Self</option>
                                    <option value="contract_vendor">Contract</option>
                                    <option value="consumer">Consumer</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="user_password"><i className="zmdi zmdi-lock fa fa-lock"></i></label> 
                                <input id="user_password" name="user_password" placeholder="Password" type="password" />
                            </div>
                            <div className="form-group">
                                <label for="user_repassword"><i className="zmdi zmdi-lock-outline fa fa-lock"></i></label> 
                                <input id="user_repassword" name="user_repassword" placeholder="Repeat your password" type="password" />
                            </div>
                            <div className="form-group">
                                <label for="user_phone"><i className="zmdi zmdi-lock fa fa-phone"></i></label> 
                                <input id="user_phone" name="user_phone" placeholder="Phone" type="text" />
                            </div>
                            <div className="form-group">
                                <input className="agree-term" id="agree-term" name="agree-term" type="checkbox" /> 
                                <label className="label-agree-term" for="agree-term"><span><span></span></span>
                                I agree all statements in 
                                <Link to="terms-of-services" className="term-service">Terms of service</Link></label>
                            </div>
                            <div className="form-group form-button">
                                <input className="form-submit" id="signup" name="signup" type="submit" value="Register" />
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure>
                            <img alt="sing up image" src="images/signup-image.jpg" />
                        </figure>
                        <Link to="login" className="signup-image-link">I am already member</Link>
                    </div>
                </div>
            </div>
        )
    }
}