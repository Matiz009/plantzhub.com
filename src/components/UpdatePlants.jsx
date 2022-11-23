import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Typography, TextField } from "@mui/material";
import { Link } from "react-router-dom";
const UpdatePlants = () => {
  return (
    <div>
      <div>
        <Typography className="bg-success" variant="h1">
          Update Plants
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
          label="Product pic url"
          placeholder="url"
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
        <button className="btn btn-success">Update Plant</button>
        <br />
        <br />
        <button className="btn btn-group">
          <Link className="text-decoration-none text-success" to="/Dashboard">
            Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default UpdatePlants;
