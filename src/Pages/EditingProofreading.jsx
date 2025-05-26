import SectionBanner from "../Components/HeroBanner/SectionBanner";
import BenefitsSection from "../Components/SectionDetails/BenefitCard";
import EditingPlansComparison from "../Components/SectionDetails/EditingPlansComparison";
import EditingServices from "../Components/SectionDetails/EditingServices";
import ProcessEditing from "../Components/SectionDetails/ProcessEditing";
import SampleEditing from "../Components/SectionDetails/SampleEditing";
import Services from "../Components/SectionDetails/Services";

const EditingProofreading = () => {
  return (
    <div>
      <SectionBanner
        bgimg="/assets/img/bg-light.webp"
        // subtitle="Battery Check & Replace"
        title="Editing and Proofreading Services"
        conetnt="Refining research with expert editing, thorough proofreading, and structured revisions to improve clarity, accuracy, and publication success."
        btnname="Get a Quote"
        img1="/assets/img/editing-1.png"
        btnurl="/"
        editingsection={true}></SectionBanner>
      <EditingServices />
      <EditingPlansComparison />
      <Services />
      <SampleEditing />
      <BenefitsSection />
      <ProcessEditing Sectionimg={true} />
      <div className="cs_height_40 cs_height_lg_59"></div>
    </div>
  );
};

export default EditingProofreading;
