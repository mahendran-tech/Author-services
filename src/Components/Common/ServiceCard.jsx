// components/ServiceCard.jsx

import {HiOutlineArrowNarrowRight} from "react-icons/hi";
const ServiceCard = ({
  title,
  description,
  image,
  reverse,
  bgColor = "#DDF6F7",
  textColor = "rgba(0, 32, 33, 1)",
}) => {
  return (
    <div
      className={`row align-items-center mx-0 mb-4 p-4 p-md-5 rounded-4`}
      style={{backgroundColor: bgColor}}>
      <div
        className={`col-md-6 ${
          reverse ? "order-md-2" : ""
        } text-center mb-4 mb-md-0`}>
        <img
          src={image}
          alt={title}
          className="img-fluid rounded-5 shadow"
          style={{maxHeight: "auto", objectFit: "cover"}}
        />
      </div>
      <div className={`col-md-6 ${reverse ? "order-md-1" : ""}`}>
        <h3 className="fw-bold mb-3">{title}</h3>
        <p className=" mb-4 " style={{color: textColor, textAlign: "justify"}}>
          {description}
        </p>
        <button className="cs_btn cs_style_1 ">
          View Details <HiOutlineArrowNarrowRight />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
