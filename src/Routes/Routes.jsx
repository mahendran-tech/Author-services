import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
// import Home2 from "../Pages/Home2";
import AboutPage from "../Pages/AboutPage";
import Home2 from "../Pages/Home2";
import ServiceDetailsPage from "../Pages/ServiceDetailsPage";
import ServicesPage from "../Pages/ServicesPage";
import ProjectPage from "../Pages/ProjectPage";
import ProjectDetailsPage from "../Pages/ProjectDetailsPage";
import TeamPage from "../Pages/TeamPage";
import ContactPage from "../Pages/ContactPage";
import EditingProofreading from "../Pages/EditingProofreading";
import CoreEditing from "../Pages/CoreEditing";

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
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/service",
        element: <ServicesPage></ServicesPage>,
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
