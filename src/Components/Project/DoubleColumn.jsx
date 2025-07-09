import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import parse from "html-react-parser";
const DoubleColumn = ({
  Title,
  SubTitle,
  Content,
  Content1,
  marginTop = true, // default is true
  isUlContent = true,
  ImagePath,
  reverse = false, // default is image left, content right
  listItems = [],
  isBgLight = false, // optional prop to set background color
}) => {
  return (
    <section className={` ${isBgLight ? "expert-section " : ""}`}>
      {/* Spacer for visual separation */}
      <div className="cs_height_40 cs_height_lg_40"></div>
      <Container>
        <Row className="mt-5 d-flex justify-content-center align-items-center flex-column flex-lg-row">
          {/* Conditionally render image and content columns based on 'reverse' */}
          {!reverse ? (
            <>
              {/* Image Left */}
              <Col className="d-flex justify-content-start" xs={12} lg={6}>
                <img src={ImagePath} alt="" className="img-fluid" />
              </Col>
              {/* Content Right */}
              <Col className="d-flex justify-content-start" xs={12} lg={6}>
                <div className="d-flex flex-column ms-3 align-items-start">
                  <div>
                    {" "}
                    {isBgLight ? (
                      <>
                        {" "}
                        <h3 className="text-left fw-bold mb-0 lh-base">
                          {Title} <br />
                          <span className="text-primary">{SubTitle}</span>
                        </h3>{" "}
                      </>
                    ) : (
                      <>
                        {" "}
                        <h3 className="text-center fw-bold mb-2">
                          {Title}{" "}
                          <span className="text-primary">{SubTitle}</span>
                        </h3>
                      </>
                    )}
                    <div className="cs_height_20 cs_height_lg_20"></div>
                  </div>

                  {Content && <p>{Content}</p>}
                  {Content1 && <p>{parse(Content1)}</p>}

                  {isUlContent && listItems.length > 0 && (
                    <ul
                      className={`${
                        marginTop ? "mt-4" : "mt-0"
                      } text-left list-unstyled list-style-one`}
                    >
                      {listItems.map((item, index) => (
                        <li
                          key={index}
                          className="mb-2 d-flex align-items-start gap-2"
                        >
                          <img
                            src="assets/img/icon/right-arrow-yellow.svg"
                            alt=""
                          />
                          <span>{parse(item)}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="text-start mt-3">
                    <button
                      type="button"
                      className="cs_btn cs_style_1 btn btn-primary"
                    >
                      Get a Quote <FaArrowRight />
                    </button>
                  </div>
                </div>
              </Col>
            </>
          ) : (
            <>
              {/* Content Left */}
              <Col className="d-flex justify-content-start" xs={12} lg={6}>
                <div className="d-flex flex-column me-3 align-items-start">
                  <h3 className="text-left fw-bold mb-2">
                    {Title} <span className="text-primary">{SubTitle}</span>
                    <div className="cs_height_20 cs_height_lg_20"></div>
                  </h3>
                  {Content && <p>{Content}</p>}
                  {Content1 && <p>{Content1}</p>}

                  {isUlContent && listItems.length > 0 && (
                    <ul className="text-left list-unstyled list-style-one mt-4">
                      {listItems.map((item, index) => (
                        <li
                          key={index}
                          className="mb-2 d-flex align-items-start gap-2"
                        >
                          <img
                            src="assets/img/icon/right-arrow-yellow.svg"
                            alt=""
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="text-start mt-3">
                    <button
                      type="button"
                      className="cs_btn cs_style_1 btn btn-primary"
                    >
                      Get a Quote
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </Col>
              {/* Image Right */}
              <Col className="d-flex justify-content-start" xs={12} lg={6}>
                <img src={ImagePath} alt="" className="img-fluid" />
              </Col>
            </>
          )}
        </Row>
      </Container>
      <div className="cs_height_40 cs_height_lg_40"></div>
    </section>
  );
};

export default DoubleColumn;
