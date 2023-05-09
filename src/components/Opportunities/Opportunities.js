import React from "react";
import { Container, Row } from "react-bootstrap";

function Opportunities() {
  return (
    <section>
      <Container
        fluid
        className="home-about-section"
        id="about"
      >
        <Row>
          <h1
            className="people-header"
            style={{
              fontSize: "2.6em",
              textAlign: "center",
              padding: "25px",
              marginTop: "50px",
            }}
          >
            <span style={{ color: "white" }}>Current Opportunities</span>
          </h1>
        </Row>
        <Container>
<br/>
          <h2 style={{ fontSize: "1em", textAlign: "center" }}>
            <span className="accent" style={{ fontSize: "2em" }}>
            PhD Graduate Research Assistantship Opportunity in Sociology at Virginia Tech
            </span>
          </h2>
          <p className="home-about-body">
            
          

          We are hiring for a new PhD position focused on the governance of big data and artificial intelligence in food and agriculture systems. The PhD student will work on a USDA-NIFA funded project on "Fostering Responsible Innovation and Governance of Big Data and Artificial Intelligence in Precision Agriculture". Research activities for the PhD position include:

 
          <ul>
              <li>Develop and apply computational methods to study social and ecological systems and the governance of big data and artificial intelligence in agriculture.</li>
              <li>Collect, clean, and analyze data using a variety of techniques including serious games, social network analysis and/or agent-based modeling.</li>
              <li>Conduct literature reviews to stay up to date on the latest research in computational methods, governance of big data and artificial intelligence, and social and ecological systems in food and agriculture.</li>
              <li>Present research findings at conferences and in publications.</li>
              <li>Assist in writing grant proposals and project reports.</li>
            </ul>

The PhD position is in the Department of Sociology at Virginia Tech. The successful candidate with join our team at Technology-Environment-Society (TES Lab). It is a four-year position beginning August 10, 2023, with a funding package that covers tuition and includes a competitive stipend.

Requirements:

<ul>
              <li>Graduated (or close to graduating) with a Bachelors or Masters in Sociology or a related field.</li>
              <li>Interest and ability to learn social network analysis, agent-based modeling, digital serious games, and social simulation approaches.</li>
              <li>Experience with programming languages such as R or Python.</li>
              <li>Strong quantitative and analytical skills.</li>
              <li>Ability to work independently and as part of a team.</li>
            </ul>   

For additional information  about the project and the position, please contact Maaz Gardezi: maaz@vt.edu. This position starts on August 10, 2023. This is not a remote position.
          </p>

          <h2 style={{ fontSize: "1em", textAlign: "center" }}>
            <span className="accent" style={{ fontSize: "2em" }}>
            General Inquiries
            </span>
          </h2>
          <p className="home-about-body">
            I am always looking to recruit graduate student (MS or PhD) in
            Sociology at Virginia Tech to work with me on:
            <ul>
              <li>Climate change and sustainability issues</li>
              <li>
                Social implications of emerging digital technologies in
                agriculture or other sectors (Big Data, Artificial Intelligence)
              </li>
            </ul>
          </p>
          <p className="home-about-body">
            If you are interested in this area of research, please send me a
            brief email and tell me about your interests and qualifications:
            <a
              className="bolditalicaccent"
              href="mailto:maaz@vt.edu"
              style={{ position: "relative" }}
            >
              {""}
              maaz@vt.edu
            </a>{" "}
          </p>
        </Container>

      </Container>
    </section>
  );
}

export default Opportunities;
