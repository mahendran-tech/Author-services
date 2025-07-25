import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import SectionTitle from "../Common/SectionTitle";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import countryList from "react-select-country-list";
import { toast } from "react-toastify";
import axios from "axios";
import Swal from "sweetalert2";

const ResearchOutreachForm = () => {
  const countryOptions = countryList().getData();

  const [formData, setFormData] = useState({
    referenceFile: null,
    comments: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    rtitle: "",
    research: "",
    TargetAudience: "",
    ServiceRequired: "",
    OutreachDuration: "",
    otherServiceRequiredText: "",
    documentFile: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const nameFields = ["firstName", "lastName"];
    const isNameField = nameFields.includes(name);
    const nameRegex = /^[A-Za-z\s]*$/;

    if (isNameField && !nameRegex.test(value)) {
      return;
    }

    if (type === "file") {
      const file = files[0];
      const maxSizeMB = 2;

      if (file && file.size > maxSizeMB * 1024 * 1024) {
        toast.error("File size should not exceed 2MB");
        return;
      }

      setFormData((prev) => ({ ...prev, [name]: file }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/;

    if (!formData.firstName || !nameRegex.test(formData.firstName)) {
      newErrors.firstName = "Please enter a valid first name (letters only)";
    }

    if (!formData.lastName || !nameRegex.test(formData.lastName)) {
      newErrors.lastName = "Please enter a valid last name (letters only)";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.country) {
      newErrors.country = "Country is required";
    }

    if (!formData.rtitle) {
      newErrors.rtitle = "Research Title is required";
    }

    if (!formData.research) {
      newErrors.research = "Research Field/Discipline is required";
    }

    if (!formData.TargetAudience) {
      newErrors.TargetAudience = "Target Audience is required";
    }

    if (!formData.ServiceRequired) {
      newErrors.ServiceRequired = "Please select a service";
    }

    if (
      formData.ServiceRequired === "Others (Please Specify)" &&
      !formData.otherServiceRequiredText
    ) {
      newErrors.otherServiceRequiredText =
        "Please specify the other service required";
    }

    if (!formData.OutreachDuration) {
      newErrors.OutreachDuration = "Outreach Duration is required";
    }

    // if (!formData.documentFile && !formData.referenceFile) {
    //   newErrors.documentFile =
    //     "Please upload at least one file (document or reference)";
    // }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      Object.values(validationErrors).forEach((err) => toast.error(err));
      return;
    }

    setIsSubmitting(true);

    const payload = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      if (value !== null && value !== "") {
        payload.append(key, value);
      }
    }
    for (let pair of payload.entries()) {
      console.log(pair[0] + ": ", pair[1]);
    }

    try {
      const response = await axios.post(
        "https://authorservices.iferp.in/api/reach.php",
        payload,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.status === true) {
        Swal.fire(
          "Thank You!",
          "Thanks for submitting your details.",
          "success"
        );

        setFormData({
          referenceFile: null,
          comments: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          country: "",
          rtitle: "",
          research: "",
          TargetAudience: "",
          ServiceRequired: "",
          OutreachDuration: "",
          otherServiceRequiredText: "",
          documentFile: null,
        });

        setErrors({});
      } else {
        if (Array.isArray(response.data.data)) {
          response.data.data.forEach((errMsg) => toast.error(errMsg));
        } else {
          toast.error(response.data.message || "Something went wrong.");
        }
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const { data } = error.response;
        if (Array.isArray(data.data)) {
          data.data.forEach((errMsg) => toast.error(errMsg));
        } else {
          toast.error(data.message || "Form submission failed.");
        }
      } else {
        toast.error("Network error. Please try again.");
      }
      console.error("Submission Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <div className="cs_height_48 cs_height_lg_48"></div>
      <Container>
        <Row>
          <Col>
            <SectionTitle
              Title={"Select Research"}
              SubTitle={" Outreach Service"}
            />
          </Col>
        </Row>
        <Form onSubmit={handleSubmit}>
          <Card className="mb-4 selected-items">
            <h5 className="mb-4 fw-bold p-3 border-bottom">Personal Details</h5>
            <div className="p-3">
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter First Name"
                    className={errors.firstName ? "error-border" : ""}
                  />
                  {errors.firstName && (
                    <div className="text-danger small">{errors.firstName}</div>
                  )}
                </Col>
                <Col md={6}>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter Last Name"
                    className={errors.lastName ? "error-border" : ""}
                  />
                  {errors.lastName && (
                    <div className="text-danger small">{errors.lastName}</div>
                  )}
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    className={errors.email ? "error-border" : ""}
                  />
                  {errors.email && (
                    <div className="text-danger small">{errors.email}</div>
                  )}
                </Col>
                <Col md={6}>
                  <Form.Label>Phone</Form.Label>
                  <div
                    className={errors.phone ? "error-border p-1 rounded" : ""}
                  >
                    <PhoneInput
                      country="in"
                      value={formData.phone}
                      onChange={(value) =>
                        setFormData({ ...formData, phone: value })
                      }
                      enableSearch
                    />
                    {errors.phone && (
                      <div className="text-danger small">{errors.phone}</div>
                    )}
                  </div>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Label>Country</Form.Label>
                  <div className={errors.country ? "error-border rounded" : ""}>
                    <Select
                      options={countryOptions}
                      value={countryOptions.find(
                        (opt) => opt.label === formData.country
                      )}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.label })
                      }
                      placeholder="Select Country"
                      isSearchable
                    />
                    {errors.country && (
                      <div className="text-danger small">{errors.country}</div>
                    )}
                  </div>
                </Col>
              </Row>
            </div>
          </Card>

          <Card className="mb-4 selected-items">
            <h5 className="mb-3 fw-bold p-3 border-bottom">
              Research Project Details
            </h5>
            <div className="p-3">
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Label>Research Title</Form.Label>
                  <Form.Control
                    name="rtitle"
                    value={formData.rtitle}
                    onChange={handleChange}
                    placeholder="Research Title"
                    className={errors.rtitle ? "error-border" : ""}
                  />
                  {errors.rtitle && (
                    <div className="text-danger small">{errors.rtitle}</div>
                  )}
                </Col>
                <Col md={6}>
                  <Form.Label>Research Field / Discipline</Form.Label>
                  <Form.Control
                    name="research"
                    value={formData.research}
                    onChange={handleChange}
                    placeholder="Research Field /Discipline"
                    className={errors.research ? "error-border" : ""}
                  />
                  {errors.research && (
                    <div className="text-danger small">{errors.research}</div>
                  )}
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mb-3">
                  <Form.Label>Target Audience</Form.Label>
                  <Form.Control
                    name="TargetAudience"
                    value={formData.TargetAudience}
                    onChange={handleChange}
                    placeholder="Target Audience"
                    className={errors.TargetAudience ? "error-border" : ""}
                  />
                  {errors.TargetAudience && (
                    <div className="text-danger small">
                      {errors.TargetAudience}
                    </div>
                  )}
                </Col>

                <Col md={6} sm={12} className="mb-3">
                  <Form.Label>
                    Type of Research Outreach Service Required
                  </Form.Label>
                  <Form.Select
                    name="ServiceRequired"
                    value={formData.ServiceRequired}
                    onChange={handleChange}
                    className={errors.ServiceRequired ? "error-border" : ""}
                  >
                    <option value="">Please select</option>
                    <option>Research Consultation</option>
                    <option>Academic Networking</option>
                    <option>Social Media Promotion</option>
                    <option>Conference Promotion</option>
                    <option>Research Presentation</option>
                    <option>Video Abstracts</option>
                    <option>Graphical Abstract</option>
                    <option>Infographics</option>
                    <option>Poster Presentation</option>
                    <option>Research Press Release</option>
                    <option>Simplified Abstract</option>
                    <option>Others (Please Specify)</option>
                  </Form.Select>
                  {errors.ServiceRequired && (
                    <div className="text-danger small">
                      {errors.ServiceRequired}
                    </div>
                  )}
                </Col>

                <Col md={6} sm={12} className="mb-3">
                  <Form.Label>Expected Outreach Duration</Form.Label>
                  <Form.Control
                    name="OutreachDuration"
                    value={formData.OutreachDuration}
                    onChange={handleChange}
                    placeholder="Expected Outreach Duration"
                    className={errors.OutreachDuration ? "error-border" : ""}
                  />
                  {errors.OutreachDuration && (
                    <div className="text-danger small">
                      {errors.OutreachDuration}
                    </div>
                  )}
                </Col>

                {formData.ServiceRequired === "Others (Please Specify)" && (
                  <Col md={6} sm={12} className="mb-3">
                    <Form.Label>Please Specify Other Service</Form.Label>
                    <Form.Control
                      name="otherServiceRequiredText"
                      value={formData.otherServiceRequiredText}
                      onChange={handleChange}
                      placeholder="Specify your custom service"
                      className={
                        errors.otherServiceRequiredText ? "error-border" : ""
                      }
                    />
                    {errors.otherServiceRequiredText && (
                      <div className="text-danger small">
                        {errors.otherServiceRequiredText}
                      </div>
                    )}
                  </Col>
                )}
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Label>Additional Details</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="comments"
                    rows={3}
                    placeholder="Additional Details"
                    value={formData.comments}
                    onChange={handleChange}
                  />
                </Col>

                <Col>
                  <Form.Group controlId="documentFile">
                    <div className="border-dash-light p-4 text-center">
                      <Form.Label style={{ cursor: "pointer" }}>
                        <img
                          className="mb-2"
                          src="assets/img/upload-icon.svg"
                          alt=""
                        />
                        <br />
                        <strong className="text-gray">
                          If you have any documents or proposals, <br /> please
                          upload here
                        </strong>
                      </Form.Label>
                      <Form.Control
                        type="file"
                        name="documentFile"
                        onChange={handleChange}
                        accept=".pdf,.doc,.docx"
                        hidden
                      />
                      {formData.documentFile && (
                        <div className="mt-2 small text-muted">
                          Selected: {formData.documentFile.name}
                        </div>
                      )}
                      {errors.documentFile && (
                        <div className="text-danger small">
                          {errors.documentFile}
                        </div>
                      )}
                    </div>
                  </Form.Group>
                </Col>
              </Row>

              <Button
                className="cs_btn cs_style_1"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Request Quotation"}
              </Button>
            </div>
          </Card>
        </Form>
      </Container>
      <div className="cs_height_48 cs_height_lg_48"></div>
    </section>
  );
};

export default ResearchOutreachForm;
