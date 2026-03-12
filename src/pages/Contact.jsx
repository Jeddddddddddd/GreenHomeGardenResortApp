import React from "react";
import contactImg from "../assets/house.jpg";

function Contact() {
  const facebookUrl = "https://www.facebook.com/GreenHomeGardenResort";
  const instagramUrl = "https://www.instagram.com/greenhomegardenresort";

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* Left Side Image */}
        <div className="contact-image-container">
          <img
            src={contactImg}
            alt="Green Home Garden Resort"
            className="contact-image"
          />
        </div>

        {/* Right Side Info */}
        <div className="contact-info">
          <h2 className="contact-title">
            Let's <span className="contact-highlight">Connect.</span>
          </h2>

          <div className="contact-grid">

            {/* Facebook */}
            <div>
              <span className="contact-label">Facebook</span>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Green Home Garden ↗
              </a>
            </div>

            {/* Instagram */}
            <div>
              <span className="contact-label">Instagram</span>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                @greenhomegarden ↗
              </a>
            </div>

            {/* Phone */}
            <div>
              <span className="contact-label">Phone</span>
              <a href="tel:+639123456789" className="contact-link">
                +63 912 345 6789
              </a>
            </div>

            {/* Email */}
            <div>
              <span className="contact-label">Email</span>
              <a
                href="mailto:greenhomegardenresort@gmail.com"
                className="contact-link"
              >
                greenhomegarden...
              </a>
            </div>

            {/* Location */}
            <div className="contact-location">
              <span className="contact-label">Location</span>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Brgy. Sto. Niño, near Mintal, Davao City (Fronting Vista Mall) ↗
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;