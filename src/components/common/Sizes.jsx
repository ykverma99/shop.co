import React from "react";

const Sizes = React.memo(({ sizes, selectedSize, handleSize }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {sizes?.map((elm) => (
        <p
          key={elm._id}
          className={`px-3 py-1.5 text-xs rounded-full cursor-pointer transition duration-200 ease-in-out ${
            elm.label === selectedSize?.label
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-400 "
          }`}
          onClick={() => handleSize(elm)}
        >
          {elm?.label}
        </p>
      ))}
    </div>
  );
});
export default Sizes;
