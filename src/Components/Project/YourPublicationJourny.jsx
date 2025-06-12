import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle2 from '../Common/SectionTitle2'


const YourPublicationJourny = () => {
  return (
    <div>
        
    <section className=" " >
        <div className="cs_height_48 cs_height_lg_48"></div>
      <Container>
        <Row className="mt-5  d-flex justify-content-center align-items-center">
            <Col className='d-flex justify-content-start' xs={12} lg={5}>  
  <img src="assets/img/pub-1.png" alt="" />
            </Col>
 <Col className='d-flex justify-content-start ' xs={12} lg={7}>  
  <div className='d-flex flex-column ms-3  align-items-start'>
  
    <SectionTitle2 Title={"Your Publication Journey:"} isCenter={false} SubTitle={"Support Every Step of the Way"} />
   
 <p>Getting through the research publication process isn’t always easy. But with IFERP’s Publication Support Services, you’ll have expert help at every stage. From choosing the right journal to peer review and final submission, we offer a full range of services to help you succeed.</p>

 <ul className="text-left list-unstyled list-style-one mt-4">
    <li className="mb-2 d-flex align-items-start gap-2"><img src="assets/img/icon/right-arrow-yellow.svg" alt=""/> <span>Choose the best journals for your work to ensure it reaches the right readers. </span></li>
        <li className="mb-2 d-flex align-items-start gap-2"><img src="assets/img/icon/right-arrow-yellow.svg" alt=""/> <span>Boost your chances of getting accepted with customized support. </span></li>
                <li className="mb-2 d-flex align-items-start gap-2"><img src="assets/img/icon/right-arrow-yellow.svg" alt=""/> <span>Get expert help at every stage of the journal publication journey.</span></li>
                                <li className="mb-2 d-flex align-items-start gap-2"><img src="assets/img/icon/right-arrow-yellow.svg" alt=""/> <span>Save time and reduce paperwork by simplifying the process.</span></li>
    
    
    </ul>

    <div className="text-Start mt-3"><button type="button" className="cs_btn cs_style_1 btn btn-primary">Get a Quote →</button></div>
  </div>
            </Col>
            </Row>
        </Container>
            <div className="cs_height_40 cs_height_lg_40"></div>
        </section>
        
        </div>


  )
}

export default YourPublicationJourny