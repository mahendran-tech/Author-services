import React from "react";
import SectionTitle from "../Common/SectionTitle";
import SectionTitle2 from "../Common/SectionTitle2";
import { Link } from "react-router-dom";

const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.935 1.63324C12.8174 0.689959 11.1826 0.689961 10.065 1.63324L9.04719 2.49231C8.57218 2.89323 7.98438 3.13672 7.365 3.1891L6.03786 3.30133C4.58061 3.42457 3.42457 4.58061 3.30133 6.03786L3.1891 7.365C3.13672 7.98438 2.89323 8.57218 2.49231 9.0472L1.63324 10.065C0.689959 11.1826 0.689961 12.8174 1.63324 13.935L2.49231 14.9528C2.89323 15.4278 3.13672 16.0156 3.1891 16.635L3.30133 17.9622C3.42457 19.4194 4.58061 20.5755 6.03786 20.6986L7.365 20.8108C7.98438 20.8633 8.57218 21.1068 9.0472 21.5077L10.065 22.3668C11.1826 23.31 12.8174 23.31 13.935 22.3668L14.9528 21.5077C15.4278 21.1068 16.0156 20.8633 16.635 20.8108L17.9622 20.6986C19.4194 20.5755 20.5755 19.4194 20.6986 17.9622L20.8108 16.635C20.8633 16.0156 21.1068 15.4278 21.5077 14.9528L22.3668 13.935C23.31 12.8174 23.31 11.1826 22.3668 10.065L21.5077 9.04719C21.1068 8.57218 20.8633 7.98438 20.8108 7.365L20.6986 6.03786C20.5755 4.58061 19.4194 3.42457 17.9622 3.30133L16.635 3.1891C16.0156 3.13672 15.4278 2.89323 14.9528 2.49231L13.935 1.63324ZM17.4552 9.95466C17.9824 9.42745 17.9824 8.57268 17.4552 8.04547C16.9281 7.51825 16.0732 7.51825 15.546 8.04547L10.5006 13.0909L8.45524 11.0455C7.92804 10.5183 7.07326 10.5183 6.54606 11.0455C6.01884 11.5727 6.01884 12.4275 6.54606 12.9547L9.54606 15.9546C10.0733 16.4818 10.928 16.4818 11.4552 15.9546L17.4552 9.95466Z"
      fill="#36CC72"
    />
  </svg>
);

const services = [
  "Journal by Choice",
  "Pre Submission Peer review",
  "English Editing",
  "Plagiarism Check",
  "Formatting & Illustration editing",
  "Post editing Services",
  "Re-Submission Support",
  "Illustration Rework",
  "Rejection Guard",
  "Q & A with Experts",
  "Editing Certificate",
  "Journal Submission",
];

const plans = [
  {
    name: "Full Assist Publication Pack",
    description:
      "Our Full Assist service offers comprehensive support throughout your manuscript’s journey. From initial editing to final submission, we handle every aspect of the publication process, giving you the freedom to focus on your research.",
    features: [
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
    ],
    btnurl: "/full-assist-publication",
  },
  {
    name: "Flexi Saver Publication Pack",
    description:
      "The Flexi Saver plan provides flexible support that allows you to select the services you need, whether it’s journal selection, peer review, or submission. This cost-effective option ensures that you get expert help exactly where it’s needed.",
    features: [
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
    ],
    btnurl: "/flexi-saver-publication",
  },
];

const ServiceInclusionTable = () => {
  return (
    <section className="section-bg-color">
      <div className="container">
        <div className="cs_height_48 cs_lg_height_48"></div>
        <SectionTitle2
          Title="Publication Packages Comparison Plans"
          SubTitle={"For all Your Research Needs"}
        />
        <div className="cs_height_20 cs_lg_height_20"></div>
        <div className="table-responsive">
          <table className="table service-inclusive-table text-center align-middle">
            <thead>
              <tr>
                <th
                  className="text-start bg-light border "
                  style={{ width: "45%" }}
                >
                  <div className="fw-bold text-primary">Service Inclusions</div>
                  <div className="text-service-inclusion">
                    The Flexi Saver plan provides flexible support that allows
                    you to select the services you need, whether it’s journal
                    selection, peer review, or submission. This cost-effective
                    option ensures that you get expert help exactly where it’s
                    needed.
                  </div>
                </th>
                {plans.map((plan, index) => (
                  <th key={index} className="bg-light border text-start">
                    <div className="fw-bold text-primary">{plan.name}</div>
                    <div className="text-service-inclusion">
                      {plan.description}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {services.map((service, i) => (
                <tr key={i}>
                  <td className="text-start border">{service}</td>
                  {plans.map((plan, j) => (
                    <td key={j} className="border">
                      {plan.features[i] && <CheckIcon />}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="border"></td>
                {plans.map((opt, index) => (
                  <td key={index} className="border">
                    <Link
                      to={opt.btnurl}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      className="cs_btn cs_style_2 text-center epc-button w-75"
                    >
                      Select →
                    </Link>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="cs_height_48 cs_lg_height_48"></div>
      </div>
    </section>
  );
};

export default ServiceInclusionTable;
