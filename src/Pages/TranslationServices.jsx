import React, { useEffect } from "react";
import SectionBanner from "../Components/HeroBanner/SectionBanner";
import SingleColumn from "../Components/Common/SingleColumn";
import WhatYouGet from "../Components/Process/WhatYouGet";
import DoubleColumn from "../Components/Project/DoubleColumn";
import LanguageTranslationTabs from "../Components/Process/LanguageTranslationTabs";
import DocumentUploadForm from "../Components/Form/DocumentUploadForm";
import { homeimage } from "../assets/assets.js";
import ExpertEditors from "../Components/SectionDetails/ExpertEditors .jsx";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import SupportGrid from "../Components/Process/SupportGrid.jsx";
import ContactHelpSection from "../Components/SectionDetails/ContactHelpSection.jsx";
import { useLocation } from "react-router-dom";
import ResearchOutreachForm from "../Components/Form/ResearchOutreachForm.jsx";

const expertData = [
  {
    icon: homeimage.how1,
    title: "Upload Your Manuscript",
    text: "Simply upload your manuscript in the original language and format. Our team of experts will review the document thoroughly and propose the most suitable translation plan tailored to your specific requirements. This initial step allows us to understand the scope of your project and ensure we meet your expectations.",
  },
  {
    icon: homeimage.how2,
    title: "Review Your Quote",
    text: "After reviewing your manuscript, we provide you with a free, custom quote. We focus on delivering maximum value for your investment, which is why we don't charge for repeated words or phrases, optimizing the overall cost while maintaining the highest quality.",
  },
  {
    icon: homeimage.how3,
    title: "Translation",
    text: "Our professional translators convert your manuscript into the target language, ensuring that the content is accurately translated while preserving its original meaning and context.",
  },
  {
    icon: homeimage.how4,
    title: "Translation Review",
    text: "Once the translation is complete, we conduct a thorough review to verify the accuracy and consistency of the translation. Our experts ensure that the original message and nuances are preserved in the target language.",
  },
  {
    icon: homeimage.how5,
    title: "Language Editing    ",
    text: "Next, we refine the translated text for grammatical accuracy, readability, and fluency. The focus here is to ensure the translated document is clear, coherent, and polished for the target audience.",
  },
  {
    icon: homeimage.how6,
    title: "Final Quality Check ",
    text: "Before delivering your translated manuscript, we perform a comprehensive quality check to make sure it meets our high standards. We confirm that the translation is suitable for its intended purpose, whether it’s for academic submission, publication, or wider distribution.",
  },
  {
    icon: homeimage.how7,
    title: "Download Your Translated Document",
    text: (
      <>
        Finally, your manuscript is translated and ready for publishing. We
        deliver a polished, publish-ready version in your preferred formats,
        ensuring that you can proceed with your global communication efforts
        confidently. <br /> With these steps, we ensure your work is translated
        with precision, professionalism, and attention to detail, making it
        ready for international submission or publication.{" "}
      </>
    ),
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
    image: "assets/img/img0.png",
    title: "Full Assist Publication Pack",
    description:
      "Our Full Assist Publication Pack offers comprehensive support for every stage of your manuscript’s journey. From first round of edits to final submission, we take care of every step in the publication process—so you’re free to focus entirely on your research.",
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
    image: "assets/img/img3.png",
    title: "Research Outreach",
    description:
      "We help promote and increase the visibility of your published research within the academic community and across relevant media platforms",
    btnurl: "/research-outreach",
  },

  {
    image: "assets/img/img7.png",
    title: "Citation Booster",
    description:
      "Give your research greater visibility with Citation Booster. This service is designed to reach a wider audience, increase readership, and improve your chances of being cited—ensuring your research makes a stronger impact in your field.",
    btnurl: "/citation-booster",
  },
];

