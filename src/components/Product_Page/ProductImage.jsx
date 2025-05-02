import React from "react";

const ProductImage = ({ images }) => {
  console.log();
  return (
    <div className="flex justify-end w-full h-full gap-5 pr-4">
      <div className="grid grid-rows-4 gap-2.5 w-[20%] h-full">
        <div className="rounded-2xl cursor-pointer bg-red-500"></div>
        <div className="rounded-2xl cursor-pointer bg-blue-500"></div>
        <div className="rounded-2xl cursor-pointer bg-pink-500"></div>
        <div className="rounded-2xl cursor-pointer bg-blue-500"></div>
      </div>
      <div className="bg-green-900 w-[70%] h-full rounded-2xl">asdf</div>
    </div>
  );
};

export default ProductImage;
