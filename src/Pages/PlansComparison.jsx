import React from "react";
import SectionBanner from "../Components/HeroBanner/SectionBanner";
import ServiceInclusionTable from "../Components/SectionDetails/ServiceInclusionTable";
import SupportGrid from "../Components/Process/SupportGrid";
import ContactHelpSection from "../Components/SectionDetails/ContactHelpSection";

const services = [
  {
    image: "assets/img/img1.png",
    title: "Journal Publication Support",
    description:
      "Navigating the research publication process can be challenging, but with our Journal Publication support services, you’ll receive expert guidance every step of the way.",
  },
  {
    image: "assets/img/img0.png",
    title: "Journal Selection",
    description:
      "We help you choose the right journal based on your research topic, target audience, and indexing requirements—making the publication process smoother and more effective.",
  },

  {
    image: "assets/img/img10.png",
    title: "Pre-submission Peer Review",
    description:
      "We will have your finalized manuscript peer-reviewed by an experienced reviewer from your field, offering constructive feedback and giving you the opportunity to address any gaps before final submission.",
  },

  {
    image: "assets/img/img12.png",
    title: "Plagiarism Check",
    description:
      "We provide a detailed plagiarism report that identifies potential concerns and highlights areas needing revision—ensuring your manuscript is original and ready for review.",
  },

  {
    image: "assets/img/img14.png",
    title: "Journal Submission",
    description:
      "Our experts guide you through the entire journal submission process, from account creation to final submission.",
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
    image: "assets/img/img11.png",
    title: "Citation Booster",
    description:
      "Give your research greater visibility with Citation Booster. This service is designed to reach a wider audience, increase readership, and improve your chances of being cited—ensuring your research makes a stronger impact in your field.",
  },
];

const PlansComparison = () => {
  return (
    <div>
      <SectionBanner
        bgimg="assets/img/bg-light.webp"
        // subtitle="Battery Check & Replace"
        title="Plans"
        subtitle="Comparison"
        conetnt="From preparing your manuscript to navigating peer review, the publication journey can feel overwhelming. Our expert team ensures every step is efficiently managed, leading to a timely and successful submission."
        conetnt1="We handle the entire publication process—from editing to submission—so you can stay focused on what matters most: your research."
        btnname="Get a Quote"
        img1="assets/img/plan-compare.png"
        btnurl="/"
        edit={true}
        editingsection={true}
      ></SectionBanner>

      <ServiceInclusionTable />

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

export default PlansComparison;
