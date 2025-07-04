import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import "./EstimateSelector.css"; // Create this CSS file separately
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// const options = [
//   {
//     id: 1,
//     title: 'Tomorrow',
//     time: '18:00 IST',
//     discount: '40% OFF',
//     originalPrice: '0.10',
//     finalPrice: '0.06',
//     date: '',
//   },
//   {
//     id: 2,
//     title: 'Tuesday',
//     time: 'Dec 12 2024',
//     discount: '40% OFF',
//     originalPrice: '0.07',
//     finalPrice: '0.04',
//     date: '',
//   },
//   {
//     id: 3,
//     title: 'Friday',
//     time: 'Dec 13 2024',
//     discount: '40% OFF',
//     originalPrice: '0.05',
//     finalPrice: '0.03',
//     date: '',
//   },
// ];

export default function EstimateSelector() {
  const [pricingOptions, setPricingOptions] = useState([]);
  const [selected, setSelected] = useState(0);
  // const [selectedOption, setSelectedOption] = useState(0);
  const [wordCount, setWordCount] = useState("");
  const [proceedClicked, setProceedClicked] = useState(false); // NEW
  const navigate = useNavigate();
  useEffect(() => {
    const generatePricingOptions = () => {
      const result = [];
      let current = new Date();
      current.setDate(current.getDate() + 1); // start from tomorrow

      while (result.length < 3) {
        if (current.getDay() !== 0) {
          // skip Sunday
          const option = {
            day:
              result.length === 0
                ? "Tomorrow"
                : current.toLocaleDateString("en-US", { weekday: "long" }),
            date:
              result.length === 0
                ? ""
                : current.toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  }),
            time: result.length === 0 ? "18:00 IST" : "",
            discount: "40% OFF",
            originalPrice:
              result.length === 0
                ? "0.10 USD"
                : result.length === 1
                ? "0.07 USD"
                : "0.05 USD",
            finalPrice:
              result.length === 0
                ? "0.06 USD"
                : result.length === 1
                ? "0.04 USD"
                : "0.03 USD",
          };
          result.push(option);
        }
        current.setDate(current.getDate() + 1);
      }
      return result;
    };

    setPricingOptions(generatePricingOptions());
  }, []);

  const calculateTotalPrice = (option) => {
    if (!proceedClicked) {
      // 👈 Show default price until Proceed is clicked
      return option.finalPrice;
    }

    const count = parseInt(wordCount);
    if (!count || isNaN(count)) return option.finalPrice;

    const ratePerWord = parseFloat(option.finalPrice);
    const total = (ratePerWord * count).toFixed(2);
    return `${total} USD`;
  };

  const calculateOriginalPrice = (option) => {
    if (!proceedClicked) {
      // 👈 Show default price until Proceed is clicked
      return option.originalPrice;
    }

    const count = parseInt(wordCount);
    if (!count || isNaN(count)) return option.originalPrice;

    const ratePerWord = parseFloat(option.originalPrice);
    const total = (ratePerWord * count).toFixed(2);
    return `${total} USD`;
  };

  const handlePlaceOrder = () => {
    const count = parseInt(wordCount);

    if (!count || isNaN(count) || count <= 0) {
      toast.warning(
        "Please enter a valid word count before placing your order.",
        { position: "top-center" }
      );
      return;
    }

    const selectedOption = pricingOptions[selected]; // ✅ use different name

    if (!selectedOption) {
      toast.error("Please select a delivery option.");
      return;
    }

    const rate = parseFloat(selectedOption.finalPrice);
    const total = (rate * count).toFixed(2);

    window.scrollTo({ top: 0, behavior: "smooth" });

    navigate("/customize-editing-services", {
      state: {
        wordCount: count,
        deliveryDate: selectedOption.date || "Tomorrow",
        finalPrice: selectedOption.finalPrice,
        totalPrice: `${total} USD`,
      },
    });
  };

  return (
    <Container className="">
      <div className="row d-flex align-items-center justify-content-between">
        <div className="col">
          <h3 className="fw-bold cs_fs_30 mb-1 ">Get Estimates</h3>
          <h2 className="text-primary cs_fs_30 fw-bold">
            Based on Your Word Count
          </h2>
          <p className="text-muted">
            A word count allows us to provide accurate pricing and delivery
            options
          </p>
        </div>
        <div className="col">
          <div className="d-flex justify-content-end mb-4">
            {/* <Form.Control placeholder="e.g. 2345" className="me-2" style={{ maxWidth: '300px' }} />
        <Button  className='cs_btn cs_style_1'>Proceed</Button> */}

            <Form.Control
              type="text"
              style={{ fontWeight: "900" }}
              placeholder="e.g. 2345"
              value={wordCount}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setWordCount(value);
                  setProceedClicked(false);
                }
              }}
              className="me-2"
            />

            <Button
              className="cs_btn cs_style_1"
              onClick={() => setProceedClicked(true)} // mark that user clicked
            >
              Proceed
            </Button>
          </div>
        </div>
      </div>

      <div className="cs_height_30 cs_height_lg_40" />
      <Row>
        {pricingOptions.map((opt, index) => (
          <Col key={index} xs={12} md={4} className="mb-3">
            <Card
              className={`delivery-card py-4 ${
                selected === index ? "selected" : ""
              }`}
              onClick={() => setSelected(index)}
              // onChange={() => setSelectedOption(index)}
            >
              <Card.Body>
                <div className="d-flex justify-content-center align-items-start">
                  <span className="text-primary text-center small">
                    DELIVERY SCHEDULE
                  </span>
                  <Form.Check
                    type="radio"
                    name="deliveryOption"
                    checked={selected === index}
                    // onChange={() => setSelectedOption(index)}
                    onChange={() => setSelected(index)}
                    className="mt-1 position-absolute input-size-change"
                    style={{ top: "10px", right: "10px" }}
                  />
                  {selected === index && (
                    <img
                      src="assets/img/icon/check-round.svg"
                      alt=""
                      className="position-absolute"
                      style={{ top: "10px", right: "10px" }}
                    />
                  )}
                </div>
                <h4
                  className={`${
                    selected === index ? "text-white" : ""
                  } fw-bold mt-2 cs_fs_30 text-center`}
                >
                  {opt.day}
                </h4>
                <p className="mb-1 text-center">
                  {opt.time || opt.date}{" "}
                  <span className="text-success">({opt.discount})</span>
                </p>
                <p className="price text-center">
                  <span className="text-muted text-decoration-line-through me-1">
                    {/* {opt.originalPrice} */}
                    {calculateOriginalPrice(opt)}
                  </span>
                  <span className="fw-bold">{calculateTotalPrice(opt)}</span>
                </p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-4">
        <Button onClick={handlePlaceOrder} className="cs_btn cs_style_1">
          Place Order →
        </Button>
      </div>
      <div className="cs_height_80 cs_height_lg_80"></div>
    </Container>
  );
}
