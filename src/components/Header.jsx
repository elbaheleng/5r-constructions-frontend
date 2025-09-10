// src/components/Header.jsx
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        {/* Logo / Brand */}
        <Navbar.Brand href="#home" className="fw-bold text-white">
          5R Constructions
        </Navbar.Brand>

        {/* Hamburger menu for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menu Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-white">Home</Nav.Link>
            <Nav.Link href="#about" className="text-white">About</Nav.Link>
            <Nav.Link href="#services" className="text-white">Services</Nav.Link>
            <Nav.Link href="#projects" className="text-white">Projects</Nav.Link>
            <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
