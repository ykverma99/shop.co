import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex justify-center items-center gap-20 mt-20">
      <div className="w-xl">
        <img
          src="/images/Form_Side_Image.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
