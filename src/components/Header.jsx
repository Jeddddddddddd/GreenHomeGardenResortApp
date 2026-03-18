import React, { useState } from "react";
import logo from "../assets/GreenHomeLogo.jpg";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      {/* Left: Logo + Title */}
      <div className="header-left">
        <img
          src={logo}
          alt="Resort Logo"
          className="header-logo"
        />
        <h1 className="header-title">Green Home Garden Resort</h1>
      </div>

      {/* Hamburger Button */}
      <div 
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Navigation */}
      <nav className={`header-nav ${menuOpen ? "active" : ""}`}>
        <a href="#about">About</a>
        <a href="#projects">Packages</a>
        <a href="#contact">Contact</a>
      </nav>

    </header>
  );
}

export default Header;