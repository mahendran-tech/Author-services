import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaAngleRight } from 'react-icons/fa';
import './EstimateSelector.css';

const WhyChoose = () => {
  const features = [
    {
      title: 'Target High-Impact Journal Success',
      description:
        'Aiming to publish in a leading journal? Our Exclusive Editing service is designed to strengthen your manuscript and boost its chances of success. We focus on every detail to help your research stand out.',
    },
    {
      title: 'Field-Specific Expert Editing',
      description:
        'An expert in your research area will edit your manuscript, enhancing its structure, flow, clarity, grammar, punctuation, and overall readability — ensuring it’s easy to follow and professionally presented.',
    },
    {
      title: 'Collaborative Editing Experience',
      description:
        'Work with your editor to ensure your feedback is incorporated and your vision is clearly reflected. The result is a refined, publication-ready manuscript tailored to your goals.',
    },
  ];

  return (
    <Container className="exclusive-editing ">
            <div className="cs_height_80 cs_height_lg_80"></div>
        <div className='d-flex justify-content-start'>
      <h2 className="section-title text-left mb-4">Why choose Exclusive Editing?</h2>
      <div className="cs_height_30 cs_height_lg_60"></div>
        </div>


      {features.map((feature, idx) => (
        <Row className="mb-4 feature-item gap-0" key={idx}>
          <Col xs="auto" className="icon-col pe-0">
          <img src="assets/img/icon/right-arrow-yellow.svg" alt="" />
            {/* <FaAngleRight className="feature-icon" /> */}
          </Col>
          <Col>
            <h5 className="feature-title">{feature.title}</h5>
            <p className="feature-description">{feature.description}</p>
          </Col>
        </Row>
      ))}
      <div className="cs_height_80 cs_height_lg_80"></div>
    </Container>
  );
};

export default WhyChoose;
