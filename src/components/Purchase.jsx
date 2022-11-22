import React from "react";
import "./Products.css";
import { TextField, Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const Purchase = () => {
  return (
    <div>
      {" "}
      <h1 className="contact" style={{ color: "green" }}>
        Purchase your Order
      </h1>
      <TextField label="Name" variant="filled" color="success" focused />
      <br />
      <br />
      <TextField label="Email" variant="filled" color="success" focused />
      <br />
      <br />
      <TextField
        label="Phone"
        type="number"
        variant="filled"
        color="success"
        focused
      />
      <br />
      <br />
      <TextField
        label="Credit Card Number"
        type="number"
        variant="filled"
        color="success"
        focused
      />
      <br />
      <br />
      <TextField
        label="cvc"
        type="number"
        variant="filled"
        color="success"
        focused
      />
      <br />
      <br />
      <TextField label="Address" variant="filled" color="success" focused />
      <br />
      <br />
      <TextField
        label="Postal Code"
        type="number"
        variant="filled"
        color="success"
        focused
      />
      <br />
      <br />
      <TextField
        label="No of Plants"
        type="number"
        variant="filled"
        color="success"
        focused
      />
      <br />
      <br />
      <TextField
        id="standard-multiline-static"
        label="Additional Information"
        multiline
        rows={4}
        variant="filled"
        color="success"
        defaultValue="Your Message"
      />
      <br />
      <br />
      <Button variant="success">Confirm Purchase</Button>
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

export default Purchase;
