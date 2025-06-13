import React from "react";
import { Container, Table, Row, Col, Button } from "react-bootstrap";

const WhatYouGet = () => {
  const services = [
    {
      selected: true,
      title: "Journal selection",
      description:
        "We help you select the ideal journal based on your research topic, target readership, and indexing, ensuring a successful publication process.",
      price: "00.00$",
    },
    {
      selected: true,
      title: "Post-editing services",
      description:
        "After acceptance, journals may request further revisions. Our post-editing services ensure timely and effective changes, preparing your manuscript for final publication. In case of rejection, we provide one round of resubmission support to another journal of your choice free of charges with subsequent rounds at 10% off.",
      price: "00.00$",
    },
  ];

  return (
    <section className="whatyouget-section py-5">
      <Container>
        <Row className="mb-4">
          <Col>
            <h2 className="whatyouget-heading text-center">
              What <span className="highlight">You Get</span>
            </h2>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <ul className="text-left list-unstyled list-style-one">
              <li className="mb-2 d-flex align-items-start gap-2">
                <img src="assets/img/icon/right-arrow-yellow.svg" alt="" />{" "}
                <div>
                  <h6 className="mb-2 mt-1">Tailored services</h6>
                  <p>
                    Select only the services your manuscript needs, making this
                    a smart, flexible, and cost-friendly option.
                  </p>
                </div>
              </li>

              <li className="mb-2 d-flex align-items-start gap-2">
                <img src="assets/img/icon/right-arrow-yellow.svg" alt="" />{" "}
                <div>
                  <h6 className="mb-2 mt-1">Simple selection process</h6>
                  <p>
                    Choose the services you need from the list below for a quick
                    quote.
                  </p>
                </div>
              </li>
            </ul>
          </Col>
        </Row>

        <div className="table-responsive">
          <Table bordered hover className="whatyouget-table text-center">
            <thead>
              <tr>
                <th></th>
                <th>Services offered</th>
                <th>Description</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody>
              {services.map((item, index) => (
                <tr key={index}>
                  <td>
                    {item.selected && (
                      <span className="whatyouget-check">✔</span>
                    )}
                  </td>
                  <td>{item.title}</td>
                  <td className="text-start">{item.description}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
              <tr>
                <td colSpan={1}></td>
                <td>
                  <Button variant="danger" className="whatyouget-quote-btn">
                    Get a Quote →
                  </Button>
                </td>
                <td colSpan={1}></td>
                <td colSpan={1}> 00.00$ </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </section>
  );
};

export default WhatYouGet;
