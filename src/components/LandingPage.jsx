import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import pic from "./imgs/mainPic.png";
import pic1 from "./imgs/cui.png";
import pic2 from "./imgs/logo.png";
import { Typography } from "@mui/material";
import Projects from "./Projects";
import LandingMenu from "./LandingMenu";
const LandingPage = () => {
  return (
    <>
      <LandingMenu />
      <div>
        <img src={pic} alt="main" style={{ marginTop: "20px" }} />
      </div>
      <br />
      <br />
      <Projects />
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
