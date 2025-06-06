import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, InputGroup } from 'react-bootstrap';

const FullOrderForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    knowAbout: '',
    documentType: '',
    subjectArea: '',
    comments: '',
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
    if (type === 'checkbox') {
      if (name in documentOptions) {
        setDocumentOptions({ ...documentOptions, [name]: checked });
      } else {
        setFormData({ ...formData, [name]: checked });
      }
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    console.log('Document Options:', documentOptions);
  };

  return (
    <Container className="py-4">
      <Row>
        <Col lg={8}>
          <Card className="p-4 mb-4">
            <h5>Personal Information</h5>
            <Form>
              <Row className="mb-3">
                <Col><Form.Control name="firstName" placeholder="Enter First Name" value={formData.firstName} onChange={handleInputChange} /></Col>
                <Col><Form.Control name="lastName" placeholder="Enter Last Name" value={formData.lastName} onChange={handleInputChange} /></Col>
              </Row>

              <Row className="mb-3">
                <Col><Form.Control name="email" placeholder="Enter Email ID" value={formData.email} onChange={handleInputChange} /></Col>
                <Col>
                  <InputGroup>
                    <InputGroup.Text>+91</InputGroup.Text>
                    <Form.Control name="phone" placeholder="Enter Phone Number" value={formData.phone} onChange={handleInputChange} />
                  </InputGroup>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Select name="country" value={formData.country} onChange={handleInputChange}>
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select name="knowAbout" value={formData.knowAbout} onChange={handleInputChange}>
                    <option value="">Select How Did You Get to Know About Us?</option>
                    <option value="Google">Google</option>
                    <option value="Referral">Referral</option>
                  </Form.Select>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col><Form.Check type="checkbox" name="editFull" label="Edit the entire document" checked={documentOptions.editFull} onChange={handleInputChange} /></Col>
                <Col><Form.Check type="checkbox" name="excludeSections" label="Exclude specific sections" checked={documentOptions.excludeSections} onChange={handleInputChange} /></Col>
                <Col><Form.Check type="checkbox" name="editSpecific" label="Edit only specific sections" checked={documentOptions.editSpecific} onChange={handleInputChange} /></Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Select name="documentType" value={formData.documentType} onChange={handleInputChange}>
                    <option value="">Select Type of Document?</option>
                    <option value="Research Paper">Research Paper</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select name="subjectArea" value={formData.subjectArea} onChange={handleInputChange}>
                    <option value="">Select Subject Area</option>
                    <option value="Engineering">Engineering</option>
                  </Form.Select>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Control as="textarea" name="comments" rows={3} placeholder="Enter Additional Comments" value={formData.comments} onChange={handleInputChange} />
              </Form.Group>

              <h6>Share Document Details</h6>
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="uploadFile">
                    <div className="border p-4 text-center">
                      <Form.Label style={{ cursor: 'pointer' }}>
                        📤<br />
                        <strong>Upload Files to be Edited</strong><br />
                        <span className="text-muted small">(Document should be minimum 2MB in word, pdf)</span>
                      </Form.Label>
                      <Form.Control type="file" name="uploadFile" onChange={handleInputChange} hidden />
                      {formData.uploadFile && <div className="mt-2 text-muted small">Selected: {formData.uploadFile.name}</div>}
                    </div>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="referenceFile">
                    <div className="border p-4 text-center">
                      <Form.Label style={{ cursor: 'pointer' }}>
                        📤<br />
                        <strong>Upload Reference Files (Optional)</strong><br />
                        <span className="text-muted small">(Document should be minimum 2MB in word, pdf)</span>
                      </Form.Label>
                      <Form.Control type="file" name="referenceFile" onChange={handleInputChange} hidden />
                      {formData.referenceFile && <div className="mt-2 text-muted small">Selected: {formData.referenceFile.name}</div>}
                    </div>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Check type="checkbox" name="agreeTerms" label={<span>I Agree to the <a href="#">Terms and Condition</a> and <a href="#">Privacy Policy</a></span>} checked={formData.agreeTerms} onChange={handleInputChange} className="mb-3" />
            </Form>
          </Card>
        </Col>

        <Col lg={4}>
          <div className="sticky-top" style={{ top: '80px' }}>
            <Card className="p-3">
              <h6>Order Summary</h6>
              <p className="mb-1"><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
              <p className="mb-1"><strong>Email:</strong> {formData.email}</p>
              <p className="mb-1"><strong>Phone:</strong> {formData.phone}</p>
              <p className="mb-1"><strong>Country:</strong> {formData.country}</p>
              <p className="mb-1"><strong>Document Type:</strong> {formData.documentType}</p>
              <p className="mb-1"><strong>Subject Area:</strong> {formData.subjectArea}</p>
              <p className="mb-1"><strong>Edit Options:</strong></p>
              <ul>
                {documentOptions.editFull && <li>Edit Full Document</li>}
                {documentOptions.excludeSections && <li>Exclude Specific Sections</li>}
                {documentOptions.editSpecific && <li>Edit Specific Sections</li>}
              </ul>

              <Button className="mt-3" onClick={handleSubmit} disabled={!formData.agreeTerms}>Submit Order</Button>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FullOrderForm;
