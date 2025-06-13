import React from "react";
import SectionBanner from "../Components/HeroBanner/SectionBanner";
import FlexiSaver from "../Components/SectionDetails/FlexiSaver";
import WhatYouGet from "../Components/SectionDetails/WhatYouGet";
import SupportGrid from "../Components/Process/SupportGrid";

const services = [
  {
    image: "assets/img/img0.png",
    title: "Full Assist Publication Pack",
    description:
      "Our Full Assist Publication Pack offers comprehensive support for every stage of your manuscript’s journey. From first round of edits to final submission, we take care of every step in the publication process—so you’re free to focus entirely on your research.",
  },
  {
    image: "assets/img/img1.png",
    title: "Journal Publication Support",
    description:
      "Navigating the research publication process can be challenging, but with our Journal Publication support services, you’ll receive expert guidance every step of the way.",
  },
  {
    image: "assets/img/img3.png",
    title: "Research Outreach",
    description:
      "We help promote and increase the visibility of your published research within the academic community and across relevant media platforms",
  },
  {
    image: "assets/img/img4.png",
    title: "Translation Services",
    description:
      "We ensure effective communication by overcoming language barriers through document translation, interpretation, and other language support services.",
  },
  {
    image: "assets/img/img5.png",
    title: "Core Editing",
    description:
      "Our Core Editing service focuses on sentence-level editing for both pre-and post-journal submissions at an affordable rate.",
  },

  {
    image: "assets/img/img6.png",
    title: "Exclusive Editing",
    description:
      "Our Exclusive Editing service is designed to maximize your manuscript’s impact and readiness for submission to high-impact journals.",
  },
  {
    image: "assets/img/img7.png",
    title: "Citation Booster",
    description:
      "Give your research greater visibility with Citation Booster. This service is designed to reach a wider audience, increase readership, and improve your chances of being cited—ensuring your research makes a stronger impact in your field.",
  },
  {
    image: "assets/img/img8.png",
    title: "Research Editing",
    description:
      "Our Research Editing service provides expert pre-submission peer review, offering in-depth feedback on content, structure, and gaps to strengthen your manuscript before journal submission.",
  },
  {
    image: "assets/img/img9.png",
    title: "Thesis Editing",
    description:
      "Our editors revise your thesis or dissertation to improve its clarity, readability, and academic value. They correct grammar, punctuation, and spelling errors while improving sentence structure and flow. ",
  },
];

const FlexiSaverPublication = () => {
  return (
    <div>
      <SectionBanner
        bgimg="assets/img/bg-light.webp"
        // subtitle="Battery Check & Replace"
        title="Flexi Saver"
        subtitle="Publication Pack"
        conetnt="The Flexi Saver plan offers flexible support, letting you choose the services you need—journal selection, peer review, or journal submission. This cost-effective option ensures you get expert help exactly where and when you need it."
        btnname="Get a Quote"
        img1="assets/img/flexi-saver.png"
        btnurl="/"
        edit={true}
        editingsection={true}
      ></SectionBanner>
      <FlexiSaver />
      <WhatYouGet />
      <SupportGrid
        services={services}
        Title={"Other Services"}
        SubTitle={"We Provide"}
      />
    </div>
  );
};

export default FlexiSaverPublication;
