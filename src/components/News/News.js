import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function News() {
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
            <span style={{ color: "white" }}>
              Latest News Updates from TES Lab
            </span>
          </h1>
        </Row>
        <Container>
          <Row style={{ justifyContent: "left", marginLeft: "10px" }}>
            <Col className="about-card">
              <Row>
                <br />
                <ul>
                <li style={{ padding: "15px" }}>
                    <span style={{ color: "red" }}>NEW PAPER!!</span> 8/15/2023
                    Prutzer, E., Patrick, A., Ishtiaque, A., Vij, S., Stock, R., Gardezi, M.
                    (2023). Climate-smart irrigation and responsible innovation in South Asia: 
                    A systematic mapping.{" "}
                    <a
                      className="bolditalicaccent"
                      href="https://doi.org/10.1007/s13280-023-01895-4"
                      style={{ position: "relative" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Link
                    </a>{" "}
                  </li>
                <li style={{ padding: "15px" }}>
                    <span style={{ color: "red" }}>NEW PAPER!!</span> 8/15/2023
                    Brugler, S., Clay, S., Gardezi, M., Dadkhah, A., Rizzo, D., Zia, A.
                    (2023). Improving Decision Support Systems with Machine Learning:
                    Identifying Barriers to Adoption. Agronomy Journal{" "}
                    <a
                      className="bolditalicaccent"
                      href="https://doi.org/10.1002/agj2.21432"
                      style={{ position: "relative" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Link
                    </a>{" "}
                  </li>
                  <li style={{ padding: "15px" }}>
                    <span style={{ color: "red" }}>NEW PAPER!!</span> 5/9/2023
                    Prutzer, E., Gardezi, M., Emery, M., Rizzo, D…Zia, A.
                    (2023). Rethinking ‘responsibility’ in precision
                    agriculture innovation: Lessons from an interdisciplinary
                    research team. Journal of Responsible Innovation.{" "}
                    <a
                      className="bolditalicaccent"
                      href="https://doi.org/10.1080/23299460.2023.2202093"
                      style={{ position: "relative" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Link
                    </a>{" "}
                  </li>
                  <li style={{ padding: "15px" }}>
                    <span style={{ color: "red" }}>NEW PAPER!!</span> 5/9/2023
                    Adereti, D.M., Gardezi, M., Wang, T., McMaine, J. (2023).
                    Understanding farmers’ engagement and barriers to machine
                    learning-based intelligent agricultural decision support
                    systems. Agronomy Journal.{" "}
                    <a
                      className="bolditalicaccent"
                      href="https://doi.org/10.1002/agj2.21358"
                      style={{ position: "relative" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Link
                    </a>{" "}
                  </li>
                  <li style={{ padding: "15px" }}>
                    <span style={{ color: "red" }}>NEW PAPER!!</span> 5/9/2023
                    Gardezi, M., Joshi, B., Rizzo, D. M., Ryan, M., Prutzer, E.,
                    Brugler, S., & Dadkhah, A. (2023). Artificial Intelligence
                    in Farming: Challenges and opportunities for building trust.
                    Agronomy Journal.{" "}
                    <a
                      className="bolditalicaccent"
                      href="https://doi.org/10.1002/agj2.21353"
                      style={{ position: "relative" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Link
                    </a>{" "}
                  </li>
                  <li style={{ padding: "15px" }}>
                    Ogunyiola, A., & Gardezi, M. (2022). Restoring sense out of
                    disorder? Farmers’ changing social identities under big data
                    and algorithms. Agriculture and Human Values, 1-14.{" "}
                    <a
                      className="bolditalicaccent"
                      href="https://www.google.com/url?q=https%3A%2F%2Flink.springer.com%2Farticle%2F10.1007%2Fs10460-022-10334-1&sa=D&sntz=1&usg=AOvVaw0R1EUyE9zuNCH62HiCNS-W"
                      style={{ position: "relative" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Link
                    </a>{" "}
                  </li>
                  <li style={{ padding: "15px" }}>
                    Gardezi, M., Adereti, D., Stock, R. & Ogunyiola, A. (2022).
                    In pursuit of responsible innovation for precision
                    agriculture technologies. Journal of Responsible Innovation.{" "}
                    <a
                      className="bolditalicaccent"
                      href="https://www.google.com/url?q=https%3A%2F%2Fwww.tandfonline.com%2Fdoi%2Ffull%2F10.1080%2F23299460.2022.2071668&sa=D&sntz=1&usg=AOvVaw0qDjB4aoVSAj6ZgpdebhV5"
                      style={{ position: "relative" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link to the paper!
                    </a>{" "}
                  </li>
                  <li style={{ padding: "15px" }}>
                    Trustworthy by design: Using human-centered AI for improving
                    healthcare training effectiveness.{" "}
                    <a
                      className="bolditalicaccent"
                      href="https://www.google.com/url?q=https%3A%2F%2Fhci.icat.vt.edu%2Fnews%2Fchci-planning-grant-awarded-to-maaz-gardezi--elham-morshedzadeh-.html&sa=D&sntz=1&usg=AOvVaw2y8YksNP0WG7hFyAx6YjLG"
                      style={{ position: "relative" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link to the grant!
                    </a>{" "}
                  </li>
                  <li style={{ padding: "15px" }}>
                    Prutzer, E. (2022). Mapping pedagogies: applying
                    cartographic practice to the public sphere. Learning, Media
                    and Technology, 47(1), 39-52.{" "}
                    <a
                      className="bolditalicaccent"
                      href="https://www.google.com/url?q=https%3A%2F%2Fwww.tandfonline.com%2Fdoi%2Ffull%2F10.1080%2F17439884.2021.2021535&sa=D&sntz=1&usg=AOvVaw3qGBLP-klBVFbsj6kXH6qP"
                      style={{ position: "relative" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link to the paper!
                    </a>{" "}
                  </li>
                  <li style={{ padding: "15px" }}>
                    Stock, R. and Gardezi, M. (2022). Arrays and algorithms:
                    Emerging regimes of dispossession at the frontiers of
                    agrarian technological governance, Earth System Governance,
                    Volume 12, 2022, 100137.{" "}
                    <a
                      className="bolditalicaccent"
                      href="https://www.google.com/url?q=https%3A%2F%2Fwww.sciencedirect.com%2Fscience%2Farticle%2Fpii%2FS2589811622000064&sa=D&sntz=1&usg=AOvVaw1vgpkw1t_4Sy3TJyF4Df68"
                      style={{ position: "relative" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link to the paper!
                    </a>{" "}
                  </li>
                  <li style={{ padding: "15px" }}>
                    Ogunyiola, A., Gardezi, M., and Vij, S. (2022). Smallholder
                    farmers’ engagement with climate smart agriculture in
                    Africa: Role of local knowledge and upscaling. Climate
                    Policy.{" "}
                    <a
                      className="bolditalicaccent"
                      href="https://www.google.com/url?q=https%3A%2F%2Fdoi.org%2F10.1080%2F14693062.2021.2023451&sa=D&sntz=1&usg=AOvVaw0tEmu5y6RVsDSTPw0j10M8"
                      style={{ position: "relative" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link to the paper!
                    </a>{" "}
                  </li>
                  <li style={{ padding: "15px" }}>
                    Gardezi, M., Michael, S., Stock, R., Vij, S., Ogunyiola, A.,
                    and Ishtiaque, A. (2021). Prioritizing climate-smart
                    agriculture: An organizational and temporal review.
                    Interdisciplinary Reviews: Climate Change, WCC755.{" "}
                    <a
                      className="bolditalicaccent"
                      href="https://www.google.com/url?q=https%3A%2F%2Fwires.onlinelibrary.wiley.com%2Fdoi%2Ffull%2F10.1002%2Fwcc.755&sa=D&sntz=1&usg=AOvVaw1CSKZiipqMu-TszRoA0WRv"
                      style={{ position: "relative" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link to the paper!
                    </a>{" "}
                  </li>
                  <li style={{ padding: "15px" }}>
                    Vij, S., Biesbroek, R., Stock, R., Gardezi, M., Ishtiaque,
                    A., Groot, A., Termeer, K. (2021). Power-sensitive design
                    principles for climate change adaptation policy-making in
                    South Asia. Earth System Governance, 9, 100-109.{" "}
                    <a
                      className="bolditalicaccent"
                      href="https://www.google.com/url?q=https%3A%2F%2Fwww.sciencedirect.com%2Fscience%2Farticle%2Fpii%2FS2589811621000136&sa=D&sntz=1&usg=AOvVaw2Yi6JtzOO9GnC2ryROlrWg"
                      style={{ position: "relative" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link to the paper!
                    </a>{" "}
                  </li>
                  <li style={{ padding: "15px" }}>
                    Stock, R., and Gardezi, M. (2021). Make bloom and let
                    wither: Biopolitics of precision agriculture at the dawn of
                    surveillance capitalism. Geoforum, 122, 193-203.{" "}
                    <a
                      className="bolditalicaccent"
                      href="https://www.google.com/url?q=https%3A%2F%2Fwww.sciencedirect.com%2Fscience%2Farticle%2Fabs%2Fpii%2FS0016718521001135&sa=D&sntz=1&usg=AOvVaw050qPyufKscJX1sxZK6m-9"
                      style={{ position: "relative" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Link to the paper!
                    </a>{" "}
                  </li>
                  <li style={{ padding: "15px" }}>
                    Gardezi, M., and Stock, R. (2021). Growing algorithmic
                    governmentality: Interrogating the social construction of
                    trust in precision agriculture. Journal of Rural Studies,
                    84, 1-11.{" "}
                    <a
                      className="bolditalicaccent"
                      href="https://www.google.com/url?q=https%3A%2F%2Fwww.sciencedirect.com%2Fscience%2Farticle%2Fabs%2Fpii%2FS0743016721000887&sa=D&sntz=1&usg=AOvVaw0h18l-irj53opb1NVhjjQd"
                      style={{ position: "relative" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link to the paper!
                    </a>{" "}
                  </li>
                </ul>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
export default News;
