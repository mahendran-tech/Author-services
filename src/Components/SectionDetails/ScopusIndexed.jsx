import React from "react";
import { Container } from "react-bootstrap";
import SectionTitle2 from "../Common/SectionTitle2";
import TestimonialSlider from "../Testimonial/TestimonialSlider";

const ScopusIndexed = () => {
  return (
    <section className="cs_tabs cs_style_1 position-relative">
      <div className="cs_height_80 cs_height_lg_80" />
      <Container>
        <div className="cs_section_heading cs_style_1 cs_mb_10 text-center">
          <SectionTitle2
            Title="Participate in ICTERLT - 2025 & Get Published in Scopus-Indexed Journals"
            isCenter="true"
          />
        </div>

        <div className="">
          <div className="cs_height_20 cs_height_lg_20" />
          <TestimonialSlider />
        </div>
      </Container>
      <div className="cs_height_40 cs_height_lg_40" />
    </section>
  );
};

export default ScopusIndexed;
