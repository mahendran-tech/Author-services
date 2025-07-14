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

const DocumentUploadForm = () => {
  const countryOptions = countryList().getData();

  const [formData, setFormData] = useState({
    documentFile: null,
    referenceFile: null,
    comments: "",
    typeOfDocument: "",
    subjectArea: "",
    languageStyle: "American English",
    startImmediately: "Yes",
    journalFormatting: "Yes",
    invoiceName: "",
    sourceLanguage: "",
    targetLanguage: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    knowAbout: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    const nameFields = ["firstName", "lastName"];
    const isNameField = nameFields.includes(name);
    const nameRegex = /^[A-Za-z\s]*$/;

    // Block invalid name input
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

    if (!formData.sourceLanguage) {
      newErrors.sourceLanguage = "Source language is required";
    }

    if (!formData.targetLanguage) {
      newErrors.targetLanguage = "Target language is required";
    }

    if (!formData.subjectArea) {
      newErrors.subjectArea = "Subject area is required";
    }

    if (!formData.country) {
      newErrors.country = "Country is required";
    }

    // ✅ Allow either file to be present
    if (!formData.documentFile && !formData.referenceFile) {
      newErrors.documentFile = "Please upload at least one file";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const payload = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      if (value !== null && value !== "") {
        payload.append(key, value);
      }
    }

    try {
      const response = await axios.post(
        "https://authorservices.iferp.in/api/translate.php",
        payload,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.status === true) {
        // toast.success("Form submitted successfully!", {
        //   position: "top-center",
        // });

        Swal.fire(
          "Thank You!",
          "Thanks for submitting your details.",
          "success"
        );

        setFormData({
          documentFile: null,
          referenceFile: null,
          comments: "",
          typeOfDocument: "",
          subjectArea: "",
          languageStyle: "American English",
          startImmediately: "Yes",
          journalFormatting: "Yes",
          invoiceName: "",
          sourceLanguage: "",
          targetLanguage: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          country: "",
          knowAbout: "",
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
            <SectionTitle Title={"Select "} SubTitle={"Translation Service"} />
          </Col>
        </Row>
        <Form onSubmit={handleSubmit}>
          {/* Language Pair */}
          <Card className="mb-4 selected-items">
            <h5 className="mb-4 fw-bold p-3 border-bottom">
              Select language pair for translation
            </h5>
            <div className="p-3">
              <Row className="mb-3">
                <Col md={6} sm={12}>
                  <Form.Group>
                    <Form.Label>
                      My document is in <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="sourceLanguage"
                      value={formData.sourceLanguage}
                      onChange={handleChange}
                      placeholder="Enter Source Language"
                      className={errors.sourceLanguage ? "error-border" : ""}
                    />
                    {errors.sourceLanguage && (
                      <div className="text-danger small">
                        {errors.sourceLanguage}
                      </div>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6} sm={12}>
                  <Form.Group>
                    <Form.Label>
                      I need it translated to{" "}
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="targetLanguage"
                      value={formData.targetLanguage}
                      onChange={handleChange}
                      placeholder="Enter Target Language"
                      className={errors.targetLanguage ? "error-border" : ""}
                    />
                    {errors.targetLanguage && (
                      <div className="text-danger small">
                        {errors.targetLanguage}
                      </div>
                    )}
                  </Form.Group>
                </Col>
              </Row>
            </div>
          </Card>

          {/* Upload Section */}
          <Card className="mb-4 selected-items">
            <h5 className="mb-3 fw-bold p-3 border-bottom">Document Upload</h5>
            <div className="p-3">
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="uploadFile">
                    <div className="border-dash-light p-4 text-center">
                      <Form.Label style={{ cursor: "pointer" }}>
                        <img
                          className="mb-2"
                          src="assets/img/upload-icon.svg"
                          alt=""
                        />
                        <br />
                        <strong className="text-gray">
                          Upload Files to be Edited
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
                        />
                        <br />
                        <strong className="text-gray">
                          Upload Reference Files (Optional)
                        </strong>
                      </Form.Label>
                      <Form.Control
                        type="file"
                        name="referenceFile"
                        onChange={handleChange}
                        accept=".pdf,.doc,.docx"
                        hidden
                      />
                      {formData.referenceFile && (
                        <div className="mt-2 small text-muted">
                          Selected: {formData.referenceFile.name}
                        </div>
                      )}
                    </div>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Control
                as="textarea"
                name="comments"
                rows={3}
                placeholder="Any other instructions for your editor"
                value={formData.comments}
                onChange={handleChange}
              />
            </div>
          </Card>

          {/* Personal & Document Details */}
          <Card className="mb-4 selected-items">
            <h5 className="mb-4 fw-bold p-3 border-bottom">
              Personal & Document Details
            </h5>
            <div className="p-3">
              <Row className="mb-3">
                <Col md={6} sm={12}>
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
                <Col md={6} sm={12}>
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
                <Col md={6} sm={12}>
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
                <Col md={6} sm={12}>
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
                <Col md={6} sm={12}>
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
                <Col md={6} sm={12}>
                  <Form.Label>How did you know about us?</Form.Label>
                  <Form.Select
                    name="knowAbout"
                    value={formData.knowAbout}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="Google">Google</option>
                    <option value="Referral">Referral</option>
                  </Form.Select>
                </Col>
              </Row>

              {/* Type of Document & Subject Area */}
              <Row className="mb-3">
                <Col md={6} sm={12}>
                  <Form.Label>Type of Document</Form.Label>
                  <Form.Select
                    name="typeOfDocument"
                    value={formData.typeOfDocument}
                    onChange={handleChange}
                  >
                    <option value="">Select Type</option>
                    <option>Research Paper</option>
                    <option>Thesis</option>
                    <option>Review Article</option>
                  </Form.Select>
                </Col>
                <Col md={6} sm={12}>
                  <Form.Label>
                    Subject Area <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Select
                    name="subjectArea"
                    value={formData.subjectArea}
                    onChange={handleChange}
                    className={errors.subjectArea ? "error-border" : ""}
                  >
                    <option value="">Select Subject</option>
                    <option>Life Sciences</option>
                    <option>Engineering</option>
                    <option>Medical</option>
                  </Form.Select>
                  {errors.subjectArea && (
                    <div className="text-danger small">
                      {errors.subjectArea}
                    </div>
                  )}
                </Col>
              </Row>

              {/* Radio Buttons */}
              <Row className="mb-3">
                <Col md={6} sm={12}>
                  <Form.Label>Journal Formatting</Form.Label>
                  <div className="d-flex gap-3">
                    <Form.Check
                      type="radio"
                      label="Yes"
                      name="journalFormatting"
                      value="Yes"
                      checked={formData.journalFormatting === "Yes"}
                      onChange={handleChange}
                    />
                    <Form.Check
                      type="radio"
                      label="No"
                      name="journalFormatting"
                      value="No"
                      checked={formData.journalFormatting === "No"}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
                <Col md={6} sm={12}>
                  <Form.Label>Start Immediately?</Form.Label>
                  <div className="d-flex gap-3">
                    <Form.Check
                      type="radio"
                      label="Yes"
                      name="startImmediately"
                      value="Yes"
                      checked={formData.startImmediately === "Yes"}
                      onChange={handleChange}
                    />
                    <Form.Check
                      type="radio"
                      label="No, send a quote first"
                      name="startImmediately"
                      value="No"
                      checked={formData.startImmediately === "No"}
                      onChange={handleChange}
                    />
                  </div>
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

export default DocumentUploadForm;
