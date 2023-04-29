import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function TopBar() {
  return (
    <Navbar bg="light" expand="lg" className="p-3">
      <Navbar.Brand href="#home">
        <img
          width="150"
          src="https://assets.stickpng.com/images/5e8ce3cc664eae0004085464.png"
          alt="Instacart Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="LogIn">Log In</Nav.Link>
          <Button variant="success">Sign Up</Button>{" "}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopBar;
