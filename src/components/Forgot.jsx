import React from "react";
import { TextField, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Forgot = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h2>Reset your Password</h2>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <TextField label="New Password" margin="normal" fullWidth />
          <TextField
            label="Confirm Password"
            type="password"
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="primary" fullWidth>
            <Link to="/Login" style={{ color: "white" }}>
              Reset
            </Link>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Forgot;
