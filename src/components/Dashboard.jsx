import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
const Dashboard = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand style={{ marginLeft: "20px" }}>plantzHub</Navbar.Brand>
        <Nav.Link className="text-white" style={{ paddingLeft: "30%" }}>
          <h1>Admin Dashboard</h1>
        </Nav.Link>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a className="text-decoration-none">Mati ul Rehman</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <footer style={{ height: "100px" }} className="bg-success">
        <br />
        <h5 className="text-dark">Copyrights Reserved 2022</h5>
      </footer>
    </div>
  );
};

export default Dashboard;
