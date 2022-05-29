import React from 'react';
import {Link} from "react-router-dom";

let NavBar = () => {
    return (
        <React.Fragment>
            <nav id="mainNavbar" className="navbar navbar-dark navbar-expand-md py-0 fixed-top">
                <a href="#" className="navbar-brand">CANDYMAN</a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navLinks"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navLinks">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="" className="nav-link">HOME</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
};
export default NavBar;