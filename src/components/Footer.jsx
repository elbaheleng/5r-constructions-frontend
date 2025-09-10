// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="bg-primary text-white py-4">
      <div className="container text-center">
        <p className="mb-1 fw-bold">5R Constructions</p>
        <p className="mb-1">Poovathugal, Kurichithanam (PO), Kottayam, Pin-686634</p>
        <p className="mb-1">Ph: 9744954605, 7559804605</p>
        <p className="mb-0">&copy; {new Date().getFullYear()} 5R Constructions. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
