import React from "react";
import Button from "react-bootstrap/Button";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero d-flex align-items-center justify-content-center text-center text-white">
      <div className="hero-content">
        <h1 className="fw-bold animate-fade-down">5R Constructions</h1>
        <p className="lead animate-fade-up">
          Building trusted residential and commercial spaces for over 40 years
        </p>
        <Button
          variant="primary"
          size="lg"
          href="#services"
          className="animate-fade-in"
        >
          Explore Services
        </Button>
      </div>
    </section>
  );
}

export default Hero;
