import React from "react";
import "./navbar.css";
import { Nav, Navbar, Container } from "react-bootstrap";

const NavbarComponents = () => {
  return (
    <Navbar expand="lg"className="navCss">
      <Container >
        <Navbar.Brand href="#home">Ruli & Tami</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#couple">Couple</Nav.Link>
            <Nav.Link href="#event">Event</Nav.Link>
            <Nav.Link href="#wishes">Wishes</Nav.Link>
            <Nav.Link href="#attending">Attending</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponents;
