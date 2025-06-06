import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';


const deliveryOptions = [
  {
    id: 'tomorrow',
    title: 'Tomorrow',
    time: '18:00 IST',
    discount: '40% OFF',
    originalPrice: '0.10 USD',
    finalPrice: '0.06 USD',
    date: '',
  },
  {
    id: 'tuesday',
    title: 'Tuesday',
    time: 'Dec 12 2024',
    discount: '40% OFF',
    originalPrice: '0.07 USD',
    finalPrice: '0.04 USD',
  },
  {
    id: 'friday',
    title: 'Friday',
    time: 'Dec 13 2024',
    discount: '40% OFF',
    originalPrice: '0.05 USD',
    finalPrice: '0.03 USD',
  },
];

const DeliveryOptions = () => {
  const [selected, setSelected] = useState('tomorrow');

  return (
    <Container className="my-5 text-center">
      <h4 className="fw-bold">Get Estimates</h4>
      <h2 className="text-primary fw-bold">Based on Your Word Count</h2>
      <p className="text-muted">A word count allows us to provide accurate pricing and delivery options</p>

      <Row className="justify-content-center my-4">
        {deliveryOptions.map((option) => (
          <Col xs={12} md={4} className="mb-3" key={option.id}>
            <Card
              className={`delivery-card ${selected === option.id ? 'selected' : ''}`}
              onClick={() => setSelected(option.id)}
            >
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start">
                  <span className="text-primary small">DELIVERY SCHEDULE</span>
                  <Form.Check
                    type="radio"
                    name="deliveryOption"
                    checked={selected === option.id}
                    onChange={() => setSelected(option.id)}
                    className="mt-1"
                  />
                </div>
                <h4 className="fw-bold mt-2">{option.title}</h4>
                <p className="mb-1">{option.time} <span className="text-success">({option.discount})</span></p>
                <p className="price">
                  <span className="text-muted text-decoration-line-through me-1">{option.originalPrice}</span>
                  <span className="fw-bold">{option.finalPrice}</span>
                </p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Button variant="danger" className="px-4">
        Place Order →
      </Button>
    </Container>
  );
};

export default DeliveryOptions;
