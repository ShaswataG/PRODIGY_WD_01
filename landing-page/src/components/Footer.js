import React from "react";

export default function Footer(props) {
    return (
        <footer id="contact" className={props.mode ? "footer-dark" : "footer-light"}>
            <ul>
                <li><img src="./images/telephone.svg"/></li>
                <li><img src="./images/facebook.svg"/></li>
                <li><img src="./images/instagram.svg"/></li>
                <li><img src="./images/twitter-x.svg"/></li>
                <li><img src="./images/threads.svg"/></li>
                <li><img src="./images/"/></li>
            </ul>
        </footer>
    )
}