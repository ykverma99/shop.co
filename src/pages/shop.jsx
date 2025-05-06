import React, { useState } from "react";
import Container from "../components/common/Container";
import ShopCategory from "../components/ShopCategory/ShopCategory";
import productData from "../data/ProductData";
import Pagination from "../components/common/Pagination";
import Subscribe from "../components/common/Subscribe";
import useFetch from "../hooks/useFetch";

const shop = () => {
  const { data, loading, error } = useFetch("filters/all-options");
  const [selectedSize, setselectedSize] = useState(data?.data?.sizes[0]);
  const [selectedColor, setselectedColor] = useState(data?.data?.colors[0]);
  const [selectedStyle, setselectedStyle] = useState(data?.data?.styles[0]);

  const handleSize = (text) => {
    setselectedSize(text);
  };
  const handleStyle = (text) => {
    setselectedStyle(text);
  };
  const handleColor = (text) => {
    setselectedColor(text);
  };
  return (
    <Container childClassName={""}>
      <div className="flex gap-7 py-10">
        <ShopCategory
          colors={data?.data?.colors}
          styles={data?.data?.styles}
          sizes={data?.data?.sizes}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
          selectedStyle={selectedStyle}
          handleSize={handleSize}
          handleColor={handleColor}
          handleStyle={handleStyle}
        />
        <div className="w-[80%] py-3 space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Products</h2>
            <p className="text-gray-400">Showing 1-10 of 100 products</p>
          </div>
          <Pagination
            colorId={selectedColor?._id}
            styleId={selectedStyle?._id}
            sizeId={selectedSize?._id}
          />
        </div>
      </div>
      <Subscribe />
    </Container>
  );
};

export default shop;
