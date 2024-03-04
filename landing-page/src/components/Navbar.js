import React from "react";
import LoginUser from './LoginUser'


export default function Navbar(props) {
    const contact = document.querySelector("#contact")
    return (
        <nav id={props.mode ? "navbar-dark" : "navbar-light"} className="navBar">
            <div className="company">
                <img />
                <h2>XYZ Booking</h2>
            </div>
            <div>
                <ul className="navbar-main">
                    <li><a href="#main" className="nav-items">Home</a></li>
                    <li><a href="#about-us" className="nav-items">About us</a></li>
                    <li><a href="#popular-packages" className="nav-items">Popular Packages</a></li>
                    <li><a href="#contact" className="nav-items">Contact us</a></li>
                </ul>
            </div>
            <div>
                <button className="toggleMode" onClick={props.toggleTheme}><img id="toggle-button" src={`../images/mode-${props.mode ? "light" : "dark"}.svg`} /></button>
                <LoginUser />
            </div>
        </nav>
    )
}