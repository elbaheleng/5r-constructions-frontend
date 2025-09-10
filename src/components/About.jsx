// src/components/About.jsx
import React from "react";

function About() {
  return (
    <section className="py-5 bg-light" id="about">
      <div className="container">
        <h2 className=" mt-3 text-center display-5 fw-bold mb-4 text-primary">
          About Us
        </h2>

        <p className="lead text-muted mb-3">
          <strong>5R Constructions</strong> was established in 2021 as a formal firm, building on over 40 years of experience in the construction industry. 
          We have earned a strong reputation in both residential and commercial projects, delivering high-quality, reliable, and timely construction services across the region.
        </p>

        <p className=" lead text-muted mb-0">
          Our dedicated team ensures that every project meets the highest standards of quality and design. 
          From turnkey residential projects to commercial ventures and specialized finishing works, 5R Constructions is committed to turning architectural visions into reality with efficiency and excellence.
        </p>
      </div>
    </section>
  );
}

export default About;
