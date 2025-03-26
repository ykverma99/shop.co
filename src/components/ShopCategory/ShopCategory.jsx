import React from "react";
import Filter from "./Filter";
import Price from "./Price";
import Colors from "./Colors";
import Size from "./Size";

const ShopCategory = () => {
  return (
    <div className="border h-fit border-gray-400 w-72 px-3 rounded-xl">
      <Filter />
      <Price />
      <Colors />
      <Size />
      <Filter />
    </div>
  );
};

export default ShopCategory;
