import React from "react";
import SectionBanner from "../Components/HeroBanner/SectionBanner";
import YourPublicationJourny from "../Components/Project/YourPublicationJourny";
import AdditionalBenefits2 from "../Components/Project/AdditionalBenefits2";
import AdditionalBenefits from "../Components/Common/AdditionalBenefits";
import TestimonialSlider from "../Components/Testimonial/TestimonialSlider";
import PublishedPapersSlider from "../Components/Testimonial/PublishedPapersSlider";
import SupportGrid from "../Components/Process/SupportGrid";

const benefitsData = [
  {
    icon: "assets/img/icon/sa-11.svg",
    text: "Researchers preparing manuscripts for peer-reviewed journals.",
  },
  {
    icon: "assets/img/icon/sa-7.svg",
    text: "Students finalizing their thesis or dissertation.",
  },

  {
    icon: "assets/img/icon/sa-4.svg",
    text: "Academics working on research papers or conference submissions.",
  },
  {
    icon: "assets/img/icon/sa-12.svg",
    text: "Professionals writing technical documents, reports, or white papers.",
  },
];

const services = [
  {
    image: "assets/img/img5.png",
    title: "Core Editing",
    description:
      "Our Core Editing service focuses on sentence-level editing for both pre-and post-journal submissions at an affordable rate.",
    btnurl: "/core-editing",
  },
  {
    image: "assets/img/img3.png",
    title: "Research Outreach",
    description:
      "We help promote and increase the visibility of your published research within the academic community and across relevant media platforms",
    btnurl: "/",
  },
  {
    image: "assets/img/img6.png",
    title: "Exclusive Editing",
    description:
      "Our Exclusive Editing service is designed to maximize your manuscript’s impact and readiness for submission to high-impact journals.",
    btnurl: "/exclusive-editing",
  },
  {
    image: "assets/img/img8.png",
    title: "Research Editing",
    description:
      "Our Research Editing service provides expert pre-submission peer review, offering in-depth feedback on content, structure, and gaps to strengthen your manuscript before journal submission.",
    btnurl: "/research-editing",
  },
  {
    image: "assets/img/img1.png",
    title: "Journal Publication Support",
    description:
      "Navigating the research publication process can be challenging, but with our Journal Publication support services, you’ll receive expert guidance every step of the way.",
    btnurl: "/journal-submission",
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

const ProofReading = () => {
  return (
    <div>
      <SectionBanner
        bgimg="assets/img/bg-light.webp"
        // subtitle="Battery Check & Replace"
        title="Proofread"
        subtitle="your research"
        conetnt="Clear, error-free writing makes a lasting impression—whether you’re submitting  a manuscript, thesis, or technical document.Choose IFERP’s proofreading service and rely on expert support to present your best work—every time."
        btnname="Get a Quote"
        btnurl="/customize-editing-services"
        img1="assets/img/proofreading.png"
        isProofReading={true}
        ProofReadingTit={"Suitable for"}
        ProofReadingSubTit={"Conditionally accepted manuscript"}
        ProofReadingSubTit2={
          "Non-academic documents (cover letters, speeches, etc.)"
        }
        edit={true}
        editingsection={true}
      ></SectionBanner>

      <YourPublicationJourny
        Title={"Proofreading"}
        SubTitle={"Services"}
        isUlContent={false}
        Content={
          "Proofreading ensures your writing is polished, clear, and compelling. Our expert team goes beyond correcting grammar and typos—we refine word choice, improve clarity and flow, and ensure consistency in tone. Each sentence is sharpened to deliver your message with precision."
        }
        Content1={
          "With our thorough proofreading, your document will read smoothly and leave a strong, professional impression. You can feel confident that your manuscript is accurate, error-free, professional, and fully prepared for submission, publication, or sharing with your audience."
        }
        ImagePath={"assets/img/papper.png"}
        btnurl="/customize-editing-services"
      />
      <AdditionalBenefits2 />

      <AdditionalBenefits
        title="Who should opt for"
        subtitle="our Proofreading service?"
        benefits={benefitsData}
        btnurl={"/customize-editing-services"}
      />
      {/* <TestimonialSlider /> */}
      <PublishedPapersSlider />
      <SupportGrid
        services={services}
        Title={"Other Services"}
        SubTitle={"We Provide"}
      />
    </div>
  );
};

export default ProofReading;
