import React from "react";
import logo from "../assets/GreenHomeLogo.jpg";

function Header() {
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

      {/* Right: Navigation */}
      <nav className="header-nav">
        <a href="#about">About</a>
        <a href="#projects">Packages</a>
        <a href="#contact">Contact</a>
      </nav>

    </header>
  );
}

export default Header;