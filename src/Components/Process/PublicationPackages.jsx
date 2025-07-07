import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import SectionTitle2 from "../Common/SectionTitle2";
import { HiArrowNarrowRight } from "react-icons/hi";
import SectionTitle from "../Common/SectionTitle";
import { Link } from "react-router-dom";

const services1 = [
  {
    title: "Full Assist Support Plan",
    description:
      "Our Full Assist Support Plan provides expert guidance throughout your manuscript’s journey. From initial edits to final submission, we handle every step of the publication process—so you can proceed with confidence, knowing your work is in capable hands.",
    btnurl: "/full-assist-publication",
  },
  {
    title: "Flexi Saver Support Plan",
    description:
      "The Flexi Saver Support Plan offers flexible assistance, letting you select the services you need—such as journal selection, peer review, final submission, and more. This cost-effective plan ensures you receive expert help precisely where and when it matters most.",
    btnurl: "/flexi-saver-publication",
  },
];

const PublicationPackages = () => {
  return (
    <div>
      <section className="service-card-section">
        <div className="cs_height_48 cs_height_lg_48"></div>
        <Container>
          <div>
            <SectionTitle Title={"Publication"} SubTitle={"Packages"} />
            <div className="cs_height_20 cs_height_lg_20"></div>
          </div>
          <Row className="g-4 justify-content-center">
            {services1.map((service, index) => (
              <Col
                key={index}
                xs={12}
                lg={6}
                className="d-flex justify-content-center mb-4"
              >
                <Card className="service-card-publication h-100 p-0">
                  <Card.Body className="position-relative">
                    {/* Top-right corner image */}
                    <div className="corner-image position-absolute end-0 top-0">
                      <img src="assets/img/corner-img.png" alt="Corner" />
                    </div>

                    {/* Card content */}
                    <div className="service-card-body-1">
                      <Card.Title className="fw-bold cs_fs_30">
                        {service.title}
                      </Card.Title>
                      <Card.Text>{service.description}</Card.Text>
                      <Link
                        to={service.btnurl}
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="cs_btn cs_style_1 mt-3"
                      >
                        View Details{" "}
                        <span className="arrow">
                          <HiArrowNarrowRight />
                        </span>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <div className="cs_height_40 cs_height_lg_40"></div>
      </section>
    </div>
  );
};

export default PublicationPackages;
