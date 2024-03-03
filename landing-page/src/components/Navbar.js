import React from "react";

export default function Navbar(props) {

    return (
        <nav id={props.mode ? "navbar-dark" : "navbar-light"} className="navbar">
            <div className="company">
                <img />
                <h2>XYZ Booking</h2>
            </div>
            <div className="navbar-main">
                <a href="#main" className="nav-items">Home</a>
                <a href="" className="nav-items">About us</a>
                <a href="#contact" className="nav-items">Contact us</a>
            </div>
            <div>
                <button className="toggleMode" onClick={props.toggleTheme}><img id="toggle-button" src={`../images/mode-${props.mode ? "light" : "dark"}.svg`} /></button>
                <button className="login">Login</button>
            </div>
        </nav>
    )
}