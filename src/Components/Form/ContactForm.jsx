import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    social: "",
    queryType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, queryType } = formData;

    // Basic Validation
    if (!name || !email || !phone || !queryType) {
      toast.warning("Please fill in all required fields.");
      return;
    }

    try {
      setIsSubmitting(true);

      // API Call
      const response = await axios.post(
        "https://authorservices.iferp.in/api/contactus.php",
        formData
      );

      if (response.status === 200 || response.status === 201) {
        // toast.success("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          social: "",
          queryType: "",
          message: "",
        });
        Swal.fire(
          "Thank You!",
          "Thanks for submitting your details.",
          "success"
        );
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("API Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const style = {
    border: "1px solid #616D8033",
    padding: "1rem",
    borderRadius: "8px",
  };
  return (
    <section className="expert-section ">
      <div className="cs_height_80 cs_height_lg_80"></div>
      <Container className=" contact-form-design">
        <Row>
          {/* Left: Form */}
          <Col lg={8}>
            <Card className="p-4 shadow-sm rounded-4 " style={style}>
              <Form onSubmit={handleSubmit} className="">
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                      value={formData.name}
                      onChange={(e) => {
                        const regex = /^[a-zA-Z\s]*$/;
                        if (regex.test(e.target.value)) {
                          handleChange(e);
                        }
                      }}
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter Email Address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Label>Phone Number</Form.Label>
                    <PhoneInput
                      country={"in"}
                      inputClass="form-control"
                      containerClass="w-100"
                      placeholder="Enter Phone Number"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Social Media Link</Form.Label>
                    <Form.Control
                      type="text"
                      name="social"
                      placeholder="Enter Social Media Link"
                      value={formData.social}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Type of Query</Form.Label>
                  <Form.Select
                    name="queryType"
                    value={formData.queryType}
                    onChange={handleChange}
                  >
                    <option value="">Select Type of Query</option>
                    <option value="Editing & Proofreading">
                      Editing & Proofreading
                    </option>
                    <option value="Publication Support">
                      Publication Support
                    </option>
                    <option value="Plagiarism Check">Plagiarism Check</option>
                    <option value="Journal Selection">Journal Selection</option>
                    <option value="Pre-submission Peer Review">
                      Pre-submission Peer Review
                    </option>
                    <option value="Citation Booster">Citation Booster</option>
                    <option value="Research Outreach">Research Outreach</option>
                    <option value="Translation">Translation</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    placeholder="Enter Message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className=" cs_btn cs_style_1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Request Quotation"}
                </Button>
              </Form>
            </Card>
          </Col>

          {/* Right: Contact Info Boxes */}
          <Col lg={4} className="mt-4 mt-lg-0">
            <Card className="p-3 mb-3 border-0 bg-light-blue rounded-4">
              <div className="d-flex align-items-center gap-3">
                <img
                  src="assets/img/icon/location-icon.svg"
                  alt="Address"
                  width={72}
                />
                <div>
                  <h6 className="mb-1">Address</h6>
                  <p className="mb-0 small text-muted lh-sm fw-bold">
                    Rais Towers, 2054/B, 2nd Floor, West block, 2nd Ave, Anna
                    Nagar, Chennai, Tamil Nadu 600040
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-3 mb-3 border-0 bg-light-cyan rounded-4">
              <div className="d-flex align-items-center gap-3">
                <img
                  src="assets/img/icon/phone-icon.svg"
                  alt="Phone"
                  width={72}
                />
                <div>
                  <h6 className="mb-1">Phone Number</h6>
                  <p className="mb-0 fw-semibold">+91 93429 24782</p>
                </div>
              </div>
            </Card>

            <Card className="p-3 border-0 bg-light-pink rounded-4">
              <div className="d-flex align-items-center gap-3">
                <img
                  src="assets/img/icon/email-icon.svg"
                  alt="Email"
                  width={72}
                />
                <div>
                  <h6 className="mb-1">Send us your query anytime!</h6>
                  <p className="mb-0 fw-semibold">author.support@iferp.in</p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <div className="cs_height_80 cs_height_lg_80"></div>
    </section>
  );
};

export default ContactForm;
