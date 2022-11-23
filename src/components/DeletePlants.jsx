import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Typography, TextField } from "@mui/material";
import { Link } from "react-router-dom";
const DeletePlants = () => {
  return (
    <div>
      <Typography className="bg-danger" variant="h1">
        Delete Plants
      </Typography>
      <br />
      <TextField
        id="standard-textarea"
        label="Product Id"
        placeholder="id"
        multiline
        variant="standard"
      />
      <br />
      <br />
      <TextField
        id="standard-textarea"
        label="Password"
        multiline
        variant="standard"
      />
      <br />
      <br />
      <button className="btn btn-danger">Delete Plant</button>
      <br />
      <br />
      <button className="btn btn-group">
        <Link className="text-decoration-none text-danger" to="/Dashboard">
          Home
        </Link>
      </button>
    </div>
  );
};

export default DeletePlants;
