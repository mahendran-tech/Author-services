import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TwoColumn = ({ btnurl }) => {
  return (
    <div>
      <section className="section-bg-color">
        <div className="cs_height_40 cs_height_lg_40"></div>
        <Container>
          <Row className="mt-5 d-flex justify-content-center align-items-center flex-column flex-lg-row">
            <Col lg={6} sm={12}>
              <div>
                <h3>
                  How our Journal{" "}
                  <span className="text-primary">
                    {" "}
                    Selection service works?
                  </span>
                </h3>
                <img src="assets/img/img-23.png" alt="" />
              </div>
            </Col>
            <Col lg={6} sm={12}>
              <h3>Journal Selection</h3>
              <ul>
                <li className="mb-3">
                  Receive 3 journal recommendations tailored to your research
                  and publication goals.
                </li>
                <li className="mb-3">
                  Choose Scopus, WoS, SCI, journals from our databases.
                </li>
                <li className="mb-3">
                  Get a thorough Journal Selection Report that includes
                  suggestions for improving your work.
                </li>
              </ul>
              <div className="text-start mt-3">
                {btnurl ? (
                  <Link
                    to={btnurl}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="cs_btn cs_style_1 btn btn-primary"
                  >
                    Get a Quote
                    <FaArrowRight />
                  </Link>
                ) : (
                  <Link
                    to={"/get-quote"}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="cs_btn cs_style_1 btn btn-primary"
                  >
                    Get a Quote
                    <FaArrowRight />
                  </Link>
                )}
              </div>
            </Col>
          </Row>
        </Container>
        <div className="cs_height_40 cs_height_lg_40"></div>
      </section>
    </div>
  );
};

export default TwoColumn;
