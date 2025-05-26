import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "../Common/SectionTitle";
import Player from "../Common/Player";

const ProcessEditing = ({Sectionimg = false}) => {
  return (
    <>
      <section>
        <Container>
          <div className="cs_height_60 cs_height_lg_80"></div>
          <div className="text-center mb-4">
            <SectionTitle Title="Process of" SubTitle=" Editing" />
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
        <div className="cs_height_40 cs_height_lg_50"></div>
      </section>
    </>
  );
};

export default ProcessEditing;
