import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import './EstimateSelector.css'; // Create this CSS file separately

const options = [
  {
    id: 1,
    title: 'Tomorrow',
    time: '18:00 IST',
    discount: '40% OFF',
    originalPrice: '0.10',
    finalPrice: '0.06',
    date: '',
  },
  {
    id: 2,
    title: 'Tuesday',
    time: 'Dec 12 2024',
    discount: '40% OFF',
    originalPrice: '0.07',
    finalPrice: '0.04',
    date: '',
  },
  {
    id: 3,
    title: 'Friday',
    time: 'Dec 13 2024',
    discount: '40% OFF',
    originalPrice: '0.05',
    finalPrice: '0.03',
    date: '',
  },
];

export default function EstimateSelector() {
  const [selected, setSelected] = useState(1);

  return (
    <Container className="">
 
      <div className='row d-flex align-items-center justify-content-between'>
        <div className='col'>
      <h3 className="fw-bold cs_fs_30 mb-1 ">Get Estimates</h3>
      <h2 className="text-primary cs_fs_30 fw-bold">Based on Your Word Count</h2>
      <p className="text-muted">A word count allows us to provide accurate pricing and delivery options</p>

        </div>
        <div className='col'>
      <div className="d-flex justify-content-end mb-4">
        <Form.Control placeholder="e.g. 2345" className="me-2" style={{ maxWidth: '300px' }} />
        <Button  className='cs_btn cs_style_1'>Proceed</Button>
      </div>
        </div>
      </div>

      <div className='cs_height_30 cs_height_lg_40'/>

      <Row>
        {options.map((opt) => (
          <Col key={opt.id} xs={12} md={4} className="mb-3">
            <Card
              className={`delivery-card py-4 ${selected === opt.id ? 'selected' : ''}`}
              onClick={() => setSelected(opt.id)}
            >
              <Card.Body>
                <div className="d-flex justify-content-center align-items-start">
                  <span className="text-primary text-center small">DELIVERY SCHEDULE</span>
                  <Form.Check
                    type="radio"
                    name="deliveryOption"
                    checked={selected === opt.id}
                    onChange={() => setSelected(opt.id)}
                    className="mt-1 position-absolute input-size-change" style={{ top: '10px', right: '10px'}}
                  />
                  {selected === opt.id && <img src="assets/img/icon/check-round.svg" alt="" className='position-absolute' style={{ top: '10px', right: '10px' }} />}
              
                </div>
                <h4 className={`${selected === opt.id ? 'text-white' : ''} fw-bold mt-2 cs_fs_30 text-center` }>{opt.title}</h4>
                <p className="mb-1 text-center">{opt.time} <span className="text-success">({opt.discount})</span></p>
                <p className="price text-center">
                  <span className="text-muted text-decoration-line-through me-1">{opt.originalPrice}</span>
                  <span className="fw-bold">{opt.finalPrice}</span>
                </p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-4">
        <Button className='cs_btn cs_style_1' >Place Order →</Button>
      </div>
           <div className="cs_height_80 cs_height_lg_80"></div>
    </Container>
  );
}
