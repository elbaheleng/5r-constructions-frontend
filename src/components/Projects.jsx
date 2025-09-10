import React from "react";
import "./Projects.css"; // import the CSS
import bekalImg from "/bekal.jpg";
import vanamalaImg from "/vanamala.jpg";
import remaHouseImg from "/rema.jpg";
import monasteryImg from "/monastery.jpg";
import ezhimalaImg from "/ezhimala.jpg";
import prestigeImg from "/prestige.jpg";
import pathroseImg from "/pathrose.jpg";

function Projects() {
  return (
    <section className="py-5 bg-primary text-white" id="projects">
      <div className="container">
        <h2 className="text-center display-5 fw-bold mb-5">Our Projects</h2>

        {/* Completed Works */}
        <h3 className="fw-bold mb-4">✅ Completed Works</h3>
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="card h-100 border-0 project-card">
              <img src={bekalImg} className="card-img-top" alt="Bekal Resort" />
              <div className="card-body text-dark">
                <h5 className="card-title fw-bold">Bekal Gateway Resort</h5>
                <p className="card-text">
                  Finishing works: Granite, Marble, Tile, and False Ceiling.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ongoing Works */}
        <h3 className="fw-bold mb-4">🚧 Ongoing Works</h3>
        <div className="row g-4">
          {[
            { img: vanamalaImg, title: "Vanamala Auditorium", desc: "Renovation work in progress." },
            { img: remaHouseImg, title: "Residential Building (Mrs. Rema)", desc: "Turnkey project – Work in progress." },
            { img: monasteryImg, title: "Divine Mercy Monastery", desc: "Construction in progress." },
            { img: ezhimalaImg, title: "Ezhimala Naval Academy", desc: "Kota Stone, Vitrified & Ceramic Tiling, Granite & RR Masonry." },
            { img: prestigeImg, title: "Prestige Ocean Pearl, Kozhikode", desc: "Mock-up room work in progress." },
            { img: pathroseImg, title: "Residential Building (Mr. Pathrose)", desc: "Labour contract – Just started." },
          ].map((project, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card h-100 border-0 project-card">
                <img src={project.img} className="card-img-top" alt={project.title} />
                <div className="card-body text-dark">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text">{project.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
