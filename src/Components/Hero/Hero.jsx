import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>IT COMPANY AND TRAINING INSTITUTE</h1>
        From web development to network solutions, our skilled IT officers offer
        comprehensive IT services. We keep your IT infrastructure up-to-date and
        resolve infrastructure-specific problems. We also provide IT training.
        Trust us for all your IT needs.
        <br />
        <button className="btn3">
          <span>Get Started</span>
        </button>
        <button className="btn3">
          <span>Learn more</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
