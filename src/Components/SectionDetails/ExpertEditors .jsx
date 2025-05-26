import {Container, Row, Col} from "react-bootstrap";
import SectionTitle2 from "../Common/SectionTitle2";

const expertData = [
  {
    icon: "assets/img/icon/edit-1.svg", // Replace with actual icon or <img src="..." />
    text: "Editors who are native English speakers and possess proficiency in English grammar, syntax, and usage.",
  },
  {
    icon: "assets/img/icon/edit-2.svg",
    text: "Experts with extensive experience in editing and proofreading academic papers across all disciplines.",
  },
  {
    icon: "assets/img/icon/edit-3.svg",
    text: "Chosen from a wide pool of candidates through a meticulous editing and language proficiency assessment.",
  },
  {
    icon: "assets/img/icon/edit-4.svg",
    text: "Experienced scientific editors and proofreaders proficient in their field.",
  },
  {
    icon: "assets/img/icon/edit-5.svg",
    text: "Educated in refining academic papers via specialized workshops.",
  },
];

const ExpertEditors = () => {
  return (
    <section className="expert-section ">
      <div className="cs_height_40 cs_height_lg_40"></div>
      <Container>
        <div className="container text-center my-5">
          <SectionTitle2 Title="Our Expert" SubTitle="Editors and Reviewers" />
        </div>
        <Row className="g-4 justify-content-center">
          {expertData.map((item, idx) => (
            <Col key={idx} xs={12} sm={6} lg={4}>
              <div
                className="expert-card p-4 text-center h-100"
                style={{
                  border: "1px solid rgba(255,38,97,0.1)",
                  borderRadius: "8px",
                }}>
                <div className="expert-icon mb-3">
                  {" "}
                  <img src={item.icon} alt="" />{" "}
                </div>
                <p className="mb-0 text-muted">{item.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="cs_height_80 cs_height_lg_80"></div>
    </section>
  );
};

export default ExpertEditors;
