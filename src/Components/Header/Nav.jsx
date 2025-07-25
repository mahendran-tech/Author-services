import GoogleTranslate from "../Common/GoogleTranslateDropdown";

import DropDown from "./DropDown";
import { Link } from "react-router-dom";

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list">
      <li className="menu-item-has-children">
        <Link
          to="/editing-proofreading"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll to top
          }}
        >
          Editing & Proofreading
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link
                to="/editing-proofreading"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll to top
                }}
              >
                Editing & Proofreading
              </Link>
            </li>
            <li>
              <Link
                to="/core-editing"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll to top
                }}
              >
                Core Editing
              </Link>
            </li>
            <li>
              <Link
                to="/exclusive-editing"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll to top
                }}
              >
                Exclusive Editing
              </Link>
            </li>
            <li>
              <Link
                to="/research-editing"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll to top
                }}
              >
                Research Editing
              </Link>
            </li>
            <li>
              <Link
                to="/thesis-editing"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll to top
                }}
              >
                Thesis Editing
              </Link>
            </li>
            <li>
              <Link
                to="/proofreading"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll to top
                }}
              >
                Proofreading
              </Link>
            </li>
            <li>
              <Link
                to="/editing-service"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll to top
                }}
              >
                Plans Comparison
              </Link>
            </li>
            <li>
              <Link
                to="/customize-editing-services"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Get Quote
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li className="menu-item-has-children">
        <Link to="#">Publication Support</Link>
        <DropDown>
          <ul>
            <li>
              <Link
                to="/publication-support"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Publication Support
              </Link>
            </li>
            <li>
              <Link
                to="/full-assist-publication"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Full Assist Publication Pack
              </Link>
            </li>
            <li>
              <Link
                to="/flexi-saver-publication"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Flexi Saver Publication Pack
              </Link>
            </li>
            <li>
              <Link
                to="/plagiarism-check"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Plagiarism Check
              </Link>
            </li>
            <li>
              <Link
                to="/journal-selection"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Journal Selection
              </Link>
            </li>
            <li>
              <Link
                to="/journal-submission"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Journal Submission
              </Link>
            </li>

            <li>
              <Link
                to="/pre-submission-peer-review"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Pre-submission Peer Review
              </Link>
            </li>
            <li>
              <Link
                to="/citation-booster"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Citation Booster
              </Link>
            </li>
            <li>
              <Link
                to="/plans-comparison"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Plans Comparison
              </Link>
            </li>
            <li>
              <Link
                to="/get-quote"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll to top
                }}
              >
                Get Quote
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li>
        <Link
          to="/research-outreach"
          onClick={() => {
            setMobileToggle(false);
            window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll to top
          }}
        >
          Research Outreach
        </Link>
      </li>
      <li>
        <Link
          to="/translation-services"
          onClick={() => {
            setMobileToggle(false);
            window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll to top
          }}
        >
          Translation Services
        </Link>
      </li>
      {/* <li>
        <Link to="#" onClick={() => setMobileToggle(false)}>
          Packages
        </Link>
      </li>
      <li>
        <Link to="#" onClick={() => setMobileToggle(false)}>
          Process
        </Link>
      </li>
      <li>
        <Link to="#" onClick={() => setMobileToggle(false)}>
          Testimonials
        </Link>
      </li>
      <li>
        <Link to="#" onClick={() => setMobileToggle(false)}>
          FAQs
        </Link>
      </li> */}

      <li className="menu-item-has-children">
        <Link to="/" onClick={() => setMobileToggle(false)}>
          About Us
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/#testimonial" onClick={() => setMobileToggle(false)}>
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/#faq" onClick={() => setMobileToggle(false)}>
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll to top
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      {/* <li>
        <Link to="#" onClick={() => setMobileToggle(false)}>
          <GoogleTranslate />
        </Link>
      </li> */}
    </ul>
  );
}
