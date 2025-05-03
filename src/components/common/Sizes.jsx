import React, { useState } from "react";

const Sizes = ({ sizes }) => {
  const [selectedSize, setselectedSize] = useState(sizes[0].label);
  const handleSize = (text) => {
    setselectedSize(text);
  };
  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((elm) => (
        <p
          key={elm._id}
          className={`px-3 py-1.5 text-xs rounded-full cursor-pointer transition duration-200 ease-in-out ${
            elm?.label === selectedSize
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-400 "
          }`}
          onClick={() => handleSize(elm?.label)}
        >
          {elm?.label}
        </p>
      ))}
    </div>
  );
};

export default Sizes;
