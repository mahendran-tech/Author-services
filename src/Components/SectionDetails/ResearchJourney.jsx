import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const ResearchJourney = () => {
  const tabs = [
    {
      id: 1,
      title: "Manuscript Preparation, Editing & Formatting",
      subTabs: [
        "Academic Editing",
        "Language Editing",
        "Scientific Editing",
        "Translation Services",
      ],
      content: (
        <>
          <ul className="text-left list-unstyled">
            <li>✅ Sentence structure</li>
            <li>✅ Grammar, punctuation, and spelling check</li>
            <li>✅ Formatting</li>
          </ul>
          <div className="d-flex gap-3 mt-3">
            <Button variant="danger">Get a Quote</Button>
            <Button variant="outline-primary">Explore Next →</Button>
          </div>
        </>
      ),
    },
    {
      id: 2,
      title: "Journal Selection & Submission",
      content: <p>Content for Journal Selection & Submission</p>,
    },
    {
      id: 3,
      title: "Research Promotion & Citation",
      content: <p>Content for Research Promotion & Citation</p>,
    },
    {
      id: 4,
      title: "All Our Services at a Glance",
      content: <p>Content for All Our Services at a Glance</p>,
    },
  ];

  const [activeTab, setActiveTab] = useState(1);
  const [activeSubTab, setActiveSubTab] = useState("Academic Editing");

  const active = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="container-fluid py-5">
      <h3 className="text-center fw-bold">Your Research Journey</h3>
      <h4 className="text-center text-primary">
        Professional Solutions For Every Step
      </h4>

      <div className="row mt-5">
        {/* Left vertical nav */}
        <div className="col-md-3 mb-3">
          <div className="nav flex-column nav-pills">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`nav-link text-start ${
                  tab.id === activeTab
                    ? "active bg-primary text-white"
                    : "bg-light text-dark"
                }`}
                onClick={() => {
                  setActiveTab(tab.id);
                  if (tab.subTabs) {
                    setActiveSubTab(tab.subTabs[0]);
                  }
                }}>
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Right content area */}
        <div className="col-md-9">
          <Card className="shadow rounded-4">
            <Card.Body className="p-4">
              {active.subTabs && (
                <div className="d-flex gap-3 mb-4 flex-wrap">
                  {active.subTabs.map((subTab) => (
                    <button
                      key={subTab}
                      className={`btn ${
                        subTab === activeSubTab
                          ? "btn-primary"
                          : "btn-outline-secondary"
                      }`}
                      onClick={() => setActiveSubTab(subTab)}>
                      {subTab}
                    </button>
                  ))}
                </div>
              )}

              <div>{active.content}</div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResearchJourney;
