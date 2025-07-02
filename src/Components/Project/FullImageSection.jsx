import React from "react";
import SectionTitle from "../Common/SectionTitle";

const boxStyle = {
  backgroundColor: "rgba(0, 99, 203, 0.04)",
  boxShadow: "0 0 8px rgba(0, 0, 0, 0.05)",
};
const FullImageSection = ({ Title, SubTitle, Imgurl }) => {
  return (
    <section className="bg-light">
      <div className="cs_height_40 cs_height_lg_40"></div>
      <div className="container">
        <SectionTitle Title={Title} SubTitle={SubTitle} />
        <div className="cs_height_20 cs_height_lg_20"></div>
        <div className="row d-flex justify-content-center">
          <div
            className="col-lg-9  border border-0 rounded p-3 tab-content"
            style={boxStyle}
          >
            <img src={Imgurl} alt="" className="w-100" />
          </div>
        </div>
      </div>
      <div className="cs_height_40 cs_height_lg_40"></div>
    </section>
  );
};

export default FullImageSection;
