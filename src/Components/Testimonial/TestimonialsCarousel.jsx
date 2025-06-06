import Slider from "react-slick";
import {Container, Card} from "react-bootstrap";
import {FaStar} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialsCarousel.css"; // Create this CSS file for custom styling
import SectionTitle2 from "../Common/SectionTitle2";
import {useEffect, useRef} from "react";

const testimonials = [
  {
    name: "Himanshu Binani",
    text: "It was a great experience. Your work was completely done with professionalism and the paper was really well researched and helpful.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 4,
  },
  {
    name: "Isha Bhanot",
    text: "They were very helpful and quick in their replies to any of my queries. They completed my task within the deadline.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 4,
  },
  {
    name: "John Doe",
    text: "Fantastic service. I’m happy with the review and feedback. Helped me a lot!",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    text: "Quick response and valuable suggestions for journal submission.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 4,
  },
  {
    name: "Aman Verma",
    text: "I really appreciate the effort and quality of the editing services provided.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5,
  },
  {
    name: "Neha Patel",
    text: "Professional and timely feedback. Will use again.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 4,
  },
];

const NextArrow = (props) => {
  const {className, onClick} = props;
  return (
    <div className={className} onClick={onClick}>
      <svg
        width="43"
        height="43"
        viewBox="0 0 43 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect
          x="0.833008"
          y="1.31836"
          width="41"
          height="41"
          rx="20.5"
          fill="white"
        />
        <rect
          x="0.833008"
          y="1.31836"
          width="41"
          height="41"
          rx="20.5"
          stroke="#FF2661"
        />
        <g clipPath="url(#clip0_534_8620)">
          <path
            d="M31.2008 21.4982L26.6555 16.9528C26.4922 16.7622 26.2052 16.7399 26.0146 16.9033C25.8239 17.0665 25.8017 17.3535 25.965 17.5442C25.9803 17.5619 25.9968 17.5785 26.0146 17.5937L29.7827 21.3664H11.7875C11.5365 21.3664 11.333 21.5699 11.333 21.821C11.333 22.072 11.5365 22.2755 11.7875 22.2755H29.7827L26.0146 26.0436C25.8239 26.2069 25.8017 26.4938 25.965 26.6845C26.1283 26.8751 26.4152 26.8973 26.6059 26.734C26.6237 26.7188 26.6403 26.7022 26.6555 26.6845L31.2009 22.1391C31.3771 21.9618 31.3771 21.6755 31.2008 21.4982Z"
            fill="#FF2661"
          />
        </g>
        <defs>
          <clipPath id="clip0_534_8620">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(11.333 11.8184)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

const PrevArrow = (props) => {
  const {className, onClick} = props;
  return (
    <div className={className} onClick={onClick}>
      <svg
        width="43"
        height="43"
        viewBox="0 0 43 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect
          x="1.16699"
          y="1.31836"
          width="41"
          height="41"
          rx="20.5"
          fill="white"
        />
        <rect
          x="1.16699"
          y="1.31836"
          width="41"
          height="41"
          rx="20.5"
          stroke="#FF2661"
        />
        <g clipPath="url(#clip0_534_8574)">
          <path
            d="M11.7992 21.4982L16.3445 16.9528C16.5078 16.7622 16.7948 16.7399 16.9854 16.9033C17.1761 17.0665 17.1983 17.3535 17.035 17.5442C17.0197 17.5619 17.0032 17.5785 16.9854 17.5937L13.2173 21.3664H31.2125C31.4635 21.3664 31.667 21.5699 31.667 21.821C31.667 22.072 31.4635 22.2755 31.2125 22.2755H13.2173L16.9854 26.0436C17.1761 26.2069 17.1983 26.4938 17.035 26.6845C16.8717 26.8751 16.5848 26.8973 16.3941 26.734C16.3763 26.7188 16.3597 26.7022 16.3445 26.6845L11.7991 22.1391C11.6229 21.9618 11.6229 21.6755 11.7992 21.4982Z"
            fill="#FF2661"
          />
        </g>
        <defs>
          <clipPath id="clip0_534_8574">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(11.667 11.8184)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
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
    <section className="section_bg_img"> 
    <Container className="">
      <div className="cs_height_48 cs_height_lg_48"></div>
      <div className="text-center mb-4">
        <SectionTitle2
          Title="Testimonials"
          SubTitle=" What our customers say"
        />
              <div className="cs_height_20 cs_height_lg_20"></div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-lg-10 col-sm-12">
          <Slider {...settings}>
            {testimonials.map((t, i) => (
              <div key={i} className="mb-4">
                <Card className="testimonial-card p-3 mx-3 position-relative">
                  <div className="text-center d-flex justify-content-center position-absolute top-0 start-50 translate-middle-x">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="rounded-circle mb-2"
                      style={{width: 50, height: 50}}
                    />
                  </div>
                  <Card.Body className="text-center  testimonial-card-body">
                    <Card.Text className="cs_fs_16 mb-2">{t.text}</Card.Text>
                    <Card.Title className="fw-bold mb-1">{t.name}</Card.Title>
                    <div className="text-warning">
                      {Array.from({length: 5}).map((_, index) => (
                        <FaStar
                          key={index}
                          color={index < t.rating ? "#f1c40f" : "#e4e5e9"}
                        />
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
        <div className="cs_height_80 cs_height_lg_80"></div>
      </div>
    </Container>
    </section>
  );
};

export default TestimonialsCarousel;
