// src/components/Contact.jsx
import React from "react";

function Contact() {
  return (
    <section className="py-5 bg-white" id="contact">
      <div className="container">
        <h2 className="text-center display-5 fw-bold mb-5 text-primary">
          Contact Us
        </h2>

        <div className="row g-4">
          {/* Left Column: Form + Contact Info */}
          <div className="col-lg-6">
            {/* Contact Form */}
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">
                  Name
                </label>
                <input type="text" className="form-control" id="name" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">
                  Email
                </label>
                <input type="email" className="form-control" id="email" placeholder="Your Email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-bold">
                  Message
                </label>
                <textarea className="form-control" id="message" rows="5" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-4 text-muted">
              <p className="mb-1 fw-bold">5R Constructions</p>
              <p className="mb-1">Poovathugal, Kurichithanam (PO), Kottayam</p>
              <p className="mb-1">Pin-686634</p>
              <p className="mb-0">Ph: 9744954605, 7559804605</p>
            </div>
          </div>

          {/* Right Column: Google Map */}
          <div className="col-lg-6">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.497650073422!2d76.4991620741651!3d9.584470592969715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080be47c053123%3A0x0000000000000000!2sKurichithanam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1694343893817!5m2!1sen!2sin"
                title="5R Constructions Location"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
