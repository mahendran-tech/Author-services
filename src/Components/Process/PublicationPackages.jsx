import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import SectionTitle2 from '../Common/SectionTitle2'
import { HiArrowNarrowRight } from "react-icons/hi";
import SectionTitle from '../Common/SectionTitle';

const services1 = [
      {
    title: "Full Assist Support Plan",
    description:
      "Our Full Assist Support Plan offers comprehensive support for every stage of your manuscript’s journey. From first round of edits to final submission, we take care of every step in the publication process—so you’re free to focus entirely on your research.",
  },
  {
    title: "Flexi Saver Support Plan",
    description:
      "The Flexi Saver Support Plan lets you choose only the services you need—whether it’s journal selection, peer review, or final submission. This budget-friendly option ensures you get expert assistance where it’s needed most.",
  },

];

const PublicationPackages = () => {
  return (
    <div>
        
        
    <section className="service-card-section" >
        <div className="cs_height_48 cs_height_lg_48"></div>
      <Container>
        <div>
           
            <SectionTitle Title={"Publication"} SubTitle={"Packages"} />
            <div className="cs_height_20 cs_height_lg_20"></div>
        </div>
        <Row className="g-4 justify-content-center">
{services1.map((service, index) => (
  <Col key={index} xs={12} lg={6} className="d-flex justify-content-center mb-4">
    <Card className="service-card-publication h-100 p-0">
      <Card.Body className="position-relative">
        {/* Top-right corner image */}
        <div className="corner-image position-absolute end-0 top-0">
          <img src="assets/img/corner-img.png" alt="Corner" />
        </div>

        {/* Card content */}
        <div className="service-card-body-1">
          <Card.Title className="fw-bold cs_fs_30">{service.title}</Card.Title>
          <Card.Text>{service.description}</Card.Text>
          <Button className="cs_btn cs_style_1 mt-3">
            View Details <span className="arrow"><HiArrowNarrowRight /></span>
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
        
        
        
        </div>
  )
}

export default PublicationPackages