const TranslationServices = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const el = document.getElementById(hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <SectionBanner
        bgimg="assets/img/bg-light.webp"
        // subtitle="Battery Check & Replace"
        title="Translation"
        subtitle="Services"
        conetnt="Break down language barriers with help from our expert academic translators"
        conetnt1={
          "We combine innovative technology with skilled professionals to make sure your research is translated clearly and accurately. Our goal is to preserve the meaning and quality of your work, ensuring it can make a lasting impact around the world."
        }
        btnname="Get a Quote"
        img1="assets/img/ts.png"
        btnurl="#ts_getquote"
        edit={true}
        editingsection={true}
      ></SectionBanner>

      <SingleColumn
        Title="Translation"
        SubTitle="Services"
        btnurl="#ts_getquote"
        content="Language shouldn’t get in the way of sharing your important work with the world. With IFERP’s translation services, whether you’re preparing your manuscript for publication or hoping to reach a broader audience, our translators make sure your research is communicated clearly and effectively."
      />
      <WhatYouGet />
      <DoubleColumn
        Title="Professional"
        SubTitle={
          <>
            Language <br /> Translation
          </>
        }
        textLeft={true}
        Content="Our Language Translation service is dedicated to providing precise and reliable translations of your research, ensuring that the integrity and original meaning of your work are preserved across multiple languages. Whether your goal is to reach the audience of an international academic journal or to communicate your findings to a global, diverse audience, we specialize in helping you effectively convey your ideas and discoveries. With our expertise, we ensure that your research transcends language barriers, enabling you to share your work with a wider community while maintaining its core message and significance."
        ImagePath="assets/img/translate.png"
        btnurl="#ts_getquote"
        reverse={false}
      />

      <LanguageTranslationTabs />
      <div id="ts_getquote">
        <DocumentUploadForm />
      </div>

      <ExpertEditors
        expertData={expertData}
        btnurl={"#ts_getquote"}
        isImage={false}
        Title={"How Our "}
        SubTitle={"Translation Service Works?"}
      />
      <SingleColumn
        Title="Choose Our"
        SubTitle="Translation Service"
        btnurl="#ts_getquote"
        content="Want to reach more readers around the world? Translating your book into multiple languages is an effective way to expand your global audience. Our Book Translation service ensures your work remains true to its original message and tone while adapting it to fit different cultures. We’re here to help you connect with a broader audience, without losing the heart of your story."
      />
      <DoubleColumn
        Title="Book"
        SubTitle={<>Translation and Production</>}
        textLeft={true}
        Content="Our complete book translation service takes care of everything—from translating your manuscript to delivering both print-ready and digital versions in the language you need. We manage each step, making sure your book is fully prepared and ready to connect with a global audience."
        ImagePath="assets/img/j-sub-1.png"
        reverse={false}
        isBgLight={true}
      />

      <section>
        <div className="cs_height_40 cs_height_lg_48"></div>
        <Container>
          <div className="row">
            <div>
              <h3>Book Translation</h3>
              <p>
                Our skilled translators ensure that your book is translated
                clearly and thoughtfully, preserving the tone, meaning, and
                message of the original while respecting the cultural context.
              </p>
            </div>
            <div>
              <h3>Book Production</h3>
              <p>
                We offer a comprehensive range of services to prepare your book
                for publication in any format—print or digital. Here’s how we
                help:
              </p>
              <ul className="text-left list-unstyled list-style-one mt-4">
                <li className="mb-2 d-flex align-items-start gap-2">
                  <img src="assets/img/icon/right-arrow-yellow.svg" alt="" />
                  <b>ISBN Registration</b>
                  <span>
                    We assist with obtaining an ISBN for your translated book,
                    enabling it to be uniquely identified in global markets.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start gap-2">
                  <img src="assets/img/icon/right-arrow-yellow.svg" alt="" />
                  <b>Layout and Template Design</b>
                  <span>
                    Our designers build layouts that suit your translated
                    content, ensuring smooth flow and readability in the new
                    language.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start gap-2">
                  <img src="assets/img/icon/right-arrow-yellow.svg" alt="" />
                  <b>Professional Typesetting</b>
                  <span>
                    We polish the final layout to ensure your book looks sharp
                    and professional in both print and digital formats.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start gap-2">
                  <img src="assets/img/icon/right-arrow-yellow.svg" alt="" />
                  <b>Cover Design</b>
                  <span>
                    Our creative team designs covers that connect with your
                    audience while honoring cultural differences.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start gap-2">
                  <img src="assets/img/icon/right-arrow-yellow.svg" alt="" />
                  <b>E-book Formatting</b>
                  <span>
                    We turn your translated book into a fully functional e-book
                    that works with all major readers and platforms.
                  </span>
                </li>
              </ul>
              <p>
                With our complete Book Translation and Production service, your
                book will be ready for a global audience, with accurate
                language, professional formatting, and cultural relevance.
              </p>
            </div>
          </div>
          <div className="text-left mt-2">
            <Link
              to="/get-quote"
              onClick={() => screenTop({ top: 0, behavior: "smooth" })}
              className="cs_btn cs_style_1 wow fadeInLeft"
            >
              Get a Quote <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </Container>
        <div className="cs_height_48 cs_height_lg_48"></div>
      </section>

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
    </>
  );
};

export default TranslationServices;
