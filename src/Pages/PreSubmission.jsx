import React from "react";
import SectionBanner from "../Components/HeroBanner/SectionBanner";
import DoubleColumn from "../Components/Project/DoubleColumn";
import ExpertEditors from "../Components/SectionDetails/ExpertEditors ";
import { homeimage } from "../assets/assets.js";
import PreSubmissionReview from "../Components/Project/PreSubmissionReview.jsx";
import EditingSample from "../Components/SectionDetails/EditingSample.jsx";
import SupportGrid from "../Components/Process/SupportGrid.jsx";
import ContactHelpSection from "../Components/SectionDetails/ContactHelpSection.jsx";
const expertData = [
  {
    icon: homeimage.edit9,
    text: "Receive up to three simulated peer reviews aligned with top-tier journal standards.",
  },
  {
    icon: homeimage.edit10,
    text: "Our experts analyze your work in detail and provide insights similar to those in peer journal reviews.",
  },
  {
    icon: homeimage.edit11,
    text: "Get a peer-reviewed report with problem-solving suggestions before submission.",
  },
  {
    icon: homeimage.edit12,
    text: "Reviews conducted following Scopus, WoS, and SCI-indexed journal criteria.",
  },
  {
    icon: homeimage.edit13,
    text: "Obtain in-depth assessments of your research and manuscript presentation from seasoned reviewers, complete with actionable recommendations.",
  },
];

const services = [
  {
    image: "assets/img/img1.png",
    title: "Journal Publication Support",
    description:
      "Navigating the research publication process can be challenging, but with our Journal Publication support services, you’ll receive expert guidance every step of the way.",
    btnurl: "/publication-support",
  },
  {
    image: "assets/img/img2.png",
    title: "Flexi Saver Support Plan",
    description:
      "The Flexi Saver Support Plan lets you choose only the services you need—whether it’s journal selection, peer review, or final submission. This budget-friendly option ensures you get expert assistance where it’s needed most.",
    btnurl: "/flexi-saver-publication",
  },
  {
    image: "assets/img/img3.png",
    title: "Research Outreach",
    description:
      "We help promote and increase the visibility of your published research within the academic community and across relevant media platforms",
    btnurl: "/research-outreach",
  },
  {
    image: "assets/img/img4.png",
    title: "Translation Services",
    description:
      "We ensure effective communication by overcoming language barriers through document translation, interpretation, and other language support services.",
    btnurl: "/translation-services",
  },
  {
    image: "assets/img/img5.png",
    title: "Core Editing",
    description:
      "Our Core Editing service focuses on sentence-level editing for both pre-and post-journal submissions at an affordable rate.",
    btnurl: "/core-editing",
  },
  {
    image: "assets/img/img6.png",
    title: "Exclusive Editing",
    description:
      "Our Exclusive Editing service is designed to maximize your manuscript’s impact and readiness for submission to high-impact journals.",
    btnurl: "/exclusive-editing",
  },
  {
    image: "assets/img/img7.png",
    title: "Citation Booster",
    description:
      "Give your research greater visibility with Citation Booster. This service is designed to reach a wider audience, increase readership, and improve your chances of being cited—ensuring your research makes a stronger impact in your field.",
    btnurl: "/citation-booster",
  },
  {
    image: "assets/img/img8.png",
    title: "Research Editing",
    description:
      "Our Research Editing service provides expert pre-submission peer review, offering in-depth feedback on content, structure, and gaps to strengthen your manuscript before journal submission.",
    btnurl: "/research-editing",
  },
  {
    image: "assets/img/img9.png",
    title: "Thesis Editing",
    description:
      "Our editors revise your thesis or dissertation to improve its clarity, readability, and academic value. They correct grammar, punctuation, and spelling errors while improving sentence structure and flow. ",
    btnurl: "/thesis-editing",
  },
];

const PreSubmission = () => {
  return (
    <div>
      <SectionBanner
        bgimg="assets/img/bg-light.webp"
        // subtitle="Battery Check & Replace"
        title="Pre-submission"
        subtitle="Peer Review"
        conetnt="Waiting for peer review results feels like anticipating a verdict, as years of research hinge on the editor’s decision. IFERP offers a mock peer review so you can resolve issues before submission. Pre-submission peer review service by expert reviewers simplifies publishing in high-impact journals."
        btnname="Get a Quote"
        img1="assets/img/pre-sub.png"
        btnurl="/get-quote"
        edit={true}
        editingsection={true}
      ></SectionBanner>

      <DoubleColumn
        Title="Pre-submission"
        SubTitle="Peer Review"
        Content="Gain valuable insights on your research before journal submission with our Pre-submission Peer Review service. Our expert reviewers deliver in-depth feedback, helping you identify key issues and strengthen your manuscript before it reaches journal editors."
        ImagePath="assets/img/pre-peer.png"
        btnurl="/get-quote"
        reverse={false}
        listItems={[
          "Comprehensive evaluation to minimize manuscript rejection.",
          "In-depth technical review with actionable suggestions.",
          "Shorter wait time compared to journal peer reviews.",
        ]}
      />

      <ExpertEditors
        expertData={expertData}
        isImage={false}
        Title={"How Does Our "}
        SubTitle={"Journal Selection Service Work?"}
        btnurl="/get-quote"
      />
      <PreSubmissionReview btnurl="/get-quote" />
      <EditingSample
        Title={"Pre-Submission Peer Review"}
        SubTitle={" Report Sample"}
        isRowSection={true}
        btnurl="/get-quote"
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

export default PreSubmission;
