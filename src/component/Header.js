import React,{Component} from 'react'
import {Link} from 'react-router-dom'
export default class Header extends Component{
    render(){
        return(
            <header className="" id="header">
                <div className="container">
                    <div className="pull-left" id="logo">
                        <h1><a className="scrollto" href="#intro">SiteLogo</a></h1>
                    </div>
                    <nav id="nav-menu-container">
                        <ul className="nav-menu sf-js-enabled sf-arrows">
                            <li className="menu-active menu-item-active">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="">
                                <Link to="about">About Us</Link>
                            </li>
                            <li className="">
                                <Link to="services">Services</Link>
                            </li>
                            <li className="">
                                <Link to="login">Login</Link>
                            </li>
                            <li>
                                <Link to="register">Sign up</Link>
                            </li>
                            <li className="menu-has-children">
                                <a className="sf-with-ul" href="">Drop Down</a>
                                <ul className="dropdown-nav">
                                    <li>
                                        <a href="#">Drop Down 1</a>
                                    </li>
                                    <li>
                                        <a href="#">Drop Down 3</a>
                                    </li>
                                    <li>
                                        <a href="#">Drop Down 4</a>
                                    </li>
                                    <li>
                                        <a href="#">Drop Down 5</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}