import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Facebook, Instagram, TwitterX, Youtube } from "react-bootstrap-icons";

class MyFooter extends Component {
  render() {
    return (
      <footer className="my-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg="7">
              <div className="d-flex justify-content-start">
                <Facebook className="opacity-50" />
                <Instagram className="opacity-50 mx-2" />
                <TwitterX className="opacity-50 me-2" />
                <Youtube className="opacity-50" />
              </div>
              <Row className="my-3">
                <Col md="3" className="fs-6 text-start">
                  <div>
                    <a
                      href="#"
                      className="text-white text-decoration-none opacity-50"
                    >
                      Audio and Subtitles
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-white text-decoration-none opacity-50"
                    >
                      Media Center
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-white text-decoration-none opacity-50"
                    >
                      Privacy
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-white text-decoration-none opacity-50"
                    >
                      Contact Us
                    </a>
                  </div>
                </Col>
                <Col md="3" lg="3" className="fs-6 text-start">
                  <div>
                    <a
                      href="#"
                      className="text-white text-decoration-none opacity-50"
                    >
                      Audio Description
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-white text-decoration-none opacity-50"
                    >
                      Investor Relations
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-white text-decoration-none opacity-50"
                    >
                      Legal Notices
                    </a>
                  </div>
                </Col>
                <Col md="3" lg="3" className="fs-6 text-start">
                  <div>
                    <a
                      href="#"
                      className="text-white text-decoration-none opacity-50"
                    >
                      Help Center
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-white text-decoration-none opacity-50"
                    >
                      Jobs
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-white text-decoration-none opacity-50"
                    >
                      Cookie Preferences
                    </a>
                  </div>
                </Col>
                <Col md="3" lg="3" className="fs-6 text-start">
                  <div>
                    <a
                      href="#"
                      className="text-white text-decoration-none opacity-50"
                    >
                      Gif Cards
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-white text-decoration-none opacity-50"
                    >
                      Terms of Use
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-white text-decoration-none opacity-50"
                    >
                      Corporate Information
                    </a>
                  </div>
                </Col>
              </Row>
              <div
                className="btn-group my-2"
                role="group"
                aria-label="Basic outlined example"
              >
                <button
                  type="button"
                  className="btn btn-outline-light opacity-50"
                  width="25%"
                >
                  Service Code
                </button>
              </div>

              <div>
                <p className="text-white opacity-50">
                  &copy; 1997-2019 Netflix,Inc.i - &#123; 06584030454343843
                  &#125;
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
export default MyFooter;
