import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Typography, TextField } from "@mui/material";
import { Link } from "react-router-dom";
const AddPlants = () => {
  return (
    <div>
      <div>
        <div>
          <Typography className="bg-primary" variant="h1">
            Add Plants
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
            label="Product Title"
            placeholder="Title"
            multiline
            variant="standard"
          />
          <br />
          <br />
          <TextField
            id="standard-textarea"
            label="Product Price"
            placeholder="Price"
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
            label="Product Quantity"
            placeholder="Quantity"
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
          <button className="btn btn-primary">Add Plant</button>
          <br />
          <br />
          <button className="btn btn-group">
            <Link className="text-decoration-none text-primary" to="/Dashboard">
              Home
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPlants;
