import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const TopMenu = () => {
  return (
    <div className="links">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">
            <Link to="/LandingPage" className="link">
              Home
            </Link>
          </Typography>
          <Typography variant="h5">
            <Link to="/Products" className="link">
              Products
            </Link>
          </Typography>
          <Typography variant="h5">
            <Link to="/ContactUs" className="link">
              Contact Us
            </Link>
          </Typography>
          <Typography variant="h5">
            <Link to="/Login" className="link">
              Login
            </Link>
          </Typography>
          <Button variant="contained" color="error">
            <a
              href="Login"
              style={{ color: "white" }}
              className="text-decoration-none "
            >
              Join Us
            </a>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopMenu;
