import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./pages/MainLayout";
import AuthLayout from "./components/common/AuthLayout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to={"/auth/login"} />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
