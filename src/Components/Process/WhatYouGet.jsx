import { Container, Row, Col, Card } from "react-bootstrap";
import SectionTitle from "../Common/SectionTitle";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

// 1. Service data array
const services = [
  {
    icon: "assets/img/icon/sa-7.svg",
    title: "End-to-end support",
    description:
      "We will guide you through each stage, from choosing the right journal to preparing and submitting your manuscript.",
    btnurl: "/get-quote",
  },
  {
    icon: "assets/img/icon/sa-7.svg",
    title: "Journal Submission",
    description:
      "Our team will help you manage the whole submission process, from setting up your account to completing the final submission.",
    btnurl: "/journal-submission",
  },
  {
    icon: "assets/img/icon/sa-7.svg",
    title: "Illustration rework",
    description:
      "We will rework your graphics to meet journal standards, improve existing visuals, or create new illustrations from scratch.",
    btnurl: "/get-quote",
  },
];

// 2. Main Component
const WhatYouGet = ({ btnurl }) => {
  return (
    <section className="expert-section ">
      <Container>
        <div className="cs_height_48 cs_height_lg_48" />
        <Row className="g-4">
          <SectionTitle Title={"What"} SubTitle={"You Get"} />

          {/* Loop through services and render ServiceCard */}
          {services.map((service, index) => (
            <Col
              key={index}
              xs={12}
              md={index === services.length - 1 ? 12 : 6}
            >
              <ServiceCard {...service} />
            </Col>
          ))}

          {/* View Details Button at Bottom */}
          <Col xs={12} className="text-center">
            <Link
              to={btnurl}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="cs_btn cs_style_1 mt-3"
            >
              View Details{" "}
              <span className="arrow">
                <HiArrowNarrowRight />
              </span>
            </Link>
          </Col>
        </Row>
      </Container>
      <div className="cs_height_40 cs_height_lg_40" />
    </section>
  );
};

// 3. ServiceCard Component — Same file
const ServiceCard = ({ icon, title, description, btnurl }) => {
  return (
    <Card className="custom-service-card-what h-100">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div className="custom-icon-box">
            <img src={icon} alt={title} />
          </div>
        </div>
        <h5 className="custom-title mb-2">{title}</h5>
        <p className="custom-description mb-3">{description}</p>
        <Link
          to={btnurl}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cs_fs_16 cs_text_pink"
        >
          View Details <HiArrowNarrowRight />
        </Link>
      </Card.Body>
    </Card>
  );
};

export default WhatYouGet;
