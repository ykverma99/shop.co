import React, { useState } from "react";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import Button from "../components/common/Button";

const SignUp = () => {
  const [showPassword, setshowPassword] = useState(false);
  const handleShowPassword = () => {
    setshowPassword(!showPassword);
  };
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h2 className="text-5xl font-medium">Create an account</h2>
        <p>Enter your details below</p>
      </div>

      {/* sign up form */}
      <form className="flex flex-col gap-8 w-[80%]">
        <input
          type="text"
          className="border-b border-gray-500 py-2 px-4 rounded-2xl shadow-xl outline-0 focus:border-b-2 focus:border-primary"
          placeholder="Name"
        />
        <input
          type="text"
          className="border-b border-gray-500 py-2 px-4 rounded-2xl shadow-xl outline-0 focus:border-b-2 focus:border-primary"
          placeholder="Email Address"
        />
        <div className="flex justify-center items-center w-full border-b border-gray-500 py-2 px-4 rounded-2xl shadow-xl focus-within:border-b-2 focus-within:border-primary">
          <input
            type={showPassword ? "text" : "password"}
            className="outline-0 w-full"
            placeholder="Password"
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
        <Button type="submit" className={"w-full"}>
          Create an Account
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
