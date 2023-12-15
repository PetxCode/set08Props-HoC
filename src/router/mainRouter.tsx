import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/block/Layout";
import HomeScreen from "../pages/HomeScreen";
import TestHOC from "../pages/test/TestHOC";
import Detail from "../pages/test/Detail";
import TestBuild from "../pages/test/TestBuild";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
      {
        path: "/test",
        element: <TestHOC />,
      },
      {
        path: "/test/:id",
        element: <Detail />,
      },
      {
        path: "/testing",
        element: <TestBuild />,
      },
    ],
  },
]);
