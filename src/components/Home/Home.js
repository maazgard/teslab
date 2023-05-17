import React from "react";
import { Container, Row } from "react-bootstrap";
import Type from "./Type";

import vt from "../../Assets/vt.png";
import nsf from "../../Assets/nsf.png";
import nifa from "../../Assets/nifa.png";
import usda from "../../Assets/usda.png";
import chci from "../../Assets/chci.png";

function Home() {
  return (
    <section>
      <Container fluid className="home-about-section" id="home">
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
            <span style={{ color: "white" }}>
              Technology-Environment-Society (TES) Lab at Virginia Tech!
            </span>
          </h1>
        </Row>
        <Container>
          <div style={{ padding: "50px 50px", textAlign: "left" }}>
            <Type />

            <p className="home-about-body" style={{ fontSize: "2.0 em" }}>
              We study two broad and interrelated topics: (1) climate change and
              sustainability and (2) the social implications of emerging digital
              technologies (e.g. big data, artificial intelligence). Our
              projects relate to climate change, agriculture, water quality, and
              healthcare in the U.S., and in South Asia.
            </p>
          </div>
        </Container>
        <Container>
          <h2 style={{ fontSize: "1em", textAlign: "center" }}>
            <span className="accent" style={{ fontSize: "2em" }}>
              Sponsors
            </span>
          </h2>
          <div className="sponsor-logos">
            <div className="sponsor-logo">
              <img src={nifa} alt="Sponsor 1" />
            </div>
            <div className="sponsor-logo">
              <img src={nsf} alt="Sponsor 2" />
            </div>
            <div className="sponsor-logo">
              <img src={usda} alt="Sponsor 3" />
            </div>
          </div>
          <div className="sponsor-logos">
            <div className="sponsor-logo">
              <img src={vt} alt="Sponsor 1" />
            </div>
            <div className="sponsor-logo">
              <img src={chci} alt="Sponsor 1" />
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
