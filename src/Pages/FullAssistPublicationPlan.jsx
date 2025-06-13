import React from 'react'
import SectionBanner from '../Components/HeroBanner/SectionBanner'
import ServicesGrid from '../Components/Process/ServicesGrid'
import SupportGrid from '../Components/Process/SupportGrid'

const FullAssistPublicationPlan = () => {
  return (
    <div>
        
              <SectionBanner
        bgimg="assets/img/bg-light.webp"
        // subtitle="Battery Check & Replace"
        title="Full Assist"
        subtitle="Publication Plan"
        conetnt="We provide end-to-end support for your paper—from journal selection, pre-submission peer review, plagiarism check, editing, formatting, cover letter preparation, and journal submission."
        conetnt1={"Receive expert guidance to boost your chances of acceptance. "}
        btnname="Get a Quote"
       img1="assets/img/full-assist.png"
        btnurl="/"
        edit={true}
        editingsection={true}></SectionBanner>
        <ServicesGrid/>
        <SupportGrid/>
        
        
        </div>
  )
}

export default FullAssistPublicationPlan