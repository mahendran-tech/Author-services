import React from 'react'
import TextBanner from '../Components/HeroBanner/TextBanner'
import StickyOrderSummary from '../Components/SectionDetails/StickyOrderSummary'
import TestimonialsCarousel from '../Components/Testimonial/TestimonialsCarousel'
import OtherServicesSection from '../Components/SectionDetails/OtherServicesSection'
import FeaturesSection from '../Components/SectionDetails/FeaturesSection'
import ContactHelpSection from '../Components/SectionDetails/ContactHelpSection'

const serviceData2 = [
  {
    title: "Core Editing",
    description:
      "Our Core Editing service focuses on improving language, clarity, and readability.",
        bgColor: "bg-light-blue",
    textcolor: "#011530",
    headcolor: "#011530",
    radius: "br-left",
    left: false,
  },
  {
    title: "Exclusive Editing",
    description:
      "Our Exclusive editing service offers content level editing tailored to give you the best chance of acceptance in high-impact journals.",
    bgColor: "bg-light-purple",
    textcolor: "#0C0A31",
    headcolor: "#0C0A31",
    radius: "br-right",
    left: true,
  },
];

const feature = [
  {
    title: "Research Editing",
    description:
      "Our Research editing service offers peer review assistance following domain-specific content-level editing, offering expert advice on your manuscript.",
    image: "assets/img/fr-20.png",
     bgClass: "bg-light-blue",
    rightcard: true,
 reverse: true,
 iseditingService:true,
   margintop:"0%",
      right: true,
  },
  {
    title: "Thesis Editing",
    description:
      "Our editors will edit your thesis or dissertation to enhance clarity, conciseness, and flow of text and correct grammar, punctuation, and spelling errors and make stylistic improvements. The revised work will be reader-friendly, maintaining a formal academic tone for easy evaluation by examiners.",
        image: "assets/img/fr-21.png",
      bgClass: "bg-light-teal",
    reverse: false,
    margintop:"-60%",
    left: true,
  },
  {
    title: "Proofreading",
    description:
      "Proofreading is the final and most important step in editing. Our proofreaders will ensure that your manuscript is free of basic grammar, punctuation, and spelling errors and will verify that its format aligns with the target journal’s guidelines. ",
    image: "assets/img/fr-22.png",
    bgClass: "bg-light-purple",
    reverse: true,
    rightcard: true,
       margintop:"-40%",
    right: true,
  },


];

const CustomizeEditingServices  = () => {
  return (
  <>
  <TextBanner title="Editing Services" subtitle={"Customize Your Package"}   bgimg="assets/img/bg-light.webp"/>

  <StickyOrderSummary/>
 
{/* <FullOrderForm/> */}
   <TestimonialsCarousel />
   <div>
    <div className='cs_height_40 cs_height_lg_40'></div>
 <OtherServicesSection isTitle={false} serviceData={serviceData2} />
   
   </div>
       <FeaturesSection features={feature} isTitle={false} />
     <div className='cs_height_50 cs_height_lg_50'></div>  
     <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-10 col-sm-12">
  <ContactHelpSection />
        </div>
      </div>
     </div>

  </>
  )
}

export default CustomizeEditingServices 