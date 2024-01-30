import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import pablo from "../../Assets/pablo.jpg";
import bhavna from "../../Assets/bhavna.jpg";
import jitenderPhoto from "../../Assets/Jitender.png";
import shreyaPhoto from "../../Assets/Shreya.jpg";
import sheetalPhoto from "../../Assets/Sheetal.png";
import samPhoto from "../../Assets/sam h.jpg";

function People2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col
            md={8}
            className="home-about-description"
            style={{ textAlign: "left" }}
          >
            <h2 style={{ fontSize: "1em", textAlign: "left" }}>
              <a
                className="bolditalicaccent"
                href="https://www.linkedin.com/in/bhavna-joshi-5a41b71b/"
                style={{ position: "relative", fontSize: "2em" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Bhavna Joshi
              </a>{" "}
              (she/her)
            </h2>
            <p className="home-about-body" style={{ padding: "0px" }}>
              PhD student in Sociology at Virginia Tech
            </p>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Bhavna received her Masters in Science and Masters in Philosophy
              degree in Anthropology from the University of Delhi, India. In her
              masters, she conducted ethnographic work in Udaipur and Delhi to
              explore the socio-cultural connotations of ‘home’ and
              ‘homelessness’. Bhavna has also worked on the problem of air
              pollution in Delhi with a focus on risk perception and
              environmental justice. Apart from social sciences, her academic
              journey has traversed the disciplines of life sciences, forensic
              science, and biotechnology.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={bhavna} className="img-fluid team-pic" alt="Bhavna pic" />
          </Col>
        </Row>

        <Row>
          <Col
            md={8}
            className="home-about-description"
            style={{ textAlign: "left" }}
          >
            <h2 style={{ fontSize: "1em", textAlign: "left" }}>
              <a
                className="bolditalicaccent"
                href="https://www.linkedin.com/in/jitender-rathore-2493b2169?trk=public_profile_samename_mini-profile_title"
                style={{ position: "relative", fontSize: "2em" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Jitender Rathore
              </a>{" "}
              (he/him)
            </h2>
            <p className="home-about-body" style={{ padding: "0px" }}>
              PhD Student in the School of Plant and Environmental Science at
              Virginia Tech
            </p>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Jitneder's research focuses on remote sensing and GIS, with a
              specialization in spatial agriculture. In 2021, he obtained his
              Master's degree in Geoinformatics Science and Earth Observation
              from the University of Twente's ITC in the Netherlands. Prior to
              that, he worked as a remote sensing and agriculture technician at
              6th Grain. Jitender earned his Bachelor's degree in Geography from
              the University of Delhi.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img
              src={jitenderPhoto}
              className="img-fluid team-pic"
              alt="Jitender pic"
            />
          </Col>
        </Row>

        <Row>
          <Col
            md={8}
            className="home-about-description"
            style={{ textAlign: "left" }}
          >
            <h2 style={{ fontSize: "1em", textAlign: "left" }}>
              <a
                className="bolditalicaccent"
                href="https://www.linkedin.com/in/pablo-carcamo-corral-00273a21/"
                style={{ position: "relative", fontSize: "2em" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Pablo Carcamo
              </a>{" "}
              (he/him)
            </h2>
            <p className="home-about-body" style={{ padding: "0px" }}>
              PhD Student in Sociology at Virginia Tech
            </p>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Pablo graduated in 2018 with an Msc in Science and Technology
              Policy from the Science Policy Research Unit (SPRU) at the
              University of Sussex. Working closely with academia, civil
              society, and the public sector, his main motivation is
              participating in multidisciplinary and transdisciplinary research
              projects with tangible impacts that foster better relations with
              human and non-human actors, particularly within
              sustainability-related matters.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={pablo} className="img-fluid team-pic" alt="Pablo pic" />
          </Col>
        </Row>

        <Row>
          <Col
            md={8}
            className="home-about-description"
            style={{ textAlign: "left" }}
          >
            <h2 style={{ fontSize: "1em", textAlign: "left" }}>
              <a
                className="bolditalicaccent"
                href="https://www.linkedin.com/in/sheetal-kumari-5528a517b/"
                style={{ position: "relative", fontSize: "2em" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Sheetal Kumari
              </a>{" "}
              (she/her)
            </h2>
            <p className="home-about-body" style={{ padding: "0px" }}>
              PhD Student in the School of Plant and Environmental Science at
              Virginia Tech
            </p>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Sheetal received her integrated Masters of technology (Bachelor
              and Masters) in Geoinformatics from Central University of
              Jharkhand, Ranchi, India. In her masters she worked on “Landscape
              modelling for urban green space evaluation in selected global
              cities” and her bachelor project is “Spatial heterogeneity for
              urban built-up footprint and its characterization using microwave
              remote sensing”. She also worked on “The dark cloud with a silver
              lining: Assessing the impact of SARS COVID-19 pandemic on a global
              environment”. Her research interests include precision
              agriculture, Remote sensing and GIS.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img
              src={sheetalPhoto}
              className="img-fluid team-pic"
              alt="Sheetal pic"
            />
          </Col>
        </Row>

        <Row>
          <Col
            md={8}
            className="home-about-description"
            style={{ textAlign: "left" }}
          >
            <h2 style={{ fontSize: "1em", textAlign: "left" }}>
              <a
                className="bolditalicaccent"
                href="https://www.linkedin.com/in/shreyamitra-eval/"
                style={{ position: "relative", fontSize: "2em" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Shreya Mitra
              </a>{" "}
              (she/her)
            </h2>
            <p className="home-about-body" style={{ padding: "0px" }}>
              PhD Student in the Agricultural, Leadership, and Community
              Education (ALCE) at Virginia Tech
            </p>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Shreya Mitra is a social science researcher, currently pursuing
              her PhD in the domain of responsible innovation in digital
              agriculture from the Department of Agricultural, Leadership, and
              Community Education (ALCE), College of Agriculture and Life
              Sciences. Shreya is interested in exploring Human Computer
              Interaction (HCI) in the domain of agriculture. She is
              contributing to the TES Lab by mapping digital diffusion and
              exploring user experience and behavioral change due to
              digitalization among the farming community in the US and
              elsewhere.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img
              src={shreyaPhoto}
              className="img-fluid team-pic"
              alt="shreya pic"
            />
          </Col>
        </Row>

        <Row>
          <Col
            md={8}
            className="home-about-description"
            style={{ textAlign: "left" }}
          >
            <h2 style={{ fontSize: "1em", textAlign: "left" }}>
              <a
                className="bolditalicaccent"
                href="https://www.linkedin.com/in/sam-hartmann/"
                style={{ position: "relative", fontSize: "2em" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Sam Hartmann 
              </a>{" "}
              (he/him)
            </h2>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Undergraduate student majoring in Computational Modeling and Data Analytics (CMDA) at Virginia Tech
            </p>
            <p className="home-about-body" style={{ padding: "0px" }}>
            My name is Sam Hartmann. I'm a senior majoring in CMDA (Computational and Modeling Data Analytics)  with a concentration in cryptography and cybersecurity and minoring in Math and Computer Science.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img
              src={samPhoto}
              className="img-fluid team-pic"
              alt="Sam Hartmann pic"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default People2;
