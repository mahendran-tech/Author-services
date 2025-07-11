import React from "react";
import SectionBanner from "../Components/HeroBanner/SectionBanner";
import ServicesGrid from "../Components/Process/ServicesGrid";
import SupportGrid from "../Components/Process/SupportGrid";

const services = [
  {
    image: "assets/img/img1.png",
    title: "Journal Publication Support",
    description:
      "Navigating the research publication process can be challenging, but with our Journal Publication support services, you’ll receive expert guidance every step of the way.",
    btnurl: "/full-assist-publication",
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

const FullAssistPublicationPlan = () => {
  return (
    <div>
      <SectionBanner
        bgimg="assets/img/bg-light.webp"
        // subtitle="Battery Check & Replace"
        title="Full Assist"
        subtitle="Publication Plan"
        conetnt="We provide end-to-end support for your paper—from journal selection, pre-submission peer review, plagiarism check, editing, formatting, cover letter preparation, and journal submission."
        conetnt1={
          "Receive expert guidance to boost your chances of acceptance. "
        }
        btnname="Get a Quote"
        img1="assets/img/full-assist.png"
        btnurl="/get-quote"
        edit={true}
        editingsection={true}
      ></SectionBanner>
      <ServicesGrid btnurl={"/get-quote"} />
      <SupportGrid
        services={services}
        Title={"Other Services"}
        SubTitle={"We Provide"}
      />
    </div>
  );
};

export default FullAssistPublicationPlan;
