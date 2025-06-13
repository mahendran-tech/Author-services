import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SupportCard from "./SupportCard";
import SectionTitle from "../Common/SectionTitle";

const SupportGrid = ({ services, Title, SubTitle }) => {
  return (
    <div>
      <div className="cs_height_48 cs_height_lg_48" />
      <Container className="">
        <SectionTitle Title={Title} SubTitle={SubTitle} />
        <div className="cs_height_20 cs_height_lg_20" />
        <Row className="g-4">
          {services.map((item, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <SupportCard {...item} />
            </Col>
          ))}
        </Row>
        <div className="cs_height_80 cs_height_lg_80" />
      </Container>
    </div>
  );
};

export default SupportGrid;
