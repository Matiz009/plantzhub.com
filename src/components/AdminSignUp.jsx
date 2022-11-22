import React from "react";
import "./Products.css";
import { TextField, Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const AdminSignUp = () => {
  return (
    <div>
      {" "}
      <h1 className="contact" style={{ color: "red" }}>
        Be a part of a Rising Future
      </h1>
      <TextField label="Name of Company" variant="outlined" color="error" />
      <br />
      <br />
      <TextField label="Email" variant="outlined" color="error" />
      <br />
      <br />
      <TextField label="Phone" type="number" variant="outlined" color="error" />
      <br />
      <br />
      <TextField
        label="Available Plants"
        type="number"
        variant="outlined"
        color="error"
      />
      <br />
      <br />
      <TextField label="Address" variant="outlined" color="error" />
      <br />
      <br />
      <TextField
        label="Postal Code"
        type="number"
        variant="outlined"
        color="error"
      />
      <br />
      <br />
      <Button variant="error" className="bg-danger text-white">
        Create Account
      </Button>
      <br />
      <br />
      <Typography>
        <Link to="/LandingPage" className="text-decoration-none text-black">
          Return to Home Page
        </Link>
      </Typography>
    </div>
  );
};

export default AdminSignUp;
