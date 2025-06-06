import React from 'react'
import TextBanner from '../Components/HeroBanner/TextBanner'
import StickyOrderSummary from '../Components/SectionDetails/StickyOrderSummary'
import TestimonialsCarousel from '../Components/Testimonial/TestimonialsCarousel'
import OtherServicesSection from '../Components/SectionDetails/OtherServicesSection';
import FeaturesSection from '../Components/SectionDetails/FeaturesSection';
import ContactHelpSection from '../Components/SectionDetails/ContactHelpSection';
import SectionTitle from '../Components/Common/SectionTitle';


const serviceData2 = [
  {
    title: "Journal Publication Support",
    description:
      "Navigating the research publication process can be challenging, but with our Journal Publication Support Services, you’ll receive expert guidance every step of the way.",
          bgColor: "bg-light-purple",
    textcolor: "#0C0A31",
    headcolor: "#0C0A31",

    radius: "br-left",
    left: false,
  },
  {
    title: "Journal Selection",
    description:
      "Our PhD expert can help boost your chances by analyzing your research and recommending 3-5 journals that match your publication goals, reducing the risk of rejection due to scope mismatch.",
        bgColor: "bg-light-blue",
    textcolor: "#011530",
    headcolor: "#011530",
    radius: "br-right",
    left: true,
  },
];

const feature = [
  {
    title: "Full Assist Publication Pack",
    description:
      "Our Full Assist service offers comprehensive support throughout your manuscript’s journey. From initial editing to final submission, we handle every aspect of the publication process, giving you the freedom to focus on your research.",
    image: "assets/img/fr-1.png",
 
           bgClass: "bg-light-teal",
    reverse: false,
 iseditingService:true,
   margintop:"0%",
        left: true,
  },
    {
    title: "Flexi Saver Publication Pack",
    description:
      "The Flexi Saver plan provides flexible support that allows you to select the services you need, whether it’s journal selection, peer review, or submission. This cost-effective option ensures that you get expert help exactly where it’s needed.",
    image: "assets/img/fr-8.png",
        bgClass: "bg-light-blue",

    reverse: true,
    rightcard: true,
       margintop:"-55%",
    right: true,
  },

  {
    title: "Pre-submission peer review",
    description:
      "We help promote and increase the visibility of your published research within the academic community and across relevant media platforms.",
        image: "assets/img/fr-9.png",
       bgClass: "bg-light-purple",
    reverse: false,
    margintop:"-27%",
    left: true,
  },
      {
    title: "Plagiarism check",
    description:
      "We provide you with a plagiarism report, helping you identify potential issues in your manuscript. Our detailed report highlights problematic sections and offers expert commentary to support your manuscript's evaluation.",
    image: "assets/img/fr-10.png",
       bgClass: "bg-light-teal",
    reverse: true,
    rightcard: true,
       margintop:"-55%",
    right: true,
  },

  {
    title: "Journal Submission",
    description:
      "Our experts guide you through the entire journal submission process, from account creation to final submission.",
        image: "assets/img/fr-11.png",
          bgClass: "bg-light-blue",
    reverse: false,
    margintop:"-27%",
    left: true,
  },
        {
    title: "Research Outreach",
    description:
      "We help promote and increase the visibility of your published research within the academic community and across relevant media platforms.",
    image: "assets/img/fr-12.png",
        bgClass: "bg-light-purple",
    reverse: true,
    rightcard: true,
       margintop:"-50%",
    right: true,
  },

  {
    title: "Translation Services",
    description:
      "We ensure effective communication by overcoming language barriers through document translation, interpretation, and other language support services.",
        image: "assets/img/fr-13.png",
  
              bgClass: "bg-light-teal",
    reverse: false,
    margintop:"-27%",
    left: true,
  },
          {
    title: "Citation Booster",
    description:
      "Give your research greater visibility with Citation Booster. This service is designed to reach a wider audience, increase readership, and improve your chances of being cited—ensuring your research makes a stronger impact in your field.",
    image: "assets/img/fr-14.png",
        bgClass: "bg-light-blue",
    reverse: true,
    rightcard: true,
       margintop:"-52%",
    right: true,
  },


];
const GetQuote = () => {
  return (
    <div>
        
  <TextBanner title="Customize" subtitle={"Own / Publication Package"}   bgimg="assets/img/bg-light.webp"/>

  <StickyOrderSummary/>
           <TestimonialsCarousel />

              <div>
    <div className='cs_height_40 cs_height_lg_40'></div>
    <SectionTitle Title={"Services"} SubTitle={"Available"} />
 <OtherServicesSection isTitle={false}  serviceData={serviceData2} />
   
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
        </div>
  )
}

export default GetQuote