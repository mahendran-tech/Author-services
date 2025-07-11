import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import SectionTitle from "../Common/SectionTitle";
import parse from "html-react-parser";
const ContactBanner = ({ bgimg, subtitle, title, img1, conetnt, conetnt1 }) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="cs_hero cs_style_1 cs_bg_filed cs_primary_bg cs_center cs_ripple_activate pb-0  position-relative"
      data-background={bgimg}
    >
      <div className="white-overlay"></div>

      <div className="container d-flex flex-column flex-lg-row  gap-4 align-items-center justify-content-between">
        <div
          className="cs_hero_text "
          data-wow-duration="0.9s"
          data-wow-delay="0.25s"
        >
          <>
            <h3 className=" fw-bold cs_fs_36 cs_mb_20">
              {parse(title)}{" "}
              <span className="text-primary cs_fs_30"> {subtitle}</span>{" "}
            </h3>
            <div>
              <ul className="text-left list-unstyled list-style-one">
                <li className="mb-2 d-flex align-items-start gap-2">
                  <img src="assets/img/icon/right-arrow-yellow.svg" alt="" />{" "}
                  <span>{conetnt} </span>
                </li>
                {conetnt1 && (
                  <li className="mb-2 d-flex align-items-start gap-2">
                    <img src="assets/img/icon/right-arrow-yellow.svg" alt="" />{" "}
                    {""}
                    <span> {conetnt1} </span>
                  </li>
                )}
              </ul>
            </div>
          </>
        </div>
        <div>
          <div className="hero-img">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
