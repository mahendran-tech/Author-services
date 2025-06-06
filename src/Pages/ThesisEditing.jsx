import React from 'react'
import SectionBanner from '../Components/HeroBanner/SectionBanner'
import AdditionalBenefits from '../Components/Project/AdditionalBenefits'
import EditingSample from '../Components/SectionDetails/EditingSample'
import ServiceCardGrid from '../Components/Project/ServiceCardGrid'
import ServiceWorks from '../Components/Project/ServiceWorks'


const ThesisEditing = () => {
  return (
    <div>
                  <SectionBanner
        bgimg="assets/img/bg-light.webp"
        // subtitle="Battery Check & Replace"
        title="Thesis"
        subtitle=" Editing"
        conetnt="Our Thesis Editing service helps you submit a clear, well-structured, and professionally written thesis that meets academic standards and makes a strong impression."
        conetnt1="A skilled editor will review your Master's or Ph.D. thesis to enhance clarity, coherence, grammar, style, and formatting ensuring it is polished, easy to follow, and ready for evaluation."
        btnname="Get a Quote"
        img1="assets/img/thisediting.png"
        btnurl="/"
        edit={true}
        isSecondbtn={true}
        secondbtnname="View Sample"
        secondbtnurl="/"
        editingsection={true}></SectionBanner>
       <AdditionalBenefits/>
       <EditingSample/>
       <ServiceCardGrid/>
       <ServiceWorks/>
        
        </div>
  )
}

export default ThesisEditing