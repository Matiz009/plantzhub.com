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
            Login
          </Button>
          <Typography sx={{ m: 1.0 }} align="center">
            Have you not registered? <Link to="/SignUp">Sign Up</Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;