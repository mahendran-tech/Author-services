import React from "react";
import ServiceCard2 from "../Common/ServiceCard2";

const Features = () => {
  return (
    <>
      <ServiceCard2
        title="Journal Publication Support"
        description="Our expert professionals will assist you through every step of the journal publication process..."
        bgColor="bg-light-blue"
      />
      <ServiceCard2
        title="Translation Services"
        description="We offer accurate and natural translations for different industries..."
        bgColor="bg-light-purple"
      />
      <ServiceCard2
        title="Research Impact"
        description="With our support, your published work can reach the right academic audiences..."
        bgColor="bg-light-green"
        image="/images/research-impact.jpg"
        imageFirst={true}
      />
    </>
  );
};

export default Features;
