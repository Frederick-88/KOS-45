import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Main.css";

import Service from "../Services/Services";
import About from "../About/About";
import Video from "../Video/Video";
import Team from "../Team/Team";

import banner from "../../../img/stopbullying.png";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, disable: false });
  }, []);

  return (
    <div className="main-background">
      <Container
        className="mt-2 bannerTop"
        data-aos="fade-down"
        data-aos-anchor-placement="top"
      >
        <Row>
          <Col lg={6} md={6} sm={12}>
            <p className="text-white mt-5 bannerText">
              <span>Bullying</span> adalah tindakan atau perilaaku yang
              dilakukan untuk menyakiti baik dalam bentuk verbal, psikologis
              atau emosional serta bisa juga dalam bentuk fisik. Tindakan
              bullying ini bisa dilakukan oleh sekelompok orang maupun
              perorangan yang merasa lebih kuat secara fisik dan mental bila
              dibandingkan korban.
            </p>
          </Col>
          <Col lg={6} md={6} sm={12} className="text-center">
            <img src={banner} alt="bannerPhoto" className="bannerPhoto" />
          </Col>
        </Row>
      </Container>

      <section id="services" className="mt-5 pt-5 mb-5 pb-5">
        <Service />
      </section>

      <section className="mt-5 pt-5 mb-5 pb-5">
        <About />
      </section>

      <section className="mt-5 pt-5 mb-5 pb-5">
        <Video />
      </section>

      <section className="mt-5 pt-5 mb-5 pb-5">
        <Team />
      </section>
    </div>
  );
};
export default Main;
