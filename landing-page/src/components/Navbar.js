import React from "react";
import LoginUser from './LoginUser'


export default function Navbar(props) {
    const contact = document.querySelector("#contact")
    return (
        <nav id={props.mode ? "navbar-dark" : "navbar-light"} className="navBar">
            <div onClick={() => window.location.href='/'} className="company">
                <img />
                <h2>XYZ Booking</h2>
            </div>
            <div>
                <ul className="navbar-main">
                    <li><a href="#main" className={props.mode ? "nav-items-dark" : "nav-items-light"}>Home</a></li>
                    <li><a href="#about-us" className={props.mode ? "nav-items-dark" : "nav-items-light"}>About us</a></li>
                    <li><a href="#popular-packages" className={props.mode ? "nav-items-dark" : "nav-items-light"}>Popular Packages</a></li>
                    <li><a href="#contact" className={props.mode ? "nav-items-dark" : "nav-items-light"}>Contact us</a></li>
                </ul>
            </div>
            <div>
                {/* <button className="toggleMode" onClick={props.toggleTheme}><img id="toggle-button" src={`../images/mode-${props.mode ? "light" : "dark"}.svg`} /></button> */}
                <div>
                    <input onClick={props.toggleTheme} type="checkbox" className="checkbox" id="checkbox" />
                    <label for="checkbox" className="checkbox-label">
                        <i className="fas fa-moon"></i>
                        <i className="fas fa-sun"></i>
                        <span className="ball"></span>
                    </label>
                </div>
                <LoginUser darkMode={props.mode} />
            </div>
        </nav>
    )
}