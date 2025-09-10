// src/components/Services.jsx
import React from "react";

function Services() {
  return (
    <section className="py-5 bg-light" id="services">
      <div className="container">
        <h2 className=" mt-3 text-center display-5 fw-bold text-primary mb-5">
          Our Services
        </h2>

        <div className="row g-4">
          {/* Residential Buildings */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center">
                <i className="fas fa-home fa-2x text-primary mb-3"></i>
                <h5 className="card-title fw-bold text-dark">
                  Residential Buildings
                </h5>
                <ul className="list-unstyled text-muted">
                  <li>✔ Turnkey</li>
                  <li>✔ Labour Contract</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Commercial Buildings */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center">
                <i className="fas fa-building fa-2x text-primary mb-3"></i>
                <h5 className="card-title fw-bold text-dark">
                  Commercial Buildings
                </h5>
                <ul className="list-unstyled text-muted">
                  <li>✔ Total Contract</li>
                  <li>✔ Labour Contract</li>
                  <li>✔ Item-wise works (Civil, Finishing, Interior)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* School Buildings */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center">
                <i className="fas fa-school fa-2x text-primary mb-3"></i>
                <h5 className="card-title fw-bold text-dark">
                  School Buildings
                </h5>
                <ul className="list-unstyled text-muted">
                  <li>✔ Total Contract</li>
                  <li>✔ Labour Contract</li>
                  <li>✔ Item-wise works (Civil, Finishing, Interior)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Monastery Buildings */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center">
                <i className="fas fa-church fa-2x text-primary mb-3"></i>
                <h5 className="card-title fw-bold text-dark">
                  Monastery Buildings
                </h5>
                <ul className="list-unstyled text-muted">
                  <li>✔ Total Contract</li>
                  <li>✔ Labour Contract</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Resorts */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center">
                <i className="fas fa-umbrella-beach fa-2x text-primary mb-3"></i>
                <h5 className="card-title fw-bold text-dark">Resorts</h5>
                <ul className="list-unstyled text-muted">
                  <li>✔ Item-wise works</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
