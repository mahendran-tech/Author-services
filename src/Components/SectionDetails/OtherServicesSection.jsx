import React from "react";
import SectionTitle from "../Common/SectionTitle";
import RoundedCard from "../Common/RoundedCard";
import SectionTitle2 from "../Common/SectionTitle2";

const OtherServicesSection = ({serviceData,isTitle=true,title,subtitle}) => {
  return (
    <div className="container p-0 mb-4">
   
      {isTitle && (<>   <div className="cs_height_40 cs_height_lg_40" /> {title? (<SectionTitle2 Title={title} SubTitle={subtitle} /> ) : (<SectionTitle Title="Other Services" SubTitle="We Provide" />)} 
        <div className="cs_height_30 cs_height_lg_30" />
      </>) }
      {/* <SectionTitle Title="Other Services" SubTitle="We Provide" /> */}
    
      <div className="row d-flex justify-content-center align-items-center g-4">
        {serviceData.map((service, idx) => (
          <div key={idx} className="col-md-6 col-sm-12">
            <RoundedCard {...service} />
          </div>
        ))}
      </div>
      {/* <div className="cs_height_80 cs_height_lg_80" /> */}
    </div>
  );
};

export default OtherServicesSection;
