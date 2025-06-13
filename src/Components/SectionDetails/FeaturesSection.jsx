import React from "react";
import FeatureCard from "../Common/FeatureCard";
import SectionTitle from "../Common/SectionTitle";

const FeaturesSection = ({features, isTitle = true}) => {
  return (
    <>
      <section className="position-relative ">
        {isTitle && (
          <>
            <div className="cs_height_48 cs_height_lg_48" />
            <div>
              <SectionTitle
                Title={"Other Services"}
                SubTitle={"We Provide"}
              />
            </div>
            <div className="cs_height_20 cs_height_lg_20" />
          </>
        )}

        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </section>
    </>
  );
};

export default FeaturesSection;
