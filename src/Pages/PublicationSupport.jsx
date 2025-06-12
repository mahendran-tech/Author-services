import React from 'react'
import SectionBanner from '../Components/HeroBanner/SectionBanner'
import GlassyCardSection from '../Components/Project/GlassyCardSection'
import YourPublicationJourny from '../Components/Project/YourPublicationJourny'
import ServicesTimeline from '../Components/Process/ServicesTimeline'

const PublicationSupport = () => {
  return (
    <div>
        
              <SectionBanner
        bgimg="assets/img/bg-light.webp"
        // subtitle="Battery Check & Replace"
        title="Publication"
        subtitle="Support"
        conetnt="From preparing your manuscript to navigating peer review, publishing can feel overwhelming. Our experienced team is here to guide you through every step, making sure you submit successfully and on time. We’ll handle the entire process—editing, submission, and beyond—so you can stay focused on what matters: your research."
        btnname="Get a Quote"
       img1="assets/img/publication.png"
        btnurl="/"
        edit={true}
        editingsection={true}></SectionBanner>
{/* <GlassyCardSection/> */}
<YourPublicationJourny/>
<ServicesTimeline/>

        
        </div>
  )
}

export default PublicationSupport