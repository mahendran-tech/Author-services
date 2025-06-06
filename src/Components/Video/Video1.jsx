import {useEffect, useState} from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import VideoModal from "../VideoModal/VideoModal";
import SectionTitle2 from "../Common/SectionTitle2";
import {Link} from "react-router-dom";
import { homeimage } from "../../assets/assets";

const Video1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="cs_video cs_style_1 cs_bg_filed position-relative"
      data-background={homeimage.bglight}>
      <div className="container">
        <div className="cs_video_overlay cs_white_bg position-absolute"></div>
        <div className="cs_video_content">
          <div className="cs_section_heading cs_style_1 cs_mb_14 text-center">
            <SectionTitle2
              Title="IFERP’s Research"
              SubTitle="Ethics and Methodology"
            />
          </div>
          <div>
            <p className="cs_fs_18">
              We prioritize research ethics, including honesty, informed
              consent, confidentiality, plagiarism prevention, respect for
              intellectual property, conflict disclosure, and ethical
              publication. Our methodology incorporates rigorous peer review,
              systematic design, reliable data collection, transparency,
              interdisciplinary collaboration, and continuous improvement.
            </p>
            <p className="cs_fs_18">
              Our author services are designed for those looking to enhance
              publication quality and extend their research reach. Authors
              retain ownership of their content, ensuring that their work meets
              the highest standards of academic and research excellence, in line
              with COPE guidelines.
            </p>
            <p className="cs_fs_18">
              Refine your research work into publication-ready manuscripts with
              our expert editors and proofreaders!
            </p>
            <div className="d-flex justify-content-center gap-4 mt-4">
              <Link to="" className="cs_btn cs_style_1 wow fadeInLeft">
                <span>Get a Quote</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <VideoModal
          isTrue={toggle}
          iframeSrc={iframeSrc}
          handelClose={handelClose}        
        ></VideoModal> */}
    </section>
  );
};

export default Video1;
