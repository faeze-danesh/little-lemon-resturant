import React from "react";
import logo from "../icons_assets/Logo.svg"; // لوگوی Little Lemon

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" className="logo" />
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order">Order Online</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;