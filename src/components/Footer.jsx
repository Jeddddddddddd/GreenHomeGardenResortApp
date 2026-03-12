import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Side: Brand Name */}
        <div className="footer-brand">
          GREEN HOME GARDEN<span className="footer-dot">•</span>RESORT
        </div>

        {/* Right Side: Simple Details */}
        <div className="footer-right">
          <span>© {currentYear}</span>
          <span>Davao City, PH</span>
          <span className="footer-highlight">Official Page</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;