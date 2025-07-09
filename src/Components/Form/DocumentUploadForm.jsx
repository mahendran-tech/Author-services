import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import SectionTitle from "../Common/SectionTitle";

const DocumentUploadForm = () => {
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
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <section>
      <div className="cs_height_48 cs_height_lg_48"></div>
      <Container className="">
        <Row>
          <Col>
            <SectionTitle Title={"Select "} SubTitle={"Translation Service"} />
          </Col>
        </Row>
        <Form className="my-form-section" onSubmit={handleSubmit}>
          {/* Language Pair for Translation Section */}
          <Card className="mb-4 selected-items">
            <h5 className="mb-4 fw-bold p-3  border-1 border-bottom ">
              Select language pair for translation
            </h5>
            <div className="p-3">
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>
                      My document is in <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Select/Type Your Language"
                      name="sourceLanguage"
                      value={formData.sourceLanguage}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>
                      I need it translated to{" "}
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Target Language"
                      name="targetLanguage"
                      value={formData.targetLanguage}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <div className="d-flex justify-content-start">
                <Button className="cs_btn cs_style_1" type="submit">
                  Proceed
                </Button>
              </div>
            </div>
          </Card>
          {/* Document Upload Section */}
          <Card className="mb-4 selected-items">
            <h5 className="mb-3 fw-bold p-3 border-1 border-bottom">
              Document Upload
            </h5>
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
                        name="documentFile"
                        onChange={handleChange}
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
                        onChange={handleChange}
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
              {/* <Row className="mb-3 ">
              <Col md={6}>
                <div className="border border-dashed p-4 text-center">
                  <Form.Label className="w-100">
                    <div className="mb-2">📁 Upload Files to be Worked on</div>
                    <div
                      className="text-muted"
                      style={{ fontSize: "0.875rem" }}
                    >
                      (Document should be minimum 2MB in word, pdf)
                    </div>
                    <Form.Control
                      type="file"
                      name="documentFile"
                      onChange={handleChange}
                      className="d-none"
                    />
                  </Form.Label>
                </div>
              </Col>
              <Col md={6}>
                <div className="border border-dashed p-4 text-center">
                  <Form.Label className="w-100">
                    <div className="mb-2">
                      📁 Upload Reference Files (Optional)
                    </div>
                    <div
                      className="text-muted"
                      style={{ fontSize: "0.875rem" }}
                    >
                      (Document should be minimum 2MB in word, pdf)
                    </div>
                    <Form.Control
                      type="file"
                      name="referenceFile"
                      onChange={handleChange}
                      className="d-none"
                    />
                  </Form.Label>
                </div>
              </Col>
            </Row> */}
              <Form.Control
                as="textarea"
                name="comments"
                placeholder="Any other instructions for your editor"
                rows={3}
                value={formData.comments}
                onChange={handleChange}
              />
            </div>
          </Card>

          {/* Document Details Section */}
          <Card className="mb-4 selected-items">
            <h5 className="mb-4 fw-bold p-3 border-1 border-bottom">
              Document Details
            </h5>
            <div className="p-3">
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Type of Document?</Form.Label>
                    <Form.Select
                      name="typeOfDocument"
                      value={formData.typeOfDocument}
                      onChange={handleChange}
                    >
                      <option value="">Select Type of Document?</option>
                      <option>Research Paper</option>
                      <option>Thesis</option>
                      <option>Review Article</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>
                      Subject Area Category{" "}
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      name="subjectArea"
                      value={formData.subjectArea}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Subject Area</option>
                      <option>Life Sciences</option>
                      <option>Engineering</option>
                      <option>Medical</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Label>Language Style</Form.Label>
                  <div className="d-flex gap-4">
                    <Form.Check
                      type="radio"
                      id="lang-american"
                      name="languageStyle"
                      value="American English"
                      checked={formData.languageStyle === "American English"}
                      onChange={handleChange}
                      label={
                        <label htmlFor="lang-american" className="mb-0">
                          American English
                        </label>
                      }
                    />

                    <Form.Check
                      type="radio"
                      id="lang-british"
                      name="languageStyle"
                      value="British English"
                      checked={formData.languageStyle === "British English"}
                      onChange={handleChange}
                      label={
                        <label htmlFor="lang-british" className="mb-0">
                          British English
                        </label>
                      }
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <Form.Label>
                    Do you want free journal formatting for your document?
                  </Form.Label>
                  <div className="d-flex gap-4 ">
                    <Form.Check
                      type="radio"
                      id="journalFormattingYes"
                      name="journalFormatting"
                      value="Yes"
                      checked={formData.journalFormatting === "Yes"}
                      onChange={handleChange}
                      label={
                        <label htmlFor="journalFormattingYes" className="mb-0">
                          Yes
                        </label>
                      }
                    />

                    <Form.Check
                      type="radio"
                      id="journalFormattingNo"
                      name="journalFormatting"
                      value="No"
                      checked={formData.journalFormatting === "No"}
                      onChange={handleChange}
                      label={
                        <label htmlFor="journalFormattingNo" className="mb-0">
                          No
                        </label>
                      }
                    />
                  </div>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Label>
                    Can we start work on your request immediately?
                  </Form.Label>
                  <div className="d-flex  gap-4">
                    <Form.Check
                      type="radio"
                      id="startImmediatelyYes"
                      name="startImmediately"
                      value="Yes"
                      checked={formData.startImmediately === "Yes"}
                      onChange={handleChange}
                      label={
                        <label htmlFor="startImmediatelyYes" className="mb-0">
                          Yes
                        </label>
                      }
                    />

                    <Form.Check
                      type="radio"
                      id="startImmediatelyNo"
                      name="startImmediately"
                      value="No"
                      checked={formData.startImmediately === "No"}
                      onChange={handleChange}
                      label={
                        <label htmlFor="startImmediatelyNo" className="mb-0">
                          No, send a quote first for confirmation
                        </label>
                      }
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Invoice Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Name of Invoice"
                      name="invoiceName"
                      value={formData.invoiceName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <div className="d-flex justify-content-start">
                <Button className="cs_btn cs_style_1" type="submit">
                  Request Quotation
                </Button>
              </div>
            </div>
          </Card>
        </Form>
      </Container>
      <div className="cs_height_48 cs_height_lg_48"></div>
    </section>
  );
};

export default DocumentUploadForm;
