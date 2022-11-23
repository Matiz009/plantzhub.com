import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import pic from "./imgs/mainPic.png";
import pic1 from "./imgs/cui.png";
import pic2 from "./imgs/logo.png";
import { Typography } from "@mui/material";
const LandingPage = () => {
  return (
    <>
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
            <a href="#project" className="text-decoration-none text-white">
              Our Projects
            </a>
          </Nav.Link>
        </Nav>
      </Navbar>
      <div>
        <img src={pic} alt="main" style={{ marginTop: "20px" }} />
      </div>
      <br />
      <br />
      <section id="project">
        <Typography
          variant="h3"
          component="h3"
          className="text-white"
          style={{ backgroundColor: "red" }}
        >
          TEN BILLION TREES TSUNAMI PROGRAMME
        </Typography>
        <br />
        <span class="text-justify font-italic">
          The Billion Tree Tsunami was a tree plantation drive launched in 2014,
          by the government of Khyber Pakhtunkhwa, Pakistan, in response to the
          challenge of global warming. Pakistan's Billion Tree Tsunami restores
          350,000 hectares of forests and degraded land to surpass its Bonn
          Challenge commitment.The project aimed at improving the ecosystems of
          classified forests, as well as privately owned waste and farm lands,
          and therefore entails working in close collaboration with concerned
          communities and stakeholders to ensure their meaningful participation
          through effectuating project promotion and extension services.The
          project was completed in August 2017, ahead of schedule.
          <br />
          <strong>
            We as a company are proud of being a part of this excellent
            initiative.
          </strong>
        </span>

        <br />
        <br />
        <iframe
          width="700"
          height="450"
          src="https://www.youtube.com/embed/C44ecuPMvFo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
      <hr />
      <br />
      <Typography
        variant="h3"
        component="h3"
        className="text-white"
        style={{ backgroundColor: "red" }}
      >
        Our Partners
      </Typography>
      <a href="https://www.comsats.edu.pk/">
        <img src={pic1} alt="cui" />
      </a>
      <a href="LandingPage">
        <img src={pic2} alt="plantzHub" />
      </a>

      <br />
      <br />
      <footer style={{ height: "100px" }} className="bg-success">
        <br />
        <h5 className="text-white">Copyrights Reserved 2022</h5>
      </footer>
    </>
  );
};

export default LandingPage;
