import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";

//  Import standalone pages
import ErrorPage from "../pages/ErrorPage";
import { ProjectDetails } from "../pages/Home/Projects/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  {
    path: "/project-details/:id",
    element: <ProjectDetails />,
  },
]);
