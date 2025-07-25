import React from "react";
import SectionBanner from "../Components/HeroBanner/SectionBanner";
import DoubleColumn from "../Components/Project/DoubleColumn";
import OutreachTabs from "../Components/SectionDetails/OutreachTabs";
import SupportGrid from "../Components/Process/SupportGrid";
import ContactHelpSection from "../Components/SectionDetails/ContactHelpSection";
import ResearchOutreachForm from "../Components/Form/ResearchOutreachForm";

const services = [
  {
    image: "assets/img/img1.png",
    title: "Journal Publication Support",
    description:
      "Navigating the research publication process can be challenging, but with our Journal Publication support services, you’ll receive expert guidance every step of the way.",
    btnurl: "/publication-support",
  },
  {
    image: "assets/img/img0.png",
    title: "Full Assist Publication Pack",
    description:
      "Our Full Assist Publication Pack offers comprehensive support for every stage of your manuscript’s journey. From first round of edits to final submission, we take care of every step in the publication process—so you’re free to focus entirely on your research.",
    btnurl: "/full-assist-publication",
  },
  {
    image: "assets/img/img2.png",
    title: "Flexi Saver Publication Pack",
    description:
      "The Flexi Saver Publication Pack lets you choose only the services you need—whether it’s journal selection, peer review, or final submission. This budget-friendly option ensures you get expert assistance where it’s needed most.",
    btnurl: "/flexi-saver-publication",
  },
  {
    image: "assets/img/img15.png",
    title: "Journal Selection",
    description:
      "Our PhD expert can help boost your chances by analyzing your research and recommending 3-5 journals that match your publication goals, reducing the risk of rejection due to scope mismatch. We help you select the ideal journal based on your research topic, target readership, and indexing, ensuring a successful publication process.",
    btnurl: "/journal-selection",
  },
  {
    image: "assets/img/img10.png",
    title: "Pre-submission Peer Review",
    description:
      "We will get your finalized manuscript peer-reviewed by an experienced reviewer from your field, offering constructive feedback and giving you the opportunity to address any gaps before final submission.",
    btnurl: "/pre-submission-peer-review",
  },
  {
    image: "assets/img/img12.png",
    title: "Plagiarism Check",
    description:
      "We provide you with a plagiarism report, helping you identify potential plagiarism issues in your manuscript. Our detailed report highlights problematic sections and offers expert commentary to support your manuscript's evaluation.",
    btnurl: "/plagiarism-check",
  },
  {
    image: "assets/img/img14.png",
    title: "Journal Submission",
    description:
      "Our team will help you manage the whole submission process, from setting up your account to completing the final submission.",
    btnurl: "/journal-submission",
  },
  {
    image: "assets/img/img4.png",
    title: "Translation Services",
    description:
      "We ensure effective communication by overcoming language barriers through document translation, interpretation, and other language support services.",
    btnurl: "/translation-services",
  },
  {
    image: "assets/img/img7.png",
    title: "Citation Booster",
    description:
      "Give your research greater visibility with Citation Booster. This service is designed to reach a wider audience, increase readership, and improve your chances of being cited—ensuring your research makes a stronger impact in your field.",
    btnurl: "/citation-booster",
  },
];

const ResearchOutreach = () => {
  return (
    <div>
      <SectionBanner
        bgimg="assets/img/bg-light.webp"
        // subtitle="Battery Check & Replace"
        title="Research"
        subtitle="Outreach"
        conetnt="Our Research Outreach Services help your work get noticed—making sure it’s seen, understood, and cited by the right people, so it makes a real difference."
        btnname="Get a Quote"
        img1="assets/img/ro.png"
        btnurl="/get-quote"
        edit={true}
        editingsection={true}
      ></SectionBanner>

      <DoubleColumn
        Title="Research Outreach"
        SubTitle="Services"
        Content="Our Research Outreach service helps researchers, academics, and institutions increase their visibility and gain global recognition for their work."
        Content1='<span className="text-primary">Benefits:</span>'
        ImagePath="assets/img/ros.png"
        btnurl="/get-quote"
        reverse={false}
        marginTop={false}
        listItems={[
          "<b> Stronger Credibility:</b> Researchers can position themselves as experts through high-impact publications.",
          "<b> More Opportunities:</b> Improved visibility can lead to new academic partnerships, funding opportunities, and career advancement.",
          "<b> Wider Reach: </b>  Sharing research through our platform connects you with international audiences, increasing its relevance.",
          "<b>Saves Time:</b> We simplify the research promotion process, allowing you to stay focused on your work.",
        ]}
      />
      {/* <ResearchTabs /> */}
      <OutreachTabs />

      <ResearchOutreachForm />

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

export default ResearchOutreach;
