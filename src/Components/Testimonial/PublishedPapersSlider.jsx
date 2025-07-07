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
    img: "assets/img/icip.jpg", // Replace with actual path
    preview: "assets/img/index1.png", // Replace with actual path
    title:
      "A Survey on Machine Learning Algorithm for Facial Emotion Recognition",
    subtitle: "IEEE Xplore",
    authors: "Jain.P, Maan.V",
    journal:
      "Proceedings of the IEEE International Conference Image Information Processing",
  },
  {
    id: 2,
    img: "assets/img/pub-1.jpg",
    preview: "assets/img/index2.png",
    title: "Optimizing Emotion Recognition of Non-Intrusive E-walking Dataset",
    subtitle: "AG Editor",
    authors: "Jain.P, Maan.V",
    journal: "Data and Meta Data",
  },
  {
    id: 3,
    img: "assets/img/pub-2.jpg",
    preview: "assets/img/index2.png",
    title:
      "Comparison of radiation protection effects between epigallocatechin gallate and ascorbic acid",
    subtitle: "AG Editor",
    authors: "Nhan, Tran Thi",
    journal: "Salud, Ciencia y Tecnología",
  },
  {
    id: 4,
    img: "assets/img/pub-3.jpg",
    preview: "assets/img/index2.png",
    title:
      "Euri – A Deep Ensemble Architecture For Oral Lesion Segmentation and Detection",
    subtitle: "Auricle Global Society of Education and Research",
    authors: "Sagari S.M, Malagi V.P, Sasi.S",
    journal:
      "International Journal of Intelligent Systems and Applications in Engineering",
  },
  {
    id: 5,
    img: "assets/img/pub-4.jpg",
    preview: "assets/img/index2.png",
    title:
      "Improving Facial Expression Classification through Ensemble Deep Learning Models",
    subtitle: "Collegium Basilea",
    authors: "Bakiasi,V, Muca.M",
    journal: "Nanotechnology Perceptions",
  },
  {
    id: 6,
    img: "assets/img/pub-5.jpg",
    preview: "assets/img/index2.png",
    title:
      "Dimensionality Reduction: A Comparative Review using RBM, KPCA, and t-SNE for Micro-Expressions Recognition",
    subtitle: "Science Publications",
    authors: "Shtino V.B, Muca.M, Kapciu.R",
    journal: "Journal of Computer Science",
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
                  <p className="mb-0 fw-semibold cs_fs_14 text-black-50">
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
