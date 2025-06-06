import React from "react";
import parse from "html-react-parser";
import SectionTitle2 from "../Common/SectionTitle2";
import { homeimage } from "../../assets/assets";

const services = [
  {icon: homeimage.team, title: "Expert <br/> Team"},
  {icon: homeimage.assurence, title: "Quality <br/> Assurance"},
  {icon: homeimage.saftey, title: "Data <br/> Safety"},
  {icon: homeimage.time, title: "Save Time <br/> and Effort"},
  {
    icon: homeimage.publishing,
    title: "Proven <br/> Publishing History",
  },
  {icon: homeimage.editing, title: "Editing <br/> Certificate"},
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
            <div className={`icon-box icon-${index}`}>
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
