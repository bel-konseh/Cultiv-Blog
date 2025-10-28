
import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <div className="hero-overlay">
          <h1 className="hero-title">Welcome to Cultiv</h1>
          <p className="hero-subtitle">Discover, Learn, and Share Inspiring Articles</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
