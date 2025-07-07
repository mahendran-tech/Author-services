import React, { useEffect } from "react";
import SectionBanner from "../Components/HeroBanner/SectionBanner";
import AdditionalBenefits from "../Components/Project/AdditionalBenefits";
import EditingSample from "../Components/SectionDetails/EditingSample";
import ServiceCardGrid from "../Components/Project/ServiceCardGrid";
import ServiceWorks from "../Components/Project/ServiceWorks";
import { useLocation } from "react-router-dom";

const ThesisEditing = () => {
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
    <div>
      <SectionBanner
        bgimg="assets/img/bg-light.webp"
        // subtitle="Battery Check & Replace"
        title="Thesis"
        subtitle=" Editing"
        conetnt="Our Thesis Editing service helps you submit a clear, well-structured, and professionally written thesis that meets academic standards and makes a strong impression."
        conetnt1="A skilled editor will review your Master's or Ph.D. thesis to enhance clarity, coherence, grammar, style, and formatting ensuring it is polished, easy to follow, and ready for evaluation."
        btnname="Get a Quote"
        img1="assets/img/thisediting.png"
        btnurl="/customize-editing-services"
        edit={true}
        isSecondbtn={true}
        secondbtnname="View Sample"
        secondbtnurl="#sample"
        editingsection={true}
      ></SectionBanner>
      <AdditionalBenefits btnurl="/customize-editing-services" />
      <div id="sample">
        <EditingSample btnurl={"/customize-editing-services"} />
      </div>

      <ServiceCardGrid />
      <ServiceWorks />
    </div>
  );
};

export default ThesisEditing;
