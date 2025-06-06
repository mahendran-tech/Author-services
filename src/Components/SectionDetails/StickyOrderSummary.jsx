import React, { useMemo, useState } from "react";
// import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Container, Row, Col, Form, Button, Card, InputGroup } from 'react-bootstrap';
import WordCountInput from "./WordCountInput";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Select from 'react-select';
import countryList from 'react-select-country-list';

const servicesList = [
  {
    category: "Editing Services",
    services: [
      {
        name: "Article Editing",
        options: [{ price: 180, time: "Time : 4 To 5 Days" }],
      },
      {
        name: "Pre Submission Peer review",
        options: [
          { price: 250, time: "Time : 7 To 15 Days | 1 Reviewer" },
          { price: 100, time: "Time : 3 Days | 0 To 4000 Word" },
        ],
      },
      {
        name: "Formatting & Illustration editing",
        options: [
          { price: 200, time: "Time : 7 Days | 4001 To 8000 Word" },
          { price: 310, time: "Time : 11 Days | 8001 To 12000 Word" },
        ],
      },
      {
        name: "Proofreading",
        options: [{ price: 100, time: "Time : 4 Days" }],
      },
      {
        name: "Rejected Paper Editing",
        options: [{ price: 0.06, unit: "Word", time: "Time : 5 Days" }],
      },
      {
        name: "Thesis Editing",
        options: [{ price: 200, time: "Time : 4 Days" }],
      },
    ],
  },
];

const StickyOrderSummary = () => {
  // const options = countryList().getData();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!isFormValid) return;
    alert(`Order submitted!\nTotal: ${total} USD`);
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
            <h5 className="p-4 mb-2 border-bottom border-1">Personal Information</h5>
          
            <Form className="my-form-section p-4 mb-4">
              <Row className="mb-3">
                <Col>
                 <Form.Label htmlFor="firstName">First Name</Form.Label>
                <Form.Control name="firstName" placeholder="Enter First Name" value={formData.firstName} onChange={handleInputChange} /></Col>

                <Col>
                  <Form.Label htmlFor="lastName">Last Name</Form.Label>
                <Form.Control name="lastName" placeholder="Enter Last Name" value={formData.lastName} onChange={handleInputChange} /></Col>
              </Row>

              <Row className="mb-3">
                <Col>
                   <Form.Label htmlFor="email">Email ID</Form.Label>
                <Form.Control name="email" placeholder="Enter Email ID" value={formData.email} onChange={handleInputChange} /></Col>
                <Col>
             
                        <Form.Label htmlFor="phonenumber">Phone Number</Form.Label>
<PhoneInput
  country={'in'} // default country
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
                      <div style={{ maxWidth: '100%' }}>
    <Select
      options={options}
      value={options.find(opt => opt.label === formData.country)}
      onChange={e => setFormData({ ...formData, country: e.label })}
      placeholder="Select a country"
      isSearchable
    />
    </div>

 
                </Col>
                <Col>
                        <Form.Label htmlFor="KnowAbout">How Did You Get to Know About Us?</Form.Label>
                  <Form.Select className="custom-select" name="knowAbout" value={formData.knowAbout} onChange={handleInputChange}>
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
                      <Form.Label htmlFor="TypeofDocument">Type of Document?</Form.Label>
                  <Form.Select className="custom-select" name="documentType" value={formData.documentType} onChange={handleInputChange}>
                    <option value="">Select Type of Document?</option>
                    <option value="Research Paper">Research Paper</option>
                  </Form.Select>
                </Col>
                <Col>
                     <Form.Label htmlFor="Subject Area">Subject Area</Form.Label>
                  <Form.Select className="custom-select" name="subjectArea" value={formData.subjectArea} onChange={handleInputChange}>
                    <option value="">Select Subject Area</option>
                    <option value="Engineering">Engineering</option>
                  </Form.Select>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                       <Form.Label htmlFor="Additional Comments">Additional Comments</Form.Label>
                <Form.Control as="textarea" name="comments" rows={3} placeholder="Enter Additional Comments" value={formData.comments} onChange={handleInputChange} />
              </Form.Group>

              <h6>Share Document Details</h6>
              <Row className="mb-3">
            
                <Col>
                  <Form.Group controlId="uploadFile">
                    <div className="border-dash-light p-4 text-center">
                      <Form.Label style={{ cursor: 'pointer' }}>
                        <img className="mb-2"  src="assets/img/upload-icon.svg" alt="" />   <br />
                        <strong className="text-gray">Upload Files to be Edited</strong><br />
                        <span className="fade-text small">(Document should be minimum 2MB in word, pdf)</span>
                      </Form.Label>
                      <Form.Control type="file" name="uploadFile" onChange={handleInputChange} hidden />
                      {formData.uploadFile && <div className="mt-2 text-muted small">Selected: {formData.uploadFile.name}</div>}
                    </div>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="referenceFile">
                    <div className="border-dash-light p-4 text-center">
                      <Form.Label style={{ cursor: 'pointer' }}>
                          <img className="mb-2"  src="assets/img/upload-icon.svg" alt="" />   <br />
                        <strong style={{color:"#616D80"}}>Upload Reference Files (Optional)</strong><br />
                        <span className="fade-text small">(Document should be minimum 2MB in word, pdf)</span>
                      </Form.Label>
                      <Form.Control type="file" name="referenceFile" onChange={handleInputChange} hidden />
                      {formData.referenceFile && <div className="mt-2 text-muted small">Selected: {formData.referenceFile.name}</div>}
                    </div>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Check type="checkbox" name="agreeTerms" label={<span>I Agree to the <a href="#" style={{color:"#ff2661"}}>Terms and Condition</a> and <a href="#" style={{color:"#ff2661"}} >Privacy Policy</a></span>} checked={formData.agreeTerms} onChange={handleInputChange} className="mb-3" />
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
                    <div key={idx} className="d-flex mb-2 justify-content-between">
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
              <Button
                
                type="submit"
                className="btn btn-light-white  w-100 mt-3" style={{backgroundColor:"#fff", color:"rgb(7, 90, 179)"}}
                // disabled={!isFormValid || selectedServices.length === 0}
                onClick={handleSubmit}
              >
                Submit Order
              </Button>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default StickyOrderSummary;
