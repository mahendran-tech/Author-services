import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GlassyCardSection.css";

const cardData = [
  {

    description: "Editors who are native English speakers and possess proficiency in English grammar, syntax, and usage.",
    icon: "service-01.png",
    bg: "bg-card-color-1",
  },
  {
 
    description: "Experts with extensive experience in editing and proofreading academic papers across all disciplines.",
    icon: "service-04.png",
    bg: "bg-card-color-2",
  },
  {
  
    description: "Chosen from a wide pool of candidates through a meticulous editing and language proficiency assessment.",
    icon: "service-03.png",
    bg: "bg-card-color-3",
  },
  {

    description: "Experienced scientific editors and proofreaders proficient in their field.",
    icon: "service-02.png",
    bg: "bg-card-color-4",
  },
  {
 
    description: "Educated in refining academic papers via specialized workshops.",
    icon: "service-05.png",
    bg: "bg-card-color-5",
  },
];

const GlassyCardSection = () => {
  return (
    <div className="rbt-service-area bg-white py-5">
      <Container>
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="title">Style Seven.</h2>
          </Col>
        </Row>
        <Row className="g-4 align-items-start">
          <Col md={6} lg={4} className="mb-4">
            <div className="section-title text-start">
              <h2 className="title">What will you learn after the course?.</h2>
              <p className="description mt-3">
                There are many variations of passages of the Ipsum available.
              </p>
              <Button className="btn-gradient mt-3">About More Us</Button>
            </div>
          </Col>

          {cardData.map((card, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className={`service-card glassy-card ${card.bg}`}>
                <div className="inner">
                  <div className="icon">
                    <img
                      src={`assets/images/shape/${card.icon}`}
                      alt="icon"
                      className="main-image"
                    />
                    <img
                      src={`assets/images/shape/${card.icon}`}
                      alt="icon"
                      className="opacity_image"
                    />
                  </div>
                  <Card.Body>
{card.title && ( <Card.Title>{card.title}</Card.Title>) }
                   

                    <Card.Text>{card.description}</Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default GlassyCardSection;
