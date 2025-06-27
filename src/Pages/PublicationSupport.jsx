import React from "react";
import SectionBanner from "../Components/HeroBanner/SectionBanner";
import GlassyCardSection from "../Components/Project/GlassyCardSection";
import YourPublicationJourny from "../Components/Project/YourPublicationJourny";
import ServicesTimeline from "../Components/Process/ServicesTimeline";
import PublicationPackages from "../Components/Process/PublicationPackages";

const PublicationSupport = () => {
  return (
    <div>
      <SectionBanner
        bgimg="assets/img/bg-light.webp"
        // subtitle="Battery Check & Replace"
        title="Publication"
        subtitle="Support"
        conetnt="From preparing your manuscript to navigating peer review, publishing can feel overwhelming. Our experienced team supports you at every step, ensuring timely and successful submission. Let us handle the entire process—from journal selection and manuscript editing to submission, reviewer communication, and post-review revisions—so you can move forward with confidence, knowing every step is professionally managed."
        btnname="Get a Quote"
        img1="assets/img/publication.png"
        btnurl="/"
        edit={true}
        editingsection={true}
      ></SectionBanner>
      {/* <GlassyCardSection /> */}
      <YourPublicationJourny
        Title={"Your Publication Journey:"}
        SubTitle={"Expert Support Every Step of the Way"}
        Content={
          "Navigating the research publication process can be challenging. But with IFERP’s Publication Support Services, you will have expert guidance at every stage. From selecting the right journal to managing peer review and final submission, we provide end-to-end support designed to help your work succeed."
        }
        ImagePath={"assets/img/pub-1.png"}
      />
      <PublicationPackages />
      <ServicesTimeline />
    </div>
  );
};

export default PublicationSupport;
