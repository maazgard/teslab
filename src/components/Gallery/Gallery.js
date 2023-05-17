import React from "react";
import { Container, Row } from "react-bootstrap";
import PhotoGallery from "./photoGallery";

function Gallery() {
  return (
    <section>
      <Container
        fluid
        className="home-about-section"
        style={{
          minHeight: "100vh",
          height: "auto",
          paddingBottom: "30px",
        }}
      >
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
