import React, {useState} from "react";
import {Container, Row, Col, Button, Form} from "react-bootstrap";
import SectionTitle2 from "../Common/SectionTitle2";

const pricingOptions = [
  {
    day: "Tomorrow",
    time: "18:00 IST",
    discount: "40% OFF",
    originalPrice: "0.10 USD",
    finalPrice: "0.06 USD",
    date: "",
  },
  {
    day: "Tuesday",
    time: "",
    discount: "40% OFF",
    originalPrice: "0.07 USD",
    finalPrice: "0.04 USD",
    date: "Dec 12 2024",
  },
  {
    day: "Friday",
    time: "",
    discount: "40% OFF",
    originalPrice: "0.05 USD",
    finalPrice: "0.03 USD",
    date: "Dec 13 2024",
  },
];

const EstimateCalculator = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <Container className="">
      <div className="cs_height_60 cs_height_lg_80"></div>
      <div className="text-center mb-4">
        {/* <h4 className="fw-bold">Get Estimates</h4>
        <h5 className="fw-bold text-primary">Based on Your Word Count</h5> */}
        <SectionTitle2
          Title={"Get Estimates"}
          SubTitle={"Based on Your Word Count"}
        />

        <p className="text-muted">
          A word allows us to provide accurate pricing and delivery options
        </p>
      </div>

      <Row className="justify-content-center mb-4">
        <Col xs={10} md={6}>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="e.g. 2345"
              className="me-2"
            />
            <Button className="cs_btn cs_style_1">Proceed</Button>
          </Form>
        </Col>
      </Row>

      <div className="bg-primary text-white d-flex justify-content-between px-3 py-2 fw-bold rounded-top">
        <div>DELIVERY SCHEDULE</div>
        <div>PRICE</div>
      </div>

      <div className=" rounded-2 border-light-1 mt-3">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className={`d-flex align-items-center justify-content-between p-3 border-bottom ${
              selectedOption === index ? "text-primary" : ""
            }`}
            onClick={() => setSelectedOption(index)}
            style={{cursor: "pointer"}}>
            <div className="d-flex align-items-center">
              <Form.Check
                type="radio"
                name="priceOption"
                checked={selectedOption === index}
                onChange={() => setSelectedOption(index)}
                className="me-3"
              />
              <div>
                <div className="fw-bold">
                  {option.day}{" "}
                  {option.date && (
                    <small className="text-muted fw-normal">
                      {option.date},
                    </small>
                  )}{" "}
                  {option.time && (
                    <small className="text-success fw-normal">
                      {option.time}
                    </small>
                  )}
                  {option.discount && (
                    <small className="text-success fw-normal">
                      {" "}
                      ({option.discount})
                    </small>
                  )}
                </div>
              </div>
            </div>

            <div className="text-end">
              <div>
                <del className="text-muted me-2">{option.originalPrice}</del>
                <span className="fw-bold">{option.finalPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <Button className="cs_btn cs_style_1">Place Order →</Button>
      </div>
      <div className="cs_height_30 cs_height_lg_40"></div>
    </Container>
  );
};

export default EstimateCalculator;
