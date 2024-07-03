import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import imgProfilo from "../assets/avatar.png";

class ProfilePage extends Component {
  render() {
    return (
      <main>
        <Container>
          <Row className="justify-content-center">
            <Col md="8" lg="6">
              <div>
                <h1>Edit Profile</h1>
                <hr />
              </div>
              <Row>
                <Col md="4">
                  <div className="position-relative">
                    <img src={imgProfilo} alt="" className="img-fluid" />
                    <div className="position-absolute bottom-0 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pencil"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                      </svg>
                    </div>
                  </div>
                </Col>
                <Col md="8">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control bg-secondary-subtle rounded-bottom-1 w-75"
                      placeholder="Profilo 1"
                    />
                  </div>
                  <p>Language:</p>
                  <div className="dropdown" data-bs-theme="dark">
                    <a
                      className="btn dropdown-toggle border boredr-2 border-light"
                      href="#"
                      role="button"
                      data-bs-theme="dark"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      English
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <h5>Maturity Settings:</h5>
                  <div
                    className="d-inline px-2"
                    style={{ backgroundColor: "#333333" }}
                  >
                    ALL MATURITY RATINGS
                  </div>
                  <p>Show title of all maturity ratings for this profile</p>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic outlined example"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-light opacity-75"
                    >
                      EDIT
                    </button>
                  </div>
                  <hr />
                  <h5>Autoplay controls</h5>
                  <div>
                    <input type="checkbox" />
                    <span className="mx-1">
                      Autoplay next episode in a series on all device.
                    </span>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <span className="mx-1">
                      Autoplay previews while browsing on all device.
                    </span>
                  </div>
                </Col>
                <hr />
                <Row className="gx-3" data-bs-theme="dark">
                  <div
                    className="btn-group col-4 col-md-3"
                    role="group"
                    aria-label="Basic outlined example"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-light opacity-75"
                    >
                      SAVE
                    </button>
                  </div>
                  <div
                    className="btn-group col-4 col-md-4"
                    role="group"
                    aria-label="Basic outlined example"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-light opacity-75"
                    >
                      CANCEL
                    </button>
                  </div>
                  <div
                    className="btn-group col-4 col-md-5"
                    role="group"
                    aria-label="Basic outlined example"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-danger opacity-75"
                    >
                      DELETE PROFILE
                    </button>
                  </div>
                </Row>
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}
export default ProfilePage;
