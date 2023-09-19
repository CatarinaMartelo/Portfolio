import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";

import Portfolio from "../pages/Portfolio";
import Contacts from "../pages/Contacts";

import Chrono from "../pages/Chrono";
import Skeleton from "../pages/Skeleton";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Skeleton />,
      },
      {
        path: "/about",
        element: <Chrono />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
