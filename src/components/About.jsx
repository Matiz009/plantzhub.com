import { Typography } from "@mui/material";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingMenu from "./LandingMenu";

const About = () => {
  return (
    <div>
      <LandingMenu />
      <br />
      <Typography variant="h1">About Us</Typography>
      <br />
      <span className="text-justify font-italic">
        PlantzHub.com provides a platform through which customers and sellers of
        the plant’s industry may communicate with each other. This communication
        includes getting information regarding new plants, buying plants that
        are available, or giving feedback about the products. This project is
        basically a web app that will act as an intermediary between the plant’s
        industry of Pattoki and all the customers present across the country.
        Customers will create accounts on this platform and can post details of
        the plants which they want to buy or are interested in. That post will
        be shared with all the registered nursery owners or accounts on our
        platform. In this way, we are connecting potential customers of this
        market to the local market of Pattoki.This project has the potential to
        earn millions.As we know Pattoki is the hub of all types of Plants
        present in the whole country.
      </span>
    </div>
  );
};

export default About;
