import React from "react";
import NavBar from "../components/common/NavBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="font-poppins">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
