import React, { useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import SelectColors from "../common/SelectColors";
import Sizes from "../common/Sizes";
import Button from "../common/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const backendUrl = import.meta.env.VITE_API_URL;

const ProductDetails = ({ productData, selectedColor, handleColorSelect }) => {
  const [selectedSize, setselectedSize] = useState(productData?.sizes[0]);
  const [quantity, setquantity] = useState(1);
  const navigate = useNavigate();

  const handleSize = (text) => {
    setselectedSize(text);
  };
  const addToCart = async () => {
    try {
      const cartData = {
        productId: productData?._id,
        quantity,
        colorId: selectedColor?._id,
        sizeId: selectedSize?._id,
      };
      const res = await axios.post(`${backendUrl}cart`, cartData, {
        withCredentials: true,
      });
      if (res.status === 200) {
        navigate("/cart");
      }
    } catch (error) {
      console.log(error);
      throw new Error("Request Failed");
    }
  };

  const arr = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStarHalf />];
  return (
    <div className="max-w-lg space-y-2.5">
      <h1 className="text-4xl font-bold tracking-wide">
        {productData?.productName}
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
        <p className="text-2xl font-bold">&#8377; {productData?.price}</p>
      </div>
      {/* desc */}
      <p className="text-gray-500 text-sm">{productData?.description}</p>
      <hr className="text-gray-300" />
      {/* Colors */}
      <div className="space-y-1">
        <p className="text-gray-500">Select Colors</p>

        <div className="flex justify-start">
          <SelectColors
            colors={productData?.colors}
            selectedColor={selectedColor}
            handleColorSelect={handleColorSelect}
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
        <Sizes
          sizes={productData?.sizes}
          selectedSize={selectedSize}
          handleSize={handleSize}
        />
      </div>
      {/* Add to Cart */}
      <hr className="text-gray-300" />
      <div className="flex items-center gap-3">
        {/* quantity */}
        <div className="flex justify-around items-center bg-gray-200 w-[25%] h-10 rounded-full text-xl">
          <button
            onClick={() =>
              setquantity((prev) => (prev > 1 ? (prev = prev - 1) : 1))
            }
            className="cursor-pointer"
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            onClick={() => setquantity((prev) => prev + 1)}
            className="cursor-pointer"
          >
            +
          </button>
        </div>
        <Button
          onClick={addToCart}
          className={"rounded-full w-[70%] active:scale-95 cursor-pointer"}
        >
          Add to Card
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
