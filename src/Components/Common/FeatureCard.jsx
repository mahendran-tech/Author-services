import React from "react";

const FeatureCard = ({
  image,
  title,
  description,
  reverse,
  bgClass,
  description2,
  leftcard,
  rightcard,
  right,
  margintop,
  left,
  iseditingService = false,
}) => {
  return (
    <div className={`container  py-4`}>
      <div
        className={`row d-flex align-items-center researcher g-4  ${
          reverse ? "flex-md-row-reverse" : ""
        } ${bgClass} rounded-4   ${
          title === "Research Editing" || title === "Research Impact" || rightcard
            ? "research-editing"
            : ""
        } ${left ? "left-top" : ""}`}>
        <div className="col-md-5 text-center d-none d-md-block p-0 m-0">
          <img
            src={image}
            alt={title}
            className="img-fluid rounded"
        style={{
  ...(left ? { left: "-170px" } : {}),
  ...(iseditingService ? { width: "400px" } : {}),
  marginTop: margintop,
}} 
          />
        </div>

        <div className="col">
          <div
            className={`feature-bubble   ${
              title === "Research Editing" ||
              title === "Research Impact" ||
              right
                ? "marginright-nagative"
                : "marginleft-nagative"
            }   position-relative`}>
            <h4 className="fw-bold cs_fs_24 mb-3">{title}</h4>
            <p className="cs_accent_color">{description}</p>
            {description2 && <p className="cs_accent_color">{description2}</p>}

            <div
              className={`position-absolute  ${
                reverse ? "bubble-btn-section-right" : "bubble-btn-section"
              }`}>
              <button className="btn btn-pink mt-2">View Details →</button>
            </div>
          </div>
          {left && <div className="cs_height_100 cs_height_lg_110" />}
          {title === "Research Editing" && (
            <div className="cs_height_100 cs_height_lg_110" />
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
