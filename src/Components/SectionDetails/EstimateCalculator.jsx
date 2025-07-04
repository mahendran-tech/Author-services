import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import SectionTitle2 from "../Common/SectionTitle2";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EstimateCalculator = () => {
  const [pricingOptions, setPricingOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(0);
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

  // const calculateTotalPrice = (option) => {
  //   const count = parseInt(wordCount);
  //   if (!count || isNaN(count)) return option.finalPrice;

  //   const ratePerWord = parseFloat(option.finalPrice); // extract number
  //   const total = (ratePerWord * count).toFixed(2);
  //   return `${total} USD`;
  // };

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

  // const handlePlaceOrder = () => {
  //   const selected = pricingOptions[selectedOption];
  //   const count = parseInt(wordCount);
  //   const rate = parseFloat(selected.finalPrice);
  //   const total = (rate * count).toFixed(2);

  //   window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top before navigation
  //   navigate("/customize-editing-services", {
  //     state: {
  //       wordCount: count,
  //       deliveryDate: selected.date || "Tomorrow",
  //       finalPrice: selected.finalPrice,
  //       totalPrice: `${total} USD`,
  //     },
  //   });
  // };

  const handlePlaceOrder = () => {
    const count = parseInt(wordCount);

    if (!count || isNaN(count) || count <= 0) {
      // alert("Please enter a valid word count before placing your order.");
      toast.warning(
        "Please enter a valid word count before placing your order.",
        { position: "top-center" }
      );
      return;
    }

    const selected = pricingOptions[selectedOption];
    const rate = parseFloat(selected.finalPrice);
    const total = (rate * count).toFixed(2);

    window.scrollTo({ top: 0, behavior: "smooth" });

    navigate("/customize-editing-services", {
      state: {
        wordCount: count,
        deliveryDate: selected.date || "Tomorrow",
        finalPrice: selected.finalPrice,
        totalPrice: `${total} USD`,
      },
    });
  };

  return (
    <Container>
      <div className="cs_height_60 cs_height_lg_80"></div>
      <div className="text-center mb-4">
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
            {/* <Form.Control
              type="text"
              placeholder="e.g. 2345"
              value={wordCount}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setWordCount(value);
                }
              }}
              className="me-2"
            /> */}
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
          </Form>
        </Col>
      </Row>

      <div className="bg-primary text-white d-flex justify-content-between px-3 py-2 fw-bold rounded-top">
        <div>DELIVERY SCHEDULE</div>
        <div>PRICE</div>
      </div>

      <div className="rounded-2 border-light-1 mt-3">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className={`d-flex align-items-center justify-content-between p-3 border-bottom ${
              selectedOption === index ? "text-primary" : ""
            }`}
            onClick={() => setSelectedOption(index)}
            style={{ cursor: "pointer" }}
          >
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
                <span className="fw-bold">{calculateTotalPrice(option)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <Button onClick={handlePlaceOrder} className="cs_btn cs_style_1">
          Place Order →
        </Button>
      </div>
      <div className="cs_height_30 cs_height_lg_40"></div>
    </Container>
  );
};

export default EstimateCalculator;
