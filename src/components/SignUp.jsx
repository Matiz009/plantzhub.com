import React from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h4>Registration Form</h4>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <TextField label="First Name" margin="normal" fullWidth />
          <TextField label="Last Name" margin="normal" fullWidth />
          <TextField label="Address" margin="normal" fullWidth />
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
            Register
          </Button>
          <Typography align="center">
            Already Registered?
            <Link to="/Login"> Login</Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUp;
