// src/components/VisionMission.jsx
import React from "react";

function VisionMission() {
  return (
    <section className="py-5 bg-primary" id="vision-mission">
      <div className="container">
        <h2 className="text-center display-5 fw-bold text-white mb-5">
          Vision & Mission
        </h2>

        <div className="row g-4">
          {/* Vision Card */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center py-5">
                <h5 className="card-title fw-bold text-primary">Our Vision</h5>
                <p className="card-text text-muted">
                  To become a recognized construction firm in the industry.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center py-5">
                <h5 className="card-title fw-bold text-primary">Our Mission</h5>
                <p className="card-text text-muted">
                  To design, construct and deliver high quality, cost effective
                  and timely construction projects to our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
