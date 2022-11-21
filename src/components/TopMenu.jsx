import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

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
            <Link to="/Login" className="link-login">
              Login
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopMenu;
