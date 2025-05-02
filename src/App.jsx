import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./pages/MainLayout";
import AuthLayout from "./components/common/AuthLayout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Shop from "./pages/shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import CheckOut from "./pages/CheckOut";
import ProtectedLayout from "./components/common/ProtectedLayout";
import ScrollToTop from "./components/common/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:name" element={<Product />} />

          {/* Authenticate Routes */}
          <Route element={<ProtectedLayout />}>
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/cart" element={<Cart />} />
          </Route>

          {/* user login signup Route */}
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<Navigate to={"/auth/login"} />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
