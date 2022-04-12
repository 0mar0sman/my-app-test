import Home from "./components/home";
import Error from "./components/error";
import Demo from "./components/demo";
import { Navigate } from "react-router-dom";
const routes = [
  {
    path: "/error",
    element: <Error />,
  },
  {
    path: "/error/401",
    element: <Navigate to="/error" replace />,
  },
  {
    path: "/demo",
    element: <Demo />,
  },
  {
    path: "/",
    element: <Home />,
  },
];
export default routes;
