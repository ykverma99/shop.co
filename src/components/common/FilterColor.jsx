import React, { useState } from "react";

const FilterColor = ({
  colors,
  selectedColor,
  handleColor,
  className = "grid-cols-5",
  h = "h-10",
  w = "w-10",
}) => {
  return (
    <div className="flex items-center justify-center">
      <div className={`grid ${className}  gap-1 justify-center items-center`}>
        {colors?.map((color, index) => (
          <button
            key={color._id}
            className={`${h} ${w} rounded-full border-2 cursor-pointer text-cyan-500 
                  ${
                    selectedColor?.name === color.name
                      ? "border-black"
                      : "border-gray-200"
                  }
            flex items-center justify-center`}
            style={{ backgroundColor: color.hexCode }}
            onClick={() => handleColor(color)}
          >
            {selectedColor?.name === color.name && "✓"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterColor;
