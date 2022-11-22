import React from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const AdminRecover = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h2 className="contact">Reset your Password</h2>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <TextField label="Phone Number" margin="normal" fullWidth />
          <br />
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
            <Link to="/Login" className="text-decoration-none text-white">
              Reset
            </Link>
          </Button>
          <br />
          <br />
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

export default AdminRecover;
