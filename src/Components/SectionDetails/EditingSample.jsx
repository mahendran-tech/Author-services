import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import SectionTitle2 from '../Common/SectionTitle2';



const EditingSample = () => {
  return (
    <div className="section-bg-color" >
      <div className="cs_height_48 cs_height_lg_48"></div>
      <Container>
 
        <div>
          <SectionTitle2
            Title={"Samples to determine"}
            SubTitle={"The Best Service For You"}
          />
        </div>
        <div className="cs_height_20 cs_height_lg_20"></div>
        {/* Service Cards */}


        {/* Sample Paragraph Section */}
        <Row className="gx-4 pb-2 pt-3 rounded-3" style={{backgroundColor: "#E7EEF2"}}>
          <Col md={8}>
            <div className="bg-white p-0  mb-2" style={{fontSize: "14px"}}>
           
              <img src="assets/img/sample-ed.png" alt="" />
            </div>
          </Col>
          <Col md={4}>
            <div className="bg-white p-3 shadow-sm rounded mb-4">
              <strong className=" d-block mb-2" style={{color:"#4BA488"}}>Language & Grammar check</strong>
              <p style={{fontSize: "14px",lineHeight: "150%"}}>
                Pronouns: The introduction of the pronouns makes it very clear to the reader which individuals are being referred to.
              </p>
            </div>
            <div className="bg-white p-3 shadow-sm rounded mb-4">
              <strong className=" d-block mb-2" style={{color:"#9C0CCF"}}>Style & consistency</strong>
              <p style={{fontSize: "14px",lineHeight: "150%"}}>
              Serial Comma & American English Style: In American English, serial commas (also called Oxford commas, Harvard commas, or series commas) are the norm. These are commas that are inserted before the &#34;and/or&#34; preceding the last item in a series of three or more items.
              </p>
            </div>
            <div className="bg-white p-3 shadow-sm rounded mb-4">
              <strong className=" d-block mb-2" style={{color:"#FF5C5C"}}>Formatting & Template Application</strong>
              <p style={{fontSize: "14px",lineHeight: "150%"}}>
               Template Application: Application of heading styles as mentioned in the template is crucial to improving the chances of successful submission/publication of your manuscript.
              </p>
            </div>
                        <div className="bg-white p-3 shadow-sm rounded mb-4">
              <strong className=" d-block mb-2" style={{color:"#FF5C5C"}}>Logic, Flow and Enhancements</strong>
              <p style={{fontSize: "14px",lineHeight: "150%"}}>
             Clarity and Smooth Transitions: Use of precise words helps in conciseness and clarity of the text. In this case, the change also helps in linking the narrative between two sentences.
              </p>
            </div>
                                    <div className="bg-white p-3 shadow-sm rounded">
              <strong className=" d-block mb-2" style={{color:"#F5AF36"}}>Expert Tips and Commentary</strong>
              <p style={{fontSize: "14px",lineHeight: "150%"}}>
          Expert Commentary regarding Academic Style: In academic writing, male and female are used as adjectives, that is, they are followed by a noun (e.g., “This study include 15 female and 10 male participants.”). Thus, we have added “reader” after “female” Otherwise, the preferred terms are men and women. Note that this convention is based on preference.
              </p>
            </div>


          </Col>
        </Row>

        {/* Bottom Button */}
        <div className="text-center mt-4 ">
          <Button className="cs_btn cs_style_1">Select Core Editing →</Button>
        </div>
      </Container>
      <div className="cs_height_40 cs_height_lg_40"></div>
    </div>
  );
}

export default EditingSample