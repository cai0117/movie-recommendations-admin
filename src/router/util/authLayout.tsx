import { useEffect, useMemo } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { message } from "antd";
import { useAppSelector } from "@redux/hooks";
// import { hasAuthByRoutePath } from "@/utils/roleAuthority";

const routeWhiteList = ["/home", "/login"];

const AuthLayout = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const pathname = location.pathname;
  //   const { token } = useAppSelector((state) => state.token);

  //   useEffect(() => {
  //     if (!token) {
  //       setTimeout(() => {
  //         message.error("为了您的账号安全，请重新登录");
  //       }, 10);
  //     }
  //   }, [token]);

  const hasAuthPath = useMemo(() => {
    return routeWhiteList.includes(pathname);
    // || hasAuthByRoutePath(pathname);
  }, [pathname]);

  //   if (!token) return <Navigate to="/login" state={{ from: location }} />;
  if (!hasAuthPath) return <Navigate to="/404" replace />;
  return children;
};

export default AuthLayout;
