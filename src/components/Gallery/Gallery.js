import React from "react";
import { Container, Row } from "react-bootstrap";
import PhotoGallery from "./photoGallery";

function Gallery() {
  return (
    <section>
      <Container fluid className="home-section" style={{ height: "94vh" }}>
        <Row>
          <h1
            className="people-header"
            style={{
              fontSize: "2.6em",
              textAlign: "center",
              padding: "25px",
              marginTop: "100px",
            }}
          >
            <span style={{ color: "white" }}>Gallery</span>
          </h1>
        </Row>
        <Container>
          <div style={{ padding: "50px", margin: "auto", zIndex: 2 }}>
            <PhotoGallery />
          </div>
        </Container>
      </Container>
    </section>
  );
}

export default Gallery;
