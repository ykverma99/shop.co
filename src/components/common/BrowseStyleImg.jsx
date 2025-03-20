import React from "react";

const BrowseStyleImg = ({ title, src, className }) => {
  return (
    <div className={`relative w-[25rem] h-72 rounded-xl ${className}`}>
      <h4 className="absolute text-2xl font-bold top-5 left-8">{title}</h4>
      <img src={src} alt="" className="h-full w-full object-cover rounded-xl" />
    </div>
  );
};

export default BrowseStyleImg;
