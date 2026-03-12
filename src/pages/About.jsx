import React from "react";
import profilePic from "../assets/casitas1.jpg";
import houseHall from "../assets/house.jpg";
import poolHouse from "../assets/pool.jpg";

function About() {
  return (
    <section id="about" className="about-section">
      {/* Minimalist Context Area */}
      <div className="about-text-container">
        <span className="about-label">The Experience</span>

        <h2 className="about-title">
          Nature is not a place to visit. <br />
          It is <span className="about-highlight">home.</span>
        </h2>

        <p className="about-description">
          Green Home Garden Resort is a sanctuary crafted for those who seek silence over noise.
          Nestled within Davao's lush landscapes, we provide a seamless blend of
          modern comfort and raw natural beauty.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="about-gallery">
        <div className="about-image-wrapper">
          <img src={profilePic} alt="Nature" className="about-img" />
        </div>

        <div className="about-image-wrapper">
          <img src={houseHall} alt="Architecture" className="about-img" />
        </div>

        <div className="about-image-wrapper">
          <img src={poolHouse} alt="Serenity" className="about-img" />
        </div>
      </div>
    </section>
  );
}

export default About;