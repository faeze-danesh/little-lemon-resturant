import React from "react";
import saladImg from "../icons_assets/greek salad.jpg";
import bruchettaImg from "../icons_assets/bruchetta.svg";
import dessertImg from "../icons_assets/lemon dessert.jpg";

function Specials() {
  return (
    <section className="specials">
      <h2>This Week’s Specials!</h2>
      <div className="specials-grid">
        <div className="card">
          <img src={saladImg} alt="Greek Salad" />
          <h3>Greek Salad</h3>
          <p>The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese.</p>
          <span>$12.99</span>
        </div>
        <div className="card">
          <img src={bruchettaImg} alt="Bruchetta" />
          <h3>Bruchetta</h3>
          <p>Grilled bread with garlic and topped with diced tomatoes, olive oil, and basil.</p>
          <span>$5.99</span>
        </div>
        <div className="card">
          <img src={dessertImg} alt="Lemon Dessert" />
          <h3>Lemon Dessert</h3>
          <p>Traditional homemade Lemon Dessert, our customers love it!</p>
          <span>$6.50</span>
        </div>
      </div>
    </section>
  );
}

export default Specials;