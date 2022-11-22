import React from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h2>Login</h2>
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
              to="/Products"
              style={{ color: "white" }}
              className="text-decoration-none"
            >
              Login
            </Link>
          </Button>
          <Typography sx={{ m: 1.0 }} align="center">
            Have you not registered?{" "}
            <Link to="/SignUp" className="text-decoration-none">
              Sign Up
            </Link>
          </Typography>
          <Typography sx={{ m: 1.0 }} align="center">
            <Button variant="contained" color="error">
              <Link
                to="/Forgot"
                style={{ color: "white" }}
                className="text-decoration-none"
              >
                Forgot Password
              </Link>
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;