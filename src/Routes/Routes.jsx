import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
// import Home2 from "../Pages/Home2";
import Home2 from "../Pages/Home2";
import ServiceDetailsPage from "../Pages/ServiceDetailsPage";
import ServicesPage from "../Pages/ServicesPage";
import ProjectPage from "../Pages/ProjectPage";
import ProjectDetailsPage from "../Pages/ProjectDetailsPage";
import TeamPage from "../Pages/TeamPage";
import ContactPage from "../Pages/ContactPage";
import EditingProofreading from "../Pages/EditingProofreading";
import CoreEditing from "../Pages/CoreEditing";
import EditingService from "../Pages/EditingService";
import CustomizeEditingServices from "../Pages/CustomizeEditingServices ";
import ExclusiveEditing from "../Pages/ExclusiveEditing";
import ResearchEditing from "../Pages/ResearchEditing";
import ThesisEditing from "../Pages/ThesisEditing";
import GetQuote from "../Pages/GetQuote";
import PublicationSupport from "../Pages/PublicationSupport";
import FullAssistPublicationPlan from "../Pages/FullAssistPublicationPlan";
import FlexiSaverPublication from "../Pages/FlexiSaverPublication";
import ProofReading from "../Pages/ProofReading";
import PlagiarismCheck from "../Pages/PlagiarismCheck";
import JournalSelection from "../Pages/JournalSelection";
import JournalSubmission from "../Pages/JournalSubmission";
import PreSubmission from "../Pages/PreSubmission";
import ErrorPage from "../Pages/ErrorPage";
import CitationBooster from "../Pages/CitationBooster";
import PlansComparison from "../Pages/PlansComparison";
import ResearchOutreach from "../Pages/ResearchOutreach";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home2></Home2>,
      },
      {
        path: "/editing-proofreading",
        element: <EditingProofreading></EditingProofreading>,
      },
      {
        path: "/core-editing",
        element: <CoreEditing></CoreEditing>,
      },
      {
        path: "/editing-service",
        element: <EditingService></EditingService>,
      },
      {
        path: "/customize-editing-services",
        element: <CustomizeEditingServices></CustomizeEditingServices>,
      },
      {
        path: "/exclusive-editing",
        element: <ExclusiveEditing></ExclusiveEditing>,
      },
      {
        path: "/research-editing",
        element: <ResearchEditing />,
      },
      {
        path: "/thesis-editing",
        element: <ThesisEditing />,
      },
      {
        path: "/get-quote",
        element: <GetQuote />,
      },
      {
        path: "/publication-support",
        element: <PublicationSupport />,
      },
      {
        path: "/full-assist-publication",
        element: <FullAssistPublicationPlan />,
      },
      {
        path: "/flexi-saver-publication",
        element: <FlexiSaverPublication />,
      },
      {
        path: "/proofreading",
        element: <ProofReading />,
      },
      {
        path: "/plagiarism-check",
        element: <PlagiarismCheck />,
      },
      {
        path: "/journal-selection",
        element: <JournalSelection />,
      },
      {
        path: "/journal-submission",
        element: <JournalSubmission />,
      },
      {
        path: "/pre-submission-peer-review",
        element: <PreSubmission />,
      },

      {
        path: "/citation-booster",
        element: <CitationBooster />,
      },
      {
        path: "/plans-comparison",
        element: <PlansComparison />,
      },
      {
        path: "/research-outreach",
        element: <ResearchOutreach />,
      },

      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />, // Error page for unmatched routes
  },
]);
