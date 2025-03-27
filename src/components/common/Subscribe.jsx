import React from "react";
import { MdOutlineEmail } from "react-icons/md";

const Subscribe = () => {
  return (
    <div className="bg-black flex items-center justify-between px-16 py-10 rounded-2xl">
      <h1 className="text-white text-6xl font-semibold max-w-2xl">
        Stay upto date about our latest offers
      </h1>
      <div className="w-[30%] space-y-5">
        <div className="flex items-center bg-white w-full h-10 rounded-full px-3 gap-2 focus-within:ring-1 ring-red-300">
          <MdOutlineEmail />
          <input
            type="email"
            placeholder="Enter your email address"
            className="h-full w-full outline-0"
          />
        </div>
        <div className="w-full bg-white h-10 flex text-sm justify-center items-center rounded-3xl active:-translate-y-0.5 cursor-pointer">
          <button>Subscribe to NewsLetter</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
