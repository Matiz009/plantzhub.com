import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
const Dashboard = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand style={{ marginLeft: "20px" }}>
          plantzHub.com
        </Navbar.Brand>
        <Nav.Link className="text-white" style={{ paddingLeft: "30%" }}>
          <h1>Admin Dashboard</h1>
        </Nav.Link>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <p className="text-decoration-none">Mati ul Rehman</p>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <button className="btn btn-dark">Add Plants</button>
    </div>
  );
};

export default Dashboard;
