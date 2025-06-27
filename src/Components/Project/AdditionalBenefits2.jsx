import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaClipboardList, FaBook } from "react-icons/fa";
import "./AdditionalBenefits.css";

const AdditionalBenefits2 = () => {
  return (
    <div>
      <section className="benefits-section py-5">
        <Container>
          <Row className="benefit-row flex-wrap d-flex align-items-center g-4">
            {/* Fixed-width Left Column */}
            <div className="col-auto  fixed-col">
              <h3 className="text-white fw-bold mb-0 lh-base">
                Proofreading –<br />
                Additional Benefits
              </h3>
            </div>

            {/* Flexible Right Columns */}
            <div className="col  d-flex flex-wrap flex-lg-nowrap  gap-4">
              {/* Card 1 */}
              <div className="benefit-card d-flex align-items-center flex-grow-1 flex-fill">
                <div className="icon-wrapper">
                  <img src="assets/img/icon/formating.svg" alt="" />
                </div>
                <div>
                  <h5 className="text-white mb-1">Formatting Compliance</h5>
                  <p className="text-white-50 mb-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="benefit-card d-flex align-items-center flex-grow-1 flex-fill">
                <div className="icon-wrapper">
                  <img src="assets/img/icon/formating2.svg" alt="" />
                </div>
                <div>
                  <h5 className="text-white mb-1">Plagiarism Prevention</h5>
                  <p className="text-white-50 mb-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AdditionalBenefits2;
