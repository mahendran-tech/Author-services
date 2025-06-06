import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "../Common/SectionTitle";
import Player from "../Common/Player";

const ProcessEditing = ({Sectionimg = false}) => {
  return (
    <>
      <section className="section-bg-color">
        <Container>
          <div className="cs_height_48 cs_height_lg_48"></div>
          <div className="text-center ">
            <SectionTitle Title="Process of" SubTitle=" Editing" />
               <div className="cs_height_20 cs_height_lg_20"></div>
          </div>
          <Row className="justify-content-center">
            <Col lg={12} md={12} className="text-center">
              {Sectionimg && (
                <img src="assets/img/process-editing.svg" alt="" />
              )}
              {!Sectionimg && <Player />}
            </Col>
          </Row>
        </Container>
        <div className="cs_height_40 cs_height_lg_40"></div>
      </section>
    </>
  );
};

export default ProcessEditing;
