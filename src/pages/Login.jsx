import React, { useState } from "react";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import Button from "../components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";
const url = import.meta.env.VITE_API_URL;

const Login = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [error, setError] = useState();
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleShowPassword = () => {
    setshowPassword(!showPassword);
  };
  const handleFormData = async (e) => {
    e.preventDefault();
    setloading(true);
    const formData = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    try {
      const res = await axios.post(`${url}user/login`, formData, {
        withCredentials: true,
      });
      console.log(res);
      if (res.status == 200) {
        dispatch(login(res.data?.data?.user));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    } finally {
      setloading(false);
    }
  };
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h2 className="text-5xl font-medium">Log in to Exclusive</h2>
        <p>Enter your details below</p>
      </div>

      {/* sign up form */}
      <form onSubmit={handleFormData} className="flex flex-col gap-8 w-[80%]">
        <input
          type="text"
          className="border-b border-gray-500 py-2 px-4 rounded-2xl shadow-xl outline-0 focus:border-b-2 focus:border-primary"
          placeholder="Email Address"
          onChange={() => setError(null)}
        />
        <div className="flex justify-center items-center w-full border-b border-gray-500 py-2 px-4 rounded-2xl shadow-xl focus-within:border-b-2 focus-within:border-primary">
          <input
            type={showPassword ? "text" : "password"}
            className="outline-0 w-full"
            placeholder="Password"
            onChange={() => setError(null)}
          />
          {showPassword ? (
            <IoIosEye
              size={20}
              className="cursor-pointer"
              onClick={handleShowPassword}
            />
          ) : (
            <IoIosEyeOff
              size={20}
              className="cursor-pointer"
              onClick={handleShowPassword}
            />
          )}
        </div>
        {/* Email otp */}
        {/* <input
          type="text"
          className="border-b border-gray-500 py-2 px-4 rounded-2xl shadow-xl outline-0 focus:border-b-2 focus:border-primary"
          placeholder="Email Address"
        /> */}
        {error && <div className="text-red-500 ">{error}</div>}
        <div className="flex justify-between items-center">
          <Button disabled={loading || error} type="submit">
            {loading ? "Sign In..." : "Sign In"}
          </Button>{" "}
          <Link to={"#"} className="text-primary">
            Forget Password?
          </Link>
        </div>
      </form>
      <p className="space-x-1">
        <span>No Account</span>
        <Link
          to={"/auth/sign-up"}
          className="text-primary underline underline-offset-2 cursor-pointer"
        >
          Signup
        </Link>
      </p>
    </div>
  );
};

export default Login;
