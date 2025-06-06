import SectionBanner from "../Components/HeroBanner/SectionBanner";
import ContactHelpSection from "../Components/SectionDetails/ContactHelpSection";
import CoreEditingPage from "../Components/SectionDetails/CoreEditingPage";
// import EditingFeatures from "../Components/SectionDetails/EditingFeatures";

import EstimateCalculator from "../Components/SectionDetails/EstimateCalculator";

import FeaturesSection from "../Components/SectionDetails/FeaturesSection";
import SampleTabs from "../Components/SectionDetails/SampleTabs";
import EditingFeatures from "../Components/ServiceDetails/EditingFeatures";

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

const CoreEditing = () => {
  return (
    <div>
      <SectionBanner
        bgimg="assets/img/bg-light.webp"
        // subtitle="Battery Check & Replace"
        title="Core"
        subtitle=" Editing"
        conetnt="Our Core Editing service offers expert sentence-level editing for pre- and post-journal submissions all at an affordable rate."
        conetnt1="Editors focus on improving clarity, correcting grammar, and eliminating errors to make your manuscript polished, easy to read, and ready for publication."
        btnname="Get a Quote"
        img1="assets/img/coreediting.png"
        btnurl="/"
        edit={true}
        editingsection={true}></SectionBanner>
      <CoreEditingPage />
      {/* <WordCountEstimator /> */}
      <EstimateCalculator />
      <FeaturesSection features={features} />
      {/* <EditingFeatures /> */}

      <EditingFeatures />
      <SampleTabs />
      <ContactHelpSection />
    </div>
  );
};

export default CoreEditing;
