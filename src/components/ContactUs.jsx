import React from "react";
import "./Products.css";
import { TextField, Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="box">
      <h1 className="contact">SEND US A MESSAGE</h1>
      <TextField label="Name" variant="standard" color="secondary" focused />
      <br />
      <br />
      <TextField label="Email" variant="standard" color="secondary" focused />
      <br />
      <br />
      <TextField
        label="Phone"
        type="number"
        variant="standard"
        color="secondary"
        focused
      />
      <br />
      <br />
      <TextField
        id="standard-multiline-static"
        label="Your Message"
        multiline
        rows={4}
        variant="standard"
        color="secondary"
        defaultValue="Your Message"
      />
      <br />
      <br />
      <Button variant="dark">Submit</Button>

      <br />
      <br />
      <Typography>
        <Link to="/LandingPage" className="text-decoration-none">
          Return to Home Page
        </Link>
      </Typography>
    </div>
  );
};

export default ContactUs;
