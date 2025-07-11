import React from "react";
import SectionBanner from "../Components/HeroBanner/SectionBanner";
import DoubleColumn from "../Components/Project/DoubleColumn";
import ExpertEditors from "../Components/SectionDetails/ExpertEditors ";
import { homeimage } from "../assets/assets.js";
import TwoColumn from "../Components/Project/TwoColumn.jsx";
import SupportGrid from "../Components/Process/SupportGrid.jsx";
import ContactHelpSection from "../Components/SectionDetails/ContactHelpSection.jsx";

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

const expertData = [
  {
    icon: homeimage.edit1,
    title: "Guidelines and Scope Alignment",
    text: "We ensure the chosen journal suits your research theme and meets all relevant scope and formatting requirements.",
  },
  {
    icon: homeimage.edit6,
    title: "Indexing and Impact Factor",
    text: "We verify if the journal is indexed in key databases and review its Impact Factor to support academic recognition and visibility.",
  },
  {
    icon: homeimage.edit7,
    title: "Publication Frequency",
    text: "We help pick journals with suitable publication cycles to align with your timeline and submission goals.",
  },
  {
    icon: homeimage.edit4,
    title: "Open Access Options",
    text: "We find journals with open-access opportunities to help broaden your research visibility and reach.",
  },
  {
    icon: homeimage.edit8,
    title: "Article Processing Charges",
    text: "We inform you about all journal fees to ensure cost transparency and help you choose one within your budget.",
  },
];

const JournalSelection = () => {
  return (
    <div>
      <SectionBanner
        bgimg="assets/img/bg-light.webp"
        // subtitle="Battery Check & Replace"
        title="Journal"
        subtitle="Selection"
        conetnt="We assist you in finding the right journal based on your research area, intended audience, and indexing needs, helping ensure a smooth and successful submission process."
        btnname="Get a Quote"
        img1="assets/img/journal-section.png"
        btnurl="/get-quote"
        edit={true}
        editingsection={true}
      ></SectionBanner>

      <DoubleColumn
        Title="Journal Selection"
        SubTitle="Service"
        Content="Choosing the right journal is key to your manuscript’s success. Our Journal Selection service helps you locate the most relevant journals, improving acceptance chances and increasing visibility."
        ImagePath="assets/img/js-1.png"
        reverse={false}
        btnurl={"/get-quote"}
        listItems={[
          "Our expert will suggest three journals best suited to your research.",
          "You’ll receive a clear report with journal selection insights.",
          "Make confident decisions with full journal-related details.",
        ]}
      />

      <ExpertEditors
        expertData={expertData}
        isImage={false}
        btnurl={"/get-quote"}
        Title={"How Does Our "}
        SubTitle={"Journal Selection Service Work?"}
      />

      <DoubleColumn
        Title={
          <>
            What
            <span className="text-primary">You Get</span>
          </>
        }
        ImagePath="assets/img/check-2.png"
        btnurl={"/get-quote"}
        reverse={true}
        listItems={[
          "Three tailored journal recommendations: You will receive three journal recommendations customized to match your research and publication goals.",
          <>
            <b> Detailed report</b> <br /> A report will be provided, explaining
            the rationale for selecting each journal. This will include
            <div className="d-flex">
              <div className="col-4">
                <ul className="list-unstyled">
                  <li>
                    {" "}
                    <img src="assets/img/icon/check-green.svg" alt="" /> Topic
                    suitability
                  </li>
                  <li>
                    {" "}
                    <img src="assets/img/icon/check-green.svg" alt="" />{" "}
                    Publication frequency
                  </li>
                  <li>
                    {" "}
                    <img src="assets/img/icon/check-green.svg" alt="" /> Fees
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <ul className="list-unstyled">
                  <li>
                    {" "}
                    <img src="assets/img/icon/check-green.svg" alt="" /> Impact
                    factor
                  </li>
                  <li>
                    {" "}
                    <img src="assets/img/icon/check-green.svg" alt="" /> Review
                    process
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <ul className="list-unstyled">
                  <li>
                    {" "}
                    <img src="assets/img/icon/check-green.svg" alt="" /> Target
                    audience
                  </li>
                  <li>
                    {" "}
                    <img src="assets/img/icon/check-green.svg" alt="" />{" "}
                    Accessibility
                  </li>
                </ul>
              </div>
            </div>
          </>,
          <>
            {" "}
            <b>Manuscript assessment (if applicable)</b> <br />
            If you have already selected one or two potential journals, our
            experts will assess your manuscript against their guidelines. You
            will receive a detailed report evaluating your manuscript’s content,
            clarity, structure, and format.
          </>,
        ]}
      />

      <TwoColumn btnurl={"/get-quote"} />

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

export default JournalSelection;
