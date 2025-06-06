import React from 'react'
import SectionBanner from '../Components/HeroBanner/SectionBanner'
import AdditionalBenefits from '../Components/Common/AdditionalBenefits'
import EstimateSelector from '../Components/Project/EstimateSelector';
import OtherServicesSection from '../Components/SectionDetails/OtherServicesSection';
import FeaturesSection from '../Components/SectionDetails/FeaturesSection';
import SampleTabs from '../Components/SectionDetails/SampleTabs';
import ContactHelpSection from '../Components/SectionDetails/ContactHelpSection';

const benefitsData = [
      {icon: "assets/img/icon/sa-4.svg", text: "Re-editing or proofreading <br/> revision for 365 days"},
  {icon: "assets/img/icon/sa-6.svg", text: "Editing certificate "},

  {icon: "assets/img/icon/sa-8.svg", text: "Unlimited Q & A with Editors "},
    {icon: "assets/img/icon/sa-7.svg", text: "Journal cover letter"},
];

const serviceData2 = [
  {
    title: "Core Editing",
    description:
      "Our Core Editing service focuses on sentence-level editing for both pre- and post-journal submissions at an affordable rate.",
        bgColor: "bg-light-purple",
    textcolor: "#0C0A31",
    headcolor: "#0C0A31",
    radius: "br-left",
    left: false,
  },
  {
    title: "Thesis Editing",
    description:
      "Our editors revise your thesis or dissertation to improve its clarity, readability, and academic value. They correct grammar, punctuation, and spelling errors while improving sentence structure and flow.",
    bgColor: "bg-light-teal",
    textcolor: "#002021",
    headcolor: "#002021",
    radius: "br-right",
    left: true,
  },
];
const serviceData1 = [
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
    title: "Translation Services",
    description:
      "We ensure effective communication by overcoming language barriers through document translation, interpretation, and other language support services.",
    bgColor: "bg-light-blue",
    textcolor: "#011530",
    headcolor: "#011530",
    radius: "br-right",
    left: true,
  },
];

const feature = [
    {
    title: "Exclusive Editing",
    description:
      "Our Exclusive Editing service is designed to maximize your manuscript’s impact and readiness for submission to high-impact journals.",
        image: "assets/img/fr-1.png",
      bgClass: "bg-light-bluegreen",
    reverse: false,
       iseditingService: true,
    margintop:"0%",

    left: true,
  },

  {
    title: "Research Impact",
    description:
      "We help promote and increase visibility of your published research within the academic community and across relevant media platforms.",
    image: "assets/img/fr-10.png",
    bgClass: "bg-light-blue",
    reverse: true,
    rightcard: true,
    margintop:"-55%",
    right: true,
  },
];
const feature1 = [


  {
    title: "Citation Booster",
    description:
      "Give your research greater visibility with Citation Booster. This service is designed to reach a wider audience, increase readership, and improve your chances of being cited—ensuring your research makes a stronger impact in your field.",
    image: "assets/img/fr-23.png",
    bgClass: "bg-light-purple",
    reverse: true,
    rightcard: true,
    margintop:"-35%",
    right: true,
  },
];


const ResearchEditing = () => {
  return (
    <div>
              <SectionBanner
        bgimg="assets/img/bg-light.webp"
        // subtitle="Battery Check & Replace"
        title="Research"
        subtitle=" Editing"
        conetnt="Our Research Editing service combines expert peer-review and subject-specific editing to help you strengthen your manuscript before submission."
        conetnt1="A qualified peer reviewer from your field will provide detailed feedback on content, structure, and potential gaps, followed by comprehensive editing from a subject-area expert to ensure clarity, logical flow, and journal readiness."
        btnname="Get a free Quote"
        img1="assets/img/research-editing.png"
        btnurl="/"
        edit={true}
        editingsection={true}></SectionBanner>
        
                  <AdditionalBenefits
      title="Research Editing"
      subtitle="Additional Benefits"
      benefits={benefitsData}
    />
    <div>
        <div className='cs_height_80 cs_height_lg_80'></div>
  <EstimateSelector/>
    </div>

    <div className='bg-light'>
        <div className='cs_height_50 cs_height_lg_50'></div>
             <OtherServicesSection isTitle={true} title={"Advance Value-added"} subtitle={"Features for Researchers"} serviceData={serviceData2} />
               <FeaturesSection features={feature} isTitle={false} />
                  <OtherServicesSection isTitle={false} title={"Advance Value-added"} subtitle={"Features for Researchers"} serviceData={serviceData1} />
  <FeaturesSection features={feature1} isTitle={false} />
                <SampleTabs isTitle={true} title={"Research Editing"} isbutton={true} subtitle={"Samples"} />
      <ContactHelpSection />
    <div className='cs_height_50 cs_height_lg_50'></div>
    </div>
   
        </div>
  )
}

export default ResearchEditing