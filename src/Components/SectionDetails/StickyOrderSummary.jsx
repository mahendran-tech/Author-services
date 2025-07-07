import React, { useMemo, useState } from "react";
import { toast } from "react-toastify";
// import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  InputGroup,
} from "react-bootstrap";
import WordCountInput from "./WordCountInput";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import countryList from "react-select-country-list";

const StickyOrderSummary = ({ servicesList }) => {
  // const options = countryList().getData();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const options = useMemo(() => countryList().getData(), []);
  const [selectedServices, setSelectedServices] = useState([]);
  // const [form, setForm] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  // });
  // const [formTouched, setFormTouched] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    knowAbout: "",
    documentType: "",
    subjectArea: "",
    comments: "",
    agreeTerms: false,
    uploadFile: null,
    referenceFile: null,
  });

  const [documentOptions, setDocumentOptions] = useState({
    editFull: false,
    excludeSections: false,
    editSpecific: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      if (name in documentOptions) {
        setDocumentOptions({ ...documentOptions, [name]: checked });
      } else {
        setFormData({ ...formData, [name]: checked });
      }
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCheckboxChange = (service) => {
    setSelectedServices((prev) => {
      if (prev.find((s) => s.name === service.name)) {
        return prev.filter((s) => s.name !== service.name);
      } else {
        return [...prev, service];
      }
    });
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setForm({ ...form, [name]: value });
  //   setFormTouched(true);
  // };

  const total = selectedServices
    .reduce((sum, s) => sum + s.price, 0)
    .toFixed(2);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // if (!isFormValid) return;
  //   alert(`Order submitted!\nTotal: ${total} USD`);
  // };

  const validateForm = () => {
    const errors = [];

    // Basic personal info
    if (!formData.firstName.trim()) errors.push("First Name is required.");
    if (!formData.lastName.trim()) errors.push("Last Name is required.");
    if (!formData.email.trim()) errors.push("Email is required.");
    if (!formData.country.trim()) errors.push("Phone Number is required.");

    // Country dropdown
    if (!formData.country || formData.country === "")
      errors.push("Country is required.");

    // How did you know about us
    if (!formData.knowAbout)
      errors.push("Please select how you got to know about us.");

    // Document options (require at least one)
    const docOptionsSelected = Object.values(documentOptions).some(
      (val) => val === true
    );
    if (!docOptionsSelected)
      errors.push("Select at least one document edit option.");

    // Document type
    if (!formData.documentType) errors.push("Please select the document type.");

    // Subject area
    if (!formData.subjectArea) errors.push("Please select the subject area.");

    // Comments
    if (!formData.comments.trim())
      errors.push("Additional comments are required.");

    // File uploads
    if (!formData.uploadFile)
      errors.push("Please upload the document to be edited.");

    // Terms and conditions
    if (!formData.agreeTerms)
      errors.push("You must agree to the terms and conditions.");

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      // Show first error as toast, or loop through all
      validationErrors.forEach((err) => {
        toast.warning(err);
      });
      return;
    }

    if (selectedServices.length === 0) {
      toast.warning("Please select at least one service.");
      return;
    }

    if (!formData.agreeTerms) {
      toast.warning("You must agree to the terms and conditions.");
      return;
    }

    setIsSubmitting(true);

    try {
      // ✅ Log All Details to Console
      console.log("===== ORDER SUBMISSION DATA =====");
      console.log("👉 Selected Services:");
      selectedServices.forEach((s, i) => {
        console.log(`${i + 1}. ${s.name} - ${s.price} USD`);
      });

      console.log(`👉 Total Amount: ${total} USD`);

      console.log("👉 Form Data:");
      console.log({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.country,
        country: formData.country,
        knowAbout: formData.knowAbout,
        documentType: formData.documentType,
        subjectArea: formData.subjectArea,
        comments: formData.comments,
        agreeTerms: formData.agreeTerms,
        uploadFile: formData.uploadFile?.name || null,
        referenceFile: formData.referenceFile?.name || null,
      });

      console.log("👉 Document Options:");
      console.log(documentOptions);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Order submitted successfully!", {
        position: "top-center",
      });

      // You can reset form here if needed
    } catch (error) {
      toast.error("Failed to submit the order.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="py-4">
      <Row className="mb-3 position-relative z-1" style={{ marginTop: "-5%" }}>
        <WordCountInput />
      </Row>
      <Row>
        <Col lg={8}>
          {servicesList.map((group, groupIndex) => (
            <Card key={groupIndex} className=" mb-4 selected-items">
              {group.services.map((service, idx) => (
                <div
                  key={idx}
                  className={`mb-0 ${
                    idx !== group.services.length - 1
                      ? "selected-items-box"
                      : ""
                  }  px-3 pt-3`}
                >
                  <h6 className="mb-1">{service.name}</h6>
                  {service.options.map((opt, optIdx) => {
                    const optionWithName = {
                      ...opt,
                      name: `${service.name} Option ${optIdx + 1}`,
                    };
                    return (
                      <div
                        key={optIdx}
                        className="d-flex justify-content-between align-items-center mb-2 fade-in"
                      >
                        <div>
                          <div className="text-muted small">{opt.time}</div>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="me-2 fw-bold cs_fs_14">
                            {opt.unit
                              ? `${opt.price} USD/${opt.unit}`
                              : `${opt.price} USD`}
                          </span>
                          <Form.Check
                            type="checkbox"
                            className="custom-checkbox styled-checkbox"
                            checked={selectedServices.some(
                              (s) => s.name === optionWithName.name
                            )}
                            onChange={() =>
                              handleCheckboxChange(optionWithName)
                            }
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </Card>
          ))}

          <Card className=" selected-items">
            <h5 className="p-4 mb-2 border-bottom border-1">
              Personal Information
            </h5>

            <Form className="my-form-section p-4 mb-4">
              <Row className="mb-3">
                <Col>
                  <Form.Label htmlFor="firstName">First Name</Form.Label>
                  <Form.Control
                    name="firstName"
                    placeholder="Enter First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </Col>

                <Col>
                  <Form.Label htmlFor="lastName">Last Name</Form.Label>
                  <Form.Control
                    name="lastName"
                    placeholder="Enter Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Label htmlFor="email">Email ID</Form.Label>
                  <Form.Control
                    name="email"
                    placeholder="Enter Email ID"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col>
                  <Form.Label htmlFor="phonenumber">Phone Number</Form.Label>
                  <PhoneInput
                    country={"in"} // default country
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e })}
                    enableSearch={true}
                    placeholder="Enter phone number" // ✅ this should work
                  />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Label htmlFor="Country">Select Country</Form.Label>
                  {/* <Form.Select className="custom-select" name="country" value={formData.country} onChange={handleInputChange}>
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                  </Form.Select> */}
                  <div style={{ maxWidth: "100%" }}>
                    <Select
                      options={options}
                      value={options.find(
                        (opt) => opt.label === formData.country
                      )}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.label })
                      }
                      placeholder="Select a country"
                      isSearchable
                    />
                  </div>
                </Col>
                <Col>
                  <Form.Label htmlFor="KnowAbout">
                    How Did You Get to Know About Us?
                  </Form.Label>
                  <Form.Select
                    className="custom-select"
                    name="knowAbout"
                    value={formData.knowAbout}
                    onChange={handleInputChange}
                  >
                    <option value="">
                      Select How Did You Get to Know About Us?
                    </option>
                    <option value="Google">Google</option>
                    <option value="Referral">Referral</option>
                  </Form.Select>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Check
                    type="checkbox"
                    name="editFull"
                    label="Edit the entire document"
                    checked={documentOptions.editFull}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="checkbox"
                    name="excludeSections"
                    label="Exclude specific sections"
                    checked={documentOptions.excludeSections}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="checkbox"
                    name="editSpecific"
                    label="Edit only specific sections"
                    checked={documentOptions.editSpecific}
                    onChange={handleInputChange}
                  />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Label htmlFor="TypeofDocument">
                    Type of Document?
                  </Form.Label>
                  <Form.Select
                    className="custom-select"
                    name="documentType"
                    value={formData.documentType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Type of Document?</option>
                    <option value="Word">Word</option>
                    <option value="PDF">PDF</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Label htmlFor="Subject Area">Subject Area</Form.Label>
                  <Form.Select
                    className="custom-select"
                    name="subjectArea"
                    value={formData.subjectArea}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Subject Area</option>
                    <option value="Life Sciences">Life Sciences</option>
                    <option value="Medicine and Health Sciences">
                      Medicine and Health Sciences
                    </option>
                    <option value="Physical Sciences and Engineering">
                      Physical Sciences and Engineering
                    </option>
                    <option value="Arts and Humanities">
                      Arts and Humanities
                    </option>
                    <option value="Linguistics and Education">
                      Linguistics and Education
                    </option>
                    <option value="Business and Economics">
                      Business and Economics
                    </option>
                  </Form.Select>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="Additional Comments">
                  Additional Comments
                </Form.Label>
                <Form.Control
                  as="textarea"
                  name="comments"
                  rows={3}
                  placeholder="Enter Additional Comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <h6>Share Document Details</h6>
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="uploadFile">
                    <div className="border-dash-light p-4 text-center">
                      <Form.Label style={{ cursor: "pointer" }}>
                        <img
                          className="mb-2"
                          src="assets/img/upload-icon.svg"
                          alt=""
                        />{" "}
                        <br />
                        <strong className="text-gray">
                          Upload Files to be Edited
                        </strong>
                        <br />
                        <span className="fade-text small">
                          (Document should be minimum 2MB in word, pdf)
                        </span>
                      </Form.Label>
                      <Form.Control
                        type="file"
                        name="uploadFile"
                        onChange={handleInputChange}
                        hidden
                      />
                      {formData.uploadFile && (
                        <div className="mt-2 text-muted small">
                          Selected: {formData.uploadFile.name}
                        </div>
                      )}
                    </div>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="referenceFile">
                    <div className="border-dash-light p-4 text-center">
                      <Form.Label style={{ cursor: "pointer" }}>
                        <img
                          className="mb-2"
                          src="assets/img/upload-icon.svg"
                          alt=""
                        />{" "}
                        <br />
                        <strong style={{ color: "#616D80" }}>
                          Upload Reference Files (Optional)
                        </strong>
                        <br />
                        <span className="fade-text small">
                          (Document should be minimum 2MB in word, pdf)
                        </span>
                      </Form.Label>
                      <Form.Control
                        type="file"
                        name="referenceFile"
                        onChange={handleInputChange}
                        hidden
                      />
                      {formData.referenceFile && (
                        <div className="mt-2 text-muted small">
                          Selected: {formData.referenceFile.name}
                        </div>
                      )}
                    </div>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Check
                type="checkbox"
                name="agreeTerms"
                label={
                  <span>
                    I Agree to the{" "}
                    <a href="#" style={{ color: "#ff2661" }}>
                      Terms and Condition
                    </a>{" "}
                    and{" "}
                    <a href="#" style={{ color: "#ff2661" }}>
                      Privacy Policy
                    </a>
                  </span>
                }
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                className="mb-3"
              />
            </Form>
          </Card>
        </Col>

        <Col lg={4}>
          <div
            className="sticky-summary position-sticky "
            style={{ top: "20px" }}
          >
            <Card className=" text-white p-3 bg-image-order fade-in">
              <h5 className="text-center mb-1 text-white">Order Summary</h5>
              <p className="small text-center mb-0">Customize Your Package</p>
              <hr className="bg-light" />
              {selectedServices.length > 0 ? (
                <>
                  {selectedServices.map((s, idx) => (
                    <div
                      key={idx}
                      className="d-flex mb-2 justify-content-between"
                    >
                      <span className="small">{s.name}</span>
                      <span className="small">{s.price} USD</span>
                    </div>
                  ))}
                  <hr className="bg-light" />
                  <div className="d-flex justify-content-between">
                    <strong>Total</strong>
                    <strong>{total} USD</strong>
                  </div>
                </>
              ) : (
                <>
                  <hr className="bg-light" />
                  <div className="d-flex justify-content-between">
                    <strong>Total</strong>
                    <strong>0.00 USD</strong>
                  </div>
                </>
              )}
              {/* <Button
                type="submit"
                className="btn btn-light-white  w-100 mt-3"
                style={{ backgroundColor: "#fff", color: "rgb(7, 90, 179)" }}
                // disabled={!isFormValid || selectedServices.length === 0}
                onClick={handleSubmit}
              >
                Submit Order
              </Button> */}

              {isSubmitting ? (
                <Button
                  className="btn btn-light-white w-100 mt-3 d-flex justify-content-center align-items-center"
                  style={{ backgroundColor: "#fff", color: "rgb(7, 90, 179)" }}
                  disabled
                >
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Submitting...
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="btn btn-light-white w-100 mt-3"
                  style={{ backgroundColor: "#fff", color: "rgb(7, 90, 179)" }}
                  onClick={handleSubmit}
                >
                  Submit Order
                </Button>
              )}
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default StickyOrderSummary;
