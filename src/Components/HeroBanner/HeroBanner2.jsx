import {useEffect} from "react";
import {Link} from "react-router-dom";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const HeroBanner2 = ({
  bgimg,
  subtitle,
  title,
  conetnt,
  btnname,
  btnurl,
  img1,
}) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="cs_hero cs_style_1 cs_bg_filed cs_primary_bg cs_center cs_ripple_activate "
      data-background={bgimg}>
      <div className="container d-flex flex-column flex-lg-row  gap-4 align-items-center justify-content-between">
        <div
          className="cs_hero_text "
          data-wow-duration="0.9s"
          data-wow-delay="0.25s">
          <h3 className="cs_hero_mini_title cs_accent_color cs_fs_18 cs_medium cs_mb_8 text-uppercase">
            {subtitle}
          </h3>
          <h1 className="cs_hero_title  cs_fs_70 cs_mb_18 wow fadeInUp">
            {title}
          </h1>
          <p className="cs_hero_subtitle  cs_accent_color cs_mb_34">
            {conetnt}
          </p>
          <div className="cs_hero_btns">
            <Link to={btnurl} className="cs_btn cs_style_1 wow fadeInLeft">
              <span>{btnname}</span>
              <i className="bi bi-arrow-right"></i>
            </Link>

            <Link
              to="#"
              className="cs_text_btn cs_style_1 cs_bold cs_heading_color">
              <span className="cs_btn_text ">Enquire Now</span>
              <span className="cs_btn_icon cs_center">
                <i className="bi bi-arrow-right"></i>
                <i className="bi bi-arrow-right"></i>
              </span>
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

export default HeroBanner2;
