import React from "react";
import Filter from "./Filter";
import Price from "./Price";
import Colors from "./Colors";
import Size from "./Size";

const ShopCategory = ({
  colors,
  styles,
  sizes,
  selectedSize,
  selectedColor,
  selectedStyle,
  handleSize,
  handleStyle,
  handleColor,
}) => {
  return (
    <div className="border h-fit border-gray-400 w-72 px-3 rounded-xl">
      <Filter
        styles={styles}
        selectedStyle={selectedStyle}
        handleStyle={handleStyle}
      />
      {/* <Price /> */}
      <Colors
        colors={colors}
        selectedColor={selectedColor}
        handleColor={handleColor}
      />
      <Size sizes={sizes} selectedSize={selectedSize} handleSize={handleSize} />
      {/* <Filter /> */}
    </div>
  );
};

export default React.memo(ShopCategory);
