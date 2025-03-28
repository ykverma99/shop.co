import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import SelectColors from "../common/SelectColors";
import Sizes from "../common/Sizes";
import Button from "../common/Button";

const colors = [
  "#00C853",
  "#D50000",
  "#FFD600",
  "#FF6D00",
  "#00B8D4", // First row
  "#2962FF",
  "#8E24AA",
  "#EC407A",
  "#FFFFFF",
  "#000000", // Second row
];

const sizes = ["Medium", "Large", "X-Large", "XX-Large"];

const ProductDetails = () => {
  const arr = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStarHalf />];
  return (
    <div className="max-w-lg space-y-2.5">
      <h1 className="text-4xl font-bold tracking-wide">
        One Life Graphic T-shirt
      </h1>
      {/* ratings */}
      <div className="flex">
        <div className="flex gap-0.5">
          {arr.map((elm, idx) => (
            <div className="text-yellow-500" key={idx}>
              {elm}
            </div>
          ))}
        </div>
        <small>
          4.5/<span className="text-gray-500">5</span>
        </small>
      </div>
      {/* price */}
      <div>
        <p className="text-2xl font-bold">$260</p>
      </div>
      {/* desc */}
      <p className="text-gray-500 text-sm">
        This graphic t-shirt which is perfect for any occasion. Crafted from a
        soft and breathable fabric, it offers superior comfort and style.
      </p>
      <hr className="text-gray-300" />
      {/* Colors */}
      <div className="space-y-1">
        <p className="text-gray-500">Select Colors</p>

        <div className="flex justify-start">
          <SelectColors
            colors={colors}
            className={`grid-cols-10`}
            h="h-7"
            w="w-7"
          />
        </div>
      </div>
      {/* choose Size */}
      <hr className="text-gray-300" />
      <div className="space-y-1">
        <p className="text-gray-500">Select Size</p>
        <Sizes sizes={sizes} />
      </div>
      {/* Add to Cart */}
      <hr className="text-gray-300" />
      <div className="flex items-center gap-3">
        {/* quantity */}
        <div className="flex justify-around items-center bg-gray-200 w-[25%] h-10 rounded-full text-xl">
          <button className="cursor-pointer">-</button>
          <p>1</p>
          <button className="cursor-pointer">+</button>
        </div>
        <Button className={"rounded-full w-[70%]"}>Add to Card</Button>
      </div>
    </div>
  );
};

export default ProductDetails;
