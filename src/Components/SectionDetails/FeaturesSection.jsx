import React from "react";
import FeatureCard from "../Common/FeatureCard";
import SectionTitle2 from "../Common/SectionTitle2";

const FeaturesSection = ({features, isTitle = true}) => {
  return (
    <>
      <section className="position-relative ">
        {isTitle && (
          <>
            <div className="cs_height_100 cs_height_lg_110" />
            <div>
              <SectionTitle2
                Title={"Advance Value–added"}
                SubTitle={"Features for Researchers"}
              />
            </div>
            <div className="cs_height_40 cs_height_lg_30" />
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
