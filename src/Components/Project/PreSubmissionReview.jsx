import { Container, Row, Col, Button } from "react-bootstrap";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";

const serviceList = [
  "Identify and resolve technical issues at an early stage.",
  "Receive a detailed assessment from a subject-matter expert.",
  "Collaborate with professionals across multiple review rounds.",
  "Gain experience with the peer review process to anticipate journal feedback.",
  "Strengthen your manuscript and reduce chances of critical reviewer comments.",
];

const featuresList = [
  "Fast turnaround with minimal waiting time.",
  "Priority handling for urgent submissions.",
  "Specialized expertise in your research domain.",
];

const PreSubmissionReview = () => {
  return (
    <Container className="py-5">
      <h3 className="text-center fw-bold mb-5">
        Why Choose Our{" "}
        <span className="text-primary">Pre-submission Peer Review?</span>
      </h3>

      <Row className="gx-5 d-flex justify-content-center pre-review-row">
        <Col md={6} className="position-relative z-2">
          <h5 className="fw-bold">
            Pre-submission Peer Review{" "}
            <span className="text-primary">Service</span>
          </h5>
          <ul className="list-unstyled mt-3">
            {serviceList.map((item, idx) => (
              <li key={idx} className="d-flex align-items-start  gap-2 mb-2">
                <img
                  src="assets/img/icon/check-green.svg"
                  alt=""
                  className="align-self-center"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button type="button" className="cs_btn cs_style_1 btn btn-primary">
            Get a Quote <FaArrowRight />
          </button>
        </Col>

        <Col md={6} className="mt-5 mt-md-0 position-relative z-2">
          <h5 className="fw-bold">
            Pre-submission Peer Review{" "}
            <span className="text-primary">Features</span>
          </h5>
          <ul className="list-unstyled mt-3">
            {featuresList.map((item, idx) => (
              <li key={idx} className="d-flex align-items-start mb-2 gap-2">
                <img
                  src="assets/img/icon/check-green.svg"
                  alt=""
                  className="align-self-center"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button type="button" className="cs_btn cs_style_1 btn btn-primary">
            Get a Quote <FaArrowRight />
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default PreSubmissionReview;
