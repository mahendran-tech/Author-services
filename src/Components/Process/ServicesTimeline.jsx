import React from "react";
import "./ServicesTimeline.css";
import {
  FaSearch, FaUserEdit, FaCopy, FaEdit,
  FaChartLine, FaBullhorn, FaWrench
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import SectionTitle from "../Common/SectionTitle";

const services = [
  {
    title: "Journal selection",
    icon: 'assets/img/icon/book.svg',
    description: "We’ll help you choose the right journal based on your research topic, target audience, and indexing needs—making the publication process smoother and more effective.",
    image: "assets/img/icon/jounal-1.svg",
  },
  {
    title: "Pre-submission Peer Review",
     icon: 'assets/img/icon/book2.svg',
    description: "A qualified expert from your field will review your manuscript, share valuable feedback, and help you identify and fix any issues before final submission.",
    image: "assets/img/icon/journal-2.svg",
  },
  {
    title: "Plagiarism check",
        icon: 'assets/img/icon/book3.svg',
    description: "We’ll provide a detailed plagiarism report that flags any problem areas and highlights where changes are needed—ensuring your manuscript is original and ready for review.",
    image: "assets/img/icon/journal-3.svg",
  },
  {
    title: "Formatting and Submission",
    icon: 'assets/img/icon/book4.svg',
    description: "Our team will carefully format your manuscript—including text, tables, figures, and references—to match journal guidelines and ensure it meets all formatting and citation requirements.",
    image: "assets/img/icon/journal-4.svg",
  },
    {
    title: "Research Impact",
    icon: 'assets/img/icon/book5.svg',
    description: "We help boost the reach and visibility of your published research—both within the academic community and across relevant media channels.",
    image: "assets/img/icon/journal-5.svg",
  },
      {
    title: "Citation Booster",
    icon: 'assets/img/icon/book6.svg',
    description: "Our Citation Booster service increases the visibility of your research and helps improve your citation count, enhancing your academic impact.",
    image: "assets/img/icon/journal-6.svg",
  },
        {
    title: "Post-editing services",
    icon: 'assets/img/icon/book7.svg',
    description: "After acceptance, journals may request revisions. Our post-editing services ensures timely, accurate updates to help you meet the journal’s final requirements. If your paper is rejected, we’ll assist with revising and resubmitting it to another journal—one round included at no extra cost, with later submissions offered at a 10% discount.",
    image: "assets/img/icon/journal-7.svg",
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
                <div className="icon-timeline justify-content-end mb-2"> <img src={item.icon} alt="" />   </div>
                <p className="text-end">{item.description}</p>
                <Link to="#" className=" btn-link">
                  View Details  </Link>
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
            <img className="d-flex" style={{justifySelf:'end'}} src={item.image} alt={item.title} />
              </div>
              <div className="timeline-dot-wrapper d-none d-md-block">
                <div className="timeline-dot" />
              </div>
              <div className="timeline-box icon-desc-start">
                {/* <div className="icon">{item.icon}</div> */}
                    <div className="icon-timeline justify-content-start mb-3"> <img src={item.icon} alt="" />   </div>
                <p>{item.description}</p>
                     <Link to="#" className=" btn-link">
                  View Details  </Link>
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
