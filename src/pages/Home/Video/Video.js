import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Video.css";

class Video extends Component {
  render() {
    return (
      <div className="text-center">
        <p>Intro Video</p>
        <h4>About Product in a Short Video</h4>
        <iframe
          title="stopBullying"
          width="100%"
          height="auto"
          src="https://www.youtube.com/embed/nufRJkQwEm8?rel=0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="border border-dark mt-3 videoSize"
        ></iframe>

        <Container className="mt-5">
          <Row>
            <Col className="text-center">
              <h5>Video Quote</h5>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vitae sodales lectus, non ultrices nisi. In varius, leo non
                gravida tristique
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Video;
