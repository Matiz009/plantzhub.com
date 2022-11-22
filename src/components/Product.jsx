import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Products.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Product = (props) => {
  return (
    <div className="main-cards">
      <Container>
        <Row>
          <Col>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={props.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {props.info}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Purchase</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Col>
        </Row>
      </Container>
      <hr />
    </div>
  );
};

export default Product;
