import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  const isAuthenticate = useSelector((state) => state.auth.isAuthenticate);
  if (!isAuthenticate) {
    return <Navigate to={"/auth/login"} replace />;
  }
  return <Outlet />;
};

export default ProtectedLayout;
