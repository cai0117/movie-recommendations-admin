import React from "react";
import { RouteObject, useRoutes, Navigate } from "react-router-dom";
import HomePage from "@pages/home";
import NotFoundPage from "@pages/404";
import LoginPage from "@/pages/login";
// import AuthLayout from "./utils/authLayout";
const CustomerPage = React.lazy(() => import("@/pages/customer"));
const routeList: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
    children: [
      {
        path: "customerManagement",
        element: <CustomerPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

const Router = () => {
  const RouteList = useRoutes(routeList);
  return RouteList;
};

export default Router;
