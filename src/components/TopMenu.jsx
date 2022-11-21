import React from "react";
import { Link } from "react-router-dom";

const TopMenu = () => {
  return (
    <div className="links">
      <Link to="/LandingPage">Home</Link>
      <br />
      <Link to="/Products">Products</Link>
      <br />
      <Link to="/ContactUs">Contact Us</Link>
      <br />
      <Link to="/Login">Login</Link>
    </div>
  );
};

export default TopMenu;
