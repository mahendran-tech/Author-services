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

const expertData = [
  {
    icon: homeimage.edit1, // Replace with actual icon or <img src="..." />
    text: "Editors who are native English speakers and possess proficiency in English grammar, syntax, and usage.",
  },
  {
    icon: homeimage.edit2,
    text: "Experts with extensive experience in editing and proofreading academic papers across all disciplines.",
  },
  {
    icon: homeimage.edit3,
    text: "Chosen from a wide pool of candidates through a meticulous editing and language proficiency assessment.",
  },
  {
    icon: homeimage.edit4,
    text: "Experienced scientific editors and proofreaders proficient in their field.",
  },
  {
    icon: homeimage.edit5,
    text: "Educated in refining academic papers via specialized workshops.",
  },
];

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
      <div id="PackageDetails">
        <PackageDetails />
      </div>

      <ProcessEditing />
      {/* <TestimonialsCarousel /> */}
      <div id="testimonial">
        {/* other components */}
        <TestimonialsCarousel /> {/* Wrapped above with id="testimonial" */}
      </div>
      <ExpertEditors expertData={expertData} isImage={true} />
      {/* <FaqSection /> */}
      <div id="faq">
        <FaqSection />
      </div>
    </div>
  );
};

export default Home2;
