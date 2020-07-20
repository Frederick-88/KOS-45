import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Card } from "react-bootstrap";
import "./Team.css";

import Evan from "../../../img/teams/Evan.jpeg";
import Frederick from "../../../img/teams/frederick.png";
import Stanley from "../../../img/teams/stanley.jpeg";
import Lydia from "../../../img/teams/Lydia.jpeg";
import Jeffri from "../../../img/teams/Jeffri.jpeg";
import Jerly from "../../../img/teams/Jerly.jpeg";
import Radha from "../../../img/teams/Radha.jpeg";
import Lidia from "../../../img/teams/Lidia.jpeg";

class Team extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Container>
        <h4 className="text-center mb-5"> Our Team </h4>
        <Slider {...settings}>
          <div className="d-flex inline-block justify-content-center mb-4">
            <Card className=" teamCard Card-1">
              <Card.Img variant="top" src={Evan} className="teamImage" />
              <Card.Body className="teamContent">
                <h2>
                  Evan Charles
                  <br />
                  <span>1931137</span>
                </h2>
                <p>Sistem Informasi</p>

                <ul>
                  <li>
                    <a href="https://wa.me/0895627436758" target="blank">
                      <i className="fa fa-whatsapp fa-2x"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/evann.ch/?hl=id"
                      target="blank"
                    >
                      <i className="fa fa-instagram fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </div>

          <div className="d-flex justify-content-center">
            <Card className=" teamCard Card-2">
              <Card.Img variant="top" src={Frederick} className="teamImage" />
              <div className="teamContent">
                <h2>
                  Frederick
                  <br />
                  <span>1931163</span>
                </h2>
                <p>Sistem Informasi</p>

                <ul>
                  <li>
                    <a href="https://wa.me/085835998805" target="blank">
                      <i className="fa fa-whatsapp fa-2x"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/frederick_8x/?hl=id"
                      target="blank"
                    >
                      <i className="fa fa-instagram fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          <div className="d-flex justify-content-center">
            <Card className=" teamCard Card-3">
              <Card.Img variant="top" src={Stanley} className="teamImage" />
              <div className="teamContent">
                <h2>
                  Stanley Frenovsky Leowardi
                  <br />
                  <span>1941234</span>
                </h2>
                <p>Manajemen</p>

                <ul>
                  <li>
                    <a href="https://wa.me/089623455283" target="blank">
                      <i className="fa fa-whatsapp fa-2x"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/frenovsky/?hl=id"
                      target="blank"
                    >
                      <i className="fa fa-instagram fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          <div className="d-flex justify-content-center">
            <Card className=" teamCard Card-1">
              <Card.Img variant="top" src={Lydia} className="teamImage" />
              <Card.Body className="teamContent">
                <h2>
                  Lydia Desrita
                  <br />
                  <span>1941144</span>
                </h2>
                <p>Manajemen</p>

                <ul>
                  <li>
                    <a href="https://wa.me/089683187715" target="blank">
                      <i className="fa fa-whatsapp fa-2x"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/lydiaadesritaa/?hl=id"
                      target="blank"
                    >
                      <i className="fa fa-instagram fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </div>

          <div className="d-flex justify-content-center">
            <Card className=" teamCard Card-2">
              <Card.Img variant="top" src={Jeffri} className="teamImage " />
              <Card.Body className="teamContent">
                <h2>
                  Jeffri Winardy
                  <br />
                  <span>1941161</span>
                </h2>
                <p>Manajemen</p>

                <ul>
                  <li>
                    <a href="https://wa.me/082383692861" target="blank">
                      <i className="fa fa-whatsapp fa-2x"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/jeffriwinardy/?hl=id"
                      target="blank"
                    >
                      <i className="fa fa-instagram fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </div>

          <div className="d-flex justify-content-center">
            <Card className=" teamCard Card-3">
              <Card.Img variant="top" src={Jerly} className="teamImage " />
              <Card.Body className="teamContent">
                <h2>
                  Jerly Engelina
                  <br />
                  <span>1941039</span>
                </h2>
                <p>Manajemen</p>

                <ul>
                  <li>
                    <a href="https://wa.me/082385809992" target="blank">
                      <i className="fa fa-whatsapp fa-2x"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/jrlydng/?hl=id"
                      target="blank"
                    >
                      <i className="fa fa-instagram fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </div>

          <div className="d-flex justify-content-center">
            <Card className=" teamCard Card-1">
              <Card.Img variant="top" src={Radha} className="teamImage " />
              <Card.Body className="teamContent">
                <h2>
                  Radha Purnamasari
                  <br />
                  <span>1911026</span>
                </h2>
                <p>Teknik Sipil</p>

                <ul>
                  <li>
                    <a href="https://wa.me/08876962275" target="blank">
                      <i className="fa fa-whatsapp fa-2x"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/radhasari_/?hl=id"
                      target="blank"
                    >
                      <i className="fa fa-instagram fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </div>

          <div className="d-flex justify-content-center">
            <Card className=" teamCard Card-2">
              <Card.Img variant="top" src={Lidia} className="teamImage " />
              <Card.Body className="teamContent">
                <h2>
                  Lidia Bernawati Br Manalu
                  <br />
                  <span>1911024</span>
                </h2>
                <p>Teknik Sipil</p>

                <ul>
                  <li>
                    <a href="https://wa.me/081261050546" target="blank">
                      <i className="fa fa-whatsapp fa-2x"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/lidiamanalu_05/?hl=id"
                      target="blank"
                    >
                      <i className="fa fa-instagram fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </div>
        </Slider>
      </Container>
    );
  }
}

export default Team;
