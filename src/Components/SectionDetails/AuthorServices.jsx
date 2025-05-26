import React from "react";
import parse from "html-react-parser";
import SectionTitle2 from "../Common/SectionTitle2";

const services = [
  {icon: "assets/img/icon/team.svg", title: "Expert <br/> Team"},
  {icon: "assets/img/icon/assurence.svg", title: "Quality <br/> Assurance"},
  {icon: "assets/img/icon/saftey.svg", title: "Data <br/> Safety"},
  {icon: "assets/img/icon/time.svg", title: "Save Time <br/> and Effort"},
  {
    icon: "assets/img/icon/publishing.svg",
    title: "Proven <br/> Publishing History",
  },
  {icon: "assets/img/icon/editing.svg", title: "Editing <br/> Certificate"},
];

const AuthorServices = () => {
  return (
    <div className="container text-center my-5">
      <SectionTitle2 Title="Why Choose" SubTitle=" IFERP Author Services?" />
      <div className="row mt-5">
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
      <div className="cs_height_40 cs_height_lg_50"></div>
    </div>
  );
};

export default AuthorServices;
