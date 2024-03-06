import React from "react";
import Card from './Card'
import data from '../data'
import { Link } from 'react-router-dom'

export default function Main(props) {
    const cards = data.map((card) => (
        <Card darkMode={props.mode} img={card.img} title={card.title} text={card.text} />
    ))
    return (
        <main id="main" className={props.mode ? "main-dark" : "main-light"}>
            <div>
                <section id="about-us">
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae commodo mauris. Duis eget nunc rutrum, posuere dui quis, fermentum tellus. Nulla facilisi. Etiam bibendum, libero sit amet sodales finibus, sapien sem molestie risus, a tempus lorem sem a sapien. In hac habitasse platea dictumst. Donec semper eros quam, a laoreet eros imperdiet a. Vivamus ultrices libero id condimentum gravida. Donec eu porta leo. Morbi suscipit velit a neque interdum ultricies. </p>
                    <button target="_blank" onClick={() => window.location.href='register'} className={props.mode ? "main--button-dark" : "main--button-light"} >Get Started</button>
                </section>
                <section id="popular-packages">
                    <h1>Popular Packages</h1>
                    <section className="card-collection" >
                        {cards}
                    </section>
                </section>
            </div>
            
        </main>
    )
}