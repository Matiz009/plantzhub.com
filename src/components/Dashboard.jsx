import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
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
      <button className="btn btn-dark" style={{ marginTop: "20px" }}>
        <Link to="/AddPlants" className="text-decoration-none text-white">
          Click here to add plants!
        </Link>
      </button>
      <br />
      <button className="btn btn-danger" style={{ marginTop: "20px" }}>
        <Link to="/DeletePlants" className="text-decoration-none text-white">
          Click here to delete plants!
        </Link>
      </button>
      <br />
      <button className="btn btn-secondary" style={{ marginTop: "20px" }}>
        <Link to="/UpdatePlants" className="text-decoration-none text-white">
          Click here to edit plants!
        </Link>
      </button>
      <br />
      <button className="btn btn-primary" style={{ marginTop: "20px" }}>
        <Link to="/ViewPlants" className="text-decoration-none text-white">
          Click here to view plants!
        </Link>
      </button>
      <hr />
      <br />
      <Button variant="outline-info" style={{ marginTop: "20px" }}>
        Log out
      </Button>
    </div>
  );
};

export default Dashboard;
