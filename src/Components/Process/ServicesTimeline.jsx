import React from "react";
import "./ServicesTimeline.css";

import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import SectionTitle from "../Common/SectionTitle";

const services = [
  {
    title: "Journal selection",
    icon: "assets/img/icon/book.svg",
    description:
      "We help you choose the right journal based on your research topic, target audience, and indexing requirements—making the publication process smoother and more effective.",
    image: "assets/img/icon/jounal-1.svg",
    btnurl: "/journal-selection",
  },
  {
    title: "Pre-submission Peer Review",
    icon: "assets/img/icon/book2.svg",
    description:
      "A qualified expert in your field reviews your manuscript, provides valuable feedback, and helps you address any issues before submission.",
    image: "assets/img/icon/journal-2.svg",
    btnurl: "/pre-submission-peer-review",
  },
  {
    title: "Plagiarism check",
    icon: "assets/img/icon/book3.svg",
    description:
      "We provide a detailed plagiarism report that identifies potential concerns and highlights areas needing revision—ensuring your manuscript is original and ready for review.",
    image: "assets/img/icon/journal-3.svg",
    btnurl: "/plagiarism-check",
  },
  {
    title: "Formatting and Submission",
    icon: "assets/img/icon/book4.svg",
    description:
      "Our team meticulously formats your manuscript—including text, tables, figures, and references—to meet journal guidelines and citation standards, ensuring consistency in style and citations.",
    image: "assets/img/icon/journal-4.svg",
    btnurl: "/journal-submission",
  },
  {
    title: "Post-editing Services",
    icon: "assets/img/icon/book5.svg",
    description:
      "After acceptance, journals may request changes. Our post-editing service ensures fast, effective revisions to prepare your paper for publication. If your manuscript is rejected, we offer free support for resubmission to another journal once, with subsequent rounds at a 10% discount.",
    image: "assets/img/icon/journal-5.svg",
    btnurl: "/publication-support",
  },
  {
    title: "Citation Booster",
    icon: "assets/img/icon/book6.svg",
    description:
      "With Citation Booster, we help increase your paper’s visibility and citation count through targeted academic outreach and discoverability strategies—improving your research’s academic influence.",
    image: "assets/img/icon/journal-6.svg",
    btnurl: "/citation-booster",
  },
  {
    title: "Research Outreach",
    icon: "assets/img/icon/book7.svg",
    description:
      "We promote your published work across academic networks and relevant media platforms, helping your research reach the right audience and gain broader recognition within and beyond your field.",
    image: "assets/img/icon/journal-7.svg",
    btnurl: "/research-outreach",
  },
];

const ServicesTimeline = () => {
  return (
    <Container>
      <div className="cs_height_48 cs_height_lg_48"></div>

      <SectionTitle Title={"Publication"} SubTitle={"Journey"} />
      <div className="cs_height_20 cs_height_lg_20"></div>
      <div className="timeline-container">
        <div className="timeline-line d-none d-md-block" />
        {services.map((item, index) => (
          <div className="timeline-row" key={index}>
            {index % 2 === 0 ? (
              <>
                <div className="timeline-box icon-desc">
                  <div className="icon-timeline justify-content-end mb-2">
                    {" "}
                    <img src={item.icon} alt="" />{" "}
                  </div>
                  <p className="text-end">{item.description}</p>
                  <Link
                    to={item.btnurl}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className=" btn-link"
                  >
                    View Details{" "}
                  </Link>
                </div>
                <div className="timeline-dot-wrapper d-none d-md-block">
                  <div className="timeline-dot" />
                </div>
                <div className="timeline-box title-img">
                  <h4>{item.title}</h4>
                  <img src={item.image} alt={item.title} />
                </div>
              </>
            ) : (
              <>
                <div className="timeline-box title-img">
                  <h4 className="text-end mb-3">{item.title}</h4>
                  <img
                    className="d-flex"
                    style={{ justifySelf: "end" }}
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="timeline-dot-wrapper d-none d-md-block">
                  <div className="timeline-dot" />
                </div>
                <div className="timeline-box icon-desc-start">
                  {/* <div className="icon">{item.icon}</div> */}
                  <div className="icon-timeline justify-content-start mb-3">
                    {" "}
                    <img src={item.icon} alt="" />{" "}
                  </div>
                  <p>{item.description}</p>
                  <Link
                    to={item.btnurl}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className=" btn-link"
                  >
                    View Details{" "}
                  </Link>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="cs_height_40 cs_height_lg_40"></div>
    </Container>
  );
};

export default ServicesTimeline;
