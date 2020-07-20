import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="bg-danger text-white text-center" id="#contact">
        <Container>
          <Row className="mt-5 pt-5 pb-5">
            <Col lg={4} md={12} sm={12} className="footerSection">
              <h5 className="mb-4 mt-3">About Us</h5>
              <p>
                Excepteur occaecat veniam adipisicing et aliqua amet magna elit.
                Excepteur occaecat veniam adipisicing et aliqua amet magna elit.
                Excepteur occaecat veniam adipisicing et aliqua amet magna elit.
              </p>
            </Col>
            <Col lg={4} md={12} sm={12} className="mt-5">
              <ul className="list-inline">
                <li>
                  <Link to="/" className="footerNav">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/article" className="footerNav">
                    Article
                  </Link>
                </li>
                <li>
                  <a href="##about" className="footerNav">
                    About
                  </a>
                </li>
                <li>
                  <a href="##contact" className="footerNav">
                    Contact
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={4} md={12} sm={12} className="footerMedia">
              <ul className="list-inline text-left ml-5 pl-4">
                <li>
                  <i
                    className="fa fa-map-marker fa-2x mt-3 mr-4"
                    aria-hidden="true"
                  ></i>
                  Batam, Indonesia
                </li>
                <li>
                  <i
                    className="fa fa-phone fa-2x mt-3 mr-4"
                    aria-hidden="true"
                  ></i>
                  +628 1234 1234
                </li>
                <li>
                  <i
                    className="fa fa-envelope fa-2x mt-3 mr-4"
                    aria-hidden="true"
                  ></i>
                  we@mail.com
                </li>
                <a
                  href="https://www.instagram.com/kos45_/?hl=id"
                  target="blank"
                  className="text-white"
                >
                  <li>
                    <i
                      className="fa fa-instagram fa-2x mt-3 mr-4"
                      aria-hidden="true"
                    ></i>
                    @kos45_
                  </li>
                </a>
              </ul>
            </Col>
          </Row>

          <Row className="d-flex justify-content-center pb-3">
            <h6>© 2020 Copyright KOS45</h6>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Footer;
