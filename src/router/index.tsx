import React from "react";
import { RouteObject, useRoutes, Navigate } from "react-router-dom";
import HomePage from "@pages/home";
import NotFoundPage from "@pages/404";
import LoginPage from "@/pages/login";
// import AuthLayout from "./utils/authLayout";
const CustomerPage = React.lazy(() => import("@/pages/customer"));
const PaymentPage = React.lazy(() => import("@/pages/payment"));
const StaffPage = React.lazy(() => import("@/pages/staff"));
const MovieInfoPage = React.lazy(() => import("@/pages/movie-info"));
const MovieRemarkPage = React.lazy(() => import("@/pages/movie-remark"));
const OrderPage = React.lazy(() => import("@/pages/order"));
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
      {
        path: "paymentManagement",
        element: <PaymentPage />,
      },
      {
        path: "staffManagement",
        element: <StaffPage />,
      },
      {
        path: "movieInfoManagement",
        element: <MovieInfoPage />,
      },
      {
        path: "movieRemarkManagement",
        element: <MovieRemarkPage />,
      },
      {
        path: "orderManagement",
        element: <OrderPage />,
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
