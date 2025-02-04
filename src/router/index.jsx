import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Promotion from "../pages/Promotion";
import Implantes from "../pages/Implantes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/promociones",
    element: <Promotion />,
  },
  {
    path: "/implantes",
    element: <Implantes />,
  },
]);
