import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import pablo from "../../Assets/pablo.jpg";
import bhavna from "../../Assets/bhavna.jpg";
import jitenderPhoto from "../../Assets/Jitender.png";
import shreyaPhoto from "../../Assets/Shreya.jpg";
import sheetalPhoto from "../../Assets/Sheetal.png";
import atharvaPhoto from "../../Assets/atharva1.jpg";
import Anne1 from "../../Assets/Anne1.jpg";


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
              Jitender's research focuses on remote sensing and GIS, with a
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
                href="https://linkedin.com/in/anne-yu-ba5022187"
                style={{ position: "relative", fontSize: "2em" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Xinjing Yu (Anne)
              </a>{" "}
            </h2>
            <p className="home-about-body" style={{ padding: "0px" }}>
            Graduate Research Associate at the Department of Sociology, Virginia Tech
            </p>
            <p className="home-about-body" style={{ padding: "0px" }}>
            Anne is a PhD student whose primary research areas involve agriculture, sustainability, sociology of technology, and artificial intelligence.
           She earned a Master’s degree in Social Justice Education from the University of Toronto, where her graduate research focused on technological advancements, particularly in digital learning, and the role of AI within higher education institutions.
           Anne also holds an Honors Bachelor of Arts degree in Sociology Specialist from the University of Toronto.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img
              src={Anne1}
              className="img-fluid team-pic"
              alt="Anne pic"
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
                href="https://www.linkedin.com/in/atharva-salunke/"
                style={{ position: "relative", fontSize: "2em" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Atharva Salunke 
              </a>{" "}
              (he/him)
            </h2>
            <p className="home-about-body" style={{ padding: "0px" }}>
              MS Candidate in Computer Engineering at Virginia Tech
            </p>
            <p className="home-about-body" style={{ padding: "0px" }}>
            I am Atharva Salunke, and I am pursuing an MS in Computer Engineering at Virginia Tech, Blacksburg. I completed my undergraduate degree in ECE from the University of Mumbai. I have three years of experience as a Big Data Engineer at a U.S.-based bank, where I worked on Data Warehousing ETL and software development in the equities domain. Currently, I am involved in designing a Decision Support System (DSS) for precision agriculture. My interests lie in the application of data-driven solutions in machine learning. 
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img
              src={atharvaPhoto}
              className="img-fluid team-pic"
              alt="Atharva pic"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default People2;
