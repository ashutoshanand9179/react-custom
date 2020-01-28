import React,{Component} from 'react'
export default class Login extends Component{
    render(){
        return(
            <div className="form-container form-login" id="form-loginContainer">
                <form method="post" action="" id="loginForm">
                    <div className="form-group">
                        <label for="login_username"></label>
                        <input type="text" id="login_username" class="form-control fld_username" value="" placeholder="Username/Email"/>
                    </div>
                    <div className="form-group">
                        <label for="login_password"></label>
                        <input type="text" id="login_password" class="form-control fld_passwprd" value="" placeholder="Password" />
                    </div>
                    <span class="btn-container">
                        <input type="submit" class="btn button button-submit" value="login" id="login-submit"/>
                    </span>
                </form>
            </div>
        )
    }
}