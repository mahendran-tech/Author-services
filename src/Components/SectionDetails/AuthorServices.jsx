import React from "react";
import parse from "html-react-parser";
import SectionTitle2 from "../Common/SectionTitle2";
import { homeimage } from "../../assets/assets";

const services = [
  { icon: homeimage.team, title: "Expert <br/> Team", bgcolor: "#e0ecfe" },
  {
    icon: homeimage.assurence,
    title: "Quality <br/> Assurance",
    bgcolor: "#ffede7",
  },
  { icon: homeimage.saftey, title: "Data <br/> Safety", bgcolor: "#f0e6fe" },
  {
    icon: homeimage.time,
    title: "Save Time <br/> and Effort",
    bgcolor: "#e6f8ee",
  },
  {
    icon: homeimage.publishing,
    title: "Proven <br/> Publishing History",
    bgcolor: "#ffe8e9",
  },
  {
    icon: homeimage.editing,
    title: "Editing <br/> Certificate",
    bgcolor: "#fff8e8",
  },
];

const AuthorServices = () => {
  return (
    <div className="container text-center ">
      <div className="cs_height_48 cs_height_lg_48"></div>
      <SectionTitle2 Title="Why Choose" SubTitle=" IFERP Author Services?" />
      <div className="cs_height_20 cs_height_lg_20"></div>
      <div className="row ">
        {services.map((service, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-2 mb-4">
            <div
              className={`icon-box icon-${index}`}
              style={{ background: service.bgcolor }}
            >
              <div className="icon">
                {" "}
                <img src={service.icon} alt="" />{" "}
              </div>
              <p className="mt-4 cs_fs_16"> {parse(service.title)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cs_height_48 cs_height_lg_48"></div>
    </div>
  );
};

export default AuthorServices;
