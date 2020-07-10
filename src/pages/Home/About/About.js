import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import bully from "../../../img/stopbullying.png";
import "./About.css";

class About extends Component {
  render() {
    return (
      <Container className="text-dark">
        <Row>
          <Col className="d-flex justify-content-center">
            <img src={bully} alt="photo1" className="aboutPhoto" />
          </Col>
          <Col>
            Consectetur sit nulla dolore nisi est non. Do magna anim dolore ea
            laboris sit pariatur. Dolor qui aute fugiat do cillum sunt. Anim
            nostrud aute dolor consequat cupidatat culpa commodo sunt
            adipisicing. Do qui anim do commodo irure ut nostrud. Ut aliquip in
            duis dolor sunt aute dolor nisi magna culpa adipisicing ullamco.
          </Col>
        </Row>

        <Row className="mt-5 pt-5">
          <Col>
            Consectetur sit nulla dolore nisi est non. Do magna anim dolore ea
            laboris sit pariatur. Dolor qui aute fugiat do cillum sunt. Anim
            nostrud aute dolor consequat cupidatat culpa commodo sunt
            adipisicing. Do qui anim do commodo irure ut nostrud. Ut aliquip in
            duis dolor sunt aute dolor nisi magna culpa adipisicing ullamco.
          </Col>
          <Col className="d-flex justify-content-center">
            <img src={bully} alt="photo2" className="aboutPhoto text-center" />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default About;
