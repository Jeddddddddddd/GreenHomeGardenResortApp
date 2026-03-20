import React, { useState } from "react";
import logo from "../assets/GreenHomeLogo.jpg";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Packages</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

      </header>

      {/* Overlay */}
      <div 
        className={`nav-overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
}

export default Header;