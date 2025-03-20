import React from "react";
import NavBar from "../components/common/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";

const MainLayout = () => {
  return (
    <div className="font-poppins">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
