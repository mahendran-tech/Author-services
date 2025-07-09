import React from "react";
import SectionBanner from "../Components/HeroBanner/SectionBanner";
import { homeimage } from "../assets/assets";
import ExpertEditors from "../Components/SectionDetails/ExpertEditors ";
import DoubleColumn from "../Components/Project/DoubleColumn";
import SupportGrid from "../Components/Process/SupportGrid";
import ContactHelpSection from "../Components/SectionDetails/ContactHelpSection";

const expertData = [
  {
    icon: homeimage.edit9,
    text: "Researchers seek more recognition, citations, and funding by sharing their work widely.",
  },
  {
    icon: homeimage.edit10,
    text: "Researchers are aiming for greater reach and increased citation counts.",
  },
  {
    icon: homeimage.edit11,
    text: "Academicians are promoting work in global conferences, journals, and online platforms.",
  },
  {
    icon: homeimage.edit12,
    text: "Publishers and societies showcase impactful research.",
  },
  {
    icon: homeimage.edit14,
    text: (
      <>
        Universities highlight academic <br /> achievements.{" "}
      </>
    ),
  },
  {
    icon: homeimage.edit13,
    text: "New authors are striving to establish credibility in the academic world.",
  },
];

const services = [
  {
    image: "assets/img/img1.png",
    title: "Journal Publication Support",
    description:
      "Navigating the research publication process can be challenging, but with our Journal Publication support services, you’ll receive expert guidance every step of the way.",
  },
  {
    image: "assets/img/img2.png",
    title: "Flexi Saver Support Plan",
    description:
      "The Flexi Saver Support Plan lets you choose only the services you need—whether it’s journal selection, peer review, or final submission. This budget-friendly option ensures you get expert assistance where it’s needed most.",
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

const CitationBooster = () => {
  return (
    <div>
      <SectionBanner
        bgimg="assets/img/bg-light.webp"
        // subtitle="Battery Check & Replace"
        title="Citation"
        subtitle="Booster"
        conetnt="Boost your manuscript citations through expert-driven promotion."
        conetnt1="Maximize your research visibility with our Citation Booster service. We spotlight your work using proven strategies—enhancing reach, increasing recognition, and expanding your audience—so your research gets the attention it deserves."
        btnname="Get a Quote"
        img1="assets/img/citation-bootst.png"
        btnurl="/"
        edit={true}
        editingsection={true}
      ></SectionBanner>

      <ExpertEditors
        expertData={expertData}
        isImage={false}
        Title={"Who should use"}
        SubTitle={"IFERP Citation Booster?"}
        isBooster={true}
      />

      <DoubleColumn
        Title="How does IFERP"
        SubTitle="Citation Booster Works?"
        ImagePath="assets/img/j-sub-1.png"
        reverse={false}
        isBgLight={true}
        listItems={[
          "Upload your manuscript in Word or PDF format.",
          "Our team thoroughly reviews the content and topic.",
          "A subject expert creates a concise summary.",
          "A language expert reviews the summary before final delivery.",
        ]}
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

export default CitationBooster;
