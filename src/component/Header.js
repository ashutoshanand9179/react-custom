import React,{Component} from 'react'
export default class Header extends Component{
    render(){
        return(
            <header className="" id="header">
                <div className="container-fluid">
                    <div className="pull-left" id="logo">
                        <h1><a className="scrollto" href="#intro">SiteLogo</a></h1>
                    </div>
                    <nav id="nav-menu-container">
                        <ul className="nav-menu sf-js-enabled sf-arrows">
                            <li className="menu-active menu-item-active">
                                <a href="#intro">Home</a>
                            </li>
                            <li className="">
                                <a href="#about">About Us</a>
                            </li>
                            <li className="">
                                <a href="#services">Services</a>
                            </li>
                            <li className="">
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a href="#team">Team</a>
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