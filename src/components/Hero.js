import React from "react";
import heroImg from "../icons_assets/restauranfood.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <p className="location">Chicago</p>
        <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button>Reserve a Table</button>
      </div>
      <img src={heroImg} alt="Delicious food" />
    </section>
  );
}

export default Hero;