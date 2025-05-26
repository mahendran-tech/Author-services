import DropDown from "./DropDown";
import {Link} from "react-router-dom";

export default function Nav({setMobileToggle}) {
  return (
    <ul className="cs_nav_list">
      <li className="menu-item-has-children">
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({top: 0, behavior: "smooth"}); // smooth scroll to top
          }}>
          Research Journey
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
              <Link to="/" onClick={() => setMobileToggle(false)}>
                Editing Services
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li>
        <Link to="#" onClick={() => setMobileToggle(false)}>
          Why IFERP
        </Link>
      </li>
      <li>
        <Link to="#" onClick={() => setMobileToggle(false)}>
          Research Ethics
        </Link>
      </li>
      <li>
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
      </li>

      {/* <li className="menu-item-has-children">
        <Link to="#">Pages</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/about" onClick={() => setMobileToggle(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/team" onClick={() => setMobileToggle(false)}>
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/team/team-details"
                onClick={() => setMobileToggle(false)}>
                Team Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li> */}

      {/* <li className="menu-item-has-children">
        <Link to="/blog" onClick={() => setMobileToggle(false)}>
          News
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/blog" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/blog/blog-details"
                onClick={() => setMobileToggle(false)}>
                Blog Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li> */}
      <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
