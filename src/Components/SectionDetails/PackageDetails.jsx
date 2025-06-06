import React, {useState} from "react";
import {Container, Row, Col, Nav, Card, Button} from "react-bootstrap";
import {RiEditLine} from "react-icons/ri";
import {FaArrowRightLong} from "react-icons/fa6";
import {FaRegUser, FaSearch} from "react-icons/fa";
import SectionTitle from "../Common/SectionTitle";
import EditingServicesTable from "../Project/EditingServicesTable";



  const packageData = {
    publication: {
      label: "Editing Package",
      headers: [  {
    title: 'Core Editing',
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.4805 20.6654C17.6392 20.4698 20.9621 17.025 20.9621 12.8186C20.9621 8.61224 17.6395 5.16776 13.4805 4.97192V8.32424C15.7944 8.51528 17.62 10.4561 17.62 12.8186C17.62 15.1812 15.7941 17.122 13.4805 17.313V20.6654Z"
          fill="#FF2661"
        />
        <path
          d="M13.4802 9.28516V16.352C15.2642 16.1645 16.6597 14.6516 16.6597 12.8186C16.6597 10.9856 15.2645 9.47268 13.4802 9.28516ZM12.5202 25.6064V0.0307617C5.6738 0.283562 0.200195 5.91044 0.200195 12.8186C0.200195 19.7268 5.6738 25.3536 12.5202 25.6064Z"
          fill="#FF2661"
        />
        <path
          d="M13.4805 0.0307617V4.01156C18.1685 4.209 21.9221 8.08324 21.9221 12.8186C21.9221 17.554 18.1685 21.4285 13.4805 21.6253V25.6064C20.3269 25.3536 25.8005 19.7268 25.8005 12.8186C25.8005 5.91044 20.3269 0.283562 13.4805 0.0307617Z"
          fill="#FF2661"
        />
      </svg>
    ),
    description: 'Sentence-level editing for pre- and post-journal submission at an affordable rate',
    button: 'Select Core Editing →',
  },
  {
    title: 'Support Features',
    icon:<>
    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.6661 8.43193V21.2053C29.6661 24.8853 26.6794 27.8719 22.9994 27.8719H9.66611C9.05278 27.8719 8.46611 27.7919 7.89278 27.6319C7.06611 27.4053 6.79944 26.3519 7.41278 25.7386L21.5861 11.5653C21.8794 11.2719 22.3194 11.2053 22.7328 11.2853C23.1594 11.3653 23.6261 11.2453 23.9594 10.9253L27.3861 7.48527C28.6394 6.23193 29.6661 6.64527 29.6661 8.43193Z" fill="#FF2661"></path><path d="M19.8533 10.632L5.89333 24.592C5.25333 25.232 4.18667 25.072 3.76 24.272C3.26667 23.3653 3 22.312 3 21.2053V8.43196C3 6.6453 4.02667 6.23196 5.28 7.4853L8.72 10.9386C9.24 11.4453 10.0933 11.4453 10.6133 10.9386L15.3867 6.15196C15.9067 5.63196 16.76 5.63196 17.28 6.15196L19.8667 8.73863C20.3733 9.25863 20.3733 10.112 19.8533 10.632Z" fill="#FF2661"></path></svg></>,
    description: 'Content level editing tailored to give you the best chance of acceptance in high-impact journals.',
    button: 'Select Exclusive Editing →',
  },
  {
    title: 'Research Editing',
    icon:<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.7583 30.8115C8.43272 30.0207 3.46357 25.0515 2.67359 18.7275C2.61167 18.2389 2.9934 17.8054 3.48763 17.8054H6.80387C7.20446 17.8054 7.54577 18.0946 7.6131 18.4888C8.25085 22.2657 11.2177 25.2334 14.9971 25.872C15.3913 25.9392 15.6805 26.2806 15.6805 26.6812V29.9974C15.6805 30.4854 15.2574 30.8709 14.7583 30.8115ZM6.80414 15.9457H3.48791C2.9934 15.9457 2.612 15.5118 2.67386 15.0235C3.54239 8.06572 9.48743 2.8186 16.5012 2.8186C19.6172 2.8186 22.5713 3.83453 25.0446 5.75667C25.4379 6.06357 25.4674 6.63903 25.1215 6.98492L22.7771 9.33008C22.4935 9.6145 22.048 9.64978 21.7211 9.4182C20.182 8.32132 18.3768 7.74126 16.5012 7.74126C12.0873 7.74126 8.34882 10.9045 7.61332 15.2623C7.54604 15.6564 7.20473 15.9457 6.80414 15.9457ZM17.5401 29.9982V26.682C17.5401 26.2814 17.8294 25.9401 18.2236 25.8727C22.5814 25.1372 25.7446 21.3987 25.7446 16.9849C25.7446 15.1092 25.1645 13.3041 24.0676 11.7649C23.8353 11.4388 23.8722 10.9917 24.1558 10.7089L26.5009 8.36458C26.8424 8.02311 27.4196 8.04477 27.7292 8.44148C29.6513 10.9148 30.6672 13.8689 30.6672 16.9848C30.6672 23.9986 25.4201 29.9437 18.4623 30.8122C18.3469 30.8267 18.2297 30.8165 18.1185 30.7822C18.0073 30.748 17.9046 30.6904 17.8174 30.6134C17.7302 30.5364 17.6603 30.4417 17.6125 30.3357C17.5647 30.2296 17.54 30.1145 17.5401 29.9982Z" fill="#FF2661"></path><path d="M13.3833 13.5395C13.3833 13.0864 13.016 12.719 12.5629 12.719H10.922C10.4689 12.719 10.1016 13.0864 10.1016 13.5395V20.103C10.1016 20.5561 10.4689 20.9234 10.922 20.9234H12.5629C13.016 20.9234 13.3833 20.5561 13.3833 20.103V13.5395ZM18.306 20.103V11.8986C18.306 11.4455 17.9387 11.0781 17.4856 11.0781H15.8447C15.3916 11.0781 15.0242 11.4455 15.0242 11.8986V20.103C15.0242 20.5561 15.3916 20.9234 15.8447 20.9234H17.4856C17.9387 20.9234 18.306 20.5561 18.306 20.103ZM23.2287 20.103V16.8212C23.2287 16.3681 22.8613 16.0008 22.4082 16.0008H20.7673C20.3142 16.0008 19.9469 16.3681 19.9469 16.8212V20.103C19.9469 20.5561 20.3142 20.9234 20.7673 20.9234H22.4082C22.8614 20.9234 23.2287 20.5561 23.2287 20.103Z" fill="#FF2661"></path></svg>,
    description: 'Peer review assistance following subject-area-specific content level editing, offering expert advice on your manuscript',
    button: 'Select Research Editing →',
  }],
      rows: [  {
    data: [
      { icon: true, text: 'Language editing & grammatical corrections' },
      { icon: true, text: 'Language editing & grammatical corrections' },
      { icon: true, text: 'Language editing & grammatical corrections' }
    ]
  },
  {
    data: [
      { icon: true, text: 'Manuscript formatting as per target journal guidelines – 1 round' },
      { icon: true, text: 'Manuscript formatting as per target journal guidelines – 1 round' },
      { icon: true, text: 'Manuscript formatting as per target journal guidelines – 1 round' }
    ]
  },
  {
    data: [
      { icon: true, text: 'Editing certificate' },
      { icon: true, text: 'Editing certificate' },
      { icon: true, text: 'Editing certificate' }
    ]
  },
  {
    data: [
      { icon: true, text: 'Unlimited Q&As with editors' },
      { icon: true, text: 'Unlimited Q&As with editors' },
      { icon: true, text: 'Unlimited Q&As with editors' }
    ]
  },
  {
    data: [
      { icon: true, text: 'Preparation of journal cover letter' },
      { icon: true, text: 'Preparation of journal cover letter' },
      { icon: true, text: 'Preparation of journal cover letter' }
    ]
  },
  {
    data: [
      { icon: true, text: 'Sentence-level editing for pre- and post-journal submission at an affordable rate.' },
      { icon: true, text: 'Improving paper structure and flow' },
      { icon: true, text: 'Improving paper structure and flow' }
    ]
  },

  {
    data: [
      { icon: false, text: '' },
      { icon: true, text: 'Re-editing or proofreading for 365 days or lifetime support for same paper' },
      { icon: true, text: 'Re-editing or proofreading for 365 days or lifetime support for same paper' }
    ]
  },
  {
    data: [
      { icon: false, text: '' },
      { icon: true, text: 'Plagiarism check using Turnitin; reduction of plagiarism in your manuscript depends on the plagiarism percentage' },
      { icon: true, text: 'Plagiarism check using Turnitin; reduction of plagiarism in your manuscript depends on the plagiarism percentage' }
    ]
  },
  {
    data: [
      { icon: false, text: '' },
      { icon: true, text: 'Subject-area-specific content level editing' },
      { icon: true, text: 'Subject-area-specific content level editing' }
    ]
  },
  {
    data: [
      { icon: false, text: '' },
      { icon: true, text: 'Content level editing tailored to give you the best chance of acceptance in high-impact journals.' },
      { icon: true, text: 'Getting your manuscript peer-reviewed by experienced journal reviewers' }
    ]
  },

  {
    data: [
      { icon: false, text: '' },
      { icon: false, text: '' },
      { icon: true, text: 'Peer review assistance following domain-specific content-level editing, offering expert advice on your manuscript.' }
    ]
  }]
    },
    premium: {
      label: "Publication Package",
      headers: [{
    title: 'Full assist',
    icon: (
<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.6661 8.43193V21.2053C29.6661 24.8853 26.6794 27.8719 22.9994 27.8719H9.66611C9.05278 27.8719 8.46611 27.7919 7.89278 27.6319C7.06611 27.4053 6.79944 26.3519 7.41278 25.7386L21.5861 11.5653C21.8794 11.2719 22.3194 11.2053 22.7328 11.2853C23.1594 11.3653 23.6261 11.2453 23.9594 10.9253L27.3861 7.48527C28.6394 6.23193 29.6661 6.64527 29.6661 8.43193Z" fill="#FF2661"></path><path d="M19.8533 10.632L5.89333 24.592C5.25333 25.232 4.18667 25.072 3.76 24.272C3.26667 23.3653 3 22.312 3 21.2053V8.43196C3 6.6453 4.02667 6.23196 5.28 7.4853L8.72 10.9386C9.24 11.4453 10.0933 11.4453 10.6133 10.9386L15.3867 6.15196C15.9067 5.63196 16.76 5.63196 17.28 6.15196L19.8667 8.73863C20.3733 9.25863 20.3733 10.112 19.8533 10.632Z" fill="#FF2661"></path></svg>
    ),
    description: <> Our Full Assist package offers comprehensive support throughout your manuscript's journey. From initial editing to final submission, we handle every aspect of the publication process, giving you the freedom to focus on your research'</>,
    button: 'Select Core Editing →',
  },
  {
    title: 'Flexi Saver',
    icon:<>
   <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.7583 30.8115C8.43272 30.0207 3.46357 25.0515 2.67359 18.7275C2.61167 18.2389 2.9934 17.8054 3.48763 17.8054H6.80387C7.20446 17.8054 7.54577 18.0946 7.6131 18.4888C8.25085 22.2657 11.2177 25.2334 14.9971 25.872C15.3913 25.9392 15.6805 26.2806 15.6805 26.6812V29.9974C15.6805 30.4854 15.2574 30.8709 14.7583 30.8115ZM6.80414 15.9457H3.48791C2.9934 15.9457 2.612 15.5118 2.67386 15.0235C3.54239 8.06572 9.48743 2.8186 16.5012 2.8186C19.6172 2.8186 22.5713 3.83453 25.0446 5.75667C25.4379 6.06357 25.4674 6.63903 25.1215 6.98492L22.7771 9.33008C22.4935 9.6145 22.048 9.64978 21.7211 9.4182C20.182 8.32132 18.3768 7.74126 16.5012 7.74126C12.0873 7.74126 8.34882 10.9045 7.61332 15.2623C7.54604 15.6564 7.20473 15.9457 6.80414 15.9457ZM17.5401 29.9982V26.682C17.5401 26.2814 17.8294 25.9401 18.2236 25.8727C22.5814 25.1372 25.7446 21.3987 25.7446 16.9849C25.7446 15.1092 25.1645 13.3041 24.0676 11.7649C23.8353 11.4388 23.8722 10.9917 24.1558 10.7089L26.5009 8.36458C26.8424 8.02311 27.4196 8.04477 27.7292 8.44148C29.6513 10.9148 30.6672 13.8689 30.6672 16.9848C30.6672 23.9986 25.4201 29.9437 18.4623 30.8122C18.3469 30.8267 18.2297 30.8165 18.1185 30.7822C18.0073 30.748 17.9046 30.6904 17.8174 30.6134C17.7302 30.5364 17.6603 30.4417 17.6125 30.3357C17.5647 30.2296 17.54 30.1145 17.5401 29.9982Z" fill="#FF2661"></path><path d="M13.3833 13.5395C13.3833 13.0864 13.016 12.719 12.5629 12.719H10.922C10.4689 12.719 10.1016 13.0864 10.1016 13.5395V20.103C10.1016 20.5561 10.4689 20.9234 10.922 20.9234H12.5629C13.016 20.9234 13.3833 20.5561 13.3833 20.103V13.5395ZM18.306 20.103V11.8986C18.306 11.4455 17.9387 11.0781 17.4856 11.0781H15.8447C15.3916 11.0781 15.0242 11.4455 15.0242 11.8986V20.103C15.0242 20.5561 15.3916 20.9234 15.8447 20.9234H17.4856C17.9387 20.9234 18.306 20.5561 18.306 20.103ZM23.2287 20.103V16.8212C23.2287 16.3681 22.8613 16.0008 22.4082 16.0008H20.7673C20.3142 16.0008 19.9469 16.3681 19.9469 16.8212V20.103C19.9469 20.5561 20.3142 20.9234 20.7673 20.9234H22.4082C22.8614 20.9234 23.2287 20.5561 23.2287 20.103Z" fill="#FF2661"></path></svg></>,
    description:<> The Flexi Saver package offers flexible support, giving you the freedom to select the services you need, be it journal selection, peer review, or journal submission. This cost- effective option ensures that you get expert assistance exactly where it&#39;s required.'</> ,
    button: 'Select Exclusive Editing →',
  },
],
      rows: [{
    data: [
      { icon: true, text: 'Journal selection' },
      { icon: true, text: 'Journal selection' },
   
    ]
  },
  {
    data: [
      { icon: true, text: 'Pre-submission peer review' },
      { icon: true, text: 'Plagiarism check' },
     
    ]
  },
  {
    data: [
      { icon: true, text: 'Plagiarism check' },
      { icon: true, text: 'Formatting and submission' },
   
    ]
  }, 
    {
    data: [
      { icon: true, text: 'Formatting and submission' },
      { icon: true, text: 'Post-editing services' },
   
    ]
  }, 
      {
    data: [
      { icon: true, text: 'Post-editing services' },
      { icon: true, text: 'Re-submission support' },
   
    ]
  }, 
        {
    data: [
      { icon: true, text: 'Research impact' },
      { icon: false, text: '' },
   
    ]
  }, 
          {
    data: [
      { icon: true, text: 'Citation booster' },
      { icon: false, text: '' },
   
    ]
  }, 

]
    },
    customize: {
      label: "Customize Package",
           headers: [{
    title: 'Editing',
    icon: (
<svg width="25" height="26" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_534_8829)"><path d="M23.8257 6.74989L18.125 1.04883V6.74989H23.8257Z" fill="#FF2661"></path><path d="M21.9012 23.3113C21.8782 23.3344 21.8546 23.3568 21.8305 23.3784C21.6152 23.6088 21.3627 23.8014 21.0836 23.948L16.4431 26.3787C16.0404 26.5892 15.5928 26.6993 15.1384 26.6998C14.3869 26.6998 13.6805 26.4072 13.1493 25.8759C12.8971 25.6242 12.6948 25.3269 12.5532 24.9999H5.3125C4.79475 24.9999 4.375 24.5802 4.375 24.0624C4.375 23.5447 4.79475 23.1249 5.3125 23.1249H12.4301C12.4835 22.937 12.5561 22.7551 12.6468 22.5821L14.3267 19.375H5.3125C4.79475 19.375 4.375 18.9552 4.375 18.4375C4.375 17.9198 4.79475 17.5 5.3125 17.5H15.3383L19.0882 13.75H5.3125C4.79475 13.75 4.375 13.3302 4.375 12.8125C4.375 12.2948 4.79475 11.875 5.3125 11.875H20.9375C20.9457 11.875 20.9538 11.876 20.962 11.8763L24.2132 8.625H17.1875C16.6698 8.625 16.25 8.20525 16.25 7.6875V0.5H2.8125C1.26169 0.5 0 1.76169 0 3.3125V29.6875C0 31.2383 1.26169 32.5 2.8125 32.5H21.5625C23.1133 32.5 24.375 31.2383 24.375 29.6875V20.8375L21.9012 23.3113ZM31.2689 11.2919C32.2437 10.3172 32.2437 8.73119 31.2689 7.75644C30.7968 7.28425 30.1689 7.02419 29.5012 7.02419C28.8334 7.02419 28.2056 7.28425 27.7334 7.75644L26.8496 8.64031L30.3851 12.1758L31.2689 11.2919Z" fill="#FF2661"></path><path d="M14.3073 23.4521C14.2145 23.6291 14.1808 23.8311 14.2109 24.0286C14.2411 24.2261 14.3335 24.4088 14.4748 24.55C14.6161 24.6913 14.7988 24.7838 14.9963 24.814C15.1938 24.8441 15.3957 24.8103 15.5727 24.7176L19.6025 22.6067L16.4181 19.4223L14.3073 23.4521ZM17.5651 17.9215L25.5189 9.96777L29.0539 13.5028L21.1001 21.4565L17.5651 17.9215Z" fill="#FF2661"></path></g><defs><clipPath id="clip0_534_8829"><rect width="32" height="32" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs></svg>
    ),
    description: <> The Custom Editing Package offers tailored solutions to refine your writing, ensuring polished, professional, and impactful articles that meet your unique needs.</>,
    button: 'Select Core Editing →',
  },
  {
    title: 'Publication',
    icon:<>
   <svg width="26" height="26" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_600_2724)"><path fillRule="evenodd" clipRule="evenodd" d="M5.00001 32.5005C3.89543 32.5005 3 31.6051 3 30.5005V2.50049C3 1.39592 3.89543 0.500488 5 0.500488H22.1444V6.57017H28.2142V30.5004C28.2142 31.605 27.3188 32.5004 26.2142 32.5004L5.00001 32.5005ZM6.78809 9.5479V5.69756H10.6384V9.5479H6.78809ZM6.78809 30.2185H24.3108C24.3681 30.2185 24.4249 30.2072 24.4778 30.1853C24.5307 30.1633 24.5788 30.1312 24.6194 30.0907C24.6599 30.0502 24.692 30.0021 24.714 29.9492C24.7359 29.8962 24.7472 29.8395 24.7472 29.7822C24.7472 29.7249 24.7359 29.6682 24.714 29.6152C24.6921 29.5623 24.6599 29.5142 24.6194 29.4737C24.5789 29.4331 24.5308 29.401 24.4779 29.3791C24.4249 29.3571 24.3682 29.3458 24.3109 29.3458H6.78802C6.6723 29.3458 6.56133 29.3918 6.4795 29.4736C6.39768 29.5555 6.35171 29.6664 6.35171 29.7822C6.35171 29.8979 6.39768 30.0088 6.4795 30.0907C6.56133 30.1725 6.67238 30.2185 6.78809 30.2185ZM6.78809 27.7318C6.67238 27.7318 6.5614 27.6858 6.47958 27.604C6.39775 27.5222 6.35178 27.4112 6.35178 27.2955C6.35178 27.1798 6.39775 27.0688 6.47958 26.987C6.5614 26.9052 6.67238 26.8592 6.78809 26.8592H24.3108C24.3681 26.8592 24.4249 26.8705 24.4778 26.8924C24.5307 26.9143 24.5788 26.9465 24.6193 26.987C24.6599 27.0275 24.692 27.0756 24.7139 27.1286C24.7358 27.1815 24.7471 27.2382 24.7471 27.2955C24.7471 27.3528 24.7358 27.4096 24.7139 27.4625C24.692 27.5154 24.6598 27.5635 24.6193 27.604C24.5788 27.6445 24.5307 27.6767 24.4777 27.6986C24.4248 27.7205 24.3681 27.7318 24.3108 27.7318H6.78809ZM28.2142 5.69763H23.017V0.500488L28.2142 5.69763ZM12.0582 22.347L13.859 21.3073L14.9261 23.1555C15.212 23.6507 15.0408 24.2898 14.5456 24.5758C14.0504 24.8617 13.4112 24.6904 13.1253 24.1952L12.0582 22.347ZM11.4769 21.6751C10.9614 21.9727 10.2961 21.7945 9.99851 21.2789L8.21511 18.1899C7.91747 17.6744 8.0957 17.0091 8.61127 16.7115L10.9873 15.3397C10.9911 15.3463 10.9947 15.353 10.9986 15.3597L13.8414 20.2834L13.8531 20.3032L11.4769 21.6751ZM20.2992 19.1208C18.7642 19.1997 17.26 19.5811 15.8729 20.2432C15.6495 20.3503 15.3938 20.369 15.1572 20.2956C14.9205 20.2222 14.7204 20.062 14.5969 19.8472L11.7542 14.9235C11.63 14.7091 11.5913 14.4557 11.646 14.2141C11.7008 13.9725 11.8448 13.7604 12.0493 13.6205C13.3162 12.7503 14.3987 11.6383 15.2344 10.3484L20.2992 19.1208ZM18.02 8.85271L22.9873 17.4563C23.4438 18.247 22.819 19.2283 21.9093 19.1492C21.7072 19.1316 21.5047 19.1193 21.3019 19.1123L15.7431 9.48427C15.8384 9.30516 15.9291 9.12359 16.0149 8.93976C16.4026 8.10947 17.5619 8.05907 18.02 8.85271ZM20.5036 11.1691C22.1033 11.1691 23.0289 12.9602 22.151 14.2626L20.3677 11.1738C20.413 11.1707 20.4583 11.1691 20.5036 11.1691Z" fill="#FF2661"></path></g><defs><clipPath id="clip0_600_2724"><rect width="32" height="32" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs></svg></>,
    description:<> The Custom Publication Package is designed to meet your unique research needs, offering expert guidance for seamless manuscript preparation, journal submission, and impactful publication strategies.</> ,
    button: 'Select Exclusive Editing →',
  },
],
          rows: [{
    data: [
      { icon: true, text: 'Unlock your writing’s full potential with our tailor-made editing services, tailored specifically for your needs.' },
      { icon: true, text: 'Our customized publication package is crafted to meet your unique needs, ensuring every aspect of the publishing process aligns perfectly with your research goals and vision.' },
   
    ]
  },
  {
    data: [
      { icon: true, text: 'Transform your work into polished perfection with our personalized editing solutions, designed to elevate your writing to the next level.' },
      { icon: true, text: 'Benefit from the expertise of our seasoned professionals who offer personalized guidance, from manuscript refinement to distribution strategy.' },
     
    ]
  },]
    }
  };

  const labelIcons = {
    publication: <RiEditLine />,
    premium: <FaRegUser />,
    customize:  <FaSearch />
  };


const PackageTabs = () => {
  const [activeTab, setActiveTab] = useState("publication"); // default active tab

  return (
    <Container className="package">
      <div className="cs_height_48 cs_height_lg_48"></div>
      <div className="text-center ">
        <SectionTitle Title="Package" SubTitle=" Details" />
           <div className="cs_height_20 cs_height_lg_20"></div>
      </div>

      <Nav
        variant="tabs"
        className="justify-content-center border-0 mb-4 package-details"
        activeKey={activeTab}
        onSelect={(selectedKey) => setActiveTab(selectedKey)}
      >
        {Object.keys(packageData).map((key) => (
          <Nav.Item key={key}>
            <Nav.Link eventKey={key}>
              {labelIcons[key]} {packageData[key].label}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      <Row className="d-flex justify-content-center ">
        <Col className={`${activeTab==="premium" || activeTab === "customize"? " col-lg-10" : "col-lg-12"} `} > 
        <EditingServicesTable
          headers={packageData[activeTab].headers}
          rows={packageData[activeTab].rows}
        />
</Col>
      </Row>

      <div className="cs_height_40 cs_height_lg_50"></div>
    </Container>
  );
};


export default PackageTabs;
