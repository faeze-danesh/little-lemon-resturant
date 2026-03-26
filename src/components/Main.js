import React from "react";
import "./Main.css"; // فایل CSS مخصوص این بخش

export default function Main() {
  return (
    <main className="reserve-section">
      <div className="reserve-info">
        <h2>Reserve a Table</h2>
        <p>
          Choose your date, time, and occasion. We’ll make it special!
        </p>
      </div>

      <div className="reserve-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="date" />
        <input type="time" />
        <select>
          <option value="">Select occasion</option>
          <option value="birthday">Birthday</option>
          <option value="engagement">Engagement</option>
          <option value="anniversary">Anniversary</option>
        </select>
        <button>Reserve</button>
      </div>
    </main>
  );
}