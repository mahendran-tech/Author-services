import React from "react";

const ServiceCard = ({
  title,
  description,
  image,
  bgColor = "",
  imageFirst = false,
}) => {
  return (
    <div className={`py-5 ${bgColor}`}>
      <div className="container position-relative">
        <div className="row align-items-center">
          {imageFirst && image && (
            <div className="col-md-6 d-none d-md-block position-relative">
              <img
                src={image}
                className="img-fluid rounded custom-img"
                alt={title}
              />
            </div>
          )}
          <div className="col-md-6">
            <div className="content-box bg-white p-4 rounded-4 shadow position-relative">
              <h3 className="fw-bold">{title}</h3>
              <p>{description}</p>
              <button className="btn btn-pink mt-2">View Details ➜</button>
            </div>
          </div>
          {!imageFirst && image && (
            <div className="col-md-6 d-none d-md-block position-relative">
              <img
                src={image}
                className="img-fluid rounded custom-img"
                alt={title}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
