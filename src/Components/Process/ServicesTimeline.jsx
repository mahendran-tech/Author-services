import React from "react";
import "./ServicesTimeline.css";
import {
  FaSearch, FaUserEdit, FaCopy, FaEdit,
  FaChartLine, FaBullhorn, FaWrench
} from "react-icons/fa";

const services = [
  {
    title: "Journal selection",
    icon: <FaSearch />,
    description: "We'll help you choose the right journal based on your research topic, target audience, and indexing needs.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Pre-submission Peer Review",
    icon: <FaUserEdit />,
    description: "An expert will review your manuscript and identify any issues before final submission.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Plagiarism check",
    icon: <FaCopy />,
    description: "We provide a detailed plagiarism report highlighting problem areas and necessary changes.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Formatting and Submission",
    icon: <FaEdit />,
    description: "We format your manuscript including text, figures, and references as per journal guidelines.",
    image: "https://via.placeholder.com/150",
  },
];

const ServicesTimeline = () => {
  return (
    <div className="timeline-container">
      <div className="timeline-line" />
      {services.map((item, index) => (
        <div className="timeline-row" key={index}>
          {index % 2 === 0 ? (
            <>
              <div className="timeline-box icon-desc">
                <div className="icon">{item.icon}</div>
                <p>{item.description}</p>
              </div>
              <div className="timeline-dot-wrapper">
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
                <h4>{item.title}</h4>
                <img src={item.image} alt={item.title} />
              </div>
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot" />
              </div>
              <div className="timeline-box icon-desc">
                <div className="icon">{item.icon}</div>
                <p>{item.description}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServicesTimeline;
