import React from "react";
import heroImg from "../icons_assets/restauranfood.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <p className="location">Chicago</p>
        <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Link to="/booking" className="btn">  Reserve a Table</Link>
      </div>
      <img src={heroImg} alt="Delicious food" />
    </section>
  );
}

export default Hero;