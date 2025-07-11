import React from "react";
import ContactBanner from "../Components/HeroBanner/ContactBanner";
import ContactForm from "../Components/Form/ContactForm";

const ContactUs = () => {
  return (
    <>
      <ContactBanner
        bgimg="assets/img/bg-light.webp"
        // subtitle="Battery Check & Replace"
        title="Get in"
        subtitle="Touch"
        conetnt="If you have any questions, please feel free to contact us using the form below. Our representative will contact you very soon"
        conetnt1={
          <>
            Alternatively, you can also contact us at{" "}
            <a
              href="mailto:author.support@iferp.in"
              style={{ color: "#0063CB", fontWeight: "bold" }}
            >
              author.support@iferp.in
            </a>
            .
          </>
        }
        img1="assets/img/contact.png"
      ></ContactBanner>

      <ContactForm />
    </>
  );
};

export default ContactUs;
