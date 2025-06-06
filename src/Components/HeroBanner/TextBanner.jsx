import {useEffect} from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import SectionTitle from "../Common/SectionTitle";
const TextBanner = ({
  bgimg,
  subtitle,
  title,

}) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="cs_hero cs_style_1 cs_bg_filed cs_primary_bg cs_center cs_ripple_activate  position-relative"
      data-background={bgimg}>
      <div className="white-overlay"></div>
      <div className="container d-flex flex-column flex-lg-row  gap-4 align-items-center justify-content-center">
        <div
          className="cs_hero_text "
          data-wow-duration="0.9s"
          data-wow-delay="0.25s">
 
             <div className="d-flex justify-content-center flex-column  align-items-center">
                <h3 className="text-center">{title} </h3>
                <h3 className="text-primary text-center">{subtitle}</h3>
             </div>
          
        </div>
     
      </div>
    </section>
  );
};

export default TextBanner;
