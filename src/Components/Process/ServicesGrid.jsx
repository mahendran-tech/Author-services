import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ServiceCard from "./ServiceCard";
import SectionTitle from "../Common/SectionTitle";
import { HiArrowNarrowRight } from "react-icons/hi";

const services = [
  {
    icon: "assets/img/icon/youget-1.svg",
    title: "End-to-end support",
    description: "We will guide you through each stage, from choosing the right journal to preparing and submitting your manuscript."
  },
  {
    icon: "assets/img/icon/youget-2.svg",
    title: "Journal Submission",
    description: "Our team will help you manage the whole submission process, from setting up your account to completing the final submission."
  },
  {
     icon: "assets/img/icon/youget-3.svg",
    title: "Illustration rework",
    description: "We will rework your graphics to meet journal standards, improve existing visuals, or create new illustrations from scratch."
  },
  {
    icon: "assets/img/icon/youget-4.svg",
    title: "Language editing",
    description: "A skilled editor will refine your manuscript to improve clarity and flow, ensuring it's error-free and aligned with your publication goals."
  },
  {
      icon: "assets/img/icon/youget-5.svg",
    title: "Formatting & Illustration editing",
    description: "Our experts will carefully format your manuscript—text, figures, tables, and references—to match your target journal's style and citation rules."
  },
  {
      icon: "assets/img/icon/youget-6.svg",
    title: "Plagiarism check",
    description: "We provide you with a plagiarism report, helping you identify potential plagiarism issues in your manuscript. Our detailed report highlights problematic sections and offers expert commentary to support your manuscript's evaluation."
  },
    {
      icon: "assets/img/icon/youget-7.svg",
    title: "Pre-submission peer review",
    description: "We will get your finalized manuscript peer-reviewed by an experienced reviewer from your field, offering constructive feedback and giving you the opportunity to address any gaps before final submission."
  },
  {
      icon: "assets/img/icon/youget-8.svg",
    title: "Unlimited Q&As with experts",
    description: "Our experts will carefully format your manuscript—text, figures, tables, and references—to match your target journal's style and citation rules."
  },
      {
      icon: "assets/img/icon/youget-9.svg",
    title: "Journal Selection",
    description: "Our PhD expert can help boost your chances by analyzing your research and recommending 3-5 journals that match your publication goals, reducing the risk of rejection due to scope mismatch. We help you select the ideal journal based on your research topic, target readership, and indexing, ensuring a successful publication process. "
  },
  {
      icon: "assets/img/icon/youget-10.svg",
    title: "Post-editing services",
    description: "After acceptance, journals may request further revisions. Our post-editing services ensure timely and effective changes, preparing your manuscript for final publication. In case of rejection, we provide one round of resubmission support to another journal of your choice free of charges with subsequent rounds at 10% off."
  },
    {
      icon: "assets/img/icon/youget-11.svg",
    title: "Editing Certificate",
    description: "We will provide you with a professional editing certificate to share with journals, confirming that your manuscript has been polished to high standards."
  }
];

const ServicesGrid = () => {
  return (
    <section> 
   
    <Container className="">
             <div className="cs_height_48 cs_height_lg_48" />
      <Row className="g-4">
        <SectionTitle Title={"What"} SubTitle={"You Get"} />

        {services.map((service, index) => (
        <Col
  key={index}
  xs={12}
  md={index === services.length - 1 ? 12 : 6}
>
            <ServiceCard {...service} />
          </Col>
        ))}
        <Col xs={12} className="text-center">
                  <Button className="cs_btn cs_style_1 mt-3">
            View Details <span className="arrow"><HiArrowNarrowRight /></span>
          </Button>
        </Col>
      </Row>
    </Container>
      <div className="cs_height_40 cs_height_lg_40" />
    </section>
  );
};

export default ServicesGrid;
