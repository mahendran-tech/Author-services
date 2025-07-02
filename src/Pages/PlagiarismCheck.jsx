import React from "react";
import SectionBanner from "../Components/HeroBanner/SectionBanner";
import DoubleColumn from "../Components/Project/DoubleColumn";
import FullImageSection from "../Components/Project/FullImageSection";
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
const PlagiarismCheck = () => {
  return (
    <div>
      <SectionBanner
        bgimg="assets/img/bg-light.webp"
        // subtitle="Battery Check & Replace"
        title="Plagiarism"
        subtitle="Check"
        conetnt="IFERP’s plagiarism check service helps you identify potential instances of plagiarism in your manuscript using trusted academic tools. We offer a comprehensive report outlining flagged sections, including expert insights to support the journal’s review process."
        btnname="Get a Quote"
        img1="assets/img/PlagiarismCheck.png"
        btnurl="/"
        edit={true}
        editingsection={true}
      ></SectionBanner>

      <DoubleColumn
        Title="Plagiarism"
        SubTitle="Check"
        Content="Plagiarism checks are essential in academic, professional, and creative writing to ensure originality and detect unethical practices like uncredited copying or rephrasing. IFERP plagiarism check report highlights possible unintentional plagiarism in your manuscript. IFERP supports academic honesty, restricts improper use of intellectual content, and preserves the authenticity of original work."
        ImagePath="assets/img/check-1.png"
        reverse={false}
        listItems={[
          "Use Turnitin software for detailed plagiarism checks on research papers.",
          "Identifying problem areas.",
          "Expert guidance at every stage of the publication process",
        ]}
      />

      <DoubleColumn
        Title={
          <>
            Why Choose IFERP’s <br /> Plagiarism Check Services to <br />
            <span className="text-primary">Detect Potential Plagiarism?</span>
          </>
        }
        Content="Plagiarism in academic publishing is considered a serious breach. Even minimal instances can lead to paper rejection and damage your academic reputation. Detecting and managing plagiarism can be demanding for students, authors, and researchers."
        Content1="IFERP offers a reliable plagiarism-checking service powered by Turnitin for researchers submitting original content. Our expert team provides clear insights, feedback, and suggestions to improve manuscript quality."
        ImagePath="assets/img/check-2.png"
        reverse={true}
        listItems={[
          "Use Turnitin for fast, accurate plagiarism detection on academic documents.",
          "Receive expert guidance to fix plagiarism with practical, actionable suggestions.",
          "Journal-level checks available for individuals, research labs, departments, and academic groups.",
        ]}
      />

      <DoubleColumn
        Title="Based on your"
        SubTitle="research need…"
        ImagePath="assets/img/check-3.png"
        reverse={false}
        listItems={[
          "<b>Avoid plagiarism while referencing</b> <br/> Be cautious when including phrases or sentences from published work as references.",
          "<b>Verify student’s manuscripts</b> <br/> As a supervisor or department head, evaluating your student’s work for originality is essential.",
          "<b>Bulk check for a group or an organization</b> <br/> Ideal for assessing the research output of your lab, department, or academic group, especially for targeted evaluations.",
        ]}
      />

      <FullImageSection
        Title={"Pre-Submission Peer Review"}
        SubTitle={"Report Sample"}
        Imgurl={"assets/img/image-sample.png"}
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

export default PlagiarismCheck;
