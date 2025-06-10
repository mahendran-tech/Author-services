import {createBrowserRouter} from "react-router-dom";
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
        element: <ResearchEditing/>,
      },
                        {
        path: "/thesis-editing",
        element: <ThesisEditing/>,
      },
      {

        path: "/get-quote",
        element: <GetQuote/>,
      },
            {
        path: "/publication-support",
        element: <PublicationSupport/>,
      },
      {
        path: "/service/service-details",
        element: <ServiceDetailsPage></ServiceDetailsPage>,
      },
      {
        path: "/project",
        element: <ProjectPage></ProjectPage>,
      },
      {
        path: "/project/project-details",
        element: <ProjectDetailsPage></ProjectDetailsPage>,
      },
      {
        path: "/team",
        element: <TeamPage></TeamPage>,
      },

      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
    ],
  },
]);
