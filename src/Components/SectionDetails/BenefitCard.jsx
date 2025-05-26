// pages/BenefitsSection.jsx
import BenefitCard from "../Common/BenefitCard";

import SectionTitle from "../Common/SectionTitle";

const benefits = [
  {
    title: "Higher Acceptance Rate",
    description:
      "Our expert editing services enhance the clarity, grammar, and structure of your manuscript, increasing its chances of acceptance in prestigious academic journals.",
    icon: "assets/img/icon/sa-1.svg",
  },
  {
    title: "Engaging Presentations",
    description:
      "We create clear, professional PowerPoint slides for conferences and meetings, ensuring your research is impactful and easily understood by your audience.",
    icon: "assets/img/icon/sa-2.svg",
  },
  {
    title: "Enhanced Research Visibility",
    description:
      "We help expand the reach of your research by optimizing content for a larger audience, increasing recognition and engagement.",
    icon: "assets/img/icon/sa-3.svg",
  },
  {
    title: "Direct Support from Editors",
    description:
      "Get unlimited support via email with expert feedback to refine your manuscript before submitting it to journals.",
    icon: "assets/img/icon/sa-4.svg",
  },
  {
    title: "Flawless Journal Formatting",
    description:
      "We format your manuscript to meet journal guidelines, ensuring proper structure, citations, and consistency for easy acceptance.",
    icon: "assets/img/icon/sa-5.svg",
  },
  {
    title: "Editing Certificate Provided",
    description:
      "Receive an official certificate confirming that your manuscript has been professionally proofread, ensuring language quality, and adherence to journal standards.",
    icon: "assets/img/icon/sa-6.svg",
  },
];

const BenefitsSection = () => {
  return (
    <section style={{backgroundColor: "rgba(255, 255, 255, 9)"}}>
      <div className="container ">
        <div className="cs_height_60 cs_height_lg_100"></div>
        {/* <h3 className="text-center fw-bold mb-4">
        Benefits to <span className="text-primary">Authors</span>
          </h3> */}
        <div>
          <SectionTitle Title={"Benefits to"} SubTitle={"Authors"} />
          <div className="cs_height_30 cs_height_lg_10"></div>
        </div>
        <div className="row g-0 ">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`col-12 col-sm-6 col-lg-4 
              ${index % 3 !== 2 ? "border-lg-right" : ""} 
              ${index < 3 ? "border-lg-bottom" : ""}`}>
              <div className="p-4 h-100 d-flex align-items-stretch">
                <BenefitCard {...benefit} />
              </div>
            </div>
          ))}
        </div>
        <div className="cs_height_60 cs_height_lg_100"></div>
      </div>
    </section>
  );
};

export default BenefitsSection;
