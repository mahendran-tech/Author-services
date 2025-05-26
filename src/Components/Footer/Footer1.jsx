import {Link} from "react-router-dom";
import {FiPhoneCall} from "react-icons/fi";
import {MdOutlineAttachEmail} from "react-icons/md";

const Footer1 = () => {
  return (
    <footer
      className="cs_footer cs_style_1 cs_bg_filed cs_heading_bg"
      data-src="assets/img/footer_bg.jpg">
      <div className="cs_main_footer cs_white_color">
        <div className="container">
          <div className="cs_footer_row">
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <div className="cs_text_widget">
                  <img
                    src="/assets/img/logo.svg"
                    alt="Logo"
                    className="wow zoomIn"
                    style={{
                      backgroundColor: "white",
                      padding: "2px",
                      borderRadius: "5px",
                    }}
                  />
                  <p className="mt-3">
                    technoarete Research & Development Association
                  </p>
                  <div className="mt-3">
                    <Link className="cs_btn style_4 cs_fs_12 ">
                      Support Center
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_20 cs_semibold cs_white_color cs_mb_10">
                  Author Services
                </h2>

                <ul className="cs_footer_menu">
                  <li>
                    <Link to="#">Editing & Proofreading</Link>
                  </li>
                  <li>
                    <Link to="#">Publication Support</Link>
                  </li>
                  <li>
                    <Link to="#">Citation Booster</Link>
                  </li>
                  <li>
                    <Link to="#">Translation Services</Link>
                  </li>
                  <li>
                    <Link to="#">FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_20 cs_semibold cs_white_color cs_mb_10">
                  Academy
                </h2>

                <ul className="cs_footer_menu">
                  <li>
                    <Link to="#">International Conferences</Link>
                  </li>
                  <li>
                    <Link to="#">Bootcamps</Link>
                  </li>
                  <li>
                    <Link to="#">Faculty Development Program</Link>
                  </li>
                  <li>
                    <Link to="#">Courses</Link>
                  </li>
                  <li>
                    <Link to="#">IFERP Mentorship</Link>
                  </li>

                  <li>
                    <Link to="#">Awards & Rewards</Link>
                  </li>
                  <li>
                    <Link to="#">FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_20 cs_semibold cs_white_color cs_mb_10">
                  Membership
                </h2>

                <ul className="cs_footer_menu">
                  <li>
                    <Link to="#">Membership for Researchers</Link>
                  </li>
                  <li>
                    <Link to="#">Membership for Institutes</Link>
                  </li>
                  <li>
                    <Link to="#">IFERP Ambassadors</Link>
                  </li>
                  <li>
                    <Link to="#">Special Interest Communities</Link>
                  </li>
                  <li>
                    <Link to="#">FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="cs_footer_row mt-5">
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <div className="cs_text_widget">
                  <h2 className="cs_footer_widget_title cs_fs_20 cs_semibold cs_white_color cs_mb_10">
                    Stay Updated
                  </h2>
                  <p className="mt-3">
                    Get updates on the latest opportunities, conferences & many
                    more
                  </p>
                  <div className="mt-3">
                    <Link
                      className="cs_btn style_4 cs_fs_12 "
                      style={{
                        backgroundColor: "#ff4c00",
                        borderColor: "#ff4c00",
                      }}>
                      Sign up for our newsletter
                    </Link>
                  </div>
                </div>
                <div className="mt-4 mb-2 ">
                  <h2 className="cs_footer_widget_title cs_fs_20 cs_semibold cs_white_color cs_mb_10">
                    Stay Connected
                  </h2>
                  <ul className="cs_footer_contact_list cs_mp_0">
                    <li>
                      <FiPhoneCall />
                      <a href="tel:(+91) 76694 09022" className="ps-2">
                        (+91) 76694 09022
                      </a>{" "}
                    </li>
                    <li>
                      <MdOutlineAttachEmail />{" "}
                      <a href="mailto:info@iferp.in" className="ps-2">
                        info@iferp.in
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="d-flex gap-3 mt-4">
                  <a href="#" className="cs_social_btn cs_center">
                    <img src="assets/img/icons/Facebook.svg" alt="" />
                  </a>
                  <a href="#" className="cs_social_btn cs_center">
                    <img src="assets/img/icons/twitter.svg" alt="" />
                  </a>
                  <a href="#" className="cs_social_btn cs_center">
                    <img src="assets/img/icons/insta.svg" alt="" />
                  </a>
                  <a href="#" className="cs_social_btn cs_center">
                    <img src="assets/img/icons/linkedin.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_20 cs_semibold cs_white_color cs_mb_10">
                  About Us
                </h2>

                <ul className="cs_footer_menu">
                  <li>
                    <Link to="#">About IFERP</Link>
                  </li>
                  <li>
                    <Link to="#">Mission & Vision</Link>
                  </li>
                  <li>
                    <Link to="#">Scopes & opportunities</Link>
                  </li>
                  <li>
                    <Link to="#">Board of Advisors</Link>
                  </li>
                  <li>
                    <Link to="#">Committees</Link>
                  </li>
                  <li>
                    <Link to="#">News Room</Link>
                  </li>
                  <li>
                    <Link to="#">Associates & Partners</Link>
                  </li>
                  <li>
                    <Link to="#">Diversity, Equity & Inclusion</Link>
                  </li>
                  <li>
                    <Link to="#">FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_20 cs_semibold cs_white_color cs_mb_10">
                  Researchers
                </h2>

                <ul className="cs_footer_menu">
                  <li>
                    <Link to="#">International Conferences </Link>
                  </li>
                  <li>
                    <Link to="#">Skill Development Program</Link>
                  </li>
                  <li>
                    <Link to="#">Digital Library</Link>
                  </li>
                  <li>
                    <Link to="#">Editing, Translation & Publication</Link>
                  </li>
                  <li>
                    <Link to="#">Review & Publish</Link>
                  </li>

                  <li>
                    <Link to="#">Mentorship & Networking</Link>
                  </li>
                  <li>
                    <Link to="#">Become a Researcher</Link>
                  </li>
                  <li>
                    <Link to="#">Join the Hall of Fame </Link>
                  </li>
                  <li>
                    <Link to="#">FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_20 cs_semibold cs_white_color cs_mb_10">
                  Institutions & Universities
                </h2>

                <ul className="cs_footer_menu">
                  <li>
                    <Link to="#">Digital Library Access</Link>
                  </li>
                  <li>
                    <Link to="#">Language Solutions</Link>
                  </li>
                  <li>
                    <Link to="#">Research & Publication</Link>
                  </li>
                  <li>
                    <Link to="#">International Research Network</Link>
                  </li>
                  <li>
                    <Link to="#">Training & Professional Network</Link>
                  </li>
                  <li>
                    <Link to="#">Citation Per Faculty</Link>
                  </li>
                  <li>
                    <Link to="#">Join as Institutional Member</Link>
                  </li>
                  <li>
                    <Link to="#">Academic Partners</Link>
                  </li>
                  <li>
                    <Link to="#">FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom ">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <div className="cs_footer_copyright">
              Copyright © 2025 <a href="#">IFERP</a>. All Rights Reserved.
            </div>
            <div className="d-flex gap-3 cs_fs_12">
              <span>Terms</span>
              <span>Privacy</span>
              <span>Sitemap</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
