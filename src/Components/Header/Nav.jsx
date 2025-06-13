import DropDown from "./DropDown";
import {Link} from "react-router-dom";

export default function Nav({setMobileToggle}) {
  return (
    <ul className="cs_nav_list">
      <li className="menu-item-has-children">
        <Link
          to="/editing-proofreading"
          onClick={() => {
            window.scrollTo({top: 0, behavior: "smooth"}); // smooth scroll to top
          }}>
        Editing & Proofreading
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link
                to="/editing-proofreading"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"}); // smooth scroll to top
                }}>
                Editing & Proofreading
              </Link>
            </li>
            <li>
              <Link
                to="/core-editing"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"}); // smooth scroll to top
                }}>
                Core Editing
              </Link>
            </li>
                        <li>
              <Link
                to="/exclusive-editing"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"}); // smooth scroll to top
                }}>
               Exclusive Editing 
              </Link>
            </li>
            <li>
              <Link
                to="/research-editing"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"}); // smooth scroll to top
                }}>
               Research Editing
              </Link>
            </li>
           <li>
              <Link
                to="/thesis-editing"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"}); // smooth scroll to top
                }}>
             Thesis Editing
              </Link>
            </li>
                       <li>
              <Link
                to="/get-quote"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"}); // smooth scroll to top
                }}>
           Proofreading
              </Link>
            </li>
            <li>
              <Link to="/editing-service"                 onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"}); // smooth scroll to top
                }}>
               Plans Comparison
              </Link>
            </li>
                        <li>
              <Link to="/customize-editing-services"                 onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"}); // smooth scroll to top
                }}>
              Get Quote
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li className="menu-item-has-children">
        <Link to="/publication-support">Publication Support</Link>
        <DropDown>
          <ul>
                {/* <li>
              <Link to="/publication-support" onClick={() => setMobileToggle(false)}>
               Full Assist Publication Pack
              </Link>
            </li> */}
            <li>
              <Link to="/full-assist-publication" onClick={() => setMobileToggle(false)}>
               Full Assist Publication Pack
              </Link>
            </li>
            <li>
              <Link to="/flexi-saver-publication" onClick={() => setMobileToggle(false)}>
              Flexi Saver Publication Pack
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => setMobileToggle(false)}>
              Plagiarism Check
              </Link>
            </li>
                        <li>
              <Link
                to="/"
                onClick={() => setMobileToggle(false)}>
          Journal Selection
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => setMobileToggle(false)}>
         Journal Submission
              </Link>
            </li>

                                    <li>
              <Link
                to="/"
                onClick={() => setMobileToggle(false)}>
        Pre-submission Peer Review
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => setMobileToggle(false)}>
        Citation Booster
              </Link>
            </li>
                        <li>
              <Link
                to="/"
                onClick={() => setMobileToggle(false)}>
     Plans Comparison
              </Link>
            </li>
                                    <li>
              <Link
                to="/"
                onClick={() => setMobileToggle(false)}>
    Get Quote
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>


      <li>
        <Link to="#" onClick={() => setMobileToggle(false)}>
          Research Outreach
        </Link>
      </li>
      <li>
        <Link to="#" onClick={() => setMobileToggle(false)}>
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
              <Link to="/" onClick={() => setMobileToggle(false)}>
           Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/blog/blog-details"
                onClick={() => setMobileToggle(false)}>
              FAQs
              </Link>
            </li>
                        <li>
              <Link
                to="/"
                onClick={() => setMobileToggle(false)}>
             Contact Us
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      {/* <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li> */}
    </ul>
  );
}
