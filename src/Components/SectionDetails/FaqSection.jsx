import React, { useState } from "react";
import { Accordion, Container } from "react-bootstrap";
import SectionTitle2 from "../Common/SectionTitle2";

const faqData = [
  {
    question: "How are IFERP editors selected?",
    answer:
      "All IFERP editors are selected based on their extensive experience with international publications and peer review processes. They possess deep subject-matter expertise and a strong understanding of what it takes to help authors succeed in high-impact journals.",
  },
  {
    question: "Can I get a certificate of proofreading or editing?",
    answer:
      "Yes, if your manuscript undergoes proofreading or editing through IFERP, you will receive an official certificate of editing.",
  },
  {
    question: "What types of editing services do you offer?",
    answer: (
      <>
        {" "}
        <p>IFERP offers three levels of editing services:</p>
        <ul>
          <li>
            <b> Core Editing </b> – Basic grammar, punctuation, and spelling
            corrections
          </li>
          <li>
            <b> Exclusive Editing</b> – In-depth language, tone, and clarity
            improvements
          </li>
          <li>
            <b> Research Editing </b> – Technical editing for research accuracy
            and formatting
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "How do you ensure confidentiality and data security?",
    answer:
      "We maintain strict confidentiality protocols and utilize secure systems to protect your data throughout the editing and publishing process.",
  },
  {
    question: "Do editors provide suggestions for improving my manuscript?",
    answer:
      "Yes, our editors offer constructive feedback to improve clarity, structure, coherence, and overall manuscript quality.",
  },
  {
    question:
      "Are IFERP editors familiar with journal-specific formatting guidelines?",
    answer:
      "Absolutely. Our editors are well-versed in the submission requirements of various academic journals and will format your manuscript accordingly.",
  },
  {
    question:
      "How do you ensure that manuscripts comply with ethical standards?",
    answer:
      "Our editorial team follows strict ethical guidelines, including avoiding plagiarism, ensuring accurate citations, and aligning with journal-specific ethical standards.",
  },
  {
    question: "How is pricing or quotation calculated?",
    answer:
      "Quotes are based on word count, service type, and turnaround time. Please fill in the order form with all necessary details to receive a customized quote.",
  },
  {
    question: "Will you format my documents as per my journal's requirement?",
    answer:
      "Yes. Our editors will format your manuscript according to the submission guidelines of your target journal.",
  },
  {
    question: "Does IFERP offer Book editing services?",
    answer:
      "Yes, IFERP offers professional book editing services tailored to enhance the quality and publishability of your manuscript.",
  },
  {
    question: "What is Pre-submission Peer Review?",
    answer:
      "This service provides a critical evaluation of your manuscript before submission. Our expert reviewers assess factors such as novelty, study design, data analysis, and journal alignment, helping you improve the manuscript and avoid rejection.",
  },
  {
    question:
      "What documents do I need to submit for Pre-submission Peer Review?",
    answer:
      "Please upload your manuscript and include the name and URL of your target journal, if available.",
  },
  {
    question: "What is the Citation Booster service?",
    answer:
      "This service increases your research paper’s visibility, reach, and citations. This is suitable for both early-career and experienced researchers looking to maximize the impact of their published work. ",
  },
  {
    question:
      "Do I need to have a published manuscript to use the Citation Booster service?",
    answer:
      "Yes, a final published version of your manuscript is required for us to begin promoting your work through the Citation Booster service.",
  },
  {
    question: "Do your editors specialize in specific academic fields?",
    answer:
      "Yes, we assign manuscripts to editors with expertise in the relevant subject area to ensure high-quality, contextually accurate editing.",
  },
  {
    question:
      "Do editors collaborate with peer reviewers or journals directly?",
    answer:
      "No, editors work independently to improve your manuscript, but we guide it to meet journal and reviewer expectations.",
  },
  {
    question: "How long does the editing process take?",
    answer:
      "Turnaround times vary depending on the service level and word count, typically ranging from 3 to 7 business days.",
  },
  {
    question: "Can I request revisions after editing is complete?",
    answer:
      "Yes, we offer limited free revisions for any clarifications or minor changes after the initial delivery.",
  },
  {
    question:
      "Do you provide translation services for non-English manuscripts?",
    answer:
      "Yes, we offer academic translation services to help authors publish in English-language journals.",
  },
  {
    question: "Can I combine services, like editing and peer review?",
    answer:
      "Absolutely. You can select multiple services such as editing, formatting, and pre-submission review for a comprehensive manuscript improvement package.",
  },
];

const FaqSection = () => {
  const [activeKey, setActiveKey] = useState(null);

  const toggleKey = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <section className="faq-section ">
      <div className="cs_height_48 cs_height_lg_48"></div>

      <Container>
        <div className="text-center ">
          <SectionTitle2 Title="Frequently" SubTitle="Asked Questions" />
          <div className="cs_height_20 cs_height_lg_20"></div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 col-sm-12">
            <Accordion activeKey={activeKey}>
              {faqData.slice(0, 10).map((item, index) => (
                <Accordion.Item
                  eventKey={index.toString()}
                  key={index}
                  className="mb-2 border-0"
                >
                  <Accordion.Header onClick={() => toggleKey(index.toString())}>
                    {item.question}
                  </Accordion.Header>
                  {item.answer && (
                    <Accordion.Body className="text-muted">
                      {item.answer}
                    </Accordion.Body>
                  )}
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
          <div className="col-lg-6 col-sm-12">
            <Accordion activeKey={activeKey}>
              {faqData.slice(10, 20).map((item, index) => (
                <Accordion.Item
                  eventKey={(index + 10).toString()}
                  key={index}
                  className="mb-2 border-0"
                >
                  <Accordion.Header
                    onClick={() => toggleKey((index + 10).toString())}
                  >
                    {item.question}
                  </Accordion.Header>
                  {item.answer && (
                    <Accordion.Body className="text-muted">
                      {item.answer}
                    </Accordion.Body>
                  )}
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
      <div className="cs_height_40 cs_height_lg_40"></div>
    </section>
  );
};

export default FaqSection;
