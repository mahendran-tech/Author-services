import React from "react";
import SectionBanner from "../Components/HeroBanner/SectionBanner";
import EditingPlansComparison from "../Components/SectionDetails/EditingPlansComparison";
import EditingFeatures from "../Components/ServiceDetails/EditingFeatures";
import RoundedCard from "../Components/Common/RoundedCard";
import SectionTitle from "../Components/Common/SectionTitle";
import OtherServicesSection from "../Components/SectionDetails/OtherServicesSection";
import FeaturesSection from "../Components/SectionDetails/FeaturesSection";

const features = [
  "Language editing & grammatical corrections",
  "Manuscript formatting as per target journal guidelines",
  "Editing certificate",
  "Unlimited Q & A with editors",
  "Preparation of journal cover letter",
  "Improving paper structure and flow",
  "Re-editing or proofreading of your manuscript (validity: 365 days)",
  "Plagiarism check and reduction using Turnitin (Note: reduction of plagiarism in your manuscript depends on the plagiarism percentage)",
  "Domain-specific content level editing",
  "Peer-review by experienced journal reviewers",
];

const plans = [
  {
    name: "Core Editing",
    desc: "Sentence-level editing for pre- and post-journal submission at an affordable rate.",
    features: [true, true, true, true, true, false, false, false, false, false],
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

const serviceData = [
  {
    title: "Thesis Editing",
    description:
      "Our editors will edit your thesis or dissertation to enhance clarity, conciseness, and flow of text and correct grammar, punctuation, and spelling errors and make stylistic improvements. The revised work will be reader-friendly, maintaining a formal academic tone for easy evaluation by examiners.",
    bgColor: "bg-light-purple",
    textcolor: "#0C0A31",
    headcolor: "#0C0A31",
    radius: "br-left",
    left: false,
  },
  {
    title: "Proofreading",
    description:
      "Proofreading is the final and most important step in editing. Our proofreaders will ensure that your manuscript is free of basic grammar, punctuation, and spelling errors and will verify that its format aligns with the target journal’s guidelines.",
    bgColor: "bg-light-blue",
    textcolor: "#011530",
    headcolor: "#011530",
    radius: "br-right",
    left: true,
  },
];
const serviceData2 = [
  {
    title: "Plagiarism check",
    description:
      "We provide you with a plagiarism report, helping you identify potential plagiarism issues in your manuscript. Our detailed report highlights problematic sections and offers expert commentary to support your manuscript's evaluation.",
        bgColor: "bg-light-blue",
    textcolor: "#011530",
    headcolor: "#011530",
    radius: "br-left",
    left: false,
  },
  {
    title: "Journal Submission",
    description:
      "Our experts guide you through the entire journal submission process, from account creation to final submission.",
    bgColor: "bg-light-purple",
    textcolor: "#0C0A31",
    headcolor: "#0C0A31",
    radius: "br-right",
    left: true,
  },
];

const feature = [
  {
    title: "Journal Publication Support",
    description:
      "Navigating the research publication process can be challenging, but with our Journal Publication Support Services, you’ll receive expert guidance every step of the way.",
    image: "assets/img/fr-7.png",
    bgClass: "bg-light-teal",
    leftclass: "leftmargin",
    iseditingService: true,
    reverse: false,
  },
  {
    title: "Full Assist Publication Plan",
    description:
      "Our Full Assist plan offers comprehensive support throughout your manuscript’s journey. From initial editing to final submission, we handle every aspect of the publication process, giving you the freedom to focus on your research.",
    image: "assets/img/fr-8.png",
    bgClass: "bg-light-blue",
    reverse: true,
    rightcard: true,
       margintop:"-40%",
    right: true,
  },
  {
    title: "Flexi Saver Publication Plan",
    description:
      "The Flexi Saver plan offers flexible support, giving you the freedom to select the services you need, be it journal selection, peer review, or journal submission. This cost-effective option ensures that you get expert assistance exactly where it’s required.",
    image: "assets/img/fr-9.png",
     bgClass: "bg-light-purple",
    reverse: false,
    margintop:"-28%",
    left: true,
  },
  {
    title: "Pre-submission peer review",
    description:
      "We will have your finalized manuscript peer-reviewed by an experienced reviewer from your field, offering constructive feedback and giving you the opportunity to address any gaps before final submission.",
    image: "assets/img/fr-10.png",
        bgClass: "bg-light-teal",
        margintop:"-40%",
    reverse: true,
        right: true,
  },
    {
    title: "Translation Services",
    description:
      "We ensure effective communication by overcoming language barriers through document translation, interpretation, and other language support services.",
    image: "assets/img/fr-11.png",
    bgClass: "bg-light-blue",
    reverse: false,
    margintop:"-30%",
    left: true,
  },
    {
    title: "Research Impact",
    description:
      "We help promote and increase visibility of your published research within the academic community and across relevant media platforms.",
    image: "assets/img/fr-12.png",
    bgClass: "bg-light-purple",
        margintop:"-40%",
    reverse: true,
        right: true,
  },
      {
    title: "Citation Booster",
    description:
      "Through Citation Booster, we help improve your research’s visibility and citation rate, maximizing its academic impact.",
    image: "assets/img/fr-13.png",
        bgClass: "bg-light-teal",
    reverse: false,
    margintop:"-30%",
    left: true,
  },
];

const EditingService = () => {
  return (
    <>
      <SectionBanner
        bgimg="assets/img/bg-light.webp"
        // subtitle="Battery Check & Replace"
        title="Editing Services -"
        subtitle=" Plans Comparison"
        conetnt="Our skilled editors meticulously enhance your manuscript by refining language, structure, and coherence."
        conetnt1="We ensure your work is clear, polished, and aligned with academic standards boosting its impact and improving your chances of acceptance in leading journals."
        btnname="Get a Quote"
        img1="assets/img/editing-service.png"
        btnurl="/"
        edit={true}
        editingsection={true}></SectionBanner>

      <EditingPlansComparison
        features={features}
        plans={plans}
        isTitleChange={true}
      />

      <OtherServicesSection serviceData={serviceData} />
      <FeaturesSection features={feature} isTitle={false} />
         <OtherServicesSection isTitle={false} serviceData={serviceData2} />
      
    </>
  );
};

export default EditingService;
