import {useEffect} from "react";
import {Link} from "react-router-dom";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const SectionBanner = ({
  bgimg,
  subtitle,
  title,
  conetnt,
  btnname,
  btnurl,
  img1,
  editingsection,
}) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="cs_hero cs_style_1 cs_bg_filed cs_primary_bg cs_center cs_ripple_activate  position-relative"
      data-background={bgimg}>
      <div className="white-overlay"></div>
      <div className="container d-flex flex-column flex-lg-row  gap-4 align-items-center justify-content-between">
        <div
          className="cs_hero_text "
          data-wow-duration="0.9s"
          data-wow-delay="0.25s">
          <h3 className="cs_hero_mini_title cs_accent_color cs_fs_18 cs_medium cs_mb_8 text-uppercase">
            {subtitle}
          </h3>
          <h1 className="  cs_fs_30 cs_mb_18 wow fadeInUp">{title}</h1>
          {editingsection && (
            <p className="cs_section_subtitle  cs_fs_16  cs_accent_color cs_mb_34">
              {conetnt}
            </p>
          )}

          <div className="cs_hero_btns">
            <Link to={btnurl} className="cs_btn cs_style_1 wow fadeInLeft">
              <span>{btnname}</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
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

export default SectionBanner;
