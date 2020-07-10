import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Main.css";

import Service from "../Services/Services";
import About from "../About/About";
import Video from "../Video/Video";
import Team from "../Team/Team";

import banner from "../../../img/stopbullying.png";

class Main extends Component {
  render() {
    return (
      <div>
        <Container className="mt-2 bannerTop">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <p className="text-white mt-5 bannerText">
                <span>Bullying</span> adalah tindakan atau perilaku yang
                dilakukan untuk menyakiti baik dalam bentuk verbal, psikologis
                atau emosional serta bisa juga dalam bentuk fisik. Tindakan
                bullying ini bisa dilakukan oleh sekelompok orang maupun
                perorangan yang merasa lebih kuat secara fisik dan mental bila
                dibandingkan korban.
              </p>
              <Button variant="outline-light" className="mt-3 buttonMore">
                Baca selengkapnya ...
              </Button>
            </Col>
            <Col lg={6} md={6} sm={12} className="text-center">
              <img src={banner} alt="bannerPhoto" className="bannerPhoto" />
            </Col>
          </Row>
        </Container>

        <section id="services" className="mt-5 pt-5 mb-5 pb-5">
          <Service />
        </section>

        <section id="about" className="mt-5 pt-5 mb-5 pb-5">
          <About />
        </section>

        <section id="video" className="mt-5 pt-5 mb-5 pb-5">
          <Video />
        </section>

        <section id="team" className="mt-5 pt-5 mb-5 pb-5">
          <Team />
        </section>
      </div>
    );
  }
}
export default Main;
