import React from "react";
import Container from "../components/common/Container";
import ShopCategory from "../components/ShopCategory/ShopCategory";
import productData from "../data/ProductData";
import Pagination from "../components/common/Pagination";
import Button from "../components/common/Button";
import { MdOutlineEmail } from "react-icons/md";

const shop = () => {
  return (
    <Container childClassName={""}>
      <div className="flex gap-7 py-10">
        <ShopCategory />
        <div className="w-[80%] py-3 space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Products</h2>
            <p className="text-gray-400">Showing 1-10 of 100 products</p>
          </div>
          <Pagination productData={productData} />
        </div>
      </div>
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
    </Container>
  );
};

export default shop;
