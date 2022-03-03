import React from "react";
import {Link} from "react-router-dom";
import './navbar.css';

export default class Navbar extends React.Component{
    render(){
        return(
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Razaq Farhan</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">
                                    About Me
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
            
        )
    }
}
