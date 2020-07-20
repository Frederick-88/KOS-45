import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Services.css";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, disable: false });
  }, []);
  return (
    <Container data-aos="zoom-in-up">
      <Row className="mb-5">
        <Col lg={4} md={6} sm={12} className="mt-4">
          <Card style={{ width: "18rem" }} className="serviceCard mx-auto">
            <i
              className="fa fa-podcast fa-3x text-center mt-3"
              aria-hidden="true"
            ></i>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} className="mt-4">
          <Card style={{ width: "18rem" }} className="serviceCard mx-auto">
            <i
              className="fa fa-podcast fa-3x text-center mt-3"
              aria-hidden="true"
            ></i>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} className="mt-4">
          <Card style={{ width: "18rem" }} className="serviceCard mx-auto">
            <i
              className="fa fa-podcast fa-3x text-center mt-3"
              aria-hidden="true"
            ></i>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
