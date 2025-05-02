import React, { useState } from "react";

const SelectColors = ({
  colors,
  className = "grid-cols-5",
  h = "h-10",
  w = "w-10",
}) => {
  const [selectedColor, setSelectedColor] = useState(
    Array.isArray(colors) && colors?.length > 0 ? colors[0]?.hexCode : ""
  );
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };
  return (
    <div className="flex items-center justify-center">
      <div className={`grid ${className}  gap-1 justify-center items-center`}>
        {colors?.map((color, index) => (
          <button
            key={index}
            className={`${h} ${w} rounded-full border-2 cursor-pointer 
                ${
                  selectedColor === color.hexCode
                    ? "border-black"
                    : "border-gray-200"
                }
                ${color.hexCode === "#000000" ? " text-red-500" : ""}
          flex items-center justify-center`}
            style={{ backgroundColor: color.hexCode }}
            onClick={() => handleColorSelect(color)}
          >
            {selectedColor === color && "✓"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectColors;
