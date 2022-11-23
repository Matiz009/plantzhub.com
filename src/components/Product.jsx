import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Products.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <div className="container">
      <div className="main-cards">
        <Container>
          <Row>
            <Col>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  image={props.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    <h6>Price:{props.price}</h6>
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    <h4>Availability:{props.quantity}</h4>
                  </Typography>
                </CardContent>
              </Card>
            </Col>
          </Row>
        </Container>
        <br />
        <Button variant="contained">
          <Link
            to="/Purchase"
            className="text-decoration-none"
            style={{ color: "white" }}
          >
            Purchase
          </Link>
        </Button>
        <Button variant="outlined">Add to cart</Button>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Product;
