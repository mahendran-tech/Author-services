import HeroBanner2 from "../Components/HeroBanner/HeroBanner2";
import Video1 from "../Components/Video/Video1";
import ResearchJourney1 from "../Components/SectionDetails/ResearchJourney1";
import AuthorServices from "../Components/SectionDetails/AuthorServices";
import PackageDetails from "../Components/SectionDetails/PackageDetails";
import ProcessEditing from "../Components/SectionDetails/ProcessEditing";
import TestimonialsCarousel from "../Components/Testimonial/TestimonialsCarousel";
import ExpertEditors from "../Components/SectionDetails/ExpertEditors ";
import FaqSection from "../Components/SectionDetails/FaqSection";
import { homeimage } from "../assets/assets.js";
import ScrollingGallery from "../Components/SectionDetails/ScrollingGallery.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home2 = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;

    if (hash) {
      const el = document.getElementById(hash.substring(1)); // removes '#' from "#testimonial"
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="homepage2">
      <HeroBanner2
        bgimg={homeimage.banner1}
        // subtitle="Battery Check & Replace"
        title="Author Services"
        conetnt="Helping researchers achieve global recognition through professional editing, publication guidance, and practical support for impactful results."
        btnname="Read more"
        img1={homeimage.hero1}
        btnurl="/"
        videoname="Watch Our Story"
      ></HeroBanner2>
      <div>
        <ScrollingGallery />
      </div>
      <div className="section-bg-color overflow-hidden">
        <ResearchJourney1 />
      </div>
      <AuthorServices />
      <Video1></Video1>
      <PackageDetails />
      <ProcessEditing />
      {/* <TestimonialsCarousel /> */}
      <div id="testimonial">
        {/* other components */}
        <TestimonialsCarousel /> {/* Wrapped above with id="testimonial" */}
      </div>
      <ExpertEditors />
      {/* <FaqSection /> */}
      <div id="faq">
        <FaqSection />
      </div>
    </div>
  );
};

export default Home2;
