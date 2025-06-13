import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./ServiceCardGrid.css";
import SectionTitle2 from "../Common/SectionTitle2";
import SectionTitle from "../Common/SectionTitle";

const services = [
      {
    title: "Core Editing",
    description:
      "Our Core Editing service focuses on sentence-level editing for both pre- and post-journal submissions at an affordable rate.",
      img: "assets/img/corner-img.png",
  },
  {
    title: "Exclusive Editing",
    description:
      "Our Exclusive Editing service is designed to maximize your manuscript’s impact and readiness for submission to high-impact journals.",
      img: "assets/img/corner-img.png",
  },
  {
    title: "Research Editing",
    description:
      "Our Research Editing service offers expert pre-submission peer review, providing field-specific feedback to improve your manuscript’s quality, structure, and readiness for journal submission.",
         img: "assets/img/corner-img.png",
  },
  {
    title: "Journal Publication Support",
    description:
      "Navigating the research publication process can be challenging, but with our Journal Publication Support Services, you’ll receive expert guidance every step of the way.",
         img: "assets/img/corner-img.png",
  },
  {
    title: "Citation Booster",
    description:
      "Give your research greater visibility with Citation Booster. This service is designed to reach a wider audience, increase readership, and improve your chances of being cited—ensuring your research makes a stronger impact in your field.",
         img: "assets/img/corner-img.png",
  },
  {
    title: "Research Impact",
    description:
      "We help promote and increasing visibility of your published research within the academic community and across relevant media platforms.",
         img: "assets/img/corner-img.png",
  },
    {
    title: "Translation Services",
    description:
      "We ensure effective communication by overcoming language barriers through document translation, interpretation, and other language support services.",
         img: "assets/img/corner-img.png",
  },
];

const ServiceCardGrid = () => {
  return (
    <section className="service-card-section section_bg_img" style={{backgroundAttachment:"fixed"}}>
        <div className="cs_height_48 cs_height_lg_48"></div>
      <Container>
        <div>
            <SectionTitle Title={"Other Services"} SubTitle={"We Provide"} />
            <div className="cs_height_20 cs_height_lg_20"></div>
        </div>
        <Row className="g-4 justify-content-center">
          {services.map((service, index) => (
            <Col key={index}   xs={12}
  sm={index === services.length - 1 ? 12 : 6}
  lg={index === services.length - 1 ? 12 : 6}
  xl={index === services.length - 1 ? 12 : 6} >
              <Card className="service-card h-100 p-0" >
                <Card.Body className="position-relative">
                  <div className="corner-image position-absolute end-0 top-0"> <img src={service.img} alt="" /> </div>
                  <div className="service-card-body" style={ index === services.length - 1?{maxWidth:"100%",marginRight:"8%"}: {maxWidth:"500px"}}>
    <Card.Title className="fw-bold">{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <Button  className=" cs_btn cs_style_1">
                    View Details <span className="arrow">→</span>
                  </Button>
                  </div>
              
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
          <div className="cs_height_40 cs_height_lg_40"></div>
    </section>
  );
};

export default ServiceCardGrid;
