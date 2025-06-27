import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialSlider.css";
import { Container } from "react-bootstrap";

const NextArrow = ({ onClick }) => (
  <div className="testimonial-slider-arrow next" onClick={onClick}>
    <FaChevronRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="testimonial-slider-arrow prev" onClick={onClick}>
    <FaChevronLeft />
  </div>
);

const TestimonialSlider = () => {
  const images = [
    "assets/img/index1.png",
    "assets/img/index2.png",
    "assets/img/index3.png",
    "assets/img/index4.png",
    "assets/img/index5.png",
    "assets/img/index6.png",
    "assets/img/index7.png",
    "assets/img/index8.png",
    "assets/img/index9.png",
    "assets/img/index10.png",
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    autoplay: true, // ← Auto loop ON
    autoplaySpeed: 3000, // ← Change slide every 3 seconds
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="cs_height_40 cs_height_lg_40"></div>
      <div className="testimonial-slider ">
        <Container>
          <h3 className="text-center fw-bold mb-4">
            Successfully <span className="text-primary">Published Papers</span>
          </h3>
          <Slider {...settings}>
            {images.map((img, index) => (
              <div className="slide" key={index}>
                <div className="d-flex gap-2 align-items-center image-box">
                  <div className="slider-left-sec">
                    <img src="assets/img/book-22.png" alt="" />
                  </div>
                  <div className="">
                    <img src={img} alt={`testimonial-${index}`} />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Container>
      </div>
      <div className="cs_height_40 cs_height_lg_40"></div>
    </div>
  );
};

export default TestimonialSlider;
