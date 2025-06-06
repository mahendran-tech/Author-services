import SectionBanner from "../Components/HeroBanner/SectionBanner";
import BenefitsSection from "../Components/SectionDetails/BenefitCard";
import EditingPlansComparison from "../Components/SectionDetails/EditingPlansComparison";
import EditingServices from "../Components/SectionDetails/EditingServices";
import ProcessEditing from "../Components/SectionDetails/ProcessEditing";
import SampleEditing from "../Components/SectionDetails/SampleEditing";
import Services from "../Components/SectionDetails/Services";


  const features = [
    "Language editing & grammatical corrections",
    "Manuscript formatting as per target journal guidelines – 1 round",
    "Editing certificate",
    "Unlimited Q&As with editors",
    "Preparation of journal cover letter",
    "Improving paper structure and flow",
    "Re-editing or proofreading of your manuscript for 365 days or lifetime support for same paper",
    "Plagiarism check using Turnitin; reduction of plagiarism in your manuscript depends on the plagiarism percentage",
    "Domain-specific content level editing",
    "Getting your manuscript peer-reviewed by experienced journal reviewers",
  ];

  const plans = [
    {
      name: "Core Editing",
      desc: "Sentence-level editing for pre- and post-journal submission at an affordable rate.",
      features: [
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
      ],
    },
    {
      name: "Exclusive Editing",
      desc: "Content level editing tailored to give you the best chance of acceptance in high-impact journals",
      features: [true, true, true, true, true, true, true, true, true, false],
    },
    {
      name: "Research Editing",
      desc: "Peer review assistance following domain-specific content-level editing, offering expert advice on your manuscript.",
      features: [true, true, true, true, true, true, true, true, true, true],
    },
  ];

const EditingProofreading = () => {

  return (
    <div>
      <SectionBanner
        bgimg="assets/img/bg-light.webp"
        // subtitle="Battery Check & Replace"
        title="Editing and Proofreading Services"
        conetnt="Refining research with expert editing, thorough proofreading, and structured revisions to improve clarity, accuracy, and publication success."
        btnname="Get a Quote"
        img1="assets/img/editing-1.png"
        btnurl="/"
        editingsection={true}></SectionBanner>
      <EditingServices />
      {/* <EditingPlansComparison  /> */}
      <EditingPlansComparison features={features} plans={plans} />
      <Services />
      <SampleEditing />
      <BenefitsSection />
      <ProcessEditing Sectionimg={true} />
      <div className="cs_height_40 cs_height_lg_59"></div>
    </div>
  );
};

export default EditingProofreading;
