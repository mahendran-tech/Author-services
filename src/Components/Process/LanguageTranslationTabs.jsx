import React, { useState } from "react";
import { Container } from "react-bootstrap";
import parse from "html-react-parser";
import SectionTitle from "../Common/SectionTitle"; // Ensure this import is valid

export const tabData = [
  {
    id: "OriginalManuscript",
    label: "Original Manuscript",
    icon: "assets/img/icon/book-tap.svg",
    icon_active: "assets/img/icon/book-tap-act.svg",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    quote: "assets/img/icon/quote.svg",
  },
  {
    id: "Translation",
    label: "Translation",
    icon: "assets/img/icon/trans-tap.svg",
    icon_active: "assets/img/icon/trans-tap-act.svg",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    quote: "assets/img/icon/quote.svg",
  },
  {
    id: "Bilingual",
    label: "Bilingual review",
    isRow: true,
    icon: "assets/img/icon/tap-3.svg",
    icon_active: "assets/img/icon/tap-act-3.svg",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    quote: "assets/img/icon/quote.svg",
  },
  {
    id: "Language",
    label: "Language edit",
    isRow: true,
    icon: "assets/img/icon/lang-tap.svg",
    icon_active: "assets/img/icon/lang-tap-act.svg",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    quote: "assets/img/icon/quote.svg",
  },
  {
    id: "Final",
    label: "Final review",
    isRow: true,
    icon: "assets/img/icon/tap-5.svg",
    icon_active: "assets/img/icon/tap-act-5.svg",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    quote: "assets/img/icon/quote.svg",
  },
];

const LanguageTranslationTabs = () => {
  return (
    <section className="expert-section">
      <div className="cs_height_48 cs_height_lg_48"></div>
      <Container>
        <SectionTitle Title={"Sample"} SubTitle="Language Translation" />
        <div className="cs_height_20 cs_height_lg_20"></div>

        <OutreachTabsSection tabData={tabData} />
      </Container>
      <div className="cs_height_40 cs_height_lg_40"></div>
      <div className="cs_height_48 cs_height_lg_48"></div>
    </section>
  );
};

const OutreachTabsSection = ({ tabData }) => {
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  const currentTab = tabData.find((tab) => tab.id === activeTab);

  return (
    <div className="tabs-section">
      <div className="tab-buttons-wrapper d-flex flex-wrap gap-2">
        {tabData.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn d-flex align-items-center gap-2 ${
              activeTab === tab.id ? "active" : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <div className="tab-icon-wrapper">
              <img
                src={activeTab === tab.id ? tab.icon_active : tab.icon}
                alt={tab.label}
              />
            </div>
            <span>{parse(tab.label)}</span>
          </button>
        ))}
      </div>

      {currentTab && (
        <div
          className="tab-content-box bg-white p-4 rounded shadow-sm"
          style={{ marginTop: "-1px" }}
        >
          <div className="position-relative">
            <div className="p-4">
              <img
                src={currentTab.quote}
                alt="quote icon"
                className="position-absolute top-0 start-0"
              />
            </div>

            <div
              className="tab-text-content"
              style={{ paddingTop: "50px", paddingBottom: "60px" }}
            >
              <p> {parse(currentTab.content)}</p>
            </div>

            <div>
              <img
                src={currentTab.quote}
                alt="quote icon"
                className="position-absolute bottom-0 end-0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageTranslationTabs;
