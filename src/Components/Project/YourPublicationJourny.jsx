import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle2 from "../Common/SectionTitle2";
import SectionTitle from "../Common/SectionTitle";

const YourPublicationJourny = ({
  Title,
  SubTitle,
  Content,
  Content1,
  isUlContent = true,
  ImagePath,
}) => {
  return (
    <div>
      <section className=" ">
        <div className="cs_height_48 cs_height_lg_48"></div>
        <Container>
          <Row className="mt-5  d-flex justify-content-center align-items-center">
            <Col
              className="d-flex justify-content-start"
              xs={12}
              lg={isUlContent ? 5 : 6}
            >
              <img src={ImagePath} alt="" />
            </Col>
            <Col
              className="d-flex justify-content-start "
              xs={12}
              lg={isUlContent ? 7 : 6}
            >
              <div className="d-flex flex-column ms-3  align-items-start">
                {isUlContent ? (
                  <>
                    {" "}
                    <SectionTitle2
                      Title={Title}
                      isCenter={false}
                      SubTitle={SubTitle}
                    />
                  </>
                ) : (
                  <>
                    {" "}
                    <h3 className="text-center fw-bold mb-2">
                      {Title} <span className="text-primary"> {SubTitle}</span>{" "}
                    </h3>
                    <h5>Your content, proofed to perfection</h5>
                  </>
                )}

                {Content && <p>{Content}</p>}
                {Content1 && <p>{Content1}</p>}

                {isUlContent && (
                  <ul className="text-left list-unstyled list-style-one mt-4">
                    <li className="mb-2 d-flex align-items-start gap-2">
                      <img
                        src="assets/img/icon/right-arrow-yellow.svg"
                        alt=""
                      />{" "}
                      <span>
                        Journal recommendations to ensure your research reaches
                        the right audience{" "}
                      </span>
                    </li>
                    <li className="mb-2 d-flex align-items-start gap-2">
                      <img
                        src="assets/img/icon/right-arrow-yellow.svg"
                        alt=""
                      />{" "}
                      <span>
                        Customized support to boost your chances of acceptance{" "}
                      </span>
                    </li>
                    <li className="mb-2 d-flex align-items-start gap-2">
                      <img
                        src="assets/img/icon/right-arrow-yellow.svg"
                        alt=""
                      />{" "}
                      <span>
                        Expert guidance at every stage of the publication
                        process
                      </span>
                    </li>
                    <li className="mb-2 d-flex align-items-start gap-2">
                      <img
                        src="assets/img/icon/right-arrow-yellow.svg"
                        alt=""
                      />{" "}
                      <span>
                        A streamlined experience that saves time and reduces
                        paperwork
                      </span>
                    </li>
                  </ul>
                )}

                <div className="text-Start mt-3">
                  <button
                    type="button"
                    className="cs_btn cs_style_1 btn btn-primary"
                  >
                    Get a Quote →
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="cs_height_40 cs_height_lg_40"></div>
      </section>
    </div>
  );
};

export default YourPublicationJourny;
