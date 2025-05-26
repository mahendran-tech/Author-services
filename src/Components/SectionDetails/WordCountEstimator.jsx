import React, {useState} from "react";
import {Form, Button, Card, Row, Col} from "react-bootstrap";

const deliveryOptions = [
  {
    label: "Tomorrow",
    time: "18:00 IST",
    discount: "40% OFF",
    oldPrice: "0.10 USD",
    newPrice: "0.06 USD",
    date: null,
  },
  {
    label: "Tuesday",
    time: "Dec 12 2024",
    discount: "40% OFF",
    oldPrice: "0.07 USD",
    newPrice: "0.04 USD",
    date: "Dec 12 2024",
  },
  {
    label: "Friday",
    time: "Dec 13 2024",
    discount: "40% OFF",
    oldPrice: "0.05 USD",
    newPrice: "0.03 USD",
    date: "Dec 13 2024",
  },
];

const WordCountEstimator = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [wordCount, setWordCount] = useState("");

  return (
    <div className="container py-5">
      <h3 className="text-center fw-bold">Get Estimates</h3>
      <h4 className="text-center text-primary fw-bold mb-3">
        Based on Your Word Count
      </h4>
      <p className="text-center text-muted mb-4">
        A word allows us to provide accurate pricing and delivery options
      </p>

      <div className="d-flex justify-content-center mb-3 gap-2">
        <Form.Control
          type="text"
          placeholder="e.g. 2345"
          value={wordCount}
          onChange={(e) => setWordCount(e.target.value)}
          style={{maxWidth: 200}}
        />
        <Button variant="danger">Proceed</Button>
      </div>

      <div className="bg-primary text-white d-flex justify-content-between px-3 py-2 rounded-top fw-bold">
        <div>DELIVERY SCHEDULE</div>
        <div>PRICE</div>
      </div>

      <Card className="rounded-bottom border">
        <Card.Body>
          {deliveryOptions.map((option, index) => (
            <div
              key={index}
              className="d-flex align-items-center justify-content-between py-3 border-bottom"
              style={{cursor: "pointer"}}
              onClick={() => setSelectedIndex(index)}>
              <div className="d-flex align-items-center gap-2">
                <input
                  type="radio"
                  checked={selectedIndex === index}
                  readOnly
                />
                <div>
                  <div className="fw-bold">
                    {option.label}{" "}
                    <span className="text-success small">
                      {option.time && `${option.time}, (${option.discount})`}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-muted text-decoration-line-through me-2">
                  {option.oldPrice}
                </span>
                <span className="fw-bold text-primary">{option.newPrice}</span>
              </div>
            </div>
          ))}
        </Card.Body>
      </Card>

      <div className="text-center mt-4">
        <Button variant="danger">Place Order →</Button>
      </div>
    </div>
  );
};

export default WordCountEstimator;
