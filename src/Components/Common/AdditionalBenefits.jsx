import React from "react";
import {Button} from "react-bootstrap";
import SectionTitle2 from "./SectionTitle2";

const AdditionalBenefits = ({title, subtitle, benefits}) => {
  return (
    <div className="text-center  bg-light">
      <div className="cs_height_60 cs_height_lg_60"></div>
      <div>
        <SectionTitle2 Title={title} SubTitle={subtitle} />
        <div className="cs_height_30 cs_height_lg_10"></div>
      </div>

      <div className="row justify-content-center g-4">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="col-12 col-md-3 d-flex justify-content-center position-relative">
            <div className="text-center px-3">
              <div className="mx-auto mb-2 ">
                <img src={benefit.icon} alt="" />
              </div>
              <p className="mb-0 mt-2">{benefit.text}</p>
            </div>

            {/* Dashed vertical line - only show on lg and up */}
            {index < benefits.length - 1 && (
              <div
                className="d-none d-lg-block"
                style={{
                  position: "absolute",
                  right: 0,
                  top: "20%",
                  height: "60%",
                  borderRight: "2px dashed rgba(255, 76, 0, 0.5)",
                }}
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-5">
        <Button className="cs_btn cs_style_1">
          Get a Quote <span>&rarr;</span>
        </Button>
      </div>
      <div className="cs_height_60 cs_height_lg_60"></div>
    </div>
  );
};

export default AdditionalBenefits;
