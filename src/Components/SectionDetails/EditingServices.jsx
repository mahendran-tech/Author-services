import {Container, Row, Col, Card, Button} from "react-bootstrap";
import SectionTitle from "../Common/SectionTitle";
import {CiEdit} from "react-icons/ci";
import {FaRegEdit} from "react-icons/fa";
import parse from "html-react-parser";

const services = [
  {
    title: "Core Editing",
    icon: <CiEdit />,
    colorClass: "core",
    description: [
      "Sentence-level editing for pre- and post-journal submission at an affordable rate.",
      "An expert editor will refine your manuscript to enhance clarity and readability, ensuring an error-free manuscript that aligns with your publishing goals.",
    ],
  },
  {
    title: "Exclusive Editing",
    icon: <FaRegEdit />,
    colorClass: "exclusive",
    description: [
      "Content level editing tailored to give you the best chance of acceptance in high-impact journals.",
      "An experienced expert editor from your domain will edit your manuscript, refining the content, structure, flow, clarity, readability, grammar, punctuation, and style, thereby increasing your chances of getting published in a high-impact journal.",
    ],
  },
  {
    title: "Research Editing",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_725_2817)">
          <path
            d="M19.3902 8.86411C19.2032 8.86411 19.0155 8.86258 18.8279 8.85875L18.8119 8.85842C18.239 8.84666 17.5897 8.83338 16.971 8.63847C16.125 8.37203 15.3744 7.8647 14.8005 7.17131C14.1961 6.44118 13.8141 5.56279 13.725 4.69791C13.6389 3.86327 13.6489 3.03388 13.6586 2.23177C13.6617 1.98125 13.6648 1.7222 13.6648 1.47003H15.2507C15.2507 1.73177 15.2475 1.99574 15.2444 2.25097C15.2349 3.04306 15.2258 3.79124 15.3026 4.53521C15.3591 5.08362 15.6214 5.67583 16.0223 6.16003C16.3954 6.61088 16.9016 6.95388 17.4475 7.12576C17.8495 7.25241 18.3553 7.26281 18.8445 7.27281L18.8607 7.27314C19.3758 7.28381 19.9065 7.27549 20.4195 7.26751C20.7636 7.26215 21.1193 7.25663 21.4723 7.25663V8.84256C21.1317 8.84256 20.7822 8.84803 20.4442 8.85323C20.0987 8.85864 19.7456 8.86411 19.3902 8.86411ZM14.6754 25.5326C14.4334 25.5326 14.1973 25.4374 14.0228 25.2648C13.9188 25.1617 13.8406 25.0355 13.7946 24.8965C13.7485 24.7576 13.7358 24.6097 13.7575 24.4649L14.345 20.5984C14.3742 20.4037 14.4648 20.2233 14.6038 20.0838L23.1937 11.4256C23.3692 11.2488 23.6028 11.1515 23.8516 11.1515C24.1004 11.1515 24.334 11.2488 24.5094 11.4255L27.7279 14.6697C28.0858 15.0301 28.0859 15.6171 27.728 15.978L19.1369 24.6375C18.9995 24.7762 18.8216 24.8677 18.6289 24.8988L14.8237 25.5206C14.7743 25.5286 14.7248 25.5326 14.6754 25.5326ZM15.8808 21.0485L15.4613 23.8094L18.1622 23.3681L26.143 15.3238L23.8517 13.0142L15.8808 21.0485Z"
            fill="#0064FB"
          />
          <path
            d="M21.5722 14.183L22.6982 13.0665L26.1051 16.5025L24.9791 17.619L21.5722 14.183ZM14.5684 21.2388L15.6944 20.1223L19.1012 23.5583L17.9752 24.6748L14.5684 21.2388Z"
            fill="#0064FB"
          />
          <path
            d="M18.8083 27.9968H3.98561C1.78903 27.9968 0.00195312 26.1691 0.00195312 23.9225V4.08538C0.00195312 2.97659 0.429719 1.93993 1.20645 1.16632C1.95862 0.41716 2.9507 0.00514453 4.0012 0.0111602L14.7234 0.00634766L14.7502 0.00815234C15.2579 0.0420934 15.7554 0.166707 16.2192 0.37609C16.6889 0.587561 17.1165 0.88203 17.4816 1.24535L17.4913 1.25514L21.6329 5.51442C22.3802 6.28305 22.7918 7.30336 22.7918 8.38743V10.1888C22.7918 10.6267 22.4368 10.9817 21.9989 10.9817C21.5609 10.9817 21.2059 10.6267 21.2059 10.1888V8.38743C21.2059 7.72828 20.9471 7.08406 20.4959 6.62004L16.3594 2.366C16.13 2.13885 15.8619 1.95461 15.5675 1.82203C15.2836 1.69378 14.9794 1.61607 14.6686 1.59239L3.99841 1.5971H3.98889C3.36354 1.5971 2.7745 1.84292 2.32568 2.28999C1.84995 2.76386 1.58795 3.40146 1.58795 4.08543V23.9225C1.58795 25.2946 2.66354 26.4108 3.98566 26.4108H18.8083C20.1304 26.4108 21.206 25.2946 21.206 23.9225C21.206 23.4846 21.561 23.1295 21.999 23.1295C22.4369 23.1295 22.7919 23.4846 22.7919 23.9225C22.7919 26.1691 21.0049 27.9968 18.8083 27.9968Z"
            fill="#0064FB"
          />
          <path
            d="M12.7197 9.65631H5.55859C5.12066 9.65631 4.76562 9.30128 4.76562 8.86334C4.76562 8.4254 5.12066 8.07037 5.55859 8.07037H12.7198C13.1577 8.07037 13.5127 8.4254 13.5127 8.86334C13.5127 9.30128 13.1577 9.65631 12.7197 9.65631ZM12.7197 20.2723H5.55859C5.12066 20.2723 4.76562 19.9173 4.76562 19.4793C4.76562 19.0414 5.12066 18.6864 5.55859 18.6864H12.7198C13.1577 18.6864 13.5127 19.0414 13.5127 19.4793C13.5127 19.9173 13.1577 20.2723 12.7197 20.2723ZM16.3663 14.9624H5.65298C5.21505 14.9624 4.86002 14.6074 4.86002 14.1695C4.86002 13.7315 5.21505 13.3765 5.65298 13.3765H16.3662C16.8041 13.3765 17.1592 13.7315 17.1592 14.1695C17.1592 14.6073 16.8041 14.9624 16.3663 14.9624Z"
            fill="#0064FB"
          />
        </g>
        <defs>
          <clipPath id="clip0_725_2817">
            <rect width="28" height="28" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    colorClass: "research",
    description: [
      "Peer review assistance following domain-specific content-level editing, offering expert advice on your manuscript.",
      "An experienced peer reviewer from your field will assess your edited manuscript and provide valuable suggestions and observations, helping you address any gaps before submitting to a high-impact journal.",
    ],
  },
];

