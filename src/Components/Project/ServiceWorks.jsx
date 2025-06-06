
import {  Col, Container, Row } from 'react-bootstrap'

const ServiceWorks = () => {
  return (
     <section className="service-card-section " >
        <div className="cs_height_48 cs_height_lg_48"></div>
      <Container>
        <div>
             <h3 className="text-center fw-bold mb-2">
                   How our <span className="text-primary"> thesis editing service </span>{" "} works ?
                 </h3>
            <div className="cs_height_20 cs_height_lg_20"></div>

            <div className='mt-4 justify-content-center text-center'>
                <button type="button" className=" cs_btn cs_style_1 btn btn-primary">Get a Quote    <span className="cs_btn_icon cs_center">
                <i className="bi bi-arrow-right"></i>
                
              </span> </button>
            </div>
        </div>
        <Row className="mt-5 d-flex justify-content-center">
           <Col className='d-flex justify-content-center' xs={12}>
           <img src="assets/img/edit-b.png" alt="" style={{marginBottom:"-1px"}} />
           </Col>
        </Row>
      </Container>
        
    </section>
  )
}

export default ServiceWorks