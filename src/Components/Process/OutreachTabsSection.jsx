import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import parse from "html-react-parser";

const OutreachTabsSection = ({ tabData }) => {
  const [activeTab, setActiveTab] = useState("video");

  const currentTab = tabData.find((t) => t.id === activeTab);

  return (
    <div className="tabs-section">
      <div className="tab-buttons-wrapper d-flex flex-wrap gap-2">
        {tabData.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn d-flex align-items-center gap-2 ${
              activeTab === tab.id ? "active" : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <div className="tab-icon-wrapper">
              {activeTab === tab.id ? (
                <>
                  <img src={tab.icon_active} alt="" />
                </>
              ) : (
                <>
                  <img src={tab.icon} alt="" />
                </>
              )}
            </div>
            <span>{parse(tab.label)}</span>
          </button>
        ))}
      </div>

      {currentTab && (
        <div
          className="tab-content-box bg-white p-4 rounded shadow-sm"
          style={{ marginTop: "-1px" }}
        >
          <div className="info-box d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4 p-3">
            <p className="mb-0">{currentTab.content.intro}</p>
            <Button className="cs_btn cs_style_1 ">Get a Quote →</Button>
          </div>

          <div>
            <h5 className="text-primary fw-bold">{currentTab.content.title}</h5>
            <p className="mb-1">{parse(currentTab.content.description)}</p>
          </div>

          <Row className="mt-5">
            {currentTab.isRow ? (
              <>
                <Col md={12}>
                  <div className="d-flex flex-column gap-3">
                    {currentTab.content.points.features && (
                      <div>
                        <h6 className="text-primary fw-bold">
                          {" "}
                          {currentTab.content.points.title &&
                            currentTab.content.points.title}{" "}
                        </h6>
                        <ul className="list-unstyled list-style-one">
                          {currentTab.content.points.features.map((item, i) => (
                            <li
                              key={i}
                              className="mb-2 d-flex align-items-start gap-2"
                            >
                              <img
                                src="assets/img/icon/right-arrow-yellow.svg"
                                alt=""
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {currentTab.content.points.deliverables && (
                      <div>
                        <h6 className="text-primary fw-bold">
                          {" "}
                          {currentTab.content.points.title1 &&
                            currentTab.content.points.title1}{" "}
                        </h6>
                        <ul className="list-unstyled list-style-one">
                          {currentTab.content.points.deliverables.map(
                            (item, i) => (
                              <li
                                key={i}
                                className="mb-2 d-flex align-items-start gap-2"
                              >
                                <img
                                  src="assets/img/icon/right-arrow-yellow.svg"
                                  alt=""
                                />
                                {item}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </Col>
              </>
            ) : (
              <>
                <Col md={6}>
                  <div className="video-thumbnail mb-4 position-relative">
                    <h5 className="text-primary mb-3 cs_fs_18">
                      {currentTab.content.imgTitle}
                    </h5>
                    <img
                      src={currentTab.content.image}
                      alt="Sample"
                      className="img-fluid rounded"
                    />
                    <div className="video-play-icon position-absolute top-50 start-50 translate-middle">
                      <i className="bi bi-play-circle-fill fs-1 text-white"></i>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="d-flex flex-column gap-3">
                    <div>
                      <h6 className="text-primary fw-bold">Key Features:</h6>
                      <ul className="list-unstyled list-style-one">
                        {currentTab.content.points.features.map((item, i) => (
                          <li
                            key={i}
                            className="mb-2 d-flex align-items-start gap-2"
                          >
                            <img
                              src="assets/img/icon/right-arrow-yellow.svg"
                              alt=""
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h6 className="text-primary fw-bold">What we deliver?</h6>
                      <ul className="list-unstyled list-style-one">
                        {currentTab.content.points.deliverables.map(
                          (item, i) => (
                            <li
                              key={i}
                              className="mb-2 d-flex align-items-start gap-2"
                            >
                              <img
                                src="assets/img/icon/right-arrow-yellow.svg"
                                alt=""
                              />
                              {item}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </Col>
              </>
            )}
          </Row>
        </div>
      )}
    </div>
  );
};

export default OutreachTabsSection;