const EditingServices = () => {
  return (
    <section className="">
      <div className="cs_height_60 cs_height_lg_80"></div>
      <div>
        <SectionTitle Title="Editing &" SubTitle=" Proofreading Services" />
      </div>
      <div className="cs_height_50 cs_height_lg_60"></div>
      <div className="editing-section editing-banner">
        <Container className="text-white ">
          <Row justifyContent="center" className="align-items-center ">
            <Col lg={3} md={12} className="sidebar p-4">
              <h4 className="text-white cs_fs_36">
                Expert Editing Services to Perfect Your Research:
              </h4>
              <p>
                Our expert editors refine your manuscript, improving clarity,
                flow, and accuracy to make it publication-ready and increase
                acceptance chances in top journals.
              </p>
            </Col>
            <Col lg={9} md={12}>
              <Row className="p-3 mtop d-flex justify-content-center ">
                {services.map((service, idx) => (
                  <Col key={idx} md={6} lg={4} sm={12} className="mb-4">
                    <Card
                      className={`service-card bg-white ${service.colorClass} h-100 `}>
                      <Card.Body className="d-flex flex-column flex-grow-1 ">
                        <Card.Title className="mb-3">
                          <span className="icon">{service.icon}</span>{" "}
                          {service.title}
                        </Card.Title>
                        <Card.Text>
                          {Array.isArray(service.description) &&
                            service.description.map((item, index) => (
                              <p key={index} className="mb-2 cs_fs_14">
                                {item}
                              </p>
                            ))}
                          {/* {parse(service.description)} */}
                        </Card.Text>
                        <Button className="mt-auto align-self-start cs_btn cs_style_1">
                          Get a Quote →
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="cs_height_40 cs_height_lg_40"></div>
      </div>
      <div className="cs_height_40 cs_height_lg_40"></div>
    </section>
  );
};

export default EditingServices;
