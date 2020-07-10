import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Card } from "react-bootstrap";
import "./Team.css";

import Evan from "../../../img/teams/Evan.jpeg";
import Frederick from "../../../img/teams/frederick.png";
import Stanley from "../../../img/teams/stanley.jpeg";
import Radha from "../../../img/teams/Radha.jpeg";

class Team extends Component {
  render() {
    var settings = {
      dots: true,
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
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
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
            slidesToShow: 2,
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
        <h4 className="text-center mb-4"> Our Team </h4>
        <Slider {...settings}>
          <Card className="mr-3 ml-3 teamCard">
            <Card.Img
              variant="top"
              src={Evan}
              className="teamImage rounded-circle mx-auto"
            />
            <Card.Body>
              <Card.Title>Evan Charles</Card.Title>
              <Card.Text>1931137</Card.Text>
              <Card.Text>Sistem Informasi</Card.Text>
            </Card.Body>
          </Card>

          <Card className="mr-3 ml-3 teamCard">
            <Card.Img
              variant="top"
              src={Frederick}
              className="teamImage rounded-circle mx-auto"
            />
            <Card.Body>
              <Card.Title>Frederick</Card.Title>
              <Card.Text>1931163</Card.Text>
              <Card.Text>Sistem Informasi</Card.Text>
            </Card.Body>
          </Card>

          <Card className="mr-3 ml-3 teamCard">
            <Card.Img
              variant="top"
              src={Stanley}
              className="teamImage rounded-circle mx-auto"
            />
            <Card.Body>
              <Card.Title>Stanley Frenovsky Leowardi</Card.Title>
              <Card.Text>1941234</Card.Text>
              <Card.Text>Manajemen</Card.Text>
            </Card.Body>
          </Card>

          <Card className="mr-3 ml-3 teamCard">
            <Card.Img
              variant="top"
              src="{}"
              className="teamImage rounded-circle mx-auto"
            />
            <Card.Body>
              <Card.Title>Lydia Desrita</Card.Title>
              <Card.Text>1941144</Card.Text>
              <Card.Text>Manajemen</Card.Text>
            </Card.Body>
          </Card>

          <Card className="mr-3 ml-3 teamCard">
            <Card.Img
              variant="top"
              src="{}"
              className="teamImage rounded-circle mx-auto"
            />
            <Card.Body>
              <Card.Title>Jerly Engelina</Card.Title>
              <Card.Text>1941039</Card.Text>
              <Card.Text>Manajemen</Card.Text>
            </Card.Body>
          </Card>

          <Card className="mr-3 ml-3 teamCard">
            <Card.Img
              variant="top"
              src="{}"
              className="teamImage rounded-circle mx-auto"
            />
            <Card.Body>
              <Card.Title>Jeffri Winardy</Card.Title>
              <Card.Text>1941161</Card.Text>
              <Card.Text>Manajemen</Card.Text>
            </Card.Body>
          </Card>

          <Card className="mr-3 ml-3 teamCard">
            <Card.Img
              variant="top"
              src={Radha}
              className="teamImage rounded-circle mx-auto"
            />
            <Card.Body>
              <Card.Title>Radha Purnamasari</Card.Title>
              <Card.Text>1911026</Card.Text>
              <Card.Text>Teknik Sipil</Card.Text>
            </Card.Body>
          </Card>

          <Card className="mr-3 ml-3 teamCard">
            <Card.Img
              variant="top"
              src="{}"
              className="teamImage rounded-circle mx-auto"
            />
            <Card.Body>
              <Card.Title>Lidia Bernawati Br Manalu</Card.Title>
              <Card.Text>1911024</Card.Text>
              <Card.Text>Teknik Sipil</Card.Text>
            </Card.Body>
          </Card>
        </Slider>
      </Container>
    );
  }
}

export default Team;
