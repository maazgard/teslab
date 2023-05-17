import React from "react";
import { Container, Row } from "react-bootstrap";

import People1 from "./People1";
import People2 from "./People2";
import People3 from "./People3";

function People() {
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
            <span style={{ color: "white" }}>Principal Investigator</span>
          </h1>
        </Row>
        <People1 />
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
            <span style={{ color: "white" }}>Current Members</span>
          </h1>
        </Row>
        <People2 />
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
            <span style={{ color: "white" }}>Past Members</span>
          </h1>
        </Row>
        <People3 />
      </Container>
    </section>
  );
}
export default People;
