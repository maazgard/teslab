import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import profilePhoto from "../../Assets/maaz.jpg";

function People1() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} className="myAvtar">
            <img
              src={profilePhoto}
              className="img-fluid maaz-pic"
              alt="maaz pic"
            />
          </Col>
          <Col md={8} className="home-about-description">
            <h2 style={{ fontSize: "1.3em" }}>
              <a
                className="accent"
                href="linkedin.com/in/maaz-gardezi-5838a914/"
                style={{ fontSize: "1.8em" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Maaz Gardezi
              </a>{" "}
              (he/him)
            </h2>
            <p className="home-about-body">
              Assistant Professor of Sociology at Virginia Tech.
              <br />
              <br />
              <b className="bolditalicaccent">Maaz Gardezi</b> is an assistant
              professor of sociology at Virginia Tech. He studies two broad and
              interrelated topics: (1) Climate change and sustainability and (2)
              The social implications of emerging digital technologies (e.g. big
              data, artificial intelligence) in food and agricultural systems.
              He has current projects related to climate change and agriculture
              in the U.S., Ecuador, and in South Asia. Maaz is originally from
              Lahore, Pakistan.
              <br />
              <br />
              Before joining Virginia Tech, Maaz was an assistant professor of
              sociology and rural studies with a secondary appointment in the
              Department of Natural Resource Management at South Dakota State
              University. He has a Bachelors in economics from University of
              Bath (UK), a Masters in environmental policy from University of
              Michigan, Ann Arbor, and a PhD in Sociology and Sustainable
              Agriculture from Iowa State University. He has experience working
              in different sectors, including the private sector (Porsche Cars
              Great Britain), non-profit (World Wildlife Fund- Washington D.C.),
              and as a consultant to various government bodies. At Virginia
              Tech, Maaz offers undergraduate and graduate courses within the
              Department of Sociology and the newly approved graduate
              certificate program in Science, Technology, and Engineering in
              Policy (STEP).
              <br />
              <br />
              Email:{" "}
              <a
                className="bolditalicaccent"
                href="mailto:maaz@vt.edu"
                style={{ position: "relative" }}
              >
                {""}
                maaz@vt.edu
              </a>{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default People1;
