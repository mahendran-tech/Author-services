import {Container, Row, Col} from "react-bootstrap";
import SectionTitle2 from "../Common/SectionTitle2";
import { homeimage } from "../../assets/assets";

const expertData = [
  {
    icon: homeimage.edit1, // Replace with actual icon or <img src="..." />
    text: "Editors who are native English speakers and possess proficiency in English grammar, syntax, and usage.",
  },
  {
    icon: homeimage.edit2,
    text: "Experts with extensive experience in editing and proofreading academic papers across all disciplines.",
  },
  {
    icon: homeimage.edit3,
    text: "Chosen from a wide pool of candidates through a meticulous editing and language proficiency assessment.",
  },
  {
    icon: homeimage.edit4,
    text: "Experienced scientific editors and proofreaders proficient in their field.",
  },
  {
    icon: homeimage.edit5,
    text: "Educated in refining academic papers via specialized workshops.",
  },
];

const ExpertEditors = () => {
  return (
    <section className="expert-section ">
      <div className="cs_height_48 cs_height_lg_48"></div>
      <Container>
        <div className="container text-center ">
          <SectionTitle2 Title="Our Expert" SubTitle="Editors and Reviewers" />
             <div className="cs_height_20 cs_height_lg_20"></div>
        </div>
        <Row className="g-4 justify-content-center">
          {expertData.map((item, idx) => (
            <Col key={idx} xs={12} sm={6} lg={4}>
              <div
                className="expert-card p-4 text-center h-100 "
                style={{
                  border: "1px solid rgba(255,38,97,0.1)",
                  borderRadius: "8px",
                }}>
                  {/* <div className="position-absolute top-0 end-0"><img src="assets/img/corner-img.png" alt="" style={{width:"120px"}} /></div> */}
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
      <div className="text-center mt-5"><button type="button" className="cs_btn cs_style_1 btn btn-primary">Get a Quote →</button></div>
      <div className="cs_height_40 cs_height_lg_40"></div>
    </section>
  );
};

export default ExpertEditors;
