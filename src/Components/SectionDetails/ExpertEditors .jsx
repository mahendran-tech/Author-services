import { Container, Row, Col } from "react-bootstrap";
import SectionTitle2 from "../Common/SectionTitle2";
import { homeimage } from "../../assets/assets";
import { Link } from "react-router-dom";

const ExpertEditors = ({
  expertData,
  isImage,
  Title,
  SubTitle,
  isBooster = false,
}) => {
  return (
    <section className={` ${isBooster ? "booster" : "expert-section"}`}>
      <div className="cs_height_48 cs_height_lg_48"></div>
      <Container>
        <div className="container text-center ">
          {!Title && (
            <SectionTitle2
              Title="Our Expert"
              SubTitle="Editors and Reviewers"
            />
          )}
          {Title && <SectionTitle2 Title={Title} SubTitle={SubTitle} />}
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
                }}
              >
                {/* <div className="position-absolute top-0 end-0"><img src="assets/img/corner-img.png" alt="" style={{width:"120px"}} /></div> */}
                <div className="expert-icon mb-3">
                  {" "}
                  <img src={item.icon} alt="" />{" "}
                </div>
                {item.title && (
                  <h6 className="text-secondary mb-3 mt-2">{item.title}</h6>
                )}
                <p className="mb-0 text-muted">{item.text}</p>
              </div>
            </Col>
          ))}
          {isImage && (
            <Col xs={12} sm={6} lg={4}>
              <div
                className="expert-card p-0  text-center h-100 "
                style={{
                  border: "1px solid rgba(255,38,97,0.1)",
                  borderRadius: "8px",
                }}
              >
                <img src={homeimage.left_image} alt="" className="rounded-3" />
              </div>
            </Col>
          )}
        </Row>
      </Container>
      <div className="text-center mt-5">
        <Link
          to="/customize-editing-services"
          onClick={() => screenTop({ top: 0, behavior: "smooth" })}
          className="cs_btn cs_style_1 wow fadeInLeft"
        >
          Get a Quote <i className="bi bi-arrow-right"></i>
        </Link>
      </div>
      <div className="cs_height_40 cs_height_lg_40"></div>
    </section>
  );
};

export default ExpertEditors;
