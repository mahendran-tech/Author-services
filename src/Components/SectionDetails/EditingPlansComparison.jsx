import { useState } from "react";
import SectionTitle2 from "../Common/SectionTitle2";
import { useNavigate } from "react-router-dom";

const EditingPlansComparison = ({ features, plans, isTitleChange = false }) => {
  const [wordCount, setWordCount] = useState("10");
  const [prices, setPrices] = useState(["0.63", "1.26", "1.56"]);
  const [isCalculating, setIsCalculating] = useState(false);
  let typingTimeout = null;

  const navigate = useNavigate();

  const handleProceed = (amount, planName) => {
    navigate("/customize-editing-services", {
      state: {
        selectedAmount: amount,
        selectedPlan: planName,
      },
    });
  };

  const handleWordChange = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      setWordCount(value);
      setIsCalculating(true);

      // Clear previous timeout if still typing
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }

      typingTimeout = setTimeout(() => {
        const count = parseInt(value || 0);
        const calculatedPrices = [
          (count * 0.06).toFixed(2),
          (count * 0.12).toFixed(2),
          (count * 0.15).toFixed(2),
        ];
        setPrices(calculatedPrices);
        setIsCalculating(false);
      }, 500); // Delay to simulate "calculating"
    }
  };

  return (
    <section className="epc-section ">
      <div className="cs_height_60 cs_height_lg_80"></div>
      <div className="container epc-container">
        <div>
          {isTitleChange ? (
            <SectionTitle2
              Title={"Editing Service Plans"}
              SubTitle={"For All Your Research Needs"}
            />
          ) : (
            <SectionTitle2
              Title={"Editing Service Plans &"}
              SubTitle={"Features Comparison"}
            />
          )}
        </div>
        <div className="cs_height_20 cs_height_lg_20"></div>
        <div className="table-responsive epc-table-wrapper mt-4">
          <table align="center" className="table epc-table w-100 border-0">
            <thead className="text-center">
              <tr
                className="epc-header-row "
                style={{
                  verticalAlign: "baseline",
                }}
              >
                <th
                  className="epc-th  text-primary cs_fs_18 "
                  style={{ verticalAlign: "middle" }}
                >
                  Features
                </th>
                {plans.map((plan, idx) => (
                  <th key={idx} className="epc-th  " style={{ width: "23%" }}>
                    <div
                      className="epc-plan-name text-primary fw-semibold"
                      style={{ textAlign: "left" }}
                    >
                      {plan.name}
                    </div>
                    <div
                      className="epc-plan-desc fw-light  small"
                      style={{ textAlign: "left" }}
                    >
                      {plan.desc}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="epc-tbody">
              {features.map((feature, index) => (
                <tr key={index} className="epc-row border-0 ">
                  <td className="epc-feature-title small border-0">
                    {feature}
                  </td>
                  {plans.map((plan, pidx) => (
                    <td
                      style={{ verticalAlign: "middle" }}
                      key={pidx}
                      className="text-center epc-feature-cell border-0"
                    >
                      {plan.features[index] && (
                        <span className="epc-check-icon">
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
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="epc-footer-row text-center border-0">
                <td className="epc-footer-cell " style={{ textAlign: "left" }}>
                  <strong>Get estimates based on your word count</strong>
                  <br />
                  <small>
                    A word count allows us to provide accurate pricing and
                    delivery options
                  </small>
                  <div className="input-group mt-2 epc-input-group">
                    <input
                      type="text"
                      className="form-control epc-input py-1 px-2"
                      placeholder="e.g. 2345"
                      value={wordCount}
                      onChange={handleWordChange}
                      style={{ fontSize: "30px", fontWeight: "900" }}
                    />
                    <button
                      onClick={handleWordChange}
                      className="cs_btn cs_style_2 epc-proceed"
                    >
                      Reset
                    </button>
                  </div>
                </td>
                {plans.map((plan, idx) => (
                  <td
                    align="center"
                    key={idx}
                    className="epc-footer-cell border-0 "
                    style={{ verticalAlign: "bottom" }}
                  >
                    <h4 className="mb-3 epc-price cs_fs_30 text-primary">
                      {isCalculating ? (
                        <small className="text-scondary font-weight-bold cs_fs_14">
                          Calculating...
                        </small>
                      ) : (
                        `$${prices[idx]}`
                      )}
                    </h4>
                    {/* <button className="cs_btn cs_style_2 text-center epc-button w-75">
                      Get Started →
                    </button> */}
                    <button
                      onClick={() => handleProceed(prices[idx], plan.name)}
                      className="cs_btn cs_style_2 text-center epc-button w-75"
                    >
                      Get Started →
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="cs_height_60 cs_height_lg_80"></div>
    </section>
  );
};

export default EditingPlansComparison;
