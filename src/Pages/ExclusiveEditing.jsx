import React from 'react'
import SectionBanner from '../Components/HeroBanner/SectionBanner'
import AdditionalBenefits from '../Components/Common/AdditionalBenefits'
import DeliveryOptions from '../Components/SectionDetails/DeliveryOptions';
import EstimateSelector from '../Components/Project/EstimateSelector';
import WhyChoose from '../Components/Project/WhyChoose';
import OtherServicesSection from '../Components/SectionDetails/OtherServicesSection';
import FeaturesSection from '../Components/SectionDetails/FeaturesSection';
import SampleTabs from '../Components/SectionDetails/SampleTabs';
import ContactHelpSection from '../Components/SectionDetails/ContactHelpSection';

const benefitsData = [
      {icon: "assets/img/icon/sa-4.svg", text: "Re-editing or proofreading <br/> revision for 365 days"},
  {icon: "assets/img/icon/sa-8.svg", text: "Unlimited Q&A <br/> with editors"},

  {icon: "assets/img/icon/sa-7.svg", text: "Journal cover letter"},
    {icon: "assets/img/icon/sa-6.svg", text: "Editing certificate"},
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
    title: "Research Editing",
    description:
      "Our Research Editing service provides expert pre-submission peer review, offering in-depth feedback on content, structure, and gaps to strengthen your manuscript before journal submission.",
    bgColor: "bg-light-teal",
    textcolor: "#002021",
    headcolor: "#002021",
    radius: "br-right",
    left: true,
  },
];

const serviceData3 = [
  {
    title: "Research Impact",
    description:
      "We help promote and increase the visibility of your published research within the academic community and across relevant media platforms.",
          bgColor: "bg-light-teal",
    textcolor: "#002021",
    headcolor: "#002021",

    radius: "br-left",
    left: false,
  },
  {
    title: "Citation Booster",
    description:
      "Through Citation Booster, we help improve your research’s visibility and citation rate, maximizing its academic impact.",
        bgColor: "bg-light-purple",
    textcolor: "#0C0A31",
    headcolor: "#0C0A31",
    radius: "br-right",
    left: true,
  },
];

const feature = [


  {
    title: "Thesis Editing",
    description:
      "Our editors revise your thesis or dissertation to improve its clarity, readability, and academic value. They correct grammar, punctuation, and spelling errors while improving sentence structure and flow.",
    image: "assets/img/fr-8.png",
    bgClass: "bg-light-blue",
    reverse: true,
    rightcard: true,
    margintop:"-28%",
    right: true,
  },
    {
    title: "Journal Publication Support",
    description:
      "Navigating the research publication process can be challenging, but with our Journal Publication Support Services, you’ll receive expert guidance every step of the way.",
        image: "assets/img/fr-9.png",
      bgClass: "bg-light-purple",
    reverse: false,
    margintop:"-35%",
    left: true,
  },
    {
    title: "Translation Services",
    description:
      "We ensure effective communication by overcoming language barriers through document translation, interpretation, and other language support services.",
    image: "assets/img/fr-12.png",
    bgClass: "bg-light-blue",
    reverse: true,
    rightcard: true,
    margintop:"-40%",
    right: true,
  },


];


const ExclusiveEditing = () => {
  return (
    <div>
         <SectionBanner
        bgimg="assets/img/bg-light.webp"
        // subtitle="Battery Check & Replace"
        title="Exclusive"
        subtitle=" Editing"
        conetnt="Our Exclusive Editing service is designed to maximize your manuscript’s impact and readiness for submission to high-impact journals."
        conetnt1="An expert from your subject area will carefully edit your work to improve its content, structure, clarity, grammar, punctuation, and style. This service is ideal for researchers seeking detailed, high-quality editing tailored to their specific field and research goals."
        btnname="Get a Quote"
        img1="assets/img/exclusive-editing.png"
        btnurl="/"
        edit={true}
        editingsection={true}></SectionBanner>
        
          <AdditionalBenefits
      title="Exclusive Editing"
      subtitle="Additional Benefits"
      benefits={benefitsData}
    />
        <WhyChoose/>
     {/* <DeliveryOptions/> */}
     <EstimateSelector/>
      <OtherServicesSection isTitle={true} title={"Other Services"} subtitle={"We Provide"} serviceData={serviceData2} />
      <FeaturesSection features={feature} isTitle={false} />
          <OtherServicesSection isTitle={false} title={"Advance Value-added"} subtitle={"Features for Researchers"} serviceData={serviceData3} />
                <SampleTabs isTitle={true} title={"Exclusive Editing"} isbutton={true} subtitle={"Samples"} />
      <ContactHelpSection />
        </div>
       
  )
}

export default ExclusiveEditing