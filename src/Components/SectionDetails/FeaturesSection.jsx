import React from "react";
import FeatureCard from "../Common/FeatureCard";
import SectionTitle2 from "../Common/SectionTitle2";

const features = [
  {
    title: "Exclusive Editing",
    description:
      "Ideal for high-impact journal submissions our Exclusive Editing service provides in-depth manuscript refinement by a subject-matter expert.",
    description2:
      "We enhance clarity,structure, flow, grammar, and formatting to ensure your manuscript meets the highest editorial standards.",
    image: "assets/img/fr-1.png",
    bgClass: "bg-light-purple",
    reverse: false,
  },
  {
    title: "Research Editing",
    description:
      "Our Research Editing service offers in-depth academic support with a strong focus on pre-submission peer review. Your manuscript will first be evaluated by a qualified peer reviewer from your research field, who will provide expert feedback on content quality, structure, and potential gaps helping you strengthen your work before journal submission.",
    description2:
      "Following this, a subject-matter expert will thoroughly edit your manuscript for clarity, logical flow, grammar, formatting, and adherence to journal guidelines, ensuring it is polished, well-structured, and ready for publication.",
    image: "assets/img/fr-2.png",
    bgClass: "bg-light-teal",
    reverse: true,
  },
  {
    title: "Thesis Editing",
    description:
      "Get your thesis or dissertation professionally edited by our expert team. We enhance writing structure, grammar, punctuation, presentation and overall academic style. By improving clarity and readability, we help you make a stronger impression and increase your chances of approval, publication, or academic distinction.",
    image: "assets/img/fr-3.png",
    bgClass: "bg-light-blue",
    reverse: false,
    left: true,
  },
];

const FeaturesSection = () => {
  return (
    <>
      <section className="position-relative ">
        <div className="cs_height_100 cs_height_lg_110" />

        <div>
          <SectionTitle2
            Title={"Advance Value–added"}
            SubTitle={"Features for Researchers"}
          />
        </div>
        <div className="cs_height_40 cs_height_lg_30" />
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </section>
    </>
  );
};

export default FeaturesSection;
