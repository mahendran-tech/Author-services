import React from "react";
import SectionTitle from "./SectionTitle";
import { Link } from "react-router-dom";

const SingleColumn = ({ Title, SubTitle, content, btnurl }) => {
  return (
    <section>
      <div className="cs_height_48 cs_height_lg_48"></div>
      <div className="container">
        <div className="row d-flex justify-content-center flex-column align-items-center">
          <SectionTitle Title={Title} SubTitle={SubTitle} />
          <div className="col-9 mb-1">
            <p className="text-center">{content}</p>
          </div>
          <div className="text-center col-12">
            <Link
              to={btnurl}
              onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
              className="cs_btn cs_style_1 mt-3"
            >
              View Details{" "}
              <span className="arrow">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="cs_height_40 cs_height_lg_40"></div>
    </section>
  );
};

export default SingleColumn;
