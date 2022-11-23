import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div>
      <Navbar bg="success" variant="white">
        <Navbar.Brand
          className="text-white"
          style={{ marginLeft: "10px", fontSize: "40px" }}
        >
          plantzhub.com
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="text-white">
            <Link to="/LandingPage" className="text-decoration-none text-white">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link className="text-white">
            <Link to="/ContactUs" className="text-decoration-none text-white">
              Contact Us
            </Link>
          </Nav.Link>
          <Nav.Link className="text-white">
            <Link to="/Products" className="text-decoration-none text-white">
              Products
            </Link>
          </Nav.Link>
          <Nav.Link className="text-white" id="projects">
            <Link to="/About" className="text-decoration-none text-white">
              About Us
            </Link>
          </Nav.Link>
          <Nav.Link className="text-white" id="projects">
            <Link to="/Projects" className="text-decoration-none text-white">
              Our Projects
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Menu;
