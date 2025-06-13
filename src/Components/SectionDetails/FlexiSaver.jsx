import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from '../Common/SectionTitle'

const FlexiSaver = () => {
  return (
    <div>
        
    <section className=" " >
        <div className="cs_height_48 cs_height_lg_48"></div>
      <Container>
        <Row className="mt-5  d-flex justify-content-center align-items-center">
            <Col className='d-flex justify-content-start' xs={12} lg={6}>  
  <img src="assets/img/flexi-about.png" alt="" />
            </Col>
 <Col className='d-flex justify-content-start ' xs={12} lg={6}>  
  <div className='d-flex flex-column ms-3  align-items-center'>
  
    <SectionTitle Title={"Flexi Saver"} isCenter={false} SubTitle={"Publication Pack"} />
       <div className="cs_height_20 cs_height_lg_20"></div>
 <p>Our Flexi Saver Plan lets you choose the exact support you need—so you only pay for the services that align with your publication goals. Whether it’s journal selection, peer review, plagiarism check, editing, formatting, or submission support, you pick what works best for you. This budget-friendly option ensures expert guidance where it matters most, without extra costs. Tailor the process to fit your needs and budget, while still getting professional support at every step.</p>


  </div>
            </Col>
            </Row>
        </Container>
            <div className="cs_height_40 cs_height_lg_40"></div>
        </section>
        
        </div>
  )
}

export default FlexiSaver