import React, {useState} from "react";
import {Accordion, Container} from "react-bootstrap";
import SectionTitle2 from "../Common/SectionTitle2";

const faqData = [
  {
    question: "How is the selection process of IFERP editors carried out?",
    answer:
      "Absolutely, if IFERP edits your text while taking proofreading into consideration, you will receive a certificate of editing.",
  },
  {
    question: "Can I get a certificate of Proofreading?",
    answer:
      "Absolutely, if IFERP edits your text while taking proofreading into consideration, you will receive a certificate of editing.",
  },
  {
    question: "Do you offer different types of editing services?",
    answer: "",
  },
  {
    question: "How do you ensure confidentiality and data security?",
    answer: "",
  },
  {
    question:
      "Will you provide feedback or suggestions for improving my paper?",
    answer: "",
  },
  {
    question:
      "Do you have expertise in formatting according to specific journal guidelines?",
    answer: "",
  },
  {
    question:
      "How do you ensure that my paper meets ethical standards and complies with publication guidelines?",
    answer: "",
  },
  {
    question: "How do you calculate the quotation?",
    answer: "",
  },
  {
    question: "Will you format my documents as per my journal's requirement?",
    answer: "",
  },
  {
    question: "Does IFERP offer Book editing services?",
    answer: "",
  },
  {
    question: "What is Pre-submission Peer Review?",
    answer: "",
  },
  {
    question: "What information do I need to provide?",
    answer: "",
  },
  {
    question: "Who can use the citation booster services?",
    answer: "",
  },
  {
    question:
      "Does my manuscript have to be published before I use the Citation Booster Services or Impact Booster service?",
    answer: "",
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
          <div className="col-lg-9 col-sm-12">
            <Accordion activeKey={activeKey}>
              {faqData.map((item, index) => (
                <Accordion.Item
                  eventKey={index.toString()}
                  key={index}
                  className="mb-2 border-0">
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
        </div>
      </Container>
          <div className="cs_height_40 cs_height_lg_40"></div>
    </section>
  );
};

export default FaqSection;
