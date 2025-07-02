import AdditionalBenefits from "../Components/Common/AdditionalBenefits";
import SectionBanner from "../Components/HeroBanner/SectionBanner";
import SupportGrid from "../Components/Process/SupportGrid";
import DoubleColumn from "../Components/Project/DoubleColumn";
import ContactHelpSection from "../Components/SectionDetails/ContactHelpSection";

const benefitsData = [
  {
    icon: "assets/img/icon/js-1.svg",
    text: "Manuscript formatting <br/> per journal guidelines",
  },
  {
    icon: "assets/img/icon/js-2.svg",
    text: "Journal account creation <br/> and management",
  },

  {
    icon: "assets/img/icon/js-3.svg",
    text: "Professional cover letter <br/> drafting",
  },
  {
    icon: "assets/img/icon/js-4.svg",
    text: "Submission confirmation <br/> and proof",
  },
  { icon: "assets/img/icon/js-5.svg", text: "Resubmission guidance" },
];

const services = [
  {
    image: "assets/img/img5.png",
    title: "Core Editing",
    description:
      "Our Core Editing service focuses on sentence-level editing for both pre-and post-journal submissions at an affordable rate.",
  },
  {
    image: "assets/img/img3.png",
    title: "Research Outreach",
    description:
      "We help promote and increase the visibility of your published research within the academic community and across relevant media platforms",
  },
  {
    image: "assets/img/img6.png",
    title: "Exclusive Editing",
    description:
      "Our Exclusive Editing service is designed to maximize your manuscript’s impact and readiness for submission to high-impact journals.",
  },
  {
    image: "assets/img/img8.png",
    title: "Research Editing",
    description:
      "Our Research Editing service provides expert pre-submission peer review, offering in-depth feedback on content, structure, and gaps to strengthen your manuscript before journal submission.",
  },
  {
    image: "assets/img/img1.png",
    title: "Journal Publication Support",
    description:
      "Navigating the research publication process can be challenging, but with our Journal Publication support services, you’ll receive expert guidance every step of the way.",
  },

  {
    image: "assets/img/img4.png",
    title: "Translation Services",
    description:
      "We ensure effective communication by overcoming language barriers through document translation, interpretation, and other language support services.",
  },

  {
    image: "assets/img/img11.png",
    fullwith: "true",
    title: "Citation Booster",
    description:
      "Give your research greater visibility with Citation Booster. This service is designed to reach a wider audience, increase readership, and improve your chances of being cited—ensuring your research makes a stronger impact in your field.",
  },
];

const JournalSubmission = () => {
  return (
    <div>
      <SectionBanner
        bgimg="assets/img/bg-light.webp"
        // subtitle="Battery Check & Replace"
        title="Journal"
        subtitle="Submission"
        conetnt="Submitting to journals can be stressful—we make it easier. IFERP handles the submission on your behalf, ensuring everything is done correctly and in compliance with Author Guidelines, ensuring a smooth, hassle-free path to publication."
        btnname="Get a Quote"
        img1="assets/img/journal-sub.png"
        btnurl="/"
        edit={true}
        editingsection={true}
      ></SectionBanner>

      <DoubleColumn
        Title="Journal Submission"
        SubTitle="Service Scope"
        Content="IFERP’s specialized Journal Submission Service simplifies the often complex and time-consuming process of submitting your manuscript. We take care of every step—from preparing submission materials to corresponding with journal editors— giving you peace of mind during the submission journey."
        Content1={"As part of our <b>Journal Submission Service </b> , we:"}
        ImagePath="assets/img/j-sub-1.png"
        reverse={false}
        listItems={[
          "Format your manuscript according to the target journal’s Author Guidelines.",
          "Draft a professional cover letter addressed to the journal editor.",
          "Create and manage journal accounts on your behalf.",
          "Handle all journal communications throughout the submission process",
        ]}
      />

      <DoubleColumn
        Title={
          <>
            How Our Experts Assist with
            <br />
            <span className="text-primary">Journal Submissions…</span>
          </>
        }
        ImagePath="assets/img/j-sub-2.png"
        reverse={true}
        listItems={[
          "Professionally structure your manuscript for submission",
          "Complete the journal registration process smoothly",
          "Craft a compelling, customized cover letter",
          "Upload your manuscript accurately according to guidelines",
          "Manage the resubmission process efficiently and carefully",
        ]}
      />

      <AdditionalBenefits
        title="What You Get with Our"
        subtitle="Journal Submission Service"
        benefits={benefitsData}
        isBsColumn={false}
      />
      <SupportGrid
        services={services}
        Title={"Other Services"}
        SubTitle={"We Provide"}
      />
      <section className="expert-section">
        <div className="cs_height_60 cs_height_lg_60"></div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10 col-sm-12">
              <ContactHelpSection />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JournalSubmission;
