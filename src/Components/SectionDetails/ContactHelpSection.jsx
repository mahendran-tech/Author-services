import React from "react";
import {Container, Row, Col, Card} from "react-bootstrap";
import {FiPhone, FiMail} from "react-icons/fi";

const ContactCard = ({icon, text, linkText, href}) => (
  <Card className="contact-card text-white text-center h-100 border-1 border-light">
    <Card.Body className="d-flex flex-column align-items-center justify-content-center">
      <div className="icon-circle mb-3">{icon}</div>
      <p className="mb-1 small">{text}</p>
      <a
        href={href}
        className="text-white fw-semibold text-decoration-underline">
        {linkText}
      </a>
    </Card.Body>
  </Card>
);

const ContactHelpSection = () => {
  return (
    <section>
      <Container>
        <div className="contact-help-section ">
          <Row className="align-items-center g-4">
            <Col className="ps-lg-5 text-white">
              <h6 className=" cs_fs_20 text-white">
                Unable to make a <br /> decision yet?
              </h6>
              <p className="mb-0">Let us help you...</p>
            </Col>

            <Col xs={12} md={4}>
              <ContactCard
                icon={<FiPhone size={24} />}
                text="Speak to a client manager. Call us on"
                linkText="+91 93429 24782"
                href="tel:+919342924782"
              />
            </Col>

            <Col xs={12} md={4}>
              <ContactCard
                icon={<FiMail size={24} />}
                text="Send in your queries to"
                linkText="author.support@ierp.in"
                href="mailto:author.support@ierp.in"
              />
            </Col>
          </Row>
        </div>
      </Container>
      <div className="cs_height_80 cs_height_lg_100" />
    </section>
  );
};

export default ContactHelpSection;
