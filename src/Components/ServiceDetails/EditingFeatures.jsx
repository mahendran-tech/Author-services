import React from "react";
import RoundedCard from "../Common/RoundedCard";
import FeatureCard from "../Common/FeatureCard";
const features = [
  {
    title: "Research Impact",
    description:
      "With our support, your published work can reach the right academic audiences and trusted publication platforms — helping to broaden its visibility, distribution and impact within the research community.",
    image: "assets/img/fr-4.png",
    bgClass: "bg-light-teal",
    reverse: true,
  },
];
const EditingFeatures = () => {
  return (
    <div className="container p-0 mt-3">
      <div className="row d-flex justify-content-center align-items-center g-4">
        <div className="col-md-6 col-sm-12">
          <RoundedCard
            title="Plagiarism check"
            description="We provide you with a plagiarism report, helping you identify potential plagiarism issues in your manuscript. Our detailed report highlights problematic sections and offers expert commentary to support your manuscript's evaluation."
            bgColor="bg-light-blue"
            textcolor="#011530"
            headcolor="#011530"
            radius="br-left"
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <RoundedCard
            title="Journal Submission"
            description="Our experts guide you through the entire journal submission process, from account creation to final submission."
            radius="br-right"
            left={true}
            bgColor="bg-light-purple"
            textcolor="#0C0A31"
            headcolor="#0C0A31"
          />
        </div>
      </div>
      <div className="row d-flex justify-content-center align-items-center g-4">
        <div className="cs_height_40 cs_height_lg_30" />
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </div>
    </div>
  );
};

export default EditingFeatures;
