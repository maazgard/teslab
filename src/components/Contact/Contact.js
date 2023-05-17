import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { AiFillMail } from "react-icons/ai";
import {
  FaLinkedinIn,
  FaResearchgate,
  FaGoogle,
  FaTwitterSquare,
} from "react-icons/fa";

import map from "../../Assets/contact_map.png";

function Contact() {
  return (
    <section>
      <Container fluid className="home-about-section" id="about">
        <Row>
          <h1
            className="people-header"
            style={{
              textAlign: "center",
              paddingTop: "25px",
              paddingBottom: "25px",
              paddingLeft: "5%",
              paddingRight: "5%",
              marginTop: "5%",
            }}
          >
            <span style={{ color: "white" }}>Contact US</span>
          </h1>
        </Row>
        <br />
        <Row>
          <Col>
            <h1
              style={{
                fontSize: "1.8em",
                textAlign: "center",
                paddingTop: "25px",
                paddingBottom: "25px",
              }}
            >
              <span className="accent"> Location </span> : 518 McBryde Hall,
              Virginia Tech, Blacksburg, VA, 24060
            </h1>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <a
              href="https://rb.gy/qy0ip"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={map} alt="Location" style={{ maxWidth: "100%" }} />
            </a>
          </Col>
        </Row>

        <Row style={{ marginTop: "50px" }}>
          <Col md={12} id="contact" className="home-about-social">
            <h1>FIND US ON</h1>
            <ul className="home-about-social-links">
              <li className="s-icons">
                <a
                  href="mailto:maaz@vt.edu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="s-icons">
                <a
                  href="https://www.linkedin.com/in/maaz-gardezi-5838a914/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="s-icons">
                <a
                  href="https://www.researchgate.net/profile/Maaz-Gardezi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaResearchgate />
                </a>
              </li>
              <li className="s-icons">
                <a
                  href="https://scholar.google.com/citations?user=pXh4pm8AAAAJ&hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaGoogle />
                </a>
              </li>
              <li className="s-icons">
                <a
                  href="https://twitter.com/maazgardezi?lang=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaTwitterSquare />
                </a>
              </li>
            </ul>
            <p>
              Feel free to <span className="accent">connect </span>with me
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
