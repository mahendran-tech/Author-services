import SectionBanner from "../Components/HeroBanner/SectionBanner";
import ContactHelpSection from "../Components/SectionDetails/ContactHelpSection";
import CoreEditingPage from "../Components/SectionDetails/CoreEditingPage";
// import EditingFeatures from "../Components/SectionDetails/EditingFeatures";

import EstimateCalculator from "../Components/SectionDetails/EstimateCalculator";

import FeaturesSection from "../Components/SectionDetails/FeaturesSection";
import SampleTabs from "../Components/SectionDetails/SampleTabs";
import EditingFeatures from "../Components/ServiceDetails/EditingFeatures";

const CoreEditing = () => {
  return (
    <div>
      <SectionBanner
        bgimg="/assets/img/bg-light.webp"
        // subtitle="Battery Check & Replace"
        title="Editing and Proofreading Services"
        conetnt="Refining research with expert editing, thorough proofreading, and structured revisions to improve clarity, accuracy, and publication success."
        btnname="Get a Quote"
        img1="/assets/img/coreediting.png"
        btnurl="/"
        editingsection={true}></SectionBanner>
      <CoreEditingPage />
      {/* <WordCountEstimator /> */}
      <EstimateCalculator />
      <FeaturesSection />
      {/* <EditingFeatures /> */}

      <EditingFeatures />
      <SampleTabs />
      <ContactHelpSection />
    </div>
  );
};

export default CoreEditing;
