import React from "react";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import {CiEdit} from "react-icons/ci";
import {MdOutlineWorkspacePremium} from "react-icons/md";
import {HiOutlineDocumentText} from "react-icons/hi";
import SectionTitle2 from "../Common/SectionTitle2";

const services = [
  {
    icon: <CiEdit size={24} />,
    title: "Core Editing",
    description:
      "For well-structured content requiring minimal editing and proofreading prior to journal submission.",
  },
  {
    icon: <MdOutlineWorkspacePremium size={24} />,
    title: "Exclusive Editing",
    description:
      "For iterative manuscript revisions and journal correspondence by collaborating with our expert editors.",
  },
  {
    icon: <HiOutlineDocumentText size={24} />,
    title: "Research Editing",
    description:
      "For getting your manuscript reviewed by an experienced peer reviewer and publishing your work in a reputed journal.",
  },
];

const SampleEditing = () => {
  return (
    <div className="" style={{backgroundColor: "#f8f9fc"}}>
      <div className="cs_height_30 cs_height_lg_60"></div>
      <Container>
        {/* <h4 className="text-center fw-semibold text-uppercase">
          Samples To Determine
        </h4>
        <h2 className="text-center fw-bold text-primary mb-5">
          The Best Service For You
        </h2> */}
        <div>
          <SectionTitle2
            Title={"Samples to determine"}
            SubTitle={"The Best Service For You"}
          />
        </div>
        <div className="cs_height_40 cs_height_lg_40"></div>
        {/* Service Cards */}
        <Row className="mb-5">
          {services.map((service, idx) => (
            <Col md={4} key={idx}>
              <Card
                className="mb-3 h-100  shadow-sm"
                style={{
                  backgroundColor: "rgba(0, 99, 203, 0.04)",
                  borderTop: "1px solid #0063CB1A",
                  borderRight: "1px solid #0063CB1A",
                  borderBottom: "1px solid #0063CB1A",
                  borderLeft: "1px solid #0063CB1A",
                }}>
                <Card.Body className="text-center">
                  {/* <div className="mb-2">{service.icon}</div> */}
                  <Card.Title className="d-flex justify-content-start gap-2 cs_accent_color">
                    {service.icon}
                    {service.title}
                  </Card.Title>
                  <Card.Text style={{fontSize: "14px", textAlign: "left"}}>
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Sample Paragraph Section */}
        <Row className="gx-4">
          <Col md={8}>
            <div className="bg-white p-0  mb-2" style={{fontSize: "14px"}}>
              {/* <p>
                Several initiatives have been launched in many countries with
                the aim of modernizing
                <span className="text-danger"> the public services</span>. In
                this sense different reports...
                <span className="text-danger"> for to</span> offering better
                services...
                <span className="text-danger">
                  {" "}
                  gGovernment (e-Government)”
                </span>
                ...
              </p>
              <p>
                Although several countries...
                <span className="text-danger"> web-Web pages</span>,
                according...
                <span className="text-danger"> must have to present</span>...
                <span className="text-danger"> sometimes-delays</span>...
                <span className="text-danger"> musthave</span>...
              </p> */}
              <img src="assets/img/text.png" alt="" />
            </div>
          </Col>
          <Col md={4}>
            <div className="bg-white p-3 shadow-sm rounded mb-3">
              <strong className="text-muted d-block mb-2">Commented:</strong>
              <p style={{fontSize: "14px"}}>
                Lorem Ipsum is simply dummy text of the printing...
              </p>
            </div>
            <div className="bg-white p-3 shadow-sm rounded mb-3">
              <strong className="text-muted d-block mb-2">Commented:</strong>
              <p style={{fontSize: "14px"}}>
                Lorem Ipsum is simply dummy text of the printing...
              </p>
            </div>
            <div className="bg-white p-3 shadow-sm rounded">
              <strong className="text-danger d-block mb-2">Deleted:</strong>
              <p style={{fontSize: "14px"}}>
                Lorem Ipsum is simply dummy text of the printing...
              </p>
            </div>
          </Col>
        </Row>

        {/* Bottom Button */}
        <div className="text-center ">
          <Button className="cs_btn cs_style_1">Select Core Editing →</Button>
        </div>
      </Container>
      <div className="cs_height_80 cs_height_lg_60"></div>
    </div>
  );
};

export default SampleEditing;
