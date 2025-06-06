import HeroBanner2 from "../Components/HeroBanner/HeroBanner2";
import Video1 from "../Components/Video/Video1";
import ResearchJourney1 from "../Components/SectionDetails/ResearchJourney1";
import AuthorServices from "../Components/SectionDetails/AuthorServices";
import PackageDetails from "../Components/SectionDetails/PackageDetails";
import ProcessEditing from "../Components/SectionDetails/ProcessEditing";
import TestimonialsCarousel from "../Components/Testimonial/TestimonialsCarousel";
import ExpertEditors from "../Components/SectionDetails/ExpertEditors ";
import FaqSection from "../Components/SectionDetails/FaqSection";
import { homeimage } from "../assets/assets.js";
import ScrollingGallery from "../Components/SectionDetails/ScrollingGallery.jsx";


const Home2 = () => {
  return (
    <div className="homepage2">
      <HeroBanner2
        bgimg={homeimage.banner1}
        // subtitle="Battery Check & Replace"
        title="Author Services"
        conetnt="Helping researchers achieve global recognition through professional editing, publication guidance, and practical support for impactful results."
        btnname="Read more"
        img1={homeimage.hero1}
        btnurl="/"
        videoname="Watch Our Story"></HeroBanner2>
           <div>
            <ScrollingGallery/>
           </div>
      <div className="section-bg-color overflow-hidden">
        <ResearchJourney1 />
      </div>
      <AuthorServices />
      <Video1></Video1>
      <PackageDetails />
      <ProcessEditing />
      <TestimonialsCarousel />
      <ExpertEditors />
      <FaqSection />
  

      {/* <About2
        img1="/assets/img/about_img_4.jpg"
        img2="/assets/img/about_img_5.jpg"
        expNumber="58"
        expTitle="EXPER"
        exYear="STA 1980"
        subTitle="About Us"
        Title="Where Your Car the Best Care Every Time"
        Content="Globally maintain high payoff collaboration and idea sharing after viral solutions car as Objectively leading are mindshare rather than premier testing pursue professional you customer service revolutinary services drive"
        box1="Brake Master Service"
        boxContent1="Squeaking, grinding noises, or a soft brake pedal are common signs Kind warranty on most services."
        box2="Engine Diagnostics"
        boxContent2="Slow engine crank, dim headlights, and a battery warning light are kinds typical signs."
        avatar="/assets/img/avatar_1.png"
        name="Ronald Richards"
        designation="Founder CEO"></About2>
      <Services2></Services2>
      <Faq1></Faq1>
      <Video1></Video1>
      <Form2></Form2>
      <Team1></Team1>
      <Testimonial2></Testimonial2>
      <Brand1></Brand1>
      <Project2></Project2>
      <Counter1></Counter1>
      <Blog2></Blog2> */}
    </div>
  );
};

export default Home2;
