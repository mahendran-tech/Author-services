import React, { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import countryList from "react-select-country-list";

const StickyOrderSummary = ({ servicesList }) => {
  const { state } = useLocation();

  const [wordCount, setWordCount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [isActiveState, setIsActiveState] = useState(false);
  const options = useMemo(() => countryList().getData(), []);

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

  const [errors, setErrors] = useState({});

  const [documentOptions, setDocumentOptions] = useState({
    editFull: false,
    excludeSections: false,
    editSpecific: false,
  });

  useEffect(() => {
    if (state?.selectedOption && state?.wordCount) {
      const { name, price, delivery } = state.selectedOption;
      const combinedName = delivery ? `${name} (${delivery})` : name;
      const wordcount = state.wordCount;
      setWordCount(wordcount);
      setSelectedServices([{ name: combinedName, price }]);
      setIsActiveState(true);
    }
  }, [state]);

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
    setErrors((prev) => ({ ...prev, [name]: false }));
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

  const handleProceed = () => {
    const count = parseInt(wordCount);
    if (!count || isNaN(count) || count <= 0) {
      toast.warning("Please enter a valid word count.");
      return;
    }
    const coreEditingService = {
      name: "Core Editing",
      price: (count * 0.06).toFixed(2),
    };

    setSelectedServices([coreEditingService]);
    // setIsActiveState(true);
    toast.success("Core Editing added to summary!");
  };

  const handleProceedReset = () => {
    setWordCount("");
    setSelectedServices([]);
    setIsActiveState(false);
  };

  const total = selectedServices
    .reduce((sum, s) => sum + parseFloat(s.price), 0)
    .toFixed(2);

  const validateForm = () => {
    const newErrors = {};
    let hasError = false;

    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "country",
      "knowAbout",
      "documentType",
      "subjectArea",
      "comments",
      "uploadFile",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field] || formData[field].toString().trim() === "") {
        newErrors[field] = true;
        hasError = true;
      }
    });

    if (!Object.values(documentOptions).some(Boolean)) {
      newErrors.docOptions = true;
      hasError = true;
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = true;
      hasError = true;
    }

    setErrors(newErrors);
    return hasError;
  };

  const resetForm = () => {
    setWordCount("");
    setSelectedServices([]);
    setFormData({
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
    setDocumentOptions({
      editFull: false,
      excludeSections: false,
      editSpecific: false,
    });
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      toast.warning("Please correct the highlighted fields.");
      return;
    }

    if (selectedServices.length === 0) {
      toast.warning("Please select at least one service.");
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("===== ORDER SUBMISSION DATA =====");
      console.log("👉 Selected Services:", selectedServices);
      console.log(`👉 Total Amount: ${total} USD`);
      console.log("👉 Form Data:", {
        ...formData,
        uploadFile: formData.uploadFile?.name || null,
        referenceFile: formData.referenceFile?.name || null,
      });
      console.log("👉 Document Options:", documentOptions);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Order submitted successfully!", {
        position: "top-center",
      });
      resetForm();
    } catch (error) {
      toast.error("Failed to submit the order.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // The rest of your JSX (form and UI) remains unchanged

  return (
    <Container className="py-4">
      {/* Apply conditional className using errors.<fieldName> */}
      {/* Add error class styling in your CSS like: .error-border { border: 1px solid red; } */}
      {/* Example: className={`form-control ${errors.firstName ? 'error-border' : ''}`} */}
      <Row className="mb-3 position-relative z-1" style={{ marginTop: "-5%" }}>
        <Card className="p-4  word-container  rounded-3">
          <Row className="align-items-center justify-content-between">
            <Col lg={7} className="mb-2 mb-lg-0">
              <h6 className="mb-2 fw-bold">
                Enter number of words in your manuscript
              </h6>
              <small className="text-muted">
                A word count helps us in give you accurate pricing and delivery
                options
              </small>
            </Col>
            <Col className="mb-2 d-flex gap-1 mb-lg-0">
              <Form.Control
                type="number"
                placeholder="e.g. 2345"
                value={wordCount}
                onChange={(e) => setWordCount(e.target.value)}
                className="rounded-sm w-75 px-3"
                readOnly={isActiveState}
              />
              {isActiveState ? (
                <Button
                  className="cs_btn cs_style_1 "
                  onClick={handleProceedReset}
                >
                  Reset
                </Button>
              ) : (
                <Button className="cs_btn cs_style_1 " onClick={handleProceed}>
                  Proceed
                </Button>
              )}
            </Col>
          </Row>
        </Card>
        {/* <WordCountInput /> */}
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
                    className={errors.firstName ? "error-border" : ""}
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
                  {/* <Form.Label htmlFor="phonenumber">Phone Number</Form.Label>
                  <PhoneInput
                    country={"in"} // default country
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e })}
                    enableSearch={true}
                    placeholder="Enter phone number" // ✅ this should work
                  /> */}
                  <Form.Label htmlFor="phonenumber">Phone Number</Form.Label>
                  <div
                    className={errors.phone ? "error-border p-1 rounded" : ""}
                  >
                    <PhoneInput
                      country={"in"}
                      value={formData.phone}
                      onChange={(value) => {
                        setFormData({ ...formData, phone: value });
                        setErrors((prev) => ({ ...prev, phone: false }));
                      }}
                      enableSearch={true}
                      placeholder="Enter phone number"
                    />
                  </div>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Label htmlFor="Country">Select Country</Form.Label>
                  {/* 
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
                  </div> */}
                  <div className={errors.country ? "error-border rounded" : ""}>
                    <Select
                      options={options}
                      value={options.find(
                        (opt) => opt.label === formData.country
                      )}
                      onChange={(e) => {
                        setFormData({ ...formData, country: e.label });
                        setErrors((prev) => ({ ...prev, country: false }));
                      }}
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

              {/* {isSubmitting ? (
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
              )} */}
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
