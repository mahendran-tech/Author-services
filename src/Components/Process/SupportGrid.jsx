import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SupportCard from "./SupportCard";
import SectionTitle from "../Common/SectionTitle";

const services = [
  {
    image: "assets/img/img1.png",
    title: "Journal Publication Support",
    description: "Navigating the research publication process can be challenging, but with our Journal Publication support services, you’ll receive expert guidance every step of the way."
  },
  {
    image: "assets/img/img2.png",
    title: "Flexi Saver Support Plan",
    description: "The Flexi Saver Support Plan lets you choose only the services you need—whether it’s journal selection, peer review, or final submission. This budget-friendly option ensures you get expert assistance where it’s needed most."
  },
  {
    image: "assets/img/img3.png",
    title: "Research Outreach",
    description: "We help promote and increase the visibility of your published research within the academic community and across relevant media platforms"
  },
  {
    image: "assets/img/img4.png",
    title: "Translation Services",
    description: "We ensure effective communication by overcoming language barriers through document translation, interpretation, and other language support services."
  },
  {
    image: "assets/img/img5.png",
    title: "Core Editing",
    description: "Our Core Editing service focuses on sentence-level editing for both pre-and post-journal submissions at an affordable rate."
  },
  {
    image: "assets/img/img6.png",
    title: "Exclusive Editing",
    description: "Our Exclusive Editing service is designed to maximize your manuscript’s impact and readiness for submission to high-impact journals."
  },
    {
    image: "assets/img/img7.png",
    title: "Citation Booster",
    description: "Give your research greater visibility with Citation Booster. This service is designed to reach a wider audience, increase readership, and improve your chances of being cited—ensuring your research makes a stronger impact in your field."
  },
  {
    image: "assets/img/img8.png",
    title: "Research Editing",
    description: "Our Research Editing service provides expert pre-submission peer review, offering in-depth feedback on content, structure, and gaps to strengthen your manuscript before journal submission."
  },
  {
    image: "assets/img/img9.png",
    title: "Thesis Editing",
    description: "Our editors revise your thesis or dissertation to improve its clarity, readability, and academic value. They correct grammar, punctuation, and spelling errors while improving sentence structure and flow. "
  }
];

const SupportGrid = () => {
  return (
    <div>

   <div className="cs_height_48 cs_height_lg_48"/>
    <Container className="">
        <SectionTitle Title={"Other Services"}

        SubTitle={"We Provide"}/>
           <div className="cs_height_20 cs_height_lg_20"/>
      <Row className="g-4">
        {services.map((item, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <SupportCard {...item} />
          </Col>
        ))}
      </Row>
             <div className="cs_height_80 cs_height_lg_80"/>
    </Container>

     </div>
  );
};

export default SupportGrid;
