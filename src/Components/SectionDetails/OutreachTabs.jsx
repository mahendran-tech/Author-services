import React from "react";
import { Container } from "react-bootstrap";
import SectionTitle from "../Common/SectionTitle";
import OutreachTabsSection from "../Process/OutreachTabsSection";

export const tabData = [
  {
    id: "video",
    label: "Video <br> Abstract",
    icon: "assets/img/icon/tap-1.svg",
    icon_active: "assets/img/icon/tap-act-1.svg",
    content: {
      title: "Video Abstract",
      intro:
        "One of the most effective ways to share your research with a broader audience and increase citations is through a video presentation.",
      description: `Just publishing your paper isn't enough anymore. To make your research stand out, it needs to be clear and engaging. Our Video Abstract Service helps you do just that—creating short, 1–3 minute videos with high-quality animations and visuals that make your work easy to understand, share, and remember. <br/>These videos feature expert visuals, subtitles, and voiceovers, making them ideal for platforms such as IFERP Academy, YouTube, LinkedIn, Facebook, and the IFERP Digital Library.`,
      points: {
        features: [
          "HD animations and subtitles",
          "Targeted promotion",
          "Professional sound design",
        ],
        deliverables: [
          "A 1–3 minute animated video",
          "Smart animations with graphs and figures",
          "Background music and voiceover",
          "English captions",
          "A ready-to-use video script",
        ],
      },
      imgTitle: "View Sample Video Abstract",
      image: "assets/img/video-bg.png",
    },
  },
  {
    id: "graphical",
    label: "Graphical <br/> Abstract",
    icon: "assets/img/icon/tap-2.svg",
    icon_active: "assets/img/icon/tap-act-2.svg",
    content: {
      title: "Graphical Abstract",
      intro:
        "Presenting your research through visually appealing visuals increases its impact by providing a quick and compelling overview.",
      description:
        "Leading journals often request a graphical abstract. IFERP’s Graphical Abstract service helps you transform your data into clear visual summaries. Our team strictly follows journal guidelines and ensures your research is accurately represented in crisp, high-resolution graphics. <br/>We design custom 2D graphical abstracts tailored to your research topic. Using a variety of professional software tools, our experts work closely with you to meet your specific needs and ensure compliance with journal requirements.",
      points: {
        features: [
          "Summarize your manuscript in a clear, concise visual",
          "Develop a 2D or 3D graphic representation",
          "Provide a detailed Graphical Abstract report",
        ],
        deliverables: [
          "Final graphical abstract file ",
          "Editable Adobe working file",
          "Complete graphical abstract report",
        ],
      },
      image: "assets/img/graphic.png",
    },
  },

  {
    id: "infographics",
    label: "Infographics",
    isRow: true,
    icon: "assets/img/icon/tap-3.svg",
    icon_active: "assets/img/icon/tap-act-3.svg",
    content: {
      title: "Infographics",
      intro:
        "Infographics visually convey research findings using charts, tables, graphs, and figures in a way that is easy for the audience to understand.",
      description: `Infographics effectively communicate research findings through charts, tables, graphs, and visuals, making complex information easy to grasp. <br/> Our team of experts creates engaging infographics by blending expertly curated research with eye-catching designs crafted by professional graphic designers. Each infographic is customized to match your journal, website, or presentation style. You’ll receive a comprehensive report detailing the development and specifications of the infographic. These visuals are perfect for posters, social media, and other channels to boost research visibility.`,
      points: {
        title1: "What we do?",
        deliverables: [
          "Insightful and visually compelling infographics",
          "A smooth and efficient SME/author collaboration process",
        ],
      },
    },
  },

  {
    id: "research",
    label: "Research <br/> Presentation",
    isRow: true,
    icon: "assets/img/icon/tap-4.svg",
    icon_active: "assets/img/icon/tap-act-4.svg",
    content: {
      title: "Research Presentation",
      intro:
        "Present your research at conferences and events to engage your audience, raise awareness, and spark meaningful discussions.",
      description: `Present your research at conferences and events to capture attention, establish your reputation, and spark meaningful conversations. <br/> IFERP pairs you with an expert who will review and understand your work. Together, we craft a clear and compelling presentation tailored to conference standards. You can also opt for an optional 60-minute practice session to refine your delivery skills.`,
      points: {
        title1: "What we deliver?",

        deliverables: [
          "Content that is clear, engaging, and easy to understand.",
          "An interactive slide deck that is simple to share.",
          "Expert guidance and valuable feedback.",
          "Share your presentation on IFERP’s Social Media Channels.",
        ],
      },
    },
  },
  {
    id: "poster",
    label: "Poster <br/> Presentation",
    isRow: true,
    icon: "assets/img/icon/tap-5.svg",
    icon_active: "assets/img/icon/tap-act-5.svg",
    content: {
      title: "Poster Presentation",
      intro:
        "You can showcase your research findings clearly and attractively through posters that effectively communicate your research goals.",
      description: `IFERP’s Poster Presentation service helps you share your research at conferences or exhibitions by turning your information and visuals into an explicit, accurate, and eye-catching poster that sums up your work and meets event requirements. <br/>Our expert reviewers work with you to create engaging posters that include tables, charts, images, and graphic abstracts.`,
      points: {
        title: "A well-designed poster will:",
        features: [
          "Grab attention",
          "Spark meaningful conversations with peers and colleagues",
          "Help you share your research quickly",
          "Improve understanding of your work",
        ],
        title1: "What we do?",
        deliverables: [
          "Accurate summarization by subject-matter experts",
          "Eye-catching posters with creative layouts",
          "Custom designs to match your university or organization’s colors",
        ],
      },
    },
  },
  {
    id: "press",
    label: "Research <br/> Press Release",
    isRow: true,
    icon: "assets/img/icon/tap-6.svg",
    icon_active: "assets/img/icon/tap-act-6.svg",
    content: {
      title: "Research Press Release",
      intro:
        "The right kind of media attention can significantly boost your research. It’s one of the most effective ways to gain more citations and connect with a broader audience.",
      description: `We turn your manuscript into a polished, media-ready press release to enhance visibility and increase citations.<br/>Once your research is published, it’s essential to share it with the right audience to get the recognition it deserves. Use media coverage through IFERP’s Research Press Release service to engage a broader readership.<br/>Our team crafts your research into an 800-word Research Press Release. Sharing it across media and social channels elevates your paper’s reach and citation potential.`,
      points: {
        title: "Who should consider a Research Press Release?",
        features: [
          "Researchers who want to showcase their work to the public for recognition, boost citation chances, and attract funding.",
          "Academics aiming to feature their work in newspapers, magazines, blogs, and conferences, locally or internationally.",
          "Publishers and academic societies are looking to promote top-quality research on their platforms.",
          "Universities are interested in highlighting their researchers’ scholarly achievements.",
        ],
        title1: "What we do?",
        deliverables: [
          "An 800-word press release with a compelling headline, ready for media distribution.",
        ],
      },
    },
  },
  {
    id: "simplified",
    label: "Simplified <br/> Abstract",
    isRow: true,
    icon: "assets/img/icon/tap-7.svg",
    icon_active: "assets/img/icon/tap-act-7.svg",
    content: {
      title: "Simplified Abstract",
      intro: "We’ll summarize your research for optimal reader engagement",
      description: `We will transform your research into a clear and concise summary to help you reach a broader audience. We’ll convert your technical document into a 200-word abstract that’s easy for both general readers and subject experts to understand. This simplified version will highlight all the essential findings in plain English. Perfect for researchers who want to broaden their audience, new authors eager to showcase their work, and publishers who aim for higher citation rates.`,
      points: {
        deliverables: [
          "Present research insights without relying on complex jargon.",
          "Craft clear and accessible text for both professionals and the general public.",
        ],
      },
    },
  },
  // Add 5 more tabs similarly...
];
const OutreachTabs = () => {
  return (
    <section className="expert-section">
      <div className="cs_height_48 cs_height_lg_48"></div>
      <Container>
        <SectionTitle Title={"Our"} SubTitle="Services" />

        <div className="row d-flex justify-content-center">
          <div className="col-lg-10 col-sm-12">
            <p className="text-center">
              Your research deserves to be seen. We offer smart, proven
              promotion strategies that help boost <br /> reach, increase
              citations, and connect with the right audience.
            </p>
          </div>
        </div>
        <div className="cs_height_20 cs_height_lg_20"></div>

        <OutreachTabsSection tabData={tabData} />
      </Container>
      <div className="cs_height_40 cs_height_lg_40"></div>
    </section>
  );
};

export default OutreachTabs;
