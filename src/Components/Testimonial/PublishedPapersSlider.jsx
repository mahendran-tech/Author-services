// components/PublishedPapersSlider.js
import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialSlider.css";

const PrevArrow = ({ onClick }) => (
  <div className="testimonial-slider-arrow prev" onClick={onClick}>
    <FaChevronLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="testimonial-slider-arrow next" onClick={onClick}>
    <FaChevronRight />
  </div>
);

const papers = [
  {
    id: 1,
    img: "assets/img/book-22.png", // Replace with actual path
    preview: "assets/img/index1.png", // Replace with actual path
    title:
      "Enhancing image clarity: Feature Selection with trickster coyote optimization in noisy/blurry image...",
    subtitle:
      "Imagenes: Selección de características con optimización de coyote tramposo en imagenes ruidosas/bprrosas",
    authors: "Jain, P., Maan, V.",
    journal: "Salud, Clenca y Tecnologia, 2024, 4, 1114",
  },
  {
    id: 2,
    img: "assets/img/book-22.png",
    preview: "assets/img/index2.png",
    title:
      "Enhancing image clarity: Feature Selection with trickster coyote optimization in noisy/blurry image...",
    subtitle:
      "Imagenes: Selección de características con optimización de coyote tramposo en imagenes ruidosas/bprrosas",
    authors: "Jain, P., Maan, V.",
    journal: "Salud, Clenca y Tecnologia, 2024, 4, 1114",
  },
];

const PublishedPapersSlider = () => {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="testimonial-slider py-5">
      <div className="container">
        <h3 className="text-center fw-bold mb-4">
          Successfully <span className="text-primary">Published Papers</span>
        </h3>
        <Slider {...settings}>
          {papers.map((paper, index) => (
            <div className="slide" key={index}>
              <div className="d-flex gap-2 align-items-center image-box">
                <div className="slider-left-sec">
                  <img src={paper.img} alt="Paper" />
                </div>
                <div className="slider-right-text">
                  <small className="text-muted">Article | Open access</small>
                  <p className="fw-semibold mt-2 mb-1 cs_fs_14">
                    {paper.title}
                  </p>
                  <p className="cs_fs_12 mb-1 lh-sm">{paper.subtitle}</p>
                  <p className="mb-0 fw-semibold text-black-50">
                    {paper.authors}
                  </p>
                  <p className="mb-0 text-muted cs_fs_12">{paper.journal}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PublishedPapersSlider;
