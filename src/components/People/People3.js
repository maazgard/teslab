import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import edwardPhoto from "../../Assets/Edward.png";
import damilola from "../../Assets/Damilola.jpg";
import megan from "../../Assets/Megan.jpg";
import anne from "../../Assets/Anne.JPG";
import ayorinde from "../../Assets/Ayorinde.jpg";
import martin from "../../Assets/Martin.jpg";
import janMichalak from "../../Assets/JanMichalak.jpg";
import induPhoto from "../../Assets/Indu.jpg";
import samPhoto from "../../Assets/sam h.jpg";

function People3() {
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
      <Row>
          <Col
            md={8}
            className="home-about-description"
            style={{ textAlign: "left" }}
>
            <h2 style={{ fontSize: "1em", textAlign: "left" }}>
              <a
                className="bolditalicaccent"
                href="https://lk.linkedin.com/in/indunil-dharmasiri-58a631156"
                style={{ position: "relative", fontSize: "2em" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Indunil Dharmasiri
              </a>{" "}
              (she/her)
            </h2>
            <p className="home-about-body" style={{ padding: "0px" }}>
            PhD Student in Management, Virginia Tech
            </p>
            <p className="home-about-body" style={{ padding: "0px" }}>
            Indunil is currently pursuing a PhD in Management at Virginia Tech.
            She earned her Master of Science in Geography from Virgina Tech in 2023. Her
primary research areas encompass complex systems, Agent Based Modelling, climate
change adaptation, entrepreneurship, and Indigenous studies. Her Masters’ research
focused on exploring entrepreneurship-based factors to foster climate adaptation
among Indigenous communities. She holds a Bachelors’ degree in Agricultural
Technology and Management with a major in Applied Economics and Business
Management from the University of Peradeniya, Sri Lanka.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img
              src={induPhoto}
              className="img-fluid team-pic"
              alt="Indunil pic"
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
                href="https://www.linkedin.com/in/janjakubmichalak/"
                style={{ position: "relative", fontSize: "2em" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Jan Michalak
              </a>{" "}
              (he/him)
            </h2>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Undergraduate student in Computer Science at Virginia Tech
            </p>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Jan Michalak (he/him) is a fourth-year undergraduate student at
              Virginia Polytechnic and State University studying Computer
              Science who is working as a website developer on the team. His
              research interests include cryptography, cybersecurity, blockchain
              applications, and human-computer interaction (HCI). Jan has
              previously worked on a project where he and his team aimed to
              enhance user privacy when operating on sensitive data stored on an
              untrusted server. This project resulted in a publication in the
              4th IEEE International Conference on Trust, Privacy, and
              Applications (IEEE-TPS) 2022. He is set to graduate with his
              Bachelor of Science degree in May of 2023 and is eager to continue
              researching these topics in his graduate studies.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img
              src={janMichalak}
              className="img-fluid team-pic"
              alt="Jan Michalak pic"
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
                href="*"
                style={{ position: "relative", fontSize: "2em" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Edward Purtzer
              </a>{" "}
              (he/him)
            </h2>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Assistant Professor for Communication Studies at Germanna Community College
            </p>
            <p className="home-about-body" style={{ padding: "0px" }}>
            Edward Prutzer earned his PhD in Communications and Media from the
              Institute of Communications Research at the University of Illinois
              at Urbana-Champaign. His research focuses on how publics and
              researchers convene, deliberate, and collaborate on environmental
              and disaster management projects, particularly via crowdsourcing
              platforms and digital mapping technologies. His work on these
              tools and associated practices has been published in various
              edited collections and peer-reviewed journals, including Macrotask
              Crowdsourcing: Engaging the Crowds to Address Complex Problems;
              Co-Design: Collaborative Pedagogy in DH and Building Inclusive
              Digital Ethics; Emotions, Technology, and Health; InVisible
              Culture; and Media-N.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={edwardPhoto} className="img-fluid team-pic" alt="edward pic" />
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
                href="*"
                style={{ position: "relative", fontSize: "2em" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Damilola Tobiloba Adereti
              </a>{" "}
              (he/him)
            </h2>
            <p className="home-about-body" style={{ padding: "0px" }}>
              PhD Student in Sociology at South Dakota State University
            </p>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Dami is a PhD Student in Sociology at South Dakota State
              University. He runs with a passion for sustainable development
              with research interests in extension, food security, children and
              youth in agriculture, gender, and rural communities.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={damilola} className="img-fluid team-pic" alt="dami pic" />
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
                href="*"
                style={{ position: "relative", fontSize: "2em" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Megan Schaefer
              </a>{" "}
              (she/her)
            </h2>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Undergraduate student at Virginia Tech
            </p>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Megan Schaefer (she/her) is a third-year undergraduate at Virginia
              Polytechnic and State University who is working as a research
              assistant on the team. She is currently earning degrees in
              Philosophy, Politics, and Economics (PPE), Political Science:
              Legal Studies, and Criminology with an expected graduation date of
              May 2023. Megan has previously worked as a research assistant on a
              project concerning Central and Eastern European transition
              governments. She is currently a student ambassador to Virginia
              Tech’s PPE Program and works at the campus Writing Center. Outside
              of class, Megan volunteers with the Roanoke Refugee Partnership
              (RRP) and serves as an officer in the student group Coalition for
              Refugee Resettlement. Her academic interests include refugee
              studies, global development and neocolonialism, and prison
              reform/abolition. Her personal interests include enjoying and
              analyzing film, music, and other art.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={megan} className="img-fluid team-pic" alt="megan pic" />
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
                href="https://www.linkedin.com/in/anne-patrick-72452811b/"
                style={{ position: "relative", fontSize: "2em" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Anne Patrick
              </a>{" "}
              (she/her)
            </h2>
            <p className="home-about-body" style={{ padding: "0px" }}>
              PhD Candidate in Sociology at Virginia Tech
            </p>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Anne Patrick received her MA in Sociology in 2018 from Morehead
              State University. Her research focuses on social and cultural
              discourses that take place in digital spaces and how these online
              discourses reify structures of inequality. Her research interests
              include digital sociology, food studies/consumption, political
              sociology, and inequality. Anne’s recent publication in Food
              Studies: An Interdisciplinary Journal examined reactions to the
              consumption of alternative meats.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={anne} className="img-fluid team-pic" alt="anne pic" />
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
                href="https://www.linkedin.com/in/ayorinde-ogunyiola-229a7231/"
                style={{ position: "relative", fontSize: "2em" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Ayorinde Ogunyiola
              </a>{" "}
            </h2>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Assistant Professor, Murray State University.
            </p>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Ayorinde graduated with a PhD in Sociology from South Dakota State
              University. His research focused on climate-smart agriculture
              (CSA) and development, and the socio-ethical implication of
              digital technologies on society. Ayo is currently a post-doctoral
              research fellow at Purdue University, where he is working on
              multiple research projects related to agricultural conservation in
              the U.S.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img
              src={ayorinde}
              className="img-fluid team-pic"
              alt="ayorinde pic"
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
                href="*"
                style={{ position: "relative", fontSize: "2em" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Martin Kloster
              </a>{" "}
              (They/Them)
            </h2>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Martin Kloster is an undergrad research intern who is interested
              in responsible innovation. They were born in Brookings, SD, and
              attended high school in Sioux Falls, SD. For most of their life
              they went undiagnosed with dyslexia and ADHD, until they sought
              testing in their freshman year of college. This, combined with
              their experiences with long term poor health, lead them to deep
              dive into disability studies. This lends itself readily to the
              topic of responsible research and innovation and leads work to
              always seek to incorporate a variety of needs and perspectives.
              When not studying responsible research and innovation, they work
              with others to expand disability services on campus, make ideas
              more accessible, and explore their wide array of interests.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={martin} className="img-fluid team-pic" alt="martin pic" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default People3;
