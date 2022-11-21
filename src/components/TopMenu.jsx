import React from "react";
import { Link } from "react-router-dom";
const TopMenu = () => {
  return (
    <div>
      <Link to="/LandingPage">Home</Link>
      <Link to="/Products">Products</Link>
      <Link to="/ContactUs">Contact Us</Link>
      <Link to="/Login">Login</Link>
    </div>
  );
};

export default TopMenu;
