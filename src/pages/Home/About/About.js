import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import bully from "../../../img/stopbullying.png";
import "./About.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, disable: false });
  }, []);

  return (
    <div id="#about">
      <Container className="text-dark mt-5 pt-5 mb-5 pb-5">
        <Row>
          <Col className="d-flex justify-content-center">
            <img
              src={bully}
              alt="photo1"
              className="aboutPhoto"
              data-aos="fade-right"
              data-aos-anchor-placement="top"
            />
          </Col>
          <Col data-aos="fade-left" data-aos-anchor-placement="top">
            Consectetur sit nulla dolore nisi est non. Do magna anim dolore ea
            laboris sit pariatur. Dolor qui aute fugiat do cillum sunt. Anim
            nostrud aute dolor consequat cupidatat culpa commodo sunt
            adipisicing. Do qui anim do commodo irure ut nostrud. Ut aliquip in
            duis dolor sunt aute dolor nisi magna culpa adipisicing ullamco.
          </Col>
        </Row>
        <Row className="mt-5 pt-5">
          <Col data-aos="fade-right" data-aos-anchor-placement="top">
            Consectetur sit nulla dolore nisi est non. Do magna anim dolore ea
            laboris sit pariatur. Dolor qui aute fugiat do cillum sunt. Anim
            nostrud aute dolor consequat cupidatat culpa commodo sunt
            adipisicing. Do qui anim do commodo irure ut nostrud. Ut aliquip in
            duis dolor sunt aute dolor nisi magna culpa adipisicing ullamco.
          </Col>
          <Col className="d-flex justify-content-center">
            <img
              src={bully}
              alt="photo2"
              className="aboutPhoto text-center"
              data-aos="fade-left"
              data-aos-anchor-placement="top"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default About;
