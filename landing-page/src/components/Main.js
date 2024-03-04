import React from "react";
import Card from './Card'
import data from '../data'

export default function Main(props) {
    const cards = data.map((card) => (
        <Card darkMode={props.mode} img={card.img} title={card.title} text={card.text} />
    ))
    return (
        <main id="main" className={props.mode ? "main-dark" : "main-light"}>
            <div>
                <section id="about-us">
                    <h1>Lorem Ipsum</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae commodo mauris. Duis eget nunc rutrum, posuere dui quis, fermentum tellus. Nulla facilisi. Etiam bibendum, libero sit amet sodales finibus, sapien sem molestie risus, a tempus lorem sem a sapien. In hac habitasse platea dictumst. Donec semper eros quam, a laoreet eros imperdiet a. Vivamus ultrices libero id condimentum gravida. Donec eu porta leo. Morbi suscipit velit a neque interdum ultricies. </p>
                    <button className={props.mode ? "main--button-dark" : "main--button-light"} >Register Now</button>
                </section>
                <section className="card-collection" id="popular-packages">
                    {cards}
                </section>
            </div>
            
        </main>
    )
}