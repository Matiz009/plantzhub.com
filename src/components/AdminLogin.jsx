import React from "react";
import "./Products.css";
import { TextField, Typography, Grid, Button } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h2 className="contact">Login</h2>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <TextField label="Email" margin="normal" fullWidth />
          <TextField
            label="Password"
            type="password"
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="primary" fullWidth>
            <Link
              to="/Dashboard"
              style={{ color: "white" }}
              className="text-decoration-none"
            >
              Login
            </Link>
          </Button>
          <Typography sx={{ m: 1.0 }} align="center">
            Have you not registered?{" "}
            <Link to="/AdminSignUp" className="text-decoration-none">
              Sign Up
            </Link>
          </Typography>
          <Typography sx={{ m: 1.0 }} align="center">
            <Button variant="contained" color="error">
              <Link
                to="/AdminRecover"
                style={{ color: "white" }}
                className="text-decoration-none"
              >
                Forgot Password
              </Link>
            </Button>
          </Typography>

          <Typography>
            <Link to="/LandingPage" className="text-decoration-none text-black">
              Return to Home Page
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminLogin;
