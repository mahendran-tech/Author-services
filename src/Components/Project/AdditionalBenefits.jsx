import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./AdditionalBenefits.css"; // Create this CSS file
import parse from "html-react-parser"; // Ensure you have this package installed
import SectionTitle2 from "../Common/SectionTitle2";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: "assets/img/icon/icon-1.svg",
    text: "Editing <br/> certificate",
  },
  {
    icon: "assets/img/icon/icon-2.svg",
    text: "Unlimited Q & A with Editors",
  },
  {
    icon: "assets/img/icon/icon-3.svg",
    text: "Plagiarism check by turnitin",
  },
];

const AdditionalBenefits = ({ btnurl }) => {
  return (
    <Container className="text-center ">
      <div className="cs_height_48 cs_height_lg_48"></div>
      <SectionTitle2 Title={"Thesis Editing"} SubTitle="Additional Benefits" />

      <div className="cs_height_20 cs_height_lg_20"></div>
      <Row className="justify-content-center " style={{ gap: "20px" }}>
        {benefits.map((item, index) => (
          <div key={index} className="benefit-card-custom">
            <div className="benefit-inner">
              <div className="benefit-icon">
                <img src={item.icon} alt="" />
              </div>
              <div className="benefit-text">{parse(item.text)}</div>
            </div>
          </div>
        ))}
      </Row>

      <div className="mt-5">
        <Link
          to={btnurl}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cs_btn cs_style_1 "
        >
          Get a Quote →
        </Link>
      </div>
      <div className="cs_height_48 cs_height_lg_48"></div>
    </Container>
  );
};

export default AdditionalBenefits;
