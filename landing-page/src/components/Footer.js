import React from "react";

export default function Footer(props) {
    return (
        <footer id="contact" className={props.mode ? "footer-dark" : "footer-light"}>
            <ul>
                <li><img src={props.mode ? "./images/telephone-white.svg" : "./images/telephone-black.svg"} /></li>
                <li><img src={props.mode ? "./images/facebook-white.svg" : "./images/facebook-black.svg"}/></li>
                <li><img src={props.mode ? "./images/instagram-white.svg" : "./images/instagram-black.svg"}/></li>
                <li><img src={props.mode ? "./images/twitter-x-white.svg" : "./images/twitter-x-black.svg"}/></li>
                <li><img src={props.mode ? "./images/threads-white.svg" : "./images/threads-black.svg"}/></li>
            </ul>
            <p>&copy; Shaswata</p>
        </footer>
    )
}