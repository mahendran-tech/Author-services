import React from 'react'
import SectionBanner from '../Components/HeroBanner/SectionBanner'
import FlexiSaver from '../Components/SectionDetails/FlexiSaver'
import WhatYouGet from '../Components/SectionDetails/WhatYouGet'

const FlexiSaverPublication = () => {
  return (
    <div>
        
              <SectionBanner
        bgimg="assets/img/bg-light.webp"
        // subtitle="Battery Check & Replace"
        title="Flexi Saver"
        subtitle="Publication Pack"
        conetnt="The Flexi Saver plan offers flexible support, letting you choose the services you need—journal selection, peer review, or journal submission. This cost-effective option ensures you get expert help exactly where and when you need it."

        btnname="Get a Quote"
       img1="assets/img/flexi-saver.png"
        btnurl="/"
        edit={true}
        editingsection={true}></SectionBanner>
        <FlexiSaver/>
        <WhatYouGet/>
        
        </div>
  )
}

export default FlexiSaverPublication