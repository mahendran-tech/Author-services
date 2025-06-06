import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const WordCountInput = () => {
  const [wordCount, setWordCount] = useState('');

  const handleProceed = () => {
    alert(`Entered word count: ${wordCount}`);
  };

  return (
    <Container className="">
      <Card className="p-4  word-container  rounded-3">
        <Row className="align-items-center justify-content-between">
          <Col lg={7} className="mb-2 mb-lg-0">
            <h6 className="mb-2 fw-bold">Enter number of words in your manuscript</h6>
            <small className="text-muted">A word count helps us in give you accurate pricing and delivery options</small>
          </Col>
          <Col  className="mb-2 d-flex gap-1 mb-lg-0">
            <Form.Control
              type="number"
              placeholder="e.g. 2345"
              value={wordCount}
              onChange={(e) => setWordCount(e.target.value)}
              className="rounded-sm w-75 px-3"
            />
    
            <Button
              
              className="cs_btn cs_style_1 "
              onClick={handleProceed}
            >
              Proceed
            </Button>
            </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default WordCountInput;
