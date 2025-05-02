import React from "react";
import Container from "../components/common/Container";
import ShopCategory from "../components/ShopCategory/ShopCategory";
import productData from "../data/ProductData";
import Pagination from "../components/common/Pagination";

import Subscribe from "../components/common/Subscribe";

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
          <Pagination />
        </div>
      </div>
      <Subscribe />
    </Container>
  );
};

export default shop;
