import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

import logoBrand from "../../img/logoBrand.png";

class navbar extends Component {
  render() {
    return (
      <Navbar bg="danger" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand to="#" className="navbarNav ml-3">
          <img src={logoBrand} alt="logoBrand" className="logoBrand" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-4">
            <Link to="#" className="navbarNav">
              Home
            </Link>
            <Link to="#" className="navbarNav">
              Article
            </Link>
            <Link to="#" className="navbarNav">
              About
            </Link>
            <Link to="#" className="navbarNav">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default navbar;